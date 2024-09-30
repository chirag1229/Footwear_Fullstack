const { userModel } = require("../models/User")
// const mongoose = require('mongoose');

const registerUser = async (req, res) => {

    try {
        const { Username, email, password } = req.body

        await userModel.create({
            Username: Username,
            email: email,
            password: password
        })

        res.status(201).json(
            {
                msg: " user create susccess fully"
            }
        )


    } catch (error) {
        res.status(503).json({
            msg: "internal server error"
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
    registerUser, loginuser
}
