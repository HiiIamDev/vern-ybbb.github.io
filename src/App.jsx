import Home from './utils/home/home'
import Menu from './utils/home/menu'
import Nav from './utils/nav/nav'
import { ResponsiveNav } from './utils/nav/responsiveNav'
import WrapperMid from './utils/wrapperGlobal'
import About from './utils/about/about'
import Proggrams from './utils/proggram/proggram'
import Cards from './utils/proggram/cards'

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

        {/* <div className="text-center alternate mt-10">
          <h2> Proggram <span className="alias">*Proggram</span></h2>
        </div> */}
        <WrapperMid color='alternate' locate='proggram'>
          <div className="title pr">
            <h1>Proggrams Us <span className="alias">*Proggram Kita</span></h1>
          </div>
          <Proggrams >
            <Cards content={{
              img : "https://placeholder.co/500x300",
              imgSize: '100%',
              title : "Lorem Ipsum",
              leads : "John Doe",
              parafMini : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!",
              urlBtn : "#button",
              paraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet tempore asperiores deserunt distinctio obcaecati sequi mollitia aperiam veritatis, odit, enim similique in provident consequuntur iusto, est a quam. Doloremque dolores nobis qui cupiditate corporis laborum quod modi sint, similique aut."
            }}/>
          </Proggrams>
        </WrapperMid> 
      </div>
    </>
  )
}