import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center bg-black overflow-hidden z-0">
      <img
        src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-[-1]"
      />
      <div className="relative text-center px-4 md:px-12 py-8 md:py-16 text-white max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Klinische Funktionelle Neurobildgebung
        </h1>
        <p className="text-base md:text-xl font-medium text-zinc-200 mt-4">
          University Hospital Bonn – Department of Psychiatry and Psychotherapy
        </p>
        <p className="text-sm md:text-lg text-zinc-300 mt-4">
          Researching brain diseases using functional MRI and PET – from neurodegenerative <br /> disorders to the effects of endurance sports.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
