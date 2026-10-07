import {
    ArrowDownToLine, 
    GraduationCap, 
    Wrench, 
    MapPinHouse,
    Mail,
    MoveRight
} from "lucide-react"

import {
    FaCss3Alt,
    FaHtml5,
    FaGithub,
    FaReact,
    FaLinkedin 
} from "react-icons/fa"

import { DiJavascript } from "react-icons/di";
import { BsTypescript } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";

import "../css/Home.css"
import Card from "../components/Card-home"
import type { Dispatch, SetStateAction } from "react";

type Props = {
    lightMode: boolean
    setPage: Dispatch<SetStateAction<string>>
}

export default function Home({lightMode, setPage}: Props){
    return(
        <div className="home-container">
            <div className="top-section">
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
                    <img src={lightMode ? "/(Light Mode) Portrait-BG.png":"/(DarkMode) Portrait-BG.png"} className="portrait"/>
                </div>
            </div>
            <div className="card-section">
                <Card lightMode={lightMode}
                      subTitle="01. ABOUT ME" 
                      title="About Me"
                      topRight={
                        <button className="card1-button" onClick={()=>setPage("about")}>
                            <MoveRight/>
                        </button>
                      } 
                        >
                        <div className="card1">
                            <p>Electrical Engineering undergraduate passionate about technology, problem-solving, and web development. Currently building practical projects while learning modern development tools and frameworks.</p>
                            <ul>
                                <li><GraduationCap/>Electrical Engineering</li>
                                <li><Wrench/>Self-Taught Developer</li>
                                <li><MapPinHouse/>Based in Medan, Indonesia</li>
                            </ul>
                        </div>
                </Card>

                <Card lightMode={lightMode} 
                      subTitle="02. SKILLS"
                      title="Skills"
                      >
                        <div className="card2">
                            <ul>
                                <li><FaHtml5/></li>
                                <li><FaCss3Alt/></li>
                                <li><DiJavascript/></li>
                                <li><BsTypescript/></li>
                                <li><FaReact/></li>
                                <li><FaGitAlt/></li>
                                <li><FaGithub/></li>
                                <li><VscVscodeInsiders/></li>
                            </ul>
                        </div>
                </Card>

                <Card lightMode={lightMode}
                      subTitle="03. SANDBOX"
                      title="Sandbox"
                      >
                        <div className="card3">

                        </div>
                </Card>

                <Card lightMode={lightMode}
                      subTitle="04. CONTACT"
                      title="Get In Touch"
                      >
                        <div className="card4">
                            <p>Feel free to reach out if you’d like to get in touch. You can find my contact and social links below.</p>
                            <button><Mail/>Contact Me<MoveRight/></button>
                            <ul>
                                <li><Mail/>taufik50ahmad@gmail.com</li>
                                <li><FaLinkedin/>linkedin.com/in/taufikahmad57</li>
                                <li><FaGithub/>github.com/taufik50ahmad</li>
                            </ul>
                        </div>
                </Card>
            </div>
        </div>
    )
}