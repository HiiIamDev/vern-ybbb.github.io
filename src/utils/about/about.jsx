import * as Icon from "react-feather"


export default function About () {
    return (
        <div className="container about" id="about">
            <div className="title about">
                <h1>Yayasan Bale Budaya Bambu?</h1>
            </div>
            <div className="wrapper-line">
                <div className="vertical-line">
                    {/* NONE CONTENT HERE */}
                </div>
                <div className="horizon-line">
                    {/* NONE CONTENT HERE */}
                </div>
            </div>
            <div className="paraf about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="tagged">Magni, veritatis quidem impedit mollitia voluptatum ipsa,</span> deserunt ex saepe dicta vel omnis rem laborum atque! <a className="keyword" href="#idk">Dolor eos fugit</a> numquam debitis nemo.</p>

                <div className="button about">
                    <a href="#idk">See Full <Icon.ArrowRight className="icon"/></a>
                </div>
            </div>
        </div>
    )
}