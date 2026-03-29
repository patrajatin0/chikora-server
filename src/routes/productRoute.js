const express = require("express")
const cloudinary = require("../Helpers/cloudinary")
const upload = require("../middleware/upload")
const Product = require("../config/schema")
const router = express.Router();

router.post("/upload-product", upload.single("image"), async (req, res) => {
    try {

        // Safety check
        if (!req.file) {
            return res.status(400).send("Image not uploaded")
        }

        const { productName, weight, price, found, stock } = req.body

        // Upload to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products"
        })
        console.log(result);


        // Save to DB
        const newProduct = new Product({
            productName,
            weight,
            price,
            found,
            stock,
            image: result.secure_url
        })

        await newProduct.save()

        res.send({
            message: "Product uploaded successfully"
        })

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/product", async (req, res) => {
    try {

        const newProduct = await Product.find({})
        res.send(newProduct)
    } catch (error) {
        res.status(500).send(error.message);
    }
})
module.exports = router
