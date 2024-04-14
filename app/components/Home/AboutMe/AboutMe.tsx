import React from 'react'
import Heading from '../../Helper/Heading'
import AboutInfoBox from './AboutInfoBox'
import AboutImage from '@/public/images/about.svg'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'>
        <Heading headingPrimary="I Can Build Your Dream Website" headingSub="About Me" />
        <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[4rem]'>
            <div >
                <h1 className='mb-[1.4rem] text-[27px] font-semibold text-orange-500'>Personal Infos:</h1>
                <AboutInfoBox text1="First Name: Iury" text2="Last Name: Gabriel" />
                <AboutInfoBox text1="Address: Maranhão, Brasil" text2="Phone: +55 (99) 981036660" />
                <AboutInfoBox text1="Age: 16" text2="Email: princemods1@gmail.com" />
                <AboutInfoBox text1="Freelance: Available" text2="Languages: Portuguese, English" />
                <AboutInfoBox text1="Country: Brasil" text2="Role: Developer" />
            </div>
            <Image data-aos="zoom-in" data-aos-anchor-placement="top-center" src={AboutImage} alt='about' className='mx-auto' />
        </div>
    </div>
  )
}

export default AboutMe