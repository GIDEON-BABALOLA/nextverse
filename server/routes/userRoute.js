const express = require("express")
const path = require("path")
const router = express.Router()
const {
signupUser,
loginUser,
logoutUser,
getCurrentUser,
uploadUserPicture,
userRefreshToken,
} = require(path.join(__dirname, "..", "controllers", "userController.js"))
const { authMiddleware } = require(path.join(__dirname, "..", "middlewares", "authMiddleware.js"))
router.post("/register-user", signupUser);
router.post("/login-user", loginUser)
router.post("/upload-user-picture", uploadUserPicture)
router.get("/user-refresh-token", userRefreshToken)
router.get("/get-current-user", authMiddleware, getCurrentUser)
router.get("/logout-user", logoutUser)
module.exports = router