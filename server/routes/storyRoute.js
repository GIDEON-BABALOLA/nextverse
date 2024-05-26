const express = require("express")
const path = require("path")
const router = express.Router()
const {
    createStory,
    getAStory,
    getAllStories,
    updateAStory,
    deleteAStory,
    uploadStoryPicture,
    filterAllStoriesByCategories,
    filterAllStoriesByDate
} = require(path.join(__dirname, "..", "controllers", "storyController.js"))
const { authMiddleware } = require(path.join(__dirname, "..", "middlewares", "authMiddleware.js"))
const { uploadMiddleware } = require(path.join(__dirname, "..", "middlewares", "uploadImages.js"))
router.post("/create-story", authMiddleware, uploadMiddleware, createStory)
router.put("/update-a-story/:id", authMiddleware,  updateAStory)
router.put("/upload-story-picture/:id",  authMiddleware, uploadMiddleware,  uploadStoryPicture)
router.get("/get-a-story/:id", authMiddleware,   getAStory)
router.get("/get-all-stories", authMiddleware, getAllStories)
router.get("/filter-all-stories-by-categories", authMiddleware,  filterAllStoriesByCategories)
router.get("/filter-all-stories-by-date", authMiddleware,  filterAllStoriesByDate)
router.delete("/delete-a-story/:id", authMiddleware, deleteAStory)
module.exports = router