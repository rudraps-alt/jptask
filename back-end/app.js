const express = require('express')
const app = express()
const share = require('./routes/share')
const dotenv = require("dotenv")

const quiz = require('./routes/quiz')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/share', share)
app.use('/quiz', quiz)

dotenv.config()

const connectDB = require('./config/db')

connectDB()

app.listen(5000)

