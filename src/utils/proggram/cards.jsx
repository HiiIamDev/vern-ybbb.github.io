

export default function Cards(
    {
        children,
        content: {
            id,
            img,
            imgSize,
            title,
            leads,
            parafMini,
            urlBtn,
            paraf,
            date
        },
        tags
    }
) {
    return (
        <div className="cards act" id={id}>
            <img 
                src={img} 
                alt={title} 
                width={imgSize} 
            />
            <div className="tags">
                <span>{tags}</span>
            </div>
            <div className="paraf-cards">
                <h2>{title}</h2>
                <span className="blurred">{leads}</span><br />
                <span className="date">{date}</span>
                <p>{parafMini}</p>
                <div className="gap-5"></div>
                <div className="button about">
                    <a href={urlBtn}>For More...</a>
                </div>
            </div>
        </div>
    )
}