import React from 'react'
import Heading from '../../Helper/Heading'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary='Explor My Skills' headingSub='My Skills' />
        <div className='grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                <SkillCard image='/images/react.svg' percent='70' title="React" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <SkillCard image='/images/css.svg' percent='85' title="CSS" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <SkillCard image='/images/js.svg' percent='87' title="JavaScript" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <SkillCard image='/images/ts.svg' percent='79' title="TypeScript" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                <SkillCard image='/images/html.svg' percent='96' title="HTML" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                <SkillCard image='/images/node.svg' percent='66' title="Node Js" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                <SkillCard image='/images/mongo.svg' percent='74' title="MongoDB" />
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                <SkillCard image='/images/python.svg' percent='50' title="Python" />
            </div>
        </div>
    </div>
  )
}

export default Skills