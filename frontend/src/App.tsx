import Home from "./pages/Home";
import "./App.css"
import { UserRound, House, CodeXml, FlaskConical, SquareUserRound, MessageSquareQuote } from "lucide-react";

export default function App(){
  return(
    <div className="container">
      <div className="navbar">
        <span>
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
      </div>
      <div>
        <Home/>
      </div>
    </div>
  )
}