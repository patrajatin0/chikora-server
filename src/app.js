
const express = require("express")
const app = express()
const productRoute = require("./routes/productRoute")
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173/" }))

app.use("/api", productRoute)

module.exports = app

