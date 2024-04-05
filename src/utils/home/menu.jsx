
export default function Menu () {
    return (
        <div className="menu-wrapper">
            <div className="title">
                <h1>Yayasan Bale Budaya Bambu</h1>
            </div>
            <div className="paraf">
                <p>Lorem ipsum dolor sit amet <span className="taggeds">consectetur adipisicing elit.</span> Nisi, 
                aspernatur nesciunt magnam ex vitae labore 
                    omnis consequatur delectus laudantium deleniti consectetur earum aperiam?</p>
            </div>

            <div className="paraf-ref">
                 <p>Lorem ipsum dolor sit amet <span className="taggeds">consectetur adipisicing elit.</span> Nisi, 
                aspernatur nesciunt magnam ex vitae labore </p>
            </div>
            <div className="list-menu">
                <a href="#proggram" className="li-menu">Proggram</a>
                <a href="#" className="li-menu">Gallery</a>
                <a href="#" className="li-menu">Donate</a>
                <a href="#" className="li-menu">Event</a>
                <a href="#" className="li-menu">Join Us</a>
            </div>
        </div>
    )
}