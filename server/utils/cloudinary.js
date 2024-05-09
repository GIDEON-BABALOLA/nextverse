const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name : process.env.LIGHTNOTE_CLOUDINARY_CLOUD_NAME,
    api_key : process.env.LIGHTNOTE_CLOUDINARY_API_KEY,
    api_secret : process.env.LIGHTNOTE_CLOUDINARY_API_SECRET
    
})
const cloudinaryUpload = async (filesToUpload, folderName) => {
    try{
        const result = await cloudinary.uploader.upload(
            filesToUpload,
            {
              folder: folderName,
            }
          );

return { url : result.secure_url}
    }catch(error){
      throw Error("Unable to upload picture")
    }
}

module.exports =  { cloudinaryUpload }