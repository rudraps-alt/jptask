const mongoose = require('mongoose')

const quiz = mongoose.Schema({
    quizId: {
        type: String,
        required: true
    },
    noOfQuestions: {
        type: Number, 
        required: true
    },
    questions: [
        {
            desciption :{
                type : String,
                required : true
            },
            options :{
                type: Array,
                required: true
            },
            correct :{
                type : Number,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('quiz', quiz)