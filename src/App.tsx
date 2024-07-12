import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";
import Impact from "./components/Impact"
import Networking from "./components/Networking";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      <Navbar/>
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