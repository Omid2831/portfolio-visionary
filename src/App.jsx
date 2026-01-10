import RootLayout from "./layouts/RootLayout"
import CardPortfolio from "./components/LandingSection/CardPortfolio"
import PortfolioSection from "./components/LandingSection/PortfolioSection"
import VideoIntroPortfolio from "./components/LandingSection/VideoIntroPortfolio"
import QuestionedAskedAccordion from "./components/uidesign/QuestionedAskedAccordian"
import ProjectList from "./components/ProjectSection/ProjectList"
import FormSection from "./components/FormSender/FormSection"
import Hero from "./features/landing-page/Hero"

const App = () => {
  return (
    <RootLayout>
      <Hero />
    </RootLayout>
  )
}

export default App