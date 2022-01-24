import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";

import { useState } from "react";

import "./app.scss"


function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen}></Topbar>
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}></Menu>
      <div className="sections">
        
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Contact></Contact>
        {/* <Works></Works>
        <Testimonials></Testimonials> */}
      </div>
    </div>
  );
}

export default App;
