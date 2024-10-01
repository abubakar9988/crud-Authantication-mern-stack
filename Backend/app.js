require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const route = require('./router/userrouter')
const app = express();
const port = process.env.PORT || 8000
const DB = process.env.DB;
const cors = require('cors')
mongoose.connect(DB)
.then(()=>{console.log("mogoose is connected")})
app.use(cors())
app.use(express.json())
app.use("/",route)
app.listen(port,()=>{console.log(`server is running on port ${port}`)})