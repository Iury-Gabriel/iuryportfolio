import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Props {
    name: string
    image: string
    role: string
}   


const ClientReview = ({ name, image, role }: Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <Image src={image} alt={name} width={100} height={100} className='mx-auto mb-[2rem] rounded-full' objectFit='contain' />
        <div className='flex items-center mx-auto'>
            <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
            <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
            <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
            <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
            <FaStar className='w-[2rem] h-[2rem] text-yellow-500' />
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
        <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
        <p className='text-[16px] text-white opacity-50 w=[90%] md:w-[50%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni beatae pariatur odit sint dicta tempore consequatur, deleniti, delectus dignissimos et architecto reprehenderit velit cumque voluptatem assumenda labore atque autem. Nihil!</p>
    </div>
  )
}

export default ClientReview