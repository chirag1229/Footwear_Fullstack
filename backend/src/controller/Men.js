const { menshoes } = require("../models/Men");
// const fs = require("fs");
// const path = require("path");


// get bed data
const getMenShose= async (req, res) => {
    try {
        const data = await menshoes.find();
        res.json({
            data: data,
        });
    } catch (error) {
        res.json({
            error: error,
        });
    }
};
// create Shose data
const createMenShose = async (req, res) => {
    try {
        const req_body = req.body;
        const brand = req_body.brand;
        const style = req_body.style;
        const size = req_body.size;
        const price = req_body.price;
        const quantity = req_body.quantity;
        const shoes = await menshoes.create({
            brand,
            style,
            size,
            price,
            quantity
        });

        res.json({
            msg: "Memshose Detail Create successful",
            shoes
        });
    } catch (error) {
        res.json({
            error: error,
        });
    }
};
// delete Shose data
// const deleteMenShose = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const shose = await shoesModel.findOne({ _id: id });
//         if (shose) {
//             const poster = bed.poster;
//             let poster_path = null;
//             if (poster) {
//                 poster_path = path.join(__dirname, "../", poster);
//                 fs.unlinkSync(poster_path);
//             }
//             await shoesModel.deleteOne({ _id: id });
//             res.json({
//                 msg: "Shose data deleted Succesful",
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//         });
//     }
// };
// update
// const updateMenShose = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updateData = req.body;

//         const updatedbed = await shoesModel.findByIdAndUpdate(id, updateData, {
//             new: true,
//         });
//         if (!updatedbed) {
//             return res.status(404).json({
//                 msg: "Shose not found",
//             });
//         }

//         res.json({
//             msg: "Shose updated successfully",
//             data: updateMenShose,
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//         });
//     }
// };
module.exports = { getMenShose, createMenShose}