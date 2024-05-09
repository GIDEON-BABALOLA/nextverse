const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt")
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    accessToken : {
        type:String
    },
    refreshToken : {
      type : String
    },
    picture : {
        type: String,
        default : ""
    },
    role : {
        type : String,
        default : "user",
        required : true,
        enum : [ "user", "developer", "admin", "designer"]
    }

});
// static signup method
userSchema.statics.signup = async function(email, username, password, picture){
    //this does not work with arrow functions
    //this refers to the model we exported
    if(!email || !password){
        throw Error("All fields must be filled")
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already in use")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password : hash, picture})
    return user
}
//static Login Method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error("Incorrect Email")
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error("Incorrect Password")
    }
return user;
}

//Export the model
module.exports = mongoose.model('User', userSchema);