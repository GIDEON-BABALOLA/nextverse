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
    bookmarkAStory,
    unBookmarkAStory
} = require(path.join(__dirname, "..", "controllers", "storyController.js"))
const { authMiddleware } = require(path.join(__dirname, "..", "middlewares", "authMiddleware.js"))
const { uploadMiddleware } = require(path.join(__dirname, "..", "middlewares", "uploadImages.js"))
router.post("/create-story", authMiddleware, uploadMiddleware, createStory)
router.put("/update-a-story/:id", authMiddleware,  updateAStory)
router.put("/upload-story-picture/:id",  authMiddleware, uploadMiddleware,  uploadStoryPicture)
router.get("/get-a-story/:id", authMiddleware,   getAStory)
router.get("/get-all-stories", authMiddleware, getAllStories)
router.get("/bookmark-a-story/:id", authMiddleware, bookmarkAStory)
router.get("/unbookmark-a-story/:id", authMiddleware, unBookmarkAStory)
router.delete("/delete-a-story/:id", authMiddleware, deleteAStory)
module.exports = router