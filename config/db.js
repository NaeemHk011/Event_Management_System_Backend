const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
// import mongoose from "mongoose"

const ConnectDB = async () => {

    await mongoose.connect(process.env.DBURI)
    .then(()=>{console.log("Connected to DB.....")})
    .catch(()=>{console.log("Connection Failed.....")})

}


module.exports = ConnectDB