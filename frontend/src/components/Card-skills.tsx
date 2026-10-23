import type { LucideIcon } from "lucide-react"

type SkillCardProps = {
    title:string
    description:string
    skills:{
        icon:LucideIcon
        text:string
    }[]
}

export default function SkillCard(props:SkillCardProps){
    return(
        <div>
            <div className="skillCard-topSection">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            
            <div className="skillCard-bottomSection">
                <ul>
                    {props.skills.map((s) => 
                        <li>
                            <span>{<s.icon />}</span>
                            <span>{s.text}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}