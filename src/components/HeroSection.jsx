import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative w-full  '>
         <img
        src="src/assets/hero.jpg"
        alt=""
        className='absolute w-full h-full object-cover z-[-2]'
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[-1]" />
        <div className='text-center px-4 py-10'>
            <h1 className='text-3xl font-[700]'>Klinische Funktionelle Neurobildgebung</h1>
            <p className='text-lg md:text-xl font-medium text-zinc-300 mt-3'>University Hospital Bonn – Department of Psychiatry and Psychotherapy</p>
            <p className='text-base md:text-lg text-gray-600 max-w-xl'>Researching brain diseases using functional MRI and PET – from neurodegenerative disorders to the effects of endurance sports.</p>
        </div>
    </div>
  )
}

export default HeroSection