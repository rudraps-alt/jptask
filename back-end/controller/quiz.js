const quiz = require('../models/quiz')
const getQuiz = async (req, res) =>{
    try{
        const quizId = req.body.data.quizId;
        //console.log(quizId)
        const quizData = await quiz.find({"quizId":quizId});
        res.status(200).json({success : true, data : quizData});
    } catch(err){
        res.json({success : false, message : err})
    }
}

const createQuiz =  async (req, res) => {
    const createQuizData = req.body.data
    //console.log(createQuizData)
    //res.json({"hello":"world"})
    const q = new quiz(createQuizData)
    try{
        const savedPost = await q.save()
        res.status(201).json({success:true, data:savedPost})
    }
    catch(err){
        res.json({success : false, data:err})
    }
    //console.log(data)
    
}

module.exports = {getQuiz, createQuiz}