const express = require("express");
const app = express();
require("dotenv").config({ path: "config.env" });
const port = process.env.PORT || 2202 ;
const route = require("./Routes/Routes"); //Routes
require("./db/conn"); //Database


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/quiz", route)

app.listen(port, ()=>console.log("Listening...."))