import '../../styles/portfolio-section.css'


const PortfolioSection = ({ children }) => {
  return (
    <section className="portfolio-section max-w-screen flex flex-col items-center gap-4 rounded px-2 py-4">
      <div className='flex flex-col'>
        {children}
      </div>
    </section>
  )
}

export default PortfolioSection