import React,{useEffect,useRef} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Client from './Client'
import Section from './Section'
import Great from './Great'
import Happyclient from './Happyclient'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Figma = () => {
  
  const scrolltoFooter=useRef(null);
  const scrollclient=useRef(null)

  const client=()=>{
    scrollclient.current.scrollIntoView()
  }

  useEffect(()=>{
client();
  })

  useEffect(()=>{
   if(scrolltoFooter.current){
    // scrolltoFooter.current.scrollIntoView()
     window.scrollTo(0,document.body.scrollHeight)
   }
  },[])

  return (
    <>
      <div className='w-[1440px] h-[4102px] mt-0 bg-[#FEFEFE]'>
      <Navbar />
      <Hero />
      <Client/>
      <Section ref={scrollclient}/>
      <Great />
      <Happyclient />
      <Newsletter />
      <Footer ref={scrolltoFooter} client={client}/>
      </div>
    </>
  )
}

export default Figma
