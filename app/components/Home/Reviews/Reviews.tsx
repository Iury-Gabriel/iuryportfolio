import React from 'react'
import Heading from '../../Helper/Heading'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary="Our Clients Reviews" headingSub="Reviews" />
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
            <ReviewSlider />
        </div>
    </div>
  )
}

export default Reviews