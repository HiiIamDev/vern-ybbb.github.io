import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React   from 'react';
import HomeDirectory from './pages/home'
import { Nav } from './utils/nav/nav'
import { ResponsiveNav } from './utils/nav/responsiveNav'


export default function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeDirectory/>}/>
        <Route path='*' element={(
          <>
          <Nav />
          <br/>
          <br/>
          <br/>
          
            <h1>Error Web Page Not Found</h1>
            
            <ResponsiveNav /> 
          </>
        )}/>
      </Routes>
    </Router>
  )
} 