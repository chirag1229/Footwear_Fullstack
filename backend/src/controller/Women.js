const { womenshoes } = require("../models/Women");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, "../imgs")); // Ensure the path is correctly set
//     },
//     filename: function (req, file, cb) {
//         const prefix = Date.now() + "-" + Math.round(Math.random() * 100000);
//         cb(null, prefix + "-" + file.originalname);
//     },
// });

// const upolad = multer({ storage });

const getWomenShose = async (req, res) => {
    try {
        const data = await womenshoes.find();
        res.json({
            data: data,
        });
    } catch (error) {
        res.json({
            erro: error,
        });
    }
};

const createWomenShose = async (req, res) => {
    try {
        const req_body = req.body;
        const brand = req_body.brand;
        const style = req_body.style;
        const size = req_body.size;
        const price = req_body.price;
        const quantity = req_body.quantity;
        const shoes= await shoesModel.create({
            brand,
            style,
            size,
            price,
            quantity
        });

        res.json({
            msg: "Womenshose Detail Create successful",
        });
    } catch (error) {
        res.json({
            error: error,
        });
    }
};



// delete shose
// const deleteWomenShose = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const shose = await shoesModel.findOne({ _id: id });

//         if (!shose) {
//             return res.status(404).json({ msg: "shose not found" });
//         }

//         const poster = chair.poster;
//         if (poster) {
//             const poster_path = path.join(__dirname, "../", poster);

//             // Check if the file exists before trying to delete
//             if (fs.existsSync(poster_path)) {
//                 fs.unlink(poster_path, (err) => {
//                     if (err) {
//                         console.error("Failed to delete the file:", err);
//                         return res
//                             .status(500)
//                             .json({ msg: "Failed to delete chair image" });
//                     }
//                 });
//             }
//         }

//         await shoesModel.deleteOne({ _id: id });

//         res.json({
//             msg: "womenshose data deleted successfully",
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//         });
//     }
// };

// upadteshoes


module.exports = { getWomenShose, createWomenShose };