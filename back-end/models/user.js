const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userLoginId: {
        type: String,
        required: true
    },
    userLoginPwd: {
        type: String,
        required: true
    },
    countPosts: {
        type: Number,
        default: 0
    },
    ratingPoints: {
        type: Number,
        default: 0
    },
    influencePoints: {
        type: Number,
        default: 0
    },
    listBadge: {
        type: Array,
        default: []
    },
    referalId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(userSchema, userSchema)
