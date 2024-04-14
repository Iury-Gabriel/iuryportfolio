import React from 'react'
import Heading from '../../Helper/Heading'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='text-center'>
            <Heading headingPrimary="My Best Projects" headingSub="Recent Works" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ProjectCard title="E-commerce Website" tech1="React Js" tech2="Next Js" tech3="Tailwind" tech4="TypeScript" image="/images/p1.jpg" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ProjectCard title="Portfolio Website" tech1="React Js" tech2="Next Js" tech3="Tailwind" tech4="TypeScript" image="/images/p2.jpg" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ProjectCard title="Fullstack Food Delivery Webapp" tech1="React Js" tech2="Next Js" tech3="Tailwind" tech4="TypeScript" image="/images/p3.jpg" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ProjectCard title="Travel Website" tech1="React Js" tech2="Next Js" tech3="Tailwind" tech4="TypeScript" image="/images/p4.jpg" />
        </div>
    </div>
  )
}

export default Project