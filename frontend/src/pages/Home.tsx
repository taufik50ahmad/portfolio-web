import {ArrowDownToLine} from "lucide-react"
import "../css/Home.css"

export default function Home(){
    return(
        <div className="intro">
            <span>HELLO, I'M</span>
            <h1>TAUFIK AHMAD</h1>
            <h2>Web Developer in Progress & IT Professional</h2>
            <p>
                I'm transitioning into web development and building practical applications with modern technologies. I'm passionate about learning, solving problems, and turning ideas into functional experiences.
            </p>
            <button>
                <ArrowDownToLine />
                DOWNLOAD CV
            </button>
        </div>
    )
}