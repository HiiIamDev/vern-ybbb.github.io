import * as Icon from "react-feather"

export default function CardsEvents ({
    content : {
        id,
        title,
        date,
        imgUrl,
        location,
        presentedBy,
        descript
    }
}) {
    return (
        <div className="cards-event" id={id}>
            <div className="image event">
                <img src={imgUrl} alt={title + ' Image'} width='380px'
                    style={{
                        backgroundPosition: "center", 
                        backgroundSize: "cover"
                    }}
                />
            </div>
            <div className="content event">
                <h2 className="h2-events"> {title} </h2> <br />
                <span className="dates"> - {date} - </span> <br />
                <br />
                <span className="presents">{presentedBy}</span> <br />
                <p className="paraf events">
                    {descript}
                </p>
                <span className="location events">
                    <Icon.MapPin className="fs-12px"/> {location}
                </span>
            </div>
        </div>
    )
}