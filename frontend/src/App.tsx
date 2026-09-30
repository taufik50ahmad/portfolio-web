import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Sandbox from "./pages/Sandbox";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import "./App.css"
import { UserRound, 
         House, 
         CodeXml, 
         FlaskConical, 
         SquareUserRound, 
         MessageSquareQuote, 
         Sun, 
         MoonStar,
         Mail } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App(){
  const [lightMode, setLightMode] = useState(false);
  const [page, setPage] = useState("home")

  return(
    <div className="container">
      <div className="navbar">
        <a href={window.location.href}>
          <span className="logo">
            Taufik Ahmad
          </span>
        </a>
        <ul>
          <li className={page === "home" ? "button-active" : ""}
              onClick={()=>setPage("home")}
          ><House/>Home</li>
          <li className={page === "about" ? "button-active" : ""}
              onClick={()=>setPage("about")}
          ><UserRound/>About</li>
          <li className={page === "skills" ? "button-active" : ""}
              onClick={()=>setPage("skills")}
          ><CodeXml/>Skills</li>
          <li className={page === "sandbox" ? "button-active" : ""}
              onClick={()=>setPage("sandbox")}
          ><FlaskConical/>Sandbox</li>
          <li className={page === "contact" ? "button-active" : ""}
              onClick={()=>setPage("contact")}
          ><SquareUserRound/>Contact</li>
          <li className={page === "feedback" ? "button-active" : ""}
              onClick={()=>setPage("feedback")}
          ><MessageSquareQuote/>Feedback</li>
        </ul>

        <div className="bottom-navbar">
          {/* Github, LinkedIn, Email */}
          <div className="social-icons">
            <a 
              href="https://github.com/taufik50ahmad"
              target="_blank"
              rel="noopener noreferrer">
              <span><FaGithub size={20}/></span>
            </a>
            <a 
              href="https://linkedin.com/in/taufikahmad57"
              target="_blank"
              rel="noopener noreferrer">
              <span><FaLinkedin size={20}/></span>
            </a>
            <a 
              href="mailto:taufik50ahmad@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <span><Mail size={20}/></span>
            </a>
          </div>

          {/* Separator Line */}
          <div className="line"></div>

          {/* Toggle */}
          <div className="toggle">
            <span className="MoonSun"><MoonStar/></span>
            <button className={`toggle-switch ${lightMode ? "active" : ""}`} onClick={() => setLightMode(!lightMode)}>
              <span className="toggle-circle">

              </span>
            </button>
            <span className="MoonSun"><Sun/></span>
          </div>
        </div>
        
      </div>

      {/* Pages */}
      <div className="pages" key={page}>
        {page === "home" && <Home lightMode={lightMode}/>}
        {page === "about" && <About/>}
        {page === "skills" && <Skills/>}
        {page === "sandbox" && <Sandbox/>}
        {page === "contact" && <Contact/>}
        {page === "feedback" && <Feedback/>}
      </div>
    </div>
  )
}