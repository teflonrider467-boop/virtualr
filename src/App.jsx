import Navbar from './componenets/Navbar'
import HeroSection from './componenets/HeroSection'
import FeatureSection from './componenets/FeatureSection'
import Workflow from './componenets/Workflow'
import Pricing from './componenets/Pricing'
import Testimonials from './componenets/Testimonials'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
    </div>
    </>
  )
}

export default App
