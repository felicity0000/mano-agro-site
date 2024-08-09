import About from "./components/About"
import Equipment from "./components/Equipment"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Networking from "./components/Networking"
import Products from "./components/Products"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Impact from "./components/Impact"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Team/>
      <Products/>
      <Equipment/>
      <Impact/>
      <Networking/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App