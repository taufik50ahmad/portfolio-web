import {ArrowDownToLine} from "lucide-react"
import "../css/Home.css"

type LightMode = {
    lightMode: boolean
}

export default function Home({lightMode}: LightMode){
    return(
        <div className="home-container">
            <div className="intro">
                <span>HELLO, I'M</span>
                <h1>TAUFIK AHMAD</h1>
                <h2>Web Developer in Progress & IT Professional</h2>
                <p>
                    I'm transitioning into web development and building practical applications with modern technologies. I'm passionate about learning, solving problems, and turning ideas into functional experiences.
                </p>
                <a href="/CV Taufik Ahmad.pdf" download className="download-link">
                    <button className={`download ${lightMode ? "active":""}`}>
                        <ArrowDownToLine size={15}/>
                        DOWNLOAD CV
                    </button>
                </a>
            </div>
            <div>
                <img src={lightMode ? "/(Light Mode) Portrait.png":"/(Dark Mode) Portrait.png"} className="portrait"/>
            </div>
        </div>
    )
}