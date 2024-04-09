
export default function CardsNews ({
    children, 
    context: {
        imgUrl,
        title,
        writter,
        description,
        content
    }
}) {
    return (
        <div className="cards-news">
            <div className="image-news">
                <img src={imgUrl} alt={title} 
                width='100%'/>
            </div>
            <div className="paraf-news">
                <h2>{title}</h2>
                <span className="writter-news">{writter}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}