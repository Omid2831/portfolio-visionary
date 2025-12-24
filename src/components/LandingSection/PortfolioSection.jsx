import '../../styles/portfolio-section.css'


const PortfolioSection = ({ children }) => {
  return (
    <section className="portfolio-section max-w-screen flex flex-col items-center gap-4 px-2 py-4">
      <div>
        <p className='head-line text-center text-white'>Hello, I'm Omid Mehrabi</p>
        <h2 className='sup-head-line text-center text-white'>Frontend Engineer</h2>
      </div>
      <div className='flex flex-col'>
        {children}
      </div>
    </section>
  )
}

export default PortfolioSection