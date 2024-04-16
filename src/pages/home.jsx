import Home from '../utils/home/home'
import Menu from '../utils/home/menu'
import { Nav } from '../utils/nav/nav'
import { ResponsiveNav } from '../utils/nav/responsiveNav'
import WrapperMid from '../utils/wrapperGlobal'
import About from '../utils/about/about'
import Proggrams from '../utils/proggram/proggram'
import Cards from '../utils/proggram/cards'
import WrapperFullScreen from '../utils/wrapperVh'
import CardsNews from '../utils/news/cards'
import SwitchButton from '../utils/switch'
import CardsEvents from '../utils/event/cards'
import CardsGallery from '../utils/gallery/cards'
import BreakY from '../utils/break'


export default function HomeDirectory () {
  const checkerExp = (buttons) => {
    console.log()
  }

  return (
    <>
      <div id="home">
        <Nav /> 
        <ResponsiveNav />
          {/* <div className="skipper">
            <br />
            <br />
          </div> */}

        <Home>
          <Menu />
        </Home>

        <div className="text-center mt-10">
          <h2> About Us</h2>
        </div>
        <WrapperMid color='background' locate='about'>
          <WrapperFullScreen locate='animate'>
            <About />
          </WrapperFullScreen>
        </WrapperMid>
        {/* anggota */}
        <WrapperMid color='alternate' locate='explore'>
        <br />
          <div className="heading explore">
            <div className="title pr">
              
              <h1 id='proggram'>Explore Time!</h1>
            </div>
            <div className="paraf-pr">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus maxime harum a?</p>
            </div>
            <SwitchButton />
          </div>
          

          <Proggrams key='proggrams'>  
          <BreakY />
            <div className="prog act"
              style={
                {
                  width: '100%',
                  height: '100vh'
                }
              } id='proggrams'
            >
              <div className="container">
              <div className="wrap">
              {
                ([...Array(4)].map(() => (
                  <Cards content={{
                      id: 'programs',
                      img : "https://placeholder.co/500x300",
                      imgSize: '100%',
                      title : "Proggrams",
                      date: '12/01/24',
                      leads : "John Doe",
                      parafMini : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!",
                      urlBtn : "#button",
                      paraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet tempore asperiores deserunt distinctio obcaecati sequi mollitia aperiam veritatis, odit, enim similique in provident consequuntur iusto, est a quam. Doloremque dolores nobis qui cupiditate corporis laborum quod modi sint, similique aut."
                    }} tags />
                )))
              }
              </div>
              </div>
            </div>
            <div className="event"
              style={
                {
                  width: '100%',
                  height: '100vh'
                }
              } id='event'
            >
              <CardsEvents content = {{
                  id: 'events',
                  title: 'Event',
                  date: '12/01/24',
                  imgUrl: 'https://placeholder.co/500x300',
                  location: 'Jl. Jatihandap No 1',
                  presentedBy: 'Bamboo Fest',
                  descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                }} />
              
            </div>
            <div className="gallery"
              style={
                {
                  width: '100%',
                  height: '100vh'
                }
              } id='gallery'
            >
              <CardsGallery content = {{
                  id: 'gallery',
                  imgUrl: 'https://placeholder.co/500x500',
                  title: 'Gallery',
                  date: '12/01/24',
                  miniDesc: 'lorem ipsum dolor sit amet consectetur adipisicing elit'
                }}/> 
            </div>
            <div className="news"
              style={
                {
                  width: '100%',
                  height: '100vh'
                }
              } id='news'
            >
              <CardsNews context={{
                  id: 'news',
                  imgUrl: "https://placeholder.co/500x300",
                  title: 'News',
                  date: '12/01/24',
                  writter: 'John Doe',
                  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                }} />  
            </div>
          </Proggrams>
        </WrapperMid>
      </div>
    </>
  )
}