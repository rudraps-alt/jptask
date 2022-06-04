const express = require('express')
const app = express()
const share = require('/routes/share')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/share', share)

app.listen(5000)

