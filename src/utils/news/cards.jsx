
export default function CardsNews ({
    children, 
    context: {
        id,
        imgUrl,
        title,
        writter,
        description,
        content,
        date
    }
}) {
    return (
        <div className="cards-news" id={id}>
            <div className="image-news">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="paraf-news">
                <h2>{title}</h2>
                <span className="writter-news">{writter}    </span>
                <br />
                <span className="date">{date}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}