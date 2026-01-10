import React from 'react'

const HeroContent = ({ headerText, paragraphText, buttonText }) => {
  return (
    <div className='flex-1 max-w-xl'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
        {headerText}
      </h1>
      <p className='text-gray-400 text-lg mb-8'>
        {paragraphText}
      </p>
      <button className='bg-[#f87171] hover:bg-[#ef4444] text-white font-semibold px-8 py-3 rounded-full transition-colors'>
        {buttonText}
      </button>
    </div>
  )
}

export default HeroContent