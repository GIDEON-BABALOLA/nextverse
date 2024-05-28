const path = require("path")
const fs = require("fs")
const Product = require(path.join(__dirname, "..", "models", "productModel.js"))
const User = require(path.join(__dirname, "..", "models", "userModel.js"))
const slugify = require("slugify")
const { logEvents } = require(path.join(__dirname, "..", "middlewares", "logEvents.js"))
const validateMongodbid = require(path.join(__dirname, "..", "utils", "validateMongodbid.js"))
const  { cloudinaryUpload } = require(path.join(__dirname, "..", "utils", "cloudinary.js"))

const createProduct = async (req, res) => {
if(req.body.title){
    req.body.slug = slugify(req.body.title)
}
try{
const newProduct = await Product.create(req.body)
res.status(201).json(newProduct)
}
catch(error){
    logEvents(`${error.name}:${error.message}`, "createProductError.txt", "product")
}
}
const updateProduct = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    if(req.body.title){
        req.body.slug = slugify(req.body.title)
    }
    try{
const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new : true});
console.log(updateProduct)
res.status(201).json(updateProduct)
    }
    catch(error){
        logEvents(`${error.name}:${error.message}`, "updateProductError.txt", "product")
    }

}
const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try{
const deleteProduct = await Product.findOneAndDelete(id);
res.status(204).json(deleteProduct)
    }
    catch(error){
        logEvents(`${error.name}:${error.message}`, "deleteProductError.txt", "product")
    }

}
const getaProduct = async(req, res)=> {
    const { id } = req.params;
try{
const foundProduct = await Product.findById(id)
res.status(200).json(foundProduct)
}catch(error){
    logEvents(`${error.name}:${error.message}`, "getaProductError.txt", "product")  
}
}
const getAllProduct = async (req, res) => {
    try{
        //filtering
const queryObj = {...req.query}
const excludeFields = ["page", "sort", "limit", "fields"]
excludeFields.forEach((el) => delete queryObj[el])
let queryString = JSON.stringify(queryObj)
queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
console.log(JSON.parse(queryString))
let query = Product.find(JSON.parse(queryString))
//Sorting
if(req.query.sort){
    const sortBy = req.query.sort.split(",").join(" ")
    query = query.sort(sortBy)
}else{
query = query.sort("-createdAt")
}
// Limiting
if(req.query.fields){
    const fields = req.query.fields.split(",").join(" ")
    console.log(fields)
    query = query.select(fields)

}else{
query = query.select("-__v")
}
//Pagination
const page = req.query.page;
const limit = req.query.limit
const skip = (page -1) * limit
query = query.skip(skip).limit(limit)
if(req.query.page){
    const productCount = await Product.countDocuments();
    if(skip >= productCount){
        return res.json({"message": "This page does not exist", "success" : false})
    }
}
const allProducts = await query //filtering by price, brand, and category
res.status(200).json(allProducts)
}catch(error){
    logEvents(`${error.name}:${error.stack}`, "getAllProductError.txt", "product")
}
}
const addToWishlist = async(req, res) => {
    const { _id } = req.user;
    const { productId } = req.body
    console.log("Gideon")
    try{
        const user =  await User.findById(_id)
        const alreadyAdded = user.wishlist.find((id) => id.toString() === productId)
        if(alreadyAdded){
            let user = await User.findByIdAndUpdate(_id, {
                $pull : {wishlist : productId}
                
            }, {new : true})
           return res.json(user)
        }else{
            let user = await User.findByIdAndUpdate(_id, {
                $push : {wishlist : productId}
                
            }, {new : true})
          return  res.json(user)
        }

    }catch(error){
        console.log(error)
        logEvents(`${error.name}:${error.message}`, "addToWishlistError.txt", "product")  
    }
}
const rating = async(req, res) => {
    const {_id} = req.user;
    const {star, productId, comment} = req.body;
    try{
        const product = await Product.findById(productId)
        let alreadyRated = product.ratings.find((userId) => userId.postedby.toString() === _id.toString())
        if(alreadyRated){
 await Product.updateOne({
        ratings : { $elemMatch : alreadyRated}
    },
     {
    $set : { "ratings.$.star" : star, "ratings.$.comment" : comment}
    },
    {
        new : true
    })
        }else{
 await Product.findByIdAndUpdate(productId, {
        $push : {
            ratings: {
                star: star,
                comment : comment,
                postedby : _id
            }
        }
    }, {
        new : true
    })
        }
        const getAllRatings = await Product.findById(productId)
        let totalRating = getAllRatings.ratings.length
        let starArray = getAllRatings.ratings.map((item) => item.star)
        // let ratingSum = getAllRatings.ratings.map((item) => item.star)
        // .reduce((prev, curr) => prev + curr, 0);
        // let actualRating = Math.round(ratingSum / totalRating)
        let counter = 0
        for(i = 0; i < starArray.length; i++){ 
        counter = counter + starArray[i]
         }
      let actualRating = Math.round( counter / totalRating)
      let finalProduct =   await Product.findByIdAndUpdate(productId, 
            {
        totalrating : actualRating
            },
            {
                new : true
            })
            res.status(201).json(finalProduct)
    }catch(error){
        console.log(error)
        logEvents(`${error.name}:${error.message}`, "ratingError.txt", "product")  
    }

}
const uploadImages = async(req, res) => {
    const {id}  = req.params
validateMongodbid(id)
try{
const uploader = (path) => cloudinaryUpload(path, "shopmart-products" )
const urls = []
const files = req.files;
for( const file of files){
    const { path } = file;
    const newPath  = await uploader(path)
    urls.push(newPath)
console.log(path)
fs.unlinkSync(path)
}
const findProduct = await Product.findByIdAndUpdate(id, {images : urls.map((file)=>{
    return file
})}, { new : true})
res.status(201).json(findProduct)
}
catch(error){
    console.log(error)
logEvents(`${error.name}:${error.message}`, "uploadImageError.txt", "product")
}
}
module.exports = {
createProduct,
getaProduct,
getAllProduct,
updateProduct,
deleteProduct,
addToWishlist,
rating,
uploadImages
}