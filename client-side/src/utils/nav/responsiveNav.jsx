import { X } from 'react-feather'
import App from '../../App';
import { ContentNav } from './nav'

export function openNav () {
    const nav = document.getElementById("nav")

    nav.style.width = "250px";
    function checkerInnerWidth () {
        if (window.innerWidth >= 850) {
            document.getElementById('nav').style.width = '0'
        }
    }

    window.addEventListener('resize', checkerInnerWidth)
}

export function closeNav () {
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
                <ContentNav />
            </ul>
        </div>
    )
}