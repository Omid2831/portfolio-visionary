import React from 'react'
import HeroImage from './components/HeroImage'
import HeroContent from './components/HeroContent'

const Hero = () => {
  return (
    <section className='max-w-7xl min-h-150 bg-[#1a1a2e] flex items-center justify-between px-8 md:px-16 lg:px-24 py-16 border-5  rounded-lg shadow-lg gap-8 md:gap-16'>
      {/* Left side - Text content */}
      {/* 
  Websites that make attracting customers easy
  Brand messaging and StoryBrand websites for small businesses that help you grow, with a straightforward and enjoyable process.
  Schedule A Call
      */}
      <HeroContent
        headerText="Websites that make attracting customers easy"
        paragraphText="Brand messaging and StoryBrand websites for small businesses that help you grow, with a straightforward and enjoyable process."
        buttonText="Schedule A Call"
      />
      {/* Right side - Hero Image */}
      <div className='hidden md:flex flex-1 justify-center'>
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero