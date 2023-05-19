import React from 'react'
import { BrowserRouter, Router, Routes, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { projectpics } from '../assets/Skills.js'
import FirstProject from '../pages/firstproject/FirstProject'

const Projects = () => {
  return (

    
    <section className='pt-9 pb-12 px-4 md:px-10 lg:px-28' id="projects">
        <div className='text-center'>
            <h1 className='text-black text-[38px] md:max-2xl:text-6xl mt-'>Projects</h1>
            <p className='text-gray-600 pt-4'>Some of the projects are not shown in the list because of the project's privacy.</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-11 mt-14">
        {projectpics.map((skill) => (
          <div>
            <Link to={skill.pLink} key={projectpics.title} className='text-center'>
              <img src={skill.image} alt={skill.title} className='border shadow-xl' />
              <p className='text-[#0ea8cf] hover:text-green-500 duration-300 ease pt-2'>{skill.title}</p>
            </Link>
          </div>
        ))}
        </div>
    </section>
    
  )
}

            // <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-11 mt-14">
            // {projectpics.map((skill) => (
            //   <div key={projectpics.p1} className='text-center'>
            //     <img src={skill.image} alt={skill.title} className='border shadow-xl' />
            //     <p className='text-[#0ea8cf] hover:text-green-500 duration-300 ease pt-2'>{skill.title}</p>
            //   </div>
            // ))}
            // </div>

export default Projects