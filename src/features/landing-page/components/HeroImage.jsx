import React from 'react'
import CurvedLineShape from './sketch/CurvedLineShape'

const HeroImage = () => {
  return (
    <figure className="relative">
      {/* Coral/Salmon circular background */}
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#f87171] flex items-center justify-center overflow-hidden">
        <img
          src="profile-image.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4"
        />
      </div>
      <div aria-hidden="true">
        {/* Decorative elements */}
        {/* Curved line */}
        <CurvedLineShape />
        
        {/* Star top right */}
        <img src="star.svg" alt="star" className="absolute -top-4 -right-4 w-15 h-25 text-white" />

        {/* Small circle */}
        <div className="absolute -bottom-4 right-8 w-4 h-4 border-2 border-white rounded-full" />
        <div className="absolute top-4 left-0 right-8 w-4 h-4 border-2 border-white rounded-full" />

        {/* Dot */}
        <div className="absolute top-4 -right-8 w-2 h-2 bg-white rounded-full" />
      </div>
    </figure>
  )
}

export default HeroImage