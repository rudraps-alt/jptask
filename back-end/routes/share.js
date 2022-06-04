const express = require('express')
const Router = express.Router();

Router.get('/', (req, res) => {
    const {email} = req.body
    // assuming we have fo the answer
    const hashString = "aaa"
    res.status(200).json({success : true, hash: hashString})

})

module.exports = Router