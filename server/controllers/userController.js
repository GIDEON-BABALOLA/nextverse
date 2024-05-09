const path = require("path");
const { logEvents } = require(path.join(__dirname, "..", "middlewares", "logEvents.js"))
const fs = require('fs');
const bcrypt = require("bcrypt")
const { generateAccessToken, generateRefreshToken} = require(path.join(__dirname, "..", "config", "tokenConfig.js"))
const User = require(path.join(__dirname, "..", "models", "userModel.js"))
const { userError } = require(path.join(__dirname, "..", "utils", "customError.js"))
const signupUser = async (req, res) => {
try{
const { username, email, password,} = req.body;
if(!username || !email || !password){
    throw new userError("Please Fill In All The Fields", 400)
}
const foundUser = await User.findOne({email : email})
if(foundUser) {
    throw new userError("User Already Exists", 400)
}
const hashedPassword = await bcrypt.hash(password, 10);
const newUser = await User.create({ username, email, password :  hashedPassword, ipAddress : req.header('x-forwarded-for') || req.socket.remoteAddress })
res.status(201).json(newUser)
}catch(error){
logEvents(`${error.name}: ${error.message}`, "registerUserError.txt", "userError")
    if (error instanceof userError) {
       return  res.status(error.statusCode).json({ error : error.message})
    }else{
    return res.status(500).json({error : "Internal Server Error"})
    }
}
}


const loginUser = async (req, res) => {
try{
const { email, password} = req.body;
if(!email || !password){
    throw new userError("Please Provide An Email And A Password", 400)
}
const foundUser = await User.findOne({email : email})
if(!foundUser){
    throw new userError("User Does Not Exist", 404)
}
const match = await bcrypt.compare(password, foundUser.password)
if(foundUser && match){
    const id = foundUser?._id.toString()
    console.log(id)
    const refreshToken = generateRefreshToken(id, foundUser.role)
    console.log("gidiboy")
    await User.findByIdAndUpdate(id, {refreshToken : refreshToken}, { new : true})
    res.cookie("refreshToken", refreshToken, { httpOnly : true, maxAge: 60 * 60 * 1000 * 24 * 3, sameSite : "None", /* secure : true */})
    //Three Day Refresh Token
    res.status(201).json({
        id : foundUser?._id,
        username : foundUser?.username,
        email : foundUser?.email,
        token : generateAccessToken(id, foundUser.role),
        password : foundUser?.password,
        picture : foundUser?.picture,
    })
}else{
    throw new userError("Invalid Credentials", 401)
}
}catch(error){
    logEvents(`${error.name}: ${error.message}`, "loginUserError.txt", "userError")
    if (error instanceof userError) {
       return  res.status(error.statusCode).json({ error : error.message})
    }
    else{
        return res.status(500).json({error : "Internal Server Error"})
        }
}
}
const getCurrentUser = async  (req, res) => {
    try{
const { id } = req.user
const user = await User.findById(id)
if(!user){
    throw new userError("You Are Not Logged In", 401)
}
const newUser = {...user._doc}
const excludeFields = ["refreshToken"]
excludeFields.forEach((member) => delete newUser[member])
res.status(200).json(newUser)
    }catch(error){
        logEvents(`${error.name}: ${error.message}`, "getCurrentUserError.txt", "userError")
        if (error instanceof userError) {
            return res.status(error.statusCode).json({ error : error.message})
        }
        else{
            return res.status(500).json({error : "Internal Server Error"})
            }
    }
}
const logoutUser = async (req, res) => {
    const cookies = req.cookies
    try{
        if(!cookies?.refreshToken){
            throw new userError("You Are Not Logged In", 401)
        }
        const refreshToken = cookies.refreshToken;
        const user = await User.findOne({refreshToken})
        if(!user){
            res.clearCookie("refreshToken", {httpOnly: true, /*secure  : true */ sameSite : "None"})
            return res.status(204).json({message : "You Have Successfully Logged Out", "success" : true})
        }
        user.refreshToken = ""
        await user.save();      
        res.clearCookie("refreshToken", {httpOnly: true, /*secure : true */ sameSite : "None"})
        return res.status(204).json({message : "You have Successfully Logged Out now", "success" : true})
    }catch(error){
        if (error instanceof userError) {
            return res.status(error.statusCode).json({ error : error.message})
        }
        else{
            return res.status(500).json({error : "Internal Server Error"})
            }
    }
}
const userRefreshToken = async (req, res) => {
    try{

    }catch(err){

    }
}
const uploadUserPicture = async (req, res) => {
try{

}catch(err){

}
}
module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    uploadUserPicture,
    userRefreshToken,
    getCurrentUser
}