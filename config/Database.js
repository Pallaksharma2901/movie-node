const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://pallakmanojsharma:pallak29@cluster0.nxsqblh.mongodb.net/Movies");
    console.log("Data base is connected");
}

module.exports = db;
