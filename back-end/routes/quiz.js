const express = require('express')
const router = express.Router()
const {getQuiz, createQuiz} = require('../controller/quiz')

router.get('/', getQuiz)
router.post('/', createQuiz)
module.exports = router