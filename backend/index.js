const express = require("express");
const mongoose = require("mongoose");
const { userRoute } = require("./src/routes/UserRoute");
const app = express();


app.use(express.json());

app.use("/user", userRoute);


app.listen(3000, () => {
    mongoose.connect("mongodb://localhost:27017/Footwear")
    console.log("db connected");
})