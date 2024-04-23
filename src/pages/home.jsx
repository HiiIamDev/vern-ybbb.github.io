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

function keys() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomValue = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomValue += characters[randomIndex];
  }

  return randomValue;
}


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
          </div>      
              <SwitchButton />    
          <Proggrams>  
          {/* <BreakY /> */}
            <div className="prog act"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='proggrams'
            > 
                <div className="text-center">
                  <h2>Proggrams Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
                <br />
                <div className="wrapper">
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
                    }} key={keys()} />
                    )))
                  }
                </div>
                <div className="center">
                  <a href="/proggrams" className="more">See More About Proggrams..</a>
                </div>
            </div>
            <div className="event"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='event'
            >
              <div className="text-center">
                  <h2>Events Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
              </div>
              <div className="wrapper">
                {
                ([...Array(4)].map(() => (
                  <CardsEvents content = {{
                    id: 'events',
                    title: 'Event',
                    date: '12/01/24',
                    imgUrl: 'https://placeholder.co/500x300',
                    location: 'Jl. Jatihandap No 1',
                    presentedBy: 'Bamboo Fest',
                    descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                  }} key={keys()}/>
                )))
              }
              </div>
              <div className="center">
                  <a href="/events" className="more">See More About Events..</a>
                </div>
            </div>
            <div className="gallery"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='gallery'
            >
            <div className="text-center">
                  <h2>Gallery Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
              <div className="wrapper">
                {([...Array(4)].map(() => (
                  <CardsGallery 
                    content = {
                      {
                        id: 'gallery',
                        imgUrl: 'https://placeholder.co/500x300',
                        title: "Gallery",
                        miniDesc: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        date: '12/02/24'
                      }
                    } key={keys()}
                  />
                )))}
              </div>
              <div className="center">
                  <a href="/gallery" className="more">See More About Gallery..</a>
                </div>
            </div>
            <div className="news"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='news'
            >
            <div className="text-center">
                  <h2>News</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
              <div className="wrapper">
                {
                  ([...Array(4)].map(() => (
                    <CardsNews context={{
                      id: 'news',
                      imgUrl: "https://placeholder.co/500x300",
                      title: 'News',
                      date: '12/01/24',
                      writter: 'John Doe',
                      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                    }} key={keys()} />  
                  )))
                }
              </div>
              <div className="center">
                  <a href="/news" className="more">See More About News..</a>
                </div>
            </div>
          </Proggrams>
        </WrapperMid>
      </div>
    </>
  )
}