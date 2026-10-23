
import { type LucideIcon,
    CodeXml
 } from "lucide-react"

type SkillCardProps = {
    iconTitle:LucideIcon
    title:string
    description:string
    status:string
    skills:{
        icon:LucideIcon
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
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:90}
        ]
    },
    {
        iconTitle: CodeXml,
        title:"FU",
        description:"sadsdasdasdasdasda",
        status:"",
        skills:[
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:90}
        ]
    },
    {
        iconTitle: CodeXml,
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        status:"",
        skills:[
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:90}
        ]
    },
    {
        iconTitle: CodeXml,
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        status:"",
        skills:[
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:90}
        ]
    },
    {
        iconTitle: CodeXml,
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        status:"",
        skills:[
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:10}
        ]
    },
    {
        iconTitle: CodeXml,
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        status:"",
        skills:[
            {icon: CodeXml, text:"CodeXml", score:90},
            {icon: CodeXml, text:"CodeXml", score:90}
        ]
    },
]