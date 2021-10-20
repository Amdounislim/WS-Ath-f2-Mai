require('dotenv').config()
// require("dotenv").config({ path:"./config/.env" })
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')
const cors = require('cors')


const app = express()

app.use(cors());

app.use(express.json())





connectDB()


app.use("/user", user)

const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log("Server connection failed", err)
        : console.log(`Server is running on Port ${PORT}`)
})