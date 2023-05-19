import React from 'react'

const Edu = () => {
  return (
    <section className='container mx-auto pt-9 pb-12 px-4 md:px-10 lg:px-28' id='experience'>
        <div className='flex flex-col lg:flex-row justify-between lg:gap-x-24' >
            {/* Left Side */}
            <div>
                <h1 className='text-white text-[38px] md:max-2xl:text-6xl'>Experiences</h1>

                {/* 1st Experience */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                        <div>
                            <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2021 April - Now</span>  
                        </div>
                        <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Chief Technical Officer</h1>
                        <p className='text-gray-400 font-medium pt-4'>CounselHero is educational tool that helps students to see their possible better future while counselor can counsel them efficiently. I am executing these incredible ideas become real product that schools, students and counselors can access.</p>
                </div>
            
                {/* 2nd Experience */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2018 - 2021</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Full-Time Freelancer</h1>
                    <p className='text-gray-400 font-medium pt-4'>Building static, dynamic websites, web application, games and mobile applications since 2018 for clients.</p>
                </div>

                {/* 3rd Experience */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2020 July - 2021 March</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Limonist Digital Solutions - Full Stack Developer</h1>
                    <p className='text-gray-400 font-medium pt-4'>Worked on both front-end and back-end for different websites and web applications using Laravel, PHP, Vuejs, JavaScript and MySQL. At the start of job, worked on image processing and created virtual make-up API using Django, Python and OpenCV..</p>
                </div>

                {/* 4th Experience */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2019 June - 2019 August</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>TrioWorx İş Çözümleri - Intern</h1>
                    <p className='text-gray-400 font-medium pt-4'>Worked on automating document management system by using image processing with over 95% accuracy using opencv(python) and django.</p>
                </div>
            </div>

            {/* Right side */}
            <div>
                <h1 className='text-white text-[38px] md:max-2xl:text-6xl'>Education</h1>

                {/* 1st Education */}
                
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2017 - 2020</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Bachelor of Computer Engineering, Karabuk University</h1>
                    <p className='text-gray-400 font-medium pt-4'>Studied Computer Engineering, graduated within 3.5 years with 3.55 out of 4.0 GPA.</p>
                </div>

                {/* 2nd Education */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2019 February- 2019 June</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Bachelor of Computer Engineering, Vilnius Gediminas Technical University</h1>
                    <p className='text-gray-400 font-medium pt-4'>Studied Computer Engineering as Erasmus student for 5 months (one semester) in Information System and Electrical and Electronic Engineering. GPA 9.67 out of 10.0</p>
                </div>

                {/* 3rd Education */}
                <div className='flex flex-col mt-12 pb-8 mb-8 border-b border-[rgba(250,250,250,.32)]'>
                    <div>
                        <span className='text-white text-[14px] md:max-2xl:text-6xl border-2 border-[#35a22c] p-1.5 font-medium'>2021 April - Now</span>  
                    </div>
                    <h1 className='text-white text-[20px] mt-6 md:max-2xl:text-6xl'>Certificated in PhotoShop, AMD Myanmar</h1>
                    <p className='text-gray-400 font-medium pt-4'>Certified in PhotoShop by AMD Myanmar, my expertise in image editing, digital design, and visual content enhancement is validated. Proficient in utilizing this software, I am equipped for diverse creative projects.It showcases in utilizing for projects.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Edu