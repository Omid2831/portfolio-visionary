import React from 'react'

const PortfolioSection = ({ children }) => {
  return (
    <section className="portfolio-section max-w-screen flex flex-col items-center gap-4 px-2 py-4">
      <p className='text-white'>Hello I'm Omid Mehrabi</p>
      <h2 className='text-white'>Software Developer</h2>
      <div className='flex flex-col'>
        {children}
      </div>
    </section>
  )
}

export default PortfolioSection