const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const storySchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase :true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
        default : 0.00
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'NGN'], // Include only dollars and naira
        default : "NGN"
    },
    estimatedReadingTime : {
        type : String
    },
    caption:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum : ["fiction", "non-fiction", "romance", "adventure", "memoir"]
    },
    date : {
        type : String,
        required : true,
    },
    userId : {
        type : String,
        required : true
    },
    picture : {
        type: Array,
        required : true,
        validate : {
            validator : function(p){
                return p.length <= 2; //Setting The Maximum Length Of The Array Here
            },
            message: props => `The array exceeds the maximum allowed length (10).`
        }
    },
    comments : [
        {
        comment : String,
        commentby : {type : mongoose.Schema.Types.ObjectId, ref : "User"}
        }
    ],
    likes : [
        {
        likes : Number,
        likedby : {type : mongoose.Schema.Types.ObjectId, ref : "User"}
    }
],
    totallikes : {
    type : String,
    default : 0
    },
    totalcomments : {
    type : String,
    default : 0
    }
    

}, {
    timestamps : true
});
storySchema.statics.createstory = async function(userId, storyId){
    const story =    await this.findByIdAndUpdate(userId, {
        $push: { stories: { writtenby: userId } },
      }, { new : true})
}


//Export the model
module.exports = mongoose.model('Story', storySchema);