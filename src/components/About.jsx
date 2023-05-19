import React from 'react'
import { Progress } from "@material-tailwind/react";
import { skills } from '../assets/Skills'
import { languages } from '../assets/Skills'
import Backtotop from '../assets/Backtotop';


const About = () => {
  return (
    <div className='container mx-auto text-center bg-white pt-10 mb-[3rem]' id='about'>
        <h1 className='text-black text-[38px] md:max-2xl:text-6xl leading-[3rem]'>Who I am and What I can do?</h1>
        <p className='text-gray-700 pt-3 mb-30 mx-9 lg:mx-64 mb-16 '>I am a Computer Engineer and Software Developer from Myanmar based in Turkey, total of 4 years of software and web development experience. Currently working as CTO at CounselHero which is a startup located in Silicon Valley. Advanced and well trained UI/UX, Web Development, Project Management, Data Analytics, Image Processing and Interpersonal skills.</p>
        

        {/* Skills */}
        <div className='grid grid-cols-1 gap-x-9 mx-2 md:grid-cols-2 md:mx-6 lg:grid-cols-4 lg:mx-28'>
            {skills.map((skill) => (
                <div className='mb-9 mx-2' key={skill.name}>
                    <div className='flex flex-row mb-4'>
                        <p className='font-medium text-[12px] mr-1 text-left'>{skill.name}</p>
                        <span className='flex items-center text-gray-600 text-[13px]'> - {skill.percentage}%</span>
                    </div>
                    
                    <Progress className='h-[4px]' variant="gradient" color="teal" value={parseInt(skill.percentage)}/>
                </div> 
            ))}
        </div>


        {/* Language */}
        <div className=''>
            <h1 className='text-black text-[38px] md:max-2xl:text-6xl mb-20'>And I Speak</h1>
            <div className='grid grid-cols-1 gap-x-9 mx-2 md:grid-cols-2 md:mx-6 lg:grid-cols-4 lg:mx-28'>
                {languages.map((language) => (
                  <div className='mb-9' key={language.name}>
                    <div className='flex flex-row mb-4'>
                    <p className='font-medium text-[14px] mr-1 text-left'>{language.name}</p>
                    <span className='flex items-center text-gray-600 text-[13px]'> - {language.percentage}%</span>
                    </div>
                    <Progress className='h-[4px]' variant="gradient" color="teal" value={parseInt(language.percentage)}/>
                  </div>  
                ))}
            </div>
        </div>

        <Backtotop />

    </div>

    

  )
}

export default About