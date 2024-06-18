import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Equipment from "./components/Equipment";

const App = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Equipment/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App