import { X } from 'react-feather'
import App from '../../App';



export function openNav () {
    document.getElementById("nav").style.width = "250px";
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
                <li><a href="#" className="anchor nav se">About</a></li>
                <li><a href="#" className="anchor nav se">Contact</a></li>
                <li><a href="#" className="anchor nav se">News</a></li>
                <li><a href="#" className="anchor dif">Join Us</a></li>
            </ul>
        </div>
    )
}