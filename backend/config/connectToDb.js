require("dotenv").config()
const mongoose = require('mongoose');

async function connectToDb() {
  await  mongoose.connect(process.env.MONGO_URI)
  console.log("dataBase Connected")
}
module.exports = connectToDb;