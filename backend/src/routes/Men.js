const express = require("express");
const { authToken } = require("../Middlewear/tokenAuth");

const {
    getMenShose,
    createMenShose,

} = require("../controller/Men");

const Men_routes = express.Router();
// Men_routes.use("/img", express.static(path.join(__dirname, "../imgs")));

Men_routes.get("/getShoes",  getMenShose);
Men_routes.post("/create", createMenShose);
// Men_routes.delete("/delete/:id", authToken, deleteMenShose);
// Men_routes.put("/update/:id",  updateMenShose);
module.exports = { Men_routes };
