const express = require("express")
const { registerUser, loginuser, getAllUser, userForgotPassword, userOTPForgotPassword, userResetPassword  } = require("../controller/User")
const {authToken}= require('../Middlewear/tokenAuth')
const userRoute = express.Router()


userRoute.get("/getAllUser", getAllUser)
userRoute.post("/register", registerUser)
userRoute.post("/login", loginuser)
userRoute.post('/forgot_password', userForgotPassword);
userRoute.post('/forgot_password/otp', userOTPForgotPassword);
userRoute.post('/reset_password', authToken, userResetPassword);




module.exports = { userRoute }