import Home from './utils/home/home'
import Menu from './utils/home/menu'
import Nav from './utils/nav/nav'
import { ResponsiveNav } from './utils/nav/responsiveNav'
import WrapperMid from './utils/wrapperGlobal'
import About from './utils/about/about'
import Proggrams from './utils/proggram/proggram'
import Cards from './utils/proggram/cards'
import WrapperFullScreen from './utils/wrapperVh'

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
          <h2> About Us</h2>
        </div>
        <WrapperMid color='background' locate='about'>
          <WrapperFullScreen>
            <About />
          </WrapperFullScreen>
        </WrapperMid>

        {/* <div className="text-center alternate mt-10">
          <h2> Proggram <span className="alias">*Proggram</span></h2>
        </div> */}
        <WrapperMid color='alternate' locate='proggram'>
          <div className="title pr">
            <br />
            <h1>Proggrams & Event Us</h1>
          </div>
          <div className="paraf-pr">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus maxime harum a?</p>
          </div>
          <Proggrams >
            {/* Looping For Temporrary */}
            {[...Array(6)].map(() => (
                <Cards content={{
                  img : "https://placeholder.co/500x300",
                  imgSize: '100%',
                  title : "Lorem Ipsum",
                  leads : "John Doe",
                  parafMini : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!",
                  urlBtn : "#button",
                  paraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet tempore asperiores deserunt distinctio obcaecati sequi mollitia aperiam veritatis, odit, enim similique in provident consequuntur iusto, est a quam. Doloremque dolores nobis qui cupiditate corporis laborum quod modi sint, similique aut."
                }}/>
              ))}
              
          </Proggrams>
          <div className="button mdf items-center">
              <a href="/program-and-contacts">Show More..</a>
          </div>
          <br />
          <br />
        </WrapperMid> 
      </div>
    </>
  )
}