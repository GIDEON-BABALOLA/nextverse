const path = require("path")
const multer = require("multer")
const sharp = require("sharp")
const fs = require("fs")
const fsPromises = require("fs").promises
const multerStorage = multer.diskStorage({
    destination : async (req, file, cb ) => {
        
        if(!fs.existsSync(path.join(__dirname, "..", 'public', "images"))){
            await fsPromises.mkdir(path.join(__dirname, "..",'public', "images"),  { recursive: true });
        }
cb(null, path.join(__dirname, "..", "public", "images"))
    },
    filename : (req, file, cb) => {
const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
    }
})
// This modification should create all the necessary directories in the path if they don't exist. The { recursive: true } option ensures that parent directories are created as needed. Make sure to adjust the path and folder names based on your project structure.
const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{ 
        cb({
            message :  "Unsupported file format"
        },
        false)
    }
}
const uploadPhoto = multer({
    storage : multerStorage,
    fileFilter : multerFilter,
    limits : {    fieldSize: 	2000000 } //2 megabytes at most
})
const uploadImageMiddleware = uploadPhoto.array('picture', 2);

const uploadMiddleware = (req, res, next) => {
  uploadImageMiddleware(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'Unexpected Field', success: false });
    } else if (err) {
      return res.status(500).json({ message: 'Internal Server Error', success: false });
    }

    // No errors, move to the next middleware or route handler
    next();
 });
};

module.exports = {uploadMiddleware, productImgResize, blogImgResize }