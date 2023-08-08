import React, { forwardRef } from 'react'

const Client = forwardRef ((props,ref) => {
  return (
    <>
      <div className='w-[1199.55px] h-[124px] top-[764px] left-[120px] absolute' ref={ref}> 

        <div className='text-[40px] not-italic [Averta Demo PE Cutted Demo] text-[#000] font-bold 
        leading-[normal]'><h1>Our Client</h1></div>
      </div>

      <div className='h-[58px] w-[336px] text-[16px] not-italic [Averta Demo PE Cutted Demo] text-[#757575] font-[400px] 
        leading-[160%] top-[830px] left-[120px] absolute'>
        <p>Several selected clients, who already believe in our service.</p>
        </div>

        <div className='h-[49.377px] w-[150.483px] shrink-0 top-[820px] left-[516px] absolute'>
            <img src='.\images\Google Logo.svg' alt='google'></img>
            </div>

            <div className='h-[52.141px] w-[166.409px] shrink-0 top-[818px] left-[726px] absolute'>
            <img src='.\images\Airbnb Logo.svg' alt='airnb'></img>
            </div>

            <div className='h-[27.735px w-[166.409px] shrink-0 top-[830px] left-[952px] absolute'>
            <img src='.\images\Uber Eats Logo.svg' alt='uber'></img>
            </div>

            <div className='h-[42.605px] w-[141.547px] shrink-0 top-[835px] left-[1178px] absolute'>
            <img src='.\images\Amazon Logo.svg' alt='amazon'></img>
            </div>
    </>
  )
}
)

export default Client
