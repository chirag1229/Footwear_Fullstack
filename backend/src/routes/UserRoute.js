const express = require("express")
const { registerUser, loginuser } = require("../controller/User")

const userRoute = express.Router()



userRoute.post("/register", registerUser)
userRoute.post("/login", loginuser)



module.exports = { userRoute }