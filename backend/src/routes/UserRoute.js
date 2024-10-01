const express = require("express")
const { registerUser, loginuser, getAllUser } = require("../controller/User")

const userRoute = express.Router()


userRoute.get("/getAllUser", getAllUser)
userRoute.post("/register", registerUser)
userRoute.post("/login", loginuser)



module.exports = { userRoute }