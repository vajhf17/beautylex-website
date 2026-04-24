import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import Sector from "../components/Sector/Sector"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs"
import ContactCTA from "../components/ContactCTA/ContactCTA"

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Sector />
      <WhyChooseUs />
      <ContactCTA />
    </>
  )
}

export default Home