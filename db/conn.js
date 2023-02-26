const mongoose = require("mongoose");
require("dotenv").config({path:"config.env"});
const mongoURL = process.env.MONGODB_URL

mongoose.set('strictQuery', true);
mongoose.connect(mongoURL)
.then(()=>console.log("MongoDB Successfully Connected"))
.catch((err)=>console.log(err));