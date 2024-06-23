
export default function CardsGallery ({
    content: {
        id, 
        imgUrl,
        title,
        miniDesc,
        date,
        obj
    }
}) {    
    return (
        <div className="cards-gallery"  id={id}>
            <div className="wrp">
                <div className="img">
                    <img src={imgUrl} />
                </div>
                <div className="tags">
                    <span className={obj.style}>{obj.tags}</span> {/*Green Or White Blue From Props*/}
                </div>
                <div className="wrapper glr">
                    <div className="content gallery">
                        <div className="title gallery">
                            <h2>{title}</h2>
                        </div>
                        <div className="date">
                            {date}
                        </div>  
                        <p>{miniDesc}</p>
                        <br />
                        <div className="button gallery">
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