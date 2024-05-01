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
import React, { useState } from 'react'

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
  let [component, setComponent] = useState(null)

  if (component == null)  {
    setComponent('button1')
  }

  async function componentsAsync (comp) {
    component = comp
    console.log(component)  
  }

  // componentsAsync('button1')

  return (
    <>
      <div id="home">
        <Nav /> 
        <ResponsiveNav />

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
              <SwitchButton lastComponent={componentsAsync}/>    
          <Proggrams>  
             {component === 'button1' && <p>Proggram</p>}
             {component === 'button2' && <p>Event</p>}
             {component === 'button3' && <p>Gallery</p>}
             {component === 'button4' && <p>News</p>}
          </Proggrams>
        </WrapperMid>
      </div>
    </>
  )
}

            