const express = require('express')
const app = express()
const share = require('./routes/share')
const dotenv = require("dotenv")

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/share', share)

dotenv.config()

const connectDB = require('./config/db')

connectDB()

app.listen(5000)

