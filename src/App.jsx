import RootLayout from "./layouts/RootLayout"
import CardPortfolio from "./components/LandingSection/CardPortfolio"
import PortfolioSection from "./components/LandingSection/PortfolioSection"
import VideoIntroPortfolio from "./components/LandingSection/VideoIntroPortfolio"
import QuestionedAskedAccordion from "./components/uidesign/QuestionedAskedAccordian"
import ProjectList from "./components/ProjectSection/ProjectList"

const App = () => {
  return (
    <RootLayout>
      <PortfolioSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto items-start">
          <div className="landing-profile-section flex flex-col items-center w-full">
            <CardPortfolio />
          </div>
          <div className="landing-video-section w-full h-full">
            <VideoIntroPortfolio />
          </div>
        </div>
      </PortfolioSection>
      <QuestionedAskedAccordion />
      
      {/* Project Cards Section */}
      <div
      className="border-2 px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 mx-auto my-16 max-w-7xl rounded-3xl border-indigo-500/30 bg-neutral-900/50 backdrop-blur-sm">
       <ProjectList />
      </div>
    </RootLayout>
  )
}

export default App