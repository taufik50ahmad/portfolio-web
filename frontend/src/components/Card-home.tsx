import "../css/Card-home.css"
import type { IconType } from "react-icons"

type CardProps = {
    title: string;
    description: string;
    icon?: IconType[];
    lightMode: boolean
}

export default function Card(props: CardProps){
    return (
        <div className={`cards ${props.lightMode ? "active" : ""}`}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div>{props.icon?.map((Icon, index)=>(
                <Icon key={index}/>
            ))}</div>
        </div>
    )
}