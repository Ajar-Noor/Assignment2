import React from 'react'

const Navbar = () => {
  return (
   
    <>
          <div className='w-[1200px] outline-1 h-[34px] shrink-0 top-[42px] left-[120px] flex absolute'>
            <div className='[Proxima Nova] font-bold text-[27.5px] leading-[33.07px] text-[#000000]'>A+</div> 
            <div className='[Averta Demo PE Cutted] font-normal text-[27.15px] leading-[33.55px] text-[#000]'> Studio</div>
            <div className='left-[500px] absolute'> 
              <button className=' font-semibold [Averta Demo PE Cutted] text-[16px] tracking-[0.16px] leading-[normal] relative'>Home</button>
              <button className='font-semibold text-[16px] leading-[normal] tracking-[0.16px] [Averta Demo PE Cutted ]  ml-[60px] relative'>What We do</button>
              <button className='font-semibold text-[16px] leading-[normal] tracking-[0.16px] [Averta Demo PE Cutted ]  ml-[60px] relative'>Service</button>
              <button className='font-semibold text-[16px] leading-[normal] tracking-[0.16px] [Averta Demo PE Cutted ]  ml-[60px] relative'>Project</button>
              <button className='font-semibold text-[16px] leading-[normal] tracking-[0.16px] [Averta Demo PE Cutted ]  ml-[60px] relative'>Blog</button>
              <button className='font-semibold text-[16px] leading-[normal] tracking-[0.16px] [Averta Demo PE Cutted ]  ml-[60px] relative'>Contact</button>
               </div>
            
            </div>
    </>
  )
}

export default Navbar;
