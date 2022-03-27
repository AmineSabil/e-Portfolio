import { useState } from "react";
import "./works.scss";
import Code from '@material-ui/icons';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "AI Project Manager",
      desc:
        "I work as an AI & IoT project Manager at Dreamap since January 2022. ",
      img:
        "assets/dreamap.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Full Stack Developer",
      desc:
        "Web dev. internship: Worked on the Octocity Transport project, which is a flow management solution with multiple applications, it anticipates the impact of events since it understands the complexity of the behavior of fraudsters.",
      img:
        "assets/datategy.png",
    },
    {
      id: "3",
      icon: "../../public/assets/writing.png",
      title: "Back-End Developer",
      desc:
        "Web development internship: development of a web application's back-end while working in an Agile team.",
      img:
        "assets/engie.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}