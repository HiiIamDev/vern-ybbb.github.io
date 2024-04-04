import Home from './utils/home/home'
import Menu from './utils/home/menu'
import Nav from './utils/nav/nav'
import { ResponsiveNav } from './utils/nav/responsiveNav'
import * as Icon from 'react-feather'
import WrapperMid from './utils/wrapperGlobal'
import About from './utils/about/about'

export default function App () {
  return (
    <>
      <div id="home">
        <Nav /> 
        <ResponsiveNav />
        <br />
        <br />

        <Home>
          <Menu />
        </Home>

        <div className="text-center mt-10">
          <h2> About Us <span className="alias">*Tentang Kami</span></h2>
        </div>
        <WrapperMid color='background' locate='about'>
          <About />
        </WrapperMid>

        <div className="text-center alternate mt-10">
          <h2> Proggram <span className="alias">*Proggram</span></h2>
        </div>
        <WrapperMid color='alternate' locate='proggram'>
          <div className="wrapper-wip">
            <h1>Hello World! </h1>
            <span className="alias">Work In Proggres :)</span>
          </div>
        </WrapperMid> 
      </div>
    </>
  )
}