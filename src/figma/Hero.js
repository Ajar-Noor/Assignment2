import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='w-[1372px] h-[608px] shrink-0 left-[68px] top-[116px] relative'>
        <div className='not-italic text-[40px] leading-[normal] font-bold text-[#000] left-[50px]
         top-[120px] absolute [Averta Demo PE Cutted Demo]'>A Digital Product Agency</div>

        <div className='w-[471px] h-[78px] not-italic text-[16px] leading-[25.6px] font-[400px] text-[#565656] left-[50px]
         top-[200px] absolute [Averta Demo PE Cutted Demo]'>Leading digital agency with solid 
         design and development expertise. We build readymade websites,  mobile applications, and elaborate
          online business services.</div>

          <div className='w-404px h-154px shrink-0 top-[350px] absolute'>
                <img src='./images/Dot Ornament.svg' alt='img'></img>
                </div>

          <div className='w-[215] h-[65] inline-flex pt-[20px] pb-[20px] pr-[40px] pl-[40px] justify-center 
          items-center gap-10 rounded-[60px] bg-[#2639ED] text-[#FFFFFF] top-[310px] left-[50px] absolute'>
            <button>Contact Now</button>
            </div>

            <div className='w-[129px] h-[129] shrink-0 fill-[#DAE9FF] left-[550px] absolute '>
                <img src='.\images\Ellipse 85.svg' alt='ellipse'></img>
                </div>

                <div className='w-178px h-178px shrink-0 rounded-[0px 0px 100px 0px] top-[422px] left-[1100px] absolute'>
                    <img src='.\images\Rectangle 23.svg' alt='rectangle'></img>
                </div>

                <div className='w-[754px] h-[512px] shrink-0 rounded-[0px 0px 0px 200px] left-[612px] absolute'>
                    <img src='.\images\image 8.svg' alt='image8'></img>
                </div>

      </div>
    </>
  )
}

export default Hero
