const express = require("express");
// const path = require("path");
// tokenAuth
// const { authToken } = require("../middleware/tokenAuth");

const {
    getWomenShose,
    createWomenShose,
    // upolad,
    // deleteWomenShose,
    // updateWomenShose,
} = require("../controller/Women");

const Women_routes = express.Router();

// Women_routes.use("/img", express.static(path.join(__dirname, "../")));

Women_routes.get("/get", getWomenShose);
Women_routes.post("/create", createWomenShose);
// Women_routes.delete("/delete/:id", deleteWomenShose);
// Women_routes.put("/update/:id", upolad.single("poster"), updateWomenShose);
module.exports = { Women_routes };
