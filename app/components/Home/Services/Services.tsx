import React from 'react'
import Heading from '../../Helper/Heading'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary="What can i do for clients" headingSub="Creative Services" />
        <div className='w-[80%] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard image={"/images/icon1.png"} title="Web Development" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServiceCard image={"/images/icon2.png"} title="React Development" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <ServiceCard image={"/images/icon3.png"} title="Next Js Development" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <ServiceCard image={"/images/icon4.png"} title="Node js Development" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="800">
                <ServiceCard image={"/images/icon5.png"} title="Frontend Development" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                <ServiceCard image={"/images/icon2.png"} title="Backend Development" />
            </div>
        </div>
    </div>
  )
}

export default Services