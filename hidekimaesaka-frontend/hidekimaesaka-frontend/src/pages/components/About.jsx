import React from "react";
import "../css/About.css";
import SkillsList from "./SkillsList"

export default function Projects() {
  return (
    <div className="main-container">
      <h1 className="name">Hideki Maesaka</h1>
      <div className="grid-container">
        <div className="slot-1">
          <p className="apresentation">
          " I’ve always been passionate about the world of technology, I started
            programming in high school where at the same time I decided to
            pursue a developer career, currently studying the third semester of
            Analysis and Systems Development at FATEC-SP, and with a perspective
            confident for my future, i look for a good place to start my
            journey. "
          </p>
        </div>
        <div className="slot-2">
        <p className="apresentation">
        This website was created with the intention to increase my skills on WEB programming and at the same time be used as portfolio.
          </p>
        </div>
        <div className="slot-3">
            <h2 className="skills">My Skills</h2>
        <SkillsList/>
        </div>
        <div className="slot-4">
        <p className="phrase">
        Your limitation it’s only your imagination...
          </p>
        </div>
      </div>
      <footer className="footer">
          <p>
              MAESAKA 	&copy; 
          </p>
      </footer>
    </div>
  );
}
