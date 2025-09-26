import React from 'react'

function index() {
  return (
    <div className='bg-blue-800 uppercase text-white font-montserrat flex flex-col gap-7 pt-8 pb-8 pl-2.5 pr-2.5'>
        <div className='text-center flex flex-col gap-2.5 md:text-[14px] lg:text-[18px] xl:text-[20px]'>
            <h1>üzv olun</h1>
            <p className='opacity-80'>sizdə son yeniliklərdən xəbərdar olmaq üçün email ünvanınız ilə bizə üzv olun</p>
        </div>
        <div className='flex justify-center'>
            <div className='border-white border-2 rounded-[5px] flex justify-between'>
                <input type="email" name="email" id="email" className='outline-0 p-1 md:w-[400px]'/>
                <input type="submit" value="Göndər" className='outline-0 border-0 bg-white text-blue-800 font-bold h-full p-2 hover:bg-blue-800 hover:text-white transition duration-300 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default index