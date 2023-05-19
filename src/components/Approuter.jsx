import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar.jsx'
import Firstpage from './Firstpage.jsx'
import About from './About'
import Edu from './Edu'
import Projects from './Projects'
import Footer from './Footer'
import Backtotop from '../assets/Backtotop'

const Approuter = () => {
  return (
    <BrowserRouter>
        {/* <Routes>
            <Route path='/About' element={ <About /> } />
            <Route path='/Edu' element={ <Edu /> } />
            <Route path='/projects' element={ <Projects /> } />
        </Routes> */}
    </BrowserRouter>
  )
}

export default Approuter