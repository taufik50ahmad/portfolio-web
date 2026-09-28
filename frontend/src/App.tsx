import Home from "./pages/Home";
import "./App.css"
import { UserRound, House, CodeXml, FlaskConical, SquareUserRound, MessageSquareQuote, Sun, MoonStar } from "lucide-react";
import { useState } from "react";

export default function App(){
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home")

  return(
    <div className="container">
      <div className="navbar">
        <span className="logo">
          Taufik Ahmad
        </span>
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
        <div className="toggle">
          <span className="MoonSun"><MoonStar/></span>
          <button className={`toggle-switch ${darkMode ? "active" : ""}`} onClick={() => setDarkMode(!darkMode)}>
            <span className="toggle-circle">

            </span>
          </button>
          <span className="MoonSun"><Sun/></span>
        </div>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  )
}