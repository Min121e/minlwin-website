import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';

import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.jpg'
import pic9 from './pic9.jpg'
import pic10 from './pic10.jpg'
import pic11 from './pic11.jpg'

import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

const SecondProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative container z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-left text-4xl lg:text-5xl mb-6'>Final Year Project (Transportation Management System)</h2>
                <p className='text-[16px] text-left font-medium pb-8'>June 2020 - created by Min Lwin Kyaw, Hammud El Hammud</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 '>
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Final Year Project (Transportation Management System)</h2>
            <div className='flex gap-3 text-green-500 mt-3'>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Flutter</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Dart</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>MySQL</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Python</span>
                </Link>
            </div>


            <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Transportation Management System</li>
                    <li>Team Members : Min Lwin Kyaw, Hammud EL HAMMUD</li>
                    <li>Duration : 9 Months</li>
                    <li>Software for UI : Figma</li>
                    <li>Programming Languages & Frameworks : Python, Django, MySQL, Flutter, Dart</li>
                    <li>Platforms : Web (For Transportation Owners), Mobile (For Users)</li>
                    <li>Links : <Link to='https://www.figma.com/file/amFRmSbLYJv0OzAU83kzaI/Mobile-TMS-Design?node-id=0%3A1' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Figma</Link>, <Link to='#' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Full Thesis</Link></li>
                </ul>
            </div>

            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-3'>Abstract</h1>
                <p className='text-justify text-gray-600'>In our project, we mainly focus on people who use public and private transportation to give free, reliable, and fast service to track and taking transportation. There are two section in our project, first one is for government or private transportation owners and second is for customers who use their service. Whoever want to use our program, if they have enough data of Transportation in one city, they can add or update these data inside our system, customers in that city can easily use that benefit immediately. For ownersu2019 side, main functionalities are adding, maintaining transportation, and notifying newest information for clients. For customers side, finding transportation, checking transportation, finding shortest path to their destination by provided data. For developer side, creating reliable and fast algorithm to calculate path and storing and maintaining data.</p>
            </div>

            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-3'>The Goal of the Project</h1>
                <p className='text-justify text-gray-600'>Our main goal is to provider customer to track transportation, search route, save locations and make payment for transportation and top-up money all in one. But sadly, we could not finish all of them. Only provide tracking transportation, search route, and save locations. Let us think about it if you could finish all the features that we wish for. Let us say our system is using in more than one city and almost all of them are big cities and a lot of people use public and private transportation in their daily basic. We all have payment problem when we went from one to city to another, first city use one system and your city use another system, so, when you arrive to another city, you have to make another account to use transportation system. In some cities, without opening new account (means card), we cannot use transportation. At that time, that is big deal. You came another city for your important job, you must go and do your business as soon as possible but because of some different companies providing same service, you couldnu2019t use transportation and have to send more money and time for that. But some city provides some machine to create a new card, but these cards are still more expensive than normal card and if you are a student, these card price for using transportation is way more expansive than you normally pay. If we all agree to use same service with one company or as third-party, we can solve this problem. Let us say our system is using in Istanbul, Bursa and Ankara. Someone from Bursa must go to Istanbul and he/she uses our system, when he/she arrive to Istanbul, he/she can use Istanbul public and private transportation as he/she wanted. For topping-up the money, it works the same way. There will be no more extra steps to do. Same thing for Ankara. All we try to do is giving service to customer and company as intersection. At the same time, customers can still search transportations, 11search route, look transportation data and still check notification that was sent from their current city transportation provider. All these things go in one App.</p>
            </div>

            <div className='mb-3'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-3'>Mobile Pages</h1>
                <p>Please Click Image for More Information About Page</p>
            </div>

            
                <div className='mb-16'>
                    <div className='grid gap-2 md:grid-cols-3 md:gap-x-7 lg:grid-cols-6 mb-2'>
                        <img src={pic2} alt="pic1" />
                        <img src={pic1} alt="pic1" />
                        <img src={pic3} alt="pic1" />
                        <img src={pic4} alt="pic1" />
                        <img src={pic5} alt="pic1" />
                        <img src={pic6} alt="pic1" />
                    </div>
                    
                    <div className='grid lg:pl-40 gap-2 md:grid-cols-3 md:gap-x-7 lg:grid-cols-6'>
                        <img src={pic7} alt="pic1" />
                        <img src={pic8} alt="pic1" />
                        <img src={pic9} alt="pic1" />
                        <img src={pic10} alt="pic1" />
                        <img src={pic11} alt="pic1" />                       
                    </div>
                    {/* <img src={pic7} alt="pic1" />
                    <img src={pic8} alt="pic1" />
                    <img src={pic9} alt="pic1" />
                    <img src={pic10} alt="pic1" />
                    <img src={pic11} alt="pic1" /> */}
                </div>
            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default SecondProject