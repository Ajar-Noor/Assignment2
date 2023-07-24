import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Client from './Client'
import Section from './Section'
import Great from './Great'
import Happyclient from './Happyclient'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Figma = () => {
  return (
    <>
      <div className='w-[1440px] h-[4102px] mt-0 bg-[#FEFEFE]'>
      <Navbar />
      <Hero />
      <Client />
      <Section />
      <Great />
      <Happyclient />
      <Newsletter />
      <Footer />
      </div>
    </>
  )
}

export default Figma
