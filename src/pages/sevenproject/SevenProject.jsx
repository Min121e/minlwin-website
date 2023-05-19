import React from 'react'
import { Link } from 'react-scroll';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import pic7 from './pic7.png'
import pic8 from './pic8.png'
import pic9 from './pic9.png'
import pic10 from './pic10.png'
import pic11 from './pic11.png'

const SevenProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Online Food Order For Restaurant</h2>
                <p className='text-[16px] font-medium pb-8'>December 2019 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 '>
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Online Food Order For Restaurant</h2>
            <div className='flex gap-3 text-green-500 mt-3'>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>PHP</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Symfony</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>MySQL</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>JavaScript</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>HTML</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <span>CSS</span>
                </Link>
            </div>


            <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Online Food Order For Restaurant</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 3 Months</li>
                    <li>Programming Languages & Frameworks : Symfony, PHP, HTML, JavaScript, MySQL</li>
                    <li>Platforms : Web</li>
                    <li>Links : <Link to='https://github.com/Minlwinkyaw307/st_1_project' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>GitHub(Source Code)</Link></li>
                </ul>
            </div>

            <div className='mb-5'>
                <p className='text-justify text-gray-600'>It is a web application restaurant owner to publish their foods, drinks, desserts, and others food related things on their website and allow user to order these foods and drink by using this website. Included CMS for customers and restaurantu2019s owners. Project was done by using Symfony, php, HTML, CSS, and JavaScript for Computer Special Topic 1 Course.<br />Because of course project, there are some limitation to follow to get perfect point.<br />Templates are downloaded from <a href="https://colorlib.com/" className='font-semibold text-black'>Colorlib</a></p>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic7} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>Home Page - 1</h1>
                    <p className='text-gray-600 text-justify'>Because of course limitation, in home page it must have slider which is created from the admin dashboard as admin wished, few recently added food list and some content for website as most of the website usually does.<br />In menu, there are home, about us, preference, contact us, order meals (to find all of the foods available in restaurant), sign in and sign up pages.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic11} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>Home Page - 2</h1>
                    <p className='text-gray-600 text-justify'>IIn this part of the home page, it list few foods with filter and sort option to find latest food available in restaurant.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic9} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>Meal Detail Page</h1>
                    <p className='text-gray-600 text-justify'>When user select any of the meal, it will route to meal detail page. Meal detail can be fully customizable in admin dashboard by admin. In picture, wrote some dummy text.<br />In detail page, it includes images of meal using slider and content of the meal, price, order button and comment section for current meal with rating(used select option because of course limitation).<br />User can order the food with desire amount and it will add to the cart if user clicks on add to cart button and if user clicks on order button it will route to order page to confirm order and make purchase.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic1} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>Cart List</h1>
                    <p className='text-gray-600 text-justify'>In the cart list page, it will show list of the foods user added to the cart and user can order individual item from the cart or all of them at the same time. There is delete option to remove items from the cart as well.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic3} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>Confirm Order</h1>
                    <p className='text-gray-600 text-justify'>If user make order from meal detail page or when user make order from cart it will redirect to this page to confirm the order. In this page, it will show list of food, amount and total amount to confirm.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <img src={pic4} alt="pic1" />
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>User Profile</h1>
                    <p className='text-gray-600 text-justify'>User profile is a place user can add, delete, and update his or her information like image, name, address, and password.</p>
                </div>
            </div>

            <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                <div className='max-w-4xl col-span-2'>
                    <div className='lg:grid grid-cols-2 gap-4'>
                        <img src={pic8} alt="pic1" className='pb-4 lg:pb-0'/>
                        <img src={pic10} alt="pic1" className='pb-4 lg:pb-0' />
                        <img src={pic2} alt="pic1" className='pb-4 lg:pb-0' />
                        <img src={pic1} alt="pic1" className='pb-4 lg:pb-0' />
                        <img src={pic5} alt="pic1" />   
                    </div>
                    
                </div>
                <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                    <h1 className='font-semibold'>User Profile</h1>
                    <p className='text-gray-600 text-justify'>User profile is a place user can add, delete, and update his or her information like image, name, address, and password.</p>
                </div>
            </div>

        

            
                
            
        </div>
    </section>
    
        <Footer />
        <Backtotop />
    </section>
  )
}

export default SevenProject