import React from "react";
import "../css/Contact.css";
import whatsappicon from "../assets/whatsappicon.png";
import instagramicon from "../assets/instagramicon.png";
import linkedinicon from "../assets/linkedinicon.png";
import githubicon from "../assets/githubicon.png";

export default function Contact() {
  return (
    <div className="main-container">
      <a href="https://api.whatsapp.com/send?phone=5511976554986&text=" target="_blank"  rel="noreferrer">
        <img className="icon" src={whatsappicon} alt="" />
      </a>
      <a href="https://www.instagram.com/hideki_msk/" target="_blank"  rel="noreferrer">
        <img className="icon" src={instagramicon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/lucas-maesaka-8a9692211/" target="_blank"  rel="noreferrer">
        <img className="icon" src={linkedinicon} alt="" />
      </a>
      <a href="https://github.com/hidekimaesaka" target="_blank"  rel="noreferrer">
        <img className="icon" src={githubicon} alt="" />
      </a>
      <footer className="footer-contact">
          <p>
              MAESAKA 	&copy; 
          </p>
      </footer>
    </div>
  );
}
