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
        <img className="icon-contact" src={whatsappicon} alt="whatsappicon" />
      </a>
      <a href="https://www.instagram.com/hideki_msk/" target="_blank"  rel="noreferrer">
        <img className="icon-contact" src={instagramicon} alt="instagramicon" />
      </a>
      <a href="https://www.linkedin.com/in/lucas-maesaka-8a9692211/" target="_blank"  rel="noreferrer">
        <img className="icon-contact" src={linkedinicon} alt="linkedinicon" />
      </a>
      <a href="https://github.com/hidekimaesaka" target="_blank"  rel="noreferrer">
        <img className="icon-contact" src={githubicon} alt="githubicon" />
      </a>
      <br />
    </div>
  );
}
