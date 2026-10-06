import "../css/Card-home.css"
import type { IconType } from "react-icons"

type CardProps = {
    subTitle: string;
    title: string;
    description?: string;
    icon?: {
        iconLogo: IconType;
        iconText?: string;
    }[];
    lightMode: boolean;
    layout?: string;
}

export default function Card(props: CardProps){
    return (
        <div className={`cards ${props.lightMode ? "active" : ""}`}>
            <span className="subtitle">{props.subTitle}</span>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <ul className={`list ${props.layout}`}>
                {props.icon?.map((Icon, index)=>(
                    <li  key={index} className={`list-logo ${props.layout}`}>
                        <Icon.iconLogo/>
                        <span>{Icon.iconText}</span>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}