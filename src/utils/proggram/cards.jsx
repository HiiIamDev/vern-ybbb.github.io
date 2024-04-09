

export default function Cards(
    {
        children,
        content: {
            img,
            imgSize,
            title,
            leads,
            parafMini,
            urlBtn,
            paraf
        },
        tags
    }
) {
    return (
        <div className="cards">
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
                <span className="blurred">{leads}</span>
                <p>{parafMini}</p>
                <div className="gap-5"></div>
                <div className="button about">
                    <a href={urlBtn}>For More...</a>
                </div>
            </div>
        </div>
    )
}