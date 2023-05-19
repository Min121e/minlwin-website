import React from 'react'
import c1 from '../assets/c1.jpg'


const Firstpage = () => {
  return (

      <section className='container  mx-auto'>
        <div className=' containerheight flex flex-col items-center text-white relative z-[2] mt-6 md:mt-14 lg:mt-36'>
          <div className=''> 
              <img src={c1} alt="profile-pic" className='rounded-full border-white border-4' />
          </div>
          <h1 className='text-[38px] md:text-6xl mx-2 mt-11 lg:mt-[46px] leading-[3rem] text-center'>Hello, I'm Min Lwin Kyaw</h1>
          <h4 className='text-2xl mt-[25px] leading-10 text-center'>Computer Engineer | CTO @CounselHero</h4>
        </div>
      </section>







    // <div className='container mx-auto min-h-screen relative z-[2] text-white flex flex-col items-center mt-6 md:mt-14 lg:mt-36 '>
    //   <div className=''>
        // <div className=''> 
        //     <img src={c1} alt="profile-pic" className='rounded-full border-white border-4' />
        // </div>
        // <h1 className='text-[38px] md:text-6xl mx-2 mt-11 lg:mt-[46px] leading-[3rem] text-center'>Hello, I'm Min Lwin Kyaw</h1>
        // <h4 className='text-2xl mt-[25px] leading-10 text-center'>Computer Engineer | CTO @CounselHero</h4>
    //   </div>
        
    // </div>
  )
}

export default Firstpage

// mt-6 md:mt-14 lg:mt-36