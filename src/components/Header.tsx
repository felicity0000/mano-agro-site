import manoAgroLogo from "../assets/mano-agro-logo.jpg";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 bg-white md:p-4 top-0 left-0 right-0 fixed z-50">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-row space-x-2 items-center">
        <div>
          <a href="/">
            <img src={manoAgroLogo} className="h-16 w-16" />
          </a>
        </div>
        <div>
          <h1 className="text-green-700 font-bold text-base text-center">
            MANO AGRO INPUTS
          </h1>
          <h3 className="text-center text-xs text-gray-800 font-bold">
            ENTERPRISES LIMITED
          </h3>
          <p className="text-xs text-yellow-600 italic text-center font-bold">
            -Bridging Agro Technologies-
          </p>
        </div>
      </div>
        <div className="md:hidden">
          <MobileNav/>
        </div>
        <div className="hidden md:block">
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Header