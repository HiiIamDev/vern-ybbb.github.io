import * as Icon from 'react-feather'
import { openNav } from './responsiveNav'


export function ContentNav () {
    return (    
        <ul>
            <li><a href="#" className="anchor nav">Home</a></li>
            <li><a href="#about" className="anchor nav">About</a></li>
            <li><a href="#contact" className="anchor nav">Contact</a></li>
            <li><a href="#explore" className="anchor nav">Explore</a></li>
            <li><a href="/donate" className="anchor nav">Donate</a></li>
            <li><a href="/join" className="anchor dif">Join Us</a></li>
        </ul>
    )
}

export function Nav () {
    return (
        <>
            <nav>
                <div className="container nav">
                    <div className="logo-nav">
                        <a href="/"><img src="/assets/logo.png" alt="Logo" width={30}/></a>
                    </div>
                        <ContentNav />
                    <div className="responsive-button-navbar">
                        <a onClick={openNav}>
                            <Icon.Menu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}