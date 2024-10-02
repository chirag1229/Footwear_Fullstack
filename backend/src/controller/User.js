const { userModel } = require("../models/User")
const jwt = require('jsonwebtoken')
const { sendEmail } = require('../config/email_config')
const { OTP_DATA } = require('../config/email_temps')


const getAllUser = async (req, res) => {
    const UserData = await userModel.find()

    res.json({
        msg: "All User",
        UserData
    })
}

const registerUser = async (req, res) => {

    const { Username, email, password } = req.body

    const Exist_user = await userModel.findOne({ email })

    if (Exist_user) return res.status(401).json("already user exist")

    const user = await userModel.create({
        Username,
        email,
        password
    })

    console.log(user);

    res.status(200).json({
        msg: "user create success",
        user
    })

}

const otp_data = {}

const userOTPForgotPassword = async (req, res) => {
    const to = req.body["email"]
    const username = req.body["username"]

    const user = await User.findOne({ username: username })
    if (!user) {
        res.json({
            msg: "user not found"
        })
    } else {
        let subject = OTP_DATA["OTP_SUBJECT"];
        let msg = OTP_DATA["OTP_TEXT"];
        let html_1 = OTP_DATA["OTP_HTML_1"];
        let html_2 = OTP_DATA["OTP_HTML_2"];

        let otp = Math.round(Math.random() * 100000);

        otp_data[to] = { otp: otp, time: Date.now() };

        let html = `${html_1} ${otp} ${html_2}`

        sendEmail(to, subject, msg, html)

        console.log(otp_data)
        res.json({
            msg: "otp send"
        })
    }
}

const userForgotPassword = async (req, res) => {
    const { username, email, otp, new_password } = req.body;
    console.log(otp_data[email])
    if (!otp_data[email]) {
        res.json({
            msg: "email is wrong"
        })
    } else if (otp_data[email]["otp"] == otp && (Date.now() - otp_data[email]["time"] <= 5000)) {
        delete otp_data[email];

        await User.updateOne({ username: username }, { password: new_password })

        res.json({
            msg: "password updated"
        })
    } else {
        res.json({
            msg: "otp is wrong"
        })
    }
}

const userResetPassword = async (req, res) => {
    const { old_password, new_password } = req.body;
    const id = req.user["id"];

    if (old_password == new_password) {
        res.json({
            msg: "same as previous password"
        })
    }

    const user = await User.findOne({ _id: id })
    if (user.password != old_password) {
        res.json({
            msg: "password auth fail and please renter the password"
        })
    } else {
        await User.updateOne({ _id: id }, { password: new_password })

        res.json({
            msg: "password updated succesfully"
        })
    }


}


const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                msg: "Invalid email or password"
            });
        }


        res.status(200).json({
            msg: "Login success"
        });

    } catch (error) {
        res.status(500).json({
            msg: "An error occurred while logging in",
            error: error.message
        });
    }
}

module.exports = {
    registerUser, loginuser,
    getAllUser, userOTPForgotPassword, userForgotPassword, userResetPassword
}
