//Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose =  require("./server/config/mongoose.js");
const router = require("./server/config/routes.js")
const cors = require("cors");
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router)
app.listen(port, function(){
    console.log("Listening on port: ", port);
})