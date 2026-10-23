import { CodeXml, type LucideIcon } from "lucide-react"
import SkillCard from "../components/Card-skills"

const skillsObject = [
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
    {
        title:"lorem ipsum",
        description:"sadsdasdasdasdasda",
        skills:[
            {icon: CodeXml, text:"CodeXml"},
            {icon: CodeXml, text:"CodeXml"}
        ]
    },
]

export default function Skills(){
    return (
        <div>
            <div className="skillPage-topSection">
                <div className="skillPage-titleSection">
                    <span>MY SKILLS</span>
                    <span className="titleLine"></span>
                </div>
                <h2>Skills & Technologies</h2>
                <p>Here are the technologies and tools I've worked with and I'm currently learning. Each skill shows my current level of comfort and experience.</p>
            </div>
            <div className="skillPage-bottomSection">
                {skillsObject.map(s => 
                    <SkillCard
                        title={s.title}
                        description={s.description}
                        skills={s.skills}
                    />
                )}
            </div>
        </div>
    )
}