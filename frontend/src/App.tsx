import Home from "./pages/Home";
import "./App.css"
import { UserRound, House, CodeXml, FlaskConical, SquareUserRound, MessageSquareQuote, Sun, MoonStar } from "lucide-react";

export default function App(){
  return(
    <div className="container">
      <div className="navbar">
        <span className="logo">
          Taufik Ahmad
        </span>
        <ul>
          <li><House/>Home</li>
          <li><UserRound/>About</li>
          <li><CodeXml/>Skills</li>
          <li><FlaskConical/>Sandbox</li>
          <li><SquareUserRound/>Contact</li>
          <li><MessageSquareQuote/>Feedback</li>
        </ul>
        <div className="toggle">
          <span className="MoonSun"><MoonStar/></span>
          <button className="toggle-switch">
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