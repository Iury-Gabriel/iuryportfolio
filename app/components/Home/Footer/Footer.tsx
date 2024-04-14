import React from 'react'
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] border-gray-600 border-opacity-40'>
                <div>
                    <div className='text-[35px] font-semibold text-white'>
                        Iu<span className='text-red-500'>r</span>y
                    </div>
                    <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores necessitatibus facere dolores nemo doloribus natus ut. Voluptatibus porro quos expedita.</h1>
                    <p className='mt-[1.3rem] text-yellow-300 underline font-semibold'>princemods1@gmail.com</p>
                </div>
                <div className='md:mx-auto'>
                    <h1 className='text-[17px] font-semibold mb-[1.4rem] text-white'>Quick Links</h1>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>About</p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Services</p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Project</p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Contact</p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='text-[17px] font-semibold mb-[1.4rem] text-white'>Address</h1>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <BiMapPin className='w-[1rem] h-[1rem] text-yellow-400' />
                        <p className='text-[17px] font-normal text-white opacity-75'>Maranhão, Brasil</p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <BiEnvelope className='w-[1rem] h-[1rem] text-yellow-400' />
                        <p className='text-[17px] font-normal text-white opacity-75'>princemods1@gmail</p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <BiPhone className='w-[1rem] h-[1rem] text-yellow-400' />
                        <p className='text-[17px] font-normal text-white opacity-75'>+55 (99) 981036660</p>
                    </div>
                </div>
            </div>
            <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
                &#169; Copyright Iury Gabriel
            </div>
        </div>
    )
}

export default Footer