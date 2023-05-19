import Navbar from './components/Navbar.jsx'
import Firstpage from './components/Firstpage.jsx'
import About from './components/About'
import Edu from './components/Edu'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Backtotop from './assets/Backtotop.jsx'


import FirstProject from './pages/firstproject/FirstProject.jsx'
import SecondProject from './pages/secondproject/SecondProject.jsx'
import ThirdProject from './pages/thirdproject/ThirdProject.jsx'
import FourthProject from './pages/fourthproject/FourthProject.jsx'
import FiveProject from './pages/fiveproject/FiveProject.jsx'
import SixProject from './pages/sixproject/SixProject.jsx'
import SevenProject from './pages/sevenproject/SevenProject.jsx'
import EightProject from './pages/eightproject/EightProject.jsx'
import NineProject from './pages/nineproject/NineProject.jsx'
import TenProject from './pages/tenproject/TenProject.jsx'
import ElevenProject from './pages/elevenproject/ElevenProject.jsx'
import TwelveProject from './pages/twelveproject/TwelveProject.jsx'
import ThirteenProject from './pages/thirteenproject/ThirteenProject.jsx'

import Home from './components/Home.jsx'

import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <div>
      <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route path='' element={<Home />} /> */}

          <Route path='/1project' element={<FirstProject />} />
          <Route path='/2project' element={<SecondProject />} />
          <Route path='/3project' element={<ThirdProject />} />
          <Route path='/4project' element={<FourthProject />} />
          <Route path='/5project' element={<FiveProject />} />
          <Route path='/6project' element={<SixProject />} />
          <Route path='/7project' element={<SevenProject />} />
          <Route path='/8project' element={<EightProject />} />
          <Route path='/9project' element={<NineProject />} />
          <Route path='/10project' element={<TenProject />} />
          <Route path='/11project' element={<ElevenProject />} />
          <Route path='/12project' element={<TwelveProject />} />
          <Route path='/13project' element={<ThirteenProject />} />
        </Routes>
      </div>
        

     
      {/* <div> */}
        {/* Home Page */}
        {/* <div className=''>
          <div className="min-h-screen bg-custom">
            <Navbar />
            <Firstpage />
          </div>


          <About />

          <div className='bgg-custom'>
            <Edu />
          </div>

          <Projects />

          <Footer />

          <Backtotop />
        </div> */}

        {/* First Page */}
        {/* <div className='bg-custom min-h-screen'>
          <Navbar />
          <Firstpage />
        </div> */}
      {/* </div> */}
    </BrowserRouter>
    
  );
}

export default App;
