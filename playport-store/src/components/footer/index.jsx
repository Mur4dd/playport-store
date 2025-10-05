import React from 'react'

function index() {
  return (
    <footer className='uppercase font-montserrat text-white pt-10 pb-5 text-start'>
      {/* Container */}
      <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[50%]'>
        {/* Left side */}
        <div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='md:pl-0 md:text-[19px] lg:text-[24px] xl:text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-white'>playport</h1>
            <a href="#" className='text-[12px] md:text-[16px] lg:text-[19px] xl:text-[22px]'>haqqımızda</a>
            <a href="#" className='text-[12px] md:text-[16px] lg:text-[19px] xl:text-[22px]'>kataloq</a>
            <a href="#" className='text-[12px] md:text-[16px] lg:text-[19px] xl:text-[22px]'>əlaqə</a>
          </div>
        </div>
        {/* Right side */}
        <div>
          <div className='flex flex-col gap-2.5'>
            <h1 className='md:pl-0 md:text-[19px] lg:text-[24px] xl:text-[32px] font-bold'>əlaqə</h1>
            <a href="#" className='text-[12px] md:text-[16px] lg:text-[19px] xl:text-[22px] lowercase'>playtportt@gmail.com</a>
            <a href="#" className='text-[12px] md:text-[16px] lg:text-[19px] xl:text-[22px]'>+994 55 441 50 88</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index