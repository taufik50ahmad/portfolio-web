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
                      layout="column"
                      subTitle="01. ABOUT ME" 
                      title="About Me" 
                      description="Electrical Engineering undergraduate passionate about technology, problem-solving, and web development. Currently building practical projects while learning modern development tools and frameworks."
                      icon={[
                        {
                            iconLogo: GraduationCap,
                            iconText: "Electrical Engineer"
                            }, 
                        {
                            iconLogo: Wrench,
                            iconText: "Self-Taught Developer"
                            },
                        {
                            iconLogo: MapPinHouse,
                            iconText: "Based in Medan, Indonesia"
                            }]}/>

                <Card lightMode={lightMode} 
                      layout="skills"
                      subTitle="02. SKILLS"
                      title="Skills"
                      icon={[
                        {
                            iconLogo: FaHtml5,
                            iconText: "HTML"
                        },
                        {
                            iconLogo: FaCss3Alt,
                            iconText: "CSS"
                        },
                        {
                            iconLogo: DiJavascript,
                            iconText: "Javascript"
                        },
                        {
                            iconLogo: BsTypescript,
                            iconText: "TypeScript"
                        },
                        {
                            iconLogo: FaGitAlt,
                            iconText: "Git"
                        },
                        {
                            iconLogo: FaGithub,
                            iconText: "Github"
                        },
                        {
                            iconLogo: FaReact,
                            iconText: "React"
                        },
                        {
                            iconLogo: VscVscodeInsiders,
                            iconText: "VSCode"
                        },
                      ]}
                      />

                <Card lightMode={lightMode}
                      subTitle="03. SANDBOX"
                      title="Sandbox"
                      description="Short Description"/>

                <Card lightMode={lightMode}
                      layout="me"
                      subTitle="04. CONTACT"
                      title="Get In Touch"
                      description="Want to connect? Find my contact information and social links here."
                      button={{
                        text:"Contact Me",
                        icon1: Mail,
                        icon2: MoveRight,
                        onClick: ()=> setPage("contact")
                      }}
                      icon={[
                        {
                            iconLogo:Mail,
                            iconText:"taufik50ahmad@gmail.com"
                        },
                        {
                            iconLogo:FaGithub,
                            iconText:"github.com/taufik50ahmad"
                        },
                        {
                            iconLogo:FaLinkedin,
                            iconText:"linkedin.com/in/taufikahmad57"
                        },
                      ]}
                      />
            </div>
        </div>
    )
}