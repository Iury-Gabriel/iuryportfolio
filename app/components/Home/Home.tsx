"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Price from './Price/Price'
import Reviews from './Reviews/Reviews'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    };

    initAOS();
  }, [])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Home