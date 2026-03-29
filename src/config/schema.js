const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    weight: {
        type: String,

    },
    price: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,

    },
    found: {
        type: String,


    }
})

const user = mongoose.model("user", productSchema)

module.exports = user