import RootLayout from "./layouts/RootLayout"
import CardPortfolio from "./components/LandingSection/CardPortfolio"
import PortfolioSection from "./components/LandingSection/PortfolioSection"
import VideoIntroPortfolio from "./components/LandingSection/VideoIntroPortfolio"
import QuestionedAskedAccordion from "./components/uidesign/QuestionedAskedAccordian"
import ProjectList from "./components/ProjectSection/ProjectList"
import FormSection from "./components/FormSender/FormSection"


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
      <div>
        {/** Project Title */}
        <h2 className="mb-8 text-5xl font-bold text-white text-center">Projects</h2>
        <ProjectList />
      </div>
      <FormSection />
    </RootLayout>
  )
}

export default App