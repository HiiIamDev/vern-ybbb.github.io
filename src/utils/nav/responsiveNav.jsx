import { X } from 'react-feather'
import App from '../../App';

export function openNav () {
    document.getElementById("nav").style.width = "250px";
    function checkerInnerWidth () {
        if (window.innerWidth >= 850) {
            document.getElementById('nav').style.width = '0'
        }
    }

    window.addEventListener('resize', checkerInnerWidth)
}

function closeNav () {
    document.getElementById("nav").style.width = "0";
}


export function ResponsiveNav () {
    return (
        <div className="wrapper-res-nav" id='nav'>
            <div className="nav-home">
                <a href="/"><img src="/assets/logo.png" alt="Logo" width={30}/></a>
                <a onClick={closeNav} className='x'><X /></a>
            </div>
            <ul>
                <li><a href="#" className="anchor nav se">Home</a></li>
                <li><a href="#about" className="anchor nav se">About</a></li>
                <li><a href="#contact" className="anchor nav se">Contact</a></li>
                <li><a href="#news" className="anchor nav se">News</a></li>
                <li><a href="#proggram" className="anchor nav se">Proggram</a></li>
                <li><a href="#gallery" className="anchor nav se">Gallery</a></li>
                <li><a href="/donate" className="anchor nav se">Donate</a></li>
                <li><a href="#event" className="anchor nav se">Event</a></li>
                <li><a href="/join" className="anchor dif">Join Us</a></li>
            </ul>
        </div>
    )
}