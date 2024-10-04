const express = require("express")
const { registerUser, loginuser, getAllUser  } = require("../controller/User")
const { authToken } = require('../Middlewear/tokenAuth')
const { sendOtp, VerifyOtp } = require('../controller/otp')
const userRoute = express.Router()



userRoute.get("/getAllUser", getAllUser)
userRoute.post("/register", registerUser)
userRoute.post("/login", loginuser)
// userRoute.post('/forgot_password', userForgotPassword);
userRoute.post('/sendotp', sendOtp);
userRoute.post('/verify', VerifyOtp)
// userRoute.post('/reset_password', authToken, userResetPassword);




module.exports = { userRoute }