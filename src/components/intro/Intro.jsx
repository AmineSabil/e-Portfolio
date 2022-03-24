import "./intro.scss"
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import { init } from 'ityped';
import { useEffect,useRef } from "react";

export default function Intro() {
    
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Web Developer", "AI developer", "Game developer"],
        });
    },[])

    return (
        <div className="intro" id="intro">
           <div class="left">
              <div className="imgContainer">
                 <img src="assets/profile_picture.png" alt="profile"/>
              </div>
           </div>
           <div class="right">
                <div className="wrapper">
                    <h2>  Hi there <SentimentVerySatisfied/>, I'm</h2>
                    <h1>Mohamed Amine SABIL</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <h3>Computer Engineering <span>Student</span></h3> 
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
           </div>
        </div>
    )
}