import { useState } from "react";
import { createQuiz } from "../api/quiz"
import NavLogo from "../navlogo.png"
import "./quiz.css";
const Quiz = () => {
    const { questions, setQuestions } = useState([]);

    const { titleOfCons, settitleOfCons } = useState("");
    const { urlOfCons, seturlOfCons } = useState("");
    const { resSubDeadline, setresSubDeadline } = useState("");
    const { feedbackEmail, setfeedbackEmail } = useState("");
    const { summary, setsummary } = useState("");
    const { que, setque } = useState("");
    const { correctAns,setcorrectAns} = useState("");
    const { opt1, setopt1 } = useState("");
    const { opt2, setopt2 } = useState("");
    const { opt3, setopt3 } = useState("");
    const { opt4, setopt4 } = useState("");


    const onQuestionCreate = () => {
        const qArr = questions;
        const oArr = [];
        oArr.push(opt1);
        oArr.push(opt2);
        oArr.push(opt3);
        oArr.push(opt4);
        qArr.push({ question: que, options: oArr, correctOpt: correctAns });
        console.log(oArr,qArr)
        setQuestions(qArr);
    }

    const onSubmit = () => {
        createQuiz({ titleOfCons, urlOfCons, resSubDeadline, feedbackEmail, summary, questions })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }


    // const onChange =(e)=>{
    //     e.target.value=
    // }

    



    return (
        <>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <img width="70px" src={NavLogo} alt="logo" />
                    </div>
                    <nav>
                        <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <a href="#!">Active Consultations</a>
                            </li>
                            <li>
                                <a href="#!">Leaderboard</a>
                            </li>

                            <li>
                                <a href="#!">How Civis Works</a>

                            </li>


                        </ul>
                    </nav>
                </div>
            </section>



            <div className="form-container main">
                <form>
                    <label for="">Title of The Consultation</label>
                    <br />
                    <input type="text" name="" id="" onChange={(e) => settitleOfCons(e.target.value)}/>
                    <br />
                    <br />
                    <label for="">Paste URL of consultation PDF</label>
                    <br />
                    <input type="text" name="" id="" onChange={(e) => seturlOfCons(e.target.value)}/>
                    <br />
                    <br />

                    <label for="">Response submission deadline</label>
                    <br />
                    <input type="text" name="" id="" onChange={(e) => setresSubDeadline(e.target.value)}/>
                    <br />
                    <br />

                    <label for="">Government Email ID to Submit feedback</label>
                    <br />
                    <input type="text" name="" id="" onChange={(e) => setfeedbackEmail(e.target.value)}/>
                        <br/>
                        <br />

                        


                </form>
            </div>

                        <div className="main summary">
                        
                        <input type="text" name="summ" id="summ" onChange={(e) => setsummary(e.target.value)} placeholder="summary"/>

                        </div>

                        <div className="main">

                            <div className="quiz-questions" id="display-area">
                                <input className="question" type="text" name="que" id="que" onChange={(e) => setque(e.target.value)} placeholder="Question"/>

                                <ul id="answer">
                                    <input type="text" name="opt1" id="opt1" onChange={(e) => setopt1(e.target.value)} placeholder="Option 1"/>
                                    <input type="text" name="opt2" id="opt2" onChange={(e) => setopt2(e.target.value)} placeholder="Option 2"/>
                                    <input type="text" name="opt3" id="opt3" onChange={(e) => setopt3(e.target.value)} placeholder="Option 3"/>
                                    <input type="text" name="opt4" id="opt4" onChange={(e) => setopt4(e.target.value)} placeholder="Option 4"/>
                                    

                                    

                                </ul>

                                <input type="text" name="correct" id="correct" onChange={(e) => setcorrectAns(e.target.value)} placeholder="Correct Option"/>

                                <br />
                                <button type="button" name="submitQues" className="submit-button" id="submit" onClick={onQuestionCreate}>Submit Question</button>


                                <div id="quiz-results">
                                    <button type="button" name="button" className="submit" id="submit" onClick={onSubmit}>Submit</button>
                                </div>

                                
                            </div>

                        </div>




                        <canvas id="canvas"></canvas>




                        <br />
                        <br />




                        <footer className="footer-section">
                            <div className="container">
                                <div className="footer-cta pt-5 pb-5">
                                    <div className="row">
                                        <div className="col-xl-4 col-md-4 mb-30">
                                            <div className="single-cta">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <div className="cta-text">
                                                    <h4>Find us</h4>
                                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, animi?</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 mb-30">
                                            <div className="single-cta">
                                                <i className="fas fa-phone"></i>
                                                <div className="cta-text">
                                                    <h4>Call us</h4>
                                                    <span>+123456789</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-4 mb-30">
                                            <div className="single-cta">
                                                <i className="far fa-envelope-open"></i>
                                                <div className="cta-text">
                                                    <h4>Mail us</h4>
                                                    <span>mail@info.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-content pt-5 pb-5">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 mb-50">
                                            <div className="footer-widget">
                                                <div className="footer-logo">
                                                <img width="70px" src={NavLogo} alt="logo" />

                                                </div>
                                                <div className="footer-text">
                                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                                        elit,Lorem ipsum dolor sit amet.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="footer-widget">
                                                <div className="footer-widget-heading">
                                                    <h3>Useful Links</h3>
                                                </div>
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">about</a></li>
                                                    <li><a href="#">services</a></li>
                                                    <li><a href="#">portfolio</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Our Services</a></li>
                                                    <li><a href="#">Expert Team</a></li>
                                                    <li><a href="#">Contact us</a></li>
                                                    <li><a href="#">Latest News</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="copyright-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                            <div className="copyright-text">
                                                <p>Copyright &copy; 2022, All Right Reserved Civic</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                            <div className="footer-menu">
                                                <ul>
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">Terms</a></li>
                                                    <li><a href="#">Privacy</a></li>
                                                    <li><a href="#">Policy</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </>
                    );
}

                    export default Quiz;