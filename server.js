const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')


const app = express()

app.use(express.json())

// require("dotenv").config({ path: "./config/.env" })
require('dotenv').config()



connectDB()


app.use("/user", user)

const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log("Server connection failed", err)
        : console.log(`Server is running on Port ${PORT}`)
})