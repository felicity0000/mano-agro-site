import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Impact from "@/components/Impact"
import Networking from "@/components/Networking"

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <div>
      <About/>
      <Impact/>
      <Networking/>
      </div>
      
      <Contact/>
    </div>
  )
}

export default HomePage