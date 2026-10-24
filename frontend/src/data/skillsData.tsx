
import { type LucideIcon,
    CodeXml,
    GraphHub,
    Database,
    Toolbox,
    BookOpen
 } from "lucide-react"

import Html from "../assets/icons/html5/html5-original.svg"
import Css from "../assets/icons/css3/css3-original.svg"
import Js from "../assets/icons/javascript/javascript-original.svg"
import Ts from "../assets/icons/typescript/typescript-original.svg"
import ReactIcon from "../assets/icons/react/react-original.svg"
import NodeJs from "../assets/icons/nodejs/nodejs-original.svg"
import Express from "../assets/icons/express/express-original.svg"
import PgSQL from "../assets/icons/postgresql/postgresql-original.svg"
import Git from "../assets/icons/git/git-original.svg"
import Github from "../assets/icons/github/github-original.svg"
import VSCode from "../assets/icons/vscode/vscode-original.svg"
import Tauri from "../assets/icons/tauri/tauri-original.svg"
import Docker from "../assets/icons/docker/docker-original.svg"

type SkillCardProps = {
    iconTitle:LucideIcon
    title:string
    description:string
    status:string
    skills:{
        icon:string
        text:string
        score:number
    }[]
}

export const skillsObject:SkillCardProps[] = [
    {
        iconTitle: CodeXml,
        title:"Frontend Development",
        description:"Building interacteive and responsive user interfaces.",
        status:"",
        skills:[
            {icon: Html, text:"HTML", score:70},
            {icon: Css, text:"CSS", score:70},
            {icon: Js, text:"Javascript", score:70},
            {icon: Ts, text:"Typescript", score:65},
            {icon: ReactIcon, text:"React", score:65}
        ]
    },
    {
        iconTitle: GraphHub,
        title:"Backend Development",
        description:"Building APIs, handling data, and server-side logic.",
        status:"",
        skills:[
            {icon: NodeJs, text:"Node.js", score:75},
            {icon: Express, text:"Express", score:60}
        ]
    },
    {
        iconTitle: Database,
        title:"Database",
        description:"Managing and working with relational databases using PostgreSQL.",
        status:"",
        skills:[
            {icon: PgSQL, text:"PostgreSQL", score:60}
        ]
    },
    {
        iconTitle: Toolbox,
        title:"Tools & Dev Environment",
        description:"Tools that help medevelop test, and deploy projects efficiently.",
        status:"",
        skills:[
            {icon: Git, text:"Git", score:70},
            {icon: Github, text:"Gitub", score:75},
            {icon: VSCode, text:"VSCode", score:80}
        ]
    },
    {
        iconTitle: BookOpen,
        title:"Currently Learning",
        description:"Technologies I'm actively learning and want to explore further.",
        status:"",
        skills:[
            {icon: Tauri, text:"Tauri", score:30},
            {icon: Docker, text:"Docker", score:10}
        ]
    },
]