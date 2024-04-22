
export default function CardsGallery ({
    children,
    content: {
        id, 
        imgUrl,
        title,
        miniDesc,
        date
    }
}) {    
    return (
        <div className="cards-gallery" style={{
            backgroundImage: `url(${imgUrl})`,
        }} id={id}>
            <div className="wrp">
                <div className="wrapper glr">
                    <div className="title gallery">
                        <h2>{title}</h2>
                    </div>
                    <div className="date">
                        {date}
                    </div>  
                    <div className="content gallery">
                        <p>{miniDesc}</p>
                        <div className="button about">
                            <a href={imgUrl} target="_blank" style={{
                                color: 'white'
                            }}>See Image...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}