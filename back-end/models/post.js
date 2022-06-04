const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    countOfUpvotes: {
        type: Number, 
        default: 0
    },
    countOfDownvotes:{
        type:Number,
        default: 0
    }, 
    urlOfPdf:{
        type:String,
        required: true
    },
    deadline:{
        type:Date,
        required:true
    },
    govtEmail : {
        type:String,
        required:true
    },
    summary:{
        type: String,
        required:true
    },
    quizId : {
        type:String,
        required:true
    }
})

module.exports = mongoose.model(postSchema, PostSchema)