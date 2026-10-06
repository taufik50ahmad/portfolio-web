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
    button?: {
        text: string,
        icon1?: IconType
        icon2?: IconType
        onClick?: ()=>void
    };
}

export default function Card(props: CardProps){
    return (
        <div className={`cards ${props.lightMode ? "active" : ""} ${props.layout || ""}`}>
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
            {props.button && (
                <button className={`contact ${props.layout}`} onClick={props.button.onClick}>
                    {props.button.icon1 && (
                        <span className="icon1"><props.button.icon1/></span>
                    )}
                    <span className="button-text">
                        {props.button.text}
                    </span>
                    {props.button.icon2 && (
                        <span className="icon2"><props.button.icon2/></span>
                    )}
                </button>
            )}
            
        </div>
    )
}