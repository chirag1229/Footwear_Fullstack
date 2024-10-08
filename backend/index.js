const express = require("express");
const mongoose = require("mongoose");
const { userRoute } = require("./src/routes/UserRoute");
const { Men_routes } = require("./src/routes/Men")
const { Women_routes } = require("./src/routes/Women")

const cors = require("cors")
const app = express();



app.use(express.json());
app.use(cors())


app.use("/user", userRoute);
app.use("/men", Men_routes)
app.use("/women", Women_routes)



app.listen(8000, () => {
    mongoose.connect("mongodb://localhost:27017/Footwear")
    console.log("db connected");
})