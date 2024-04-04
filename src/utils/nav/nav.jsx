import * as Icon from 'react-feather'
import { openNav } from './responsiveNav'


export default function Nav () {
    return (
        <>
            <nav>
                <div className="container nav">
                    <div className="logo-nav">
                        <a href="/"><img src="/assets/logo.png" alt="Logo" width={30}/></a>
                    </div>
                    <ul>
                        <li><a href="#" className="anchor nav">Home</a></li>
                        <li><a href="#about" className="anchor nav">About</a></li>
                        <li><a href="#" className="anchor nav">Contact</a></li>
                        <li><a href="#" className="anchor nav">News</a></li>
                        <li><a href="#" className="anchor dif">Join Us</a></li>
                    </ul>
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