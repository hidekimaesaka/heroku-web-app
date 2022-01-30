import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../resume/LUCAS_HIDEKI_MAESAKA_CV.pdf";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            hidekimsk
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon"></PersonIcon>
            <span>+(55) (11) 97655-4986 </span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"></MailIcon>
            <span>lucasmsk11@gmail.com</span>
          </div>
          <div className="itemContainer">
            <DownloadIcon className="icon"></DownloadIcon>
            <a href={resume} download="CV_Lucas_Hideki_Maesaka.pdf">
              <span>Baixe meu currículo!</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
