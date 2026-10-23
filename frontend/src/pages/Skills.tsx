import {
    Star,
} from "lucide-react"
import { skillsObject } from "../data/skillsData.js"


export default function Skills(){
    const updatedSkillsObject = skillsObject.map(s => {
        const average = s.skills.reduce((total, u) => total + u.score, 0) / s.skills.length 

        return {
            ...s,
                status:
                    average >= 75 ? "Confident" :
                    average >= 50 ? "Comfortable" :
                    average >= 25 ? "fammiliar" :
                    "Learning"
        }
    })

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
                {updatedSkillsObject.map(s => 
                    <div className="skillCard">
                        <div className="skillCard-topSection">
                            <div className="skillCard-iconTitle">
                                <span>{<s.iconTitle />}</span>
                            </div>
                            <div className="skillCard-titlePgr">
                                <h2>{s.title}</h2>
                                <p>{s.description}</p>
                            </div>
                            <div className="skillCard-status">
                                <span>{s.status}</span>
                            </div>
                        </div>
                        
                        <div className="skillCard-bottomSection">
                            <ul>
                                {s.skills.map((s) => 
                                    <li>
                                        <div className="skillCardList-leftSide">
                                            <span>{<s.icon />}</span>
                                            <span>{s.text}</span>
                                        </div>
                                        <div className="skillCardList-rightSide">
                                            <div className="stars">
                                                <span><Star/><Star/><Star/><Star/><Star/></span>
                                                <span><Star/><Star/><Star/><Star/><Star/></span>
                                            </div>
                                            <div className="percentage">
                                                <span>{s.score}%</span>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}