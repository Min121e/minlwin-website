import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Firstpage from '../components/Firstpage.jsx'
import About from '../components/About'
import Edu from '../components/Edu'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Backtotop from '../assets/Backtotop.jsx'

const Home = () => {
  return (
  
    <div className=''>
      <div className=''>
          <div className="h-screen first-bg-custom">
            <Navbar />
            <Firstpage />
          </div>

             <About />

          <div className='second-bg-custom' id='experience'>
            <Edu />
          </div>

          <Projects />

          <Footer />

          <Backtotop />
        </div>
      </div>
          
  )
}

export default Home