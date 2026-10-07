import "../css/Card-home.css"

type CardProps = {
    subTitle: string;
    title: string;
    lightMode: boolean;
    children: React.ReactNode
    topRight?: React.ReactNode
    bottomRight?: React.ReactNode
}

export default function Card(props: CardProps){
    return (
        <div className={`cards ${props.lightMode ? "active" : ""}`}>
            <div className="subAndTitle">
                <div>
                    <span className="subtitle">{props.subTitle}</span>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    {props.topRight && props.topRight}
                </div>
            </div>
            
            {props.children}

            {props.bottomRight && props.bottomRight}
            
        </div>
    )
}