import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React   from 'react';
import HomeDirectory from './pages/home'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeDirectory/>}/>
        <Route path='*' element={(
          <h1>Error Web Page Not Found</h1>
        )}/>
      </Routes>
    </Router>
  )
} 