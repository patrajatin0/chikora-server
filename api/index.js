const dotenv = require("dotenv")
dotenv.config({
    path: "./.env"
})
const app = require("../src/app")
const connectDB = require("../src/model/database")


const port = process.env.PORT

connectDB()
    .then((result) => {
        console.log("the database connection establisher...");
        app.listen(port, () => {
            console.log("The port is listening on the localhost:" + port);

        })

    }).catch((err) => {
        console.log("the db is not connected");

    })



