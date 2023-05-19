import React from 'react'

const Footer = () => {
  return (
    <section className='pt-12 px-4 md:px-10 lg:px-28 bg-[#222222]'>

        {/* Social media links */}
        <div className='container mx-auto flex text-gray-400 justify-center items-center gap-4  text-[18px]'>
            
                <a href="https://www.facebook.com/MinLwink/" className='rounded-full w-[42px] h-[42px] border border-gray-800 hover:text-green-500 hover:border-green-500 duration-300 ease flex items-center justify-center'><i className="fa-brands fa-facebook-f"></i></a>
                
                <a href="https://www.instagram.com/min.lwin.kyaw/" className='rounded-full w-[42px] h-[42px] border border-gray-800 hover:text-green-500 hover:border-green-500 duration-300 ease flex items-center justify-center'><i className="fa-brands fa-instagram"></i></a>
            
            
                <a href="https://www.linkedin.com/in/minLwinKyaw" className='rounded-full w-[42px] h-[42px] border border-gray-800 hover:text-green-500 hover:border-green-500 duration-300 ease flex items-center justify-center'><i className="fa-brands fa-linkedin-in"></i></a>
            
            
                <a href="https://github.com/Minlwinkyaw307" className='rounded-full w-[42px] h-[42px] border border-gray-800 hover:text-green-500 hover:border-green-500 duration-300 ease flex items-center justify-center'><i className="fa-brands fa-github"></i></a>
            
        </div>

        {/* Copyright */}
        <div className='text-center border-t border-[rgba(250,250,250,.32)] mt-10 pt-10'>
            <p className='text-gray-400 text-[16px]'>
            © 2023 Min Lwin Kyaw. All rights reserved
            </p>
        </div>

        <p className='text-gray-500 text-[13px] pt-10 pb-4'>Min Thant Oo © Copyright Min Lwin Kyaw 2023.</p>
    </section >
  )
}

export default Footer