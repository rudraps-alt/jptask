import {useState} from "react";
import {createQuiz} from "../api/quiz"
import "./quiz.css";
const Quiz = () => {
    const {questions,setQuestions} = useState([]);
    const titleOfCons = useState("");
    const urlOfCons = useState("");
    const resSubDeadline = useState("");
    const feedbackEmail = useState("");
    const summary = useState("");
    const que = useState("");
    const opt1 = useState("");
    const opt2 = useState("");
    const opt3 = useState("");
    const opt4 = useState("");
    const correctAns = useState("");

    const onQuestionCreate = () => {
        const qArr=questions;
        const oArr=[];
        oArr.push(opt1);
        oArr.push(opt2);
        oArr.push(opt3);
        oArr.push(opt4);
        qArr.push({question:que,options:oArr,correctOpt:correctAns});
        setQuestions(qArr);
    }

    const onSubmit = () => {
        createQuiz({titleOfCons,urlOfCons,resSubDeadline,feedbackEmail,summary,questions})
        .then(res=>{
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }

    

    return(
        <></>
    );
}

export default Quiz;