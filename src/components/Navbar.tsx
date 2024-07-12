import manoAgroLogo from "../assets/mano-agro-logo.jpg";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white items-center px-8  top-0 left-0 right-0 fixed z-50">
      <div className="flex flex-row space-x-2 items-center">
        <div>
          <a href="#hero">
            <img src={manoAgroLogo} className="h-16 w-16" />
          </a>
        </div>
        <div>
          <h1 className="text-green-600 font-medium text-base text-center">
            MANO AGRO INPUTS
          </h1>
          <h3 className="text-center text-xs text-gray-800 font-medium">
            ENTERPRISE LIMITED
          </h3>
          <p className="text-xs text-yellow-600 italic text-center">
            -Bridging Agro Technologies-
          </p>
        </div>
      </div>
      <div className="space-x-6 hidden md:block">
        <a
          href="#hero"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 focus:text-green-600 focus:visible"
        >
          Home
        </a>
        <a
          href="#about"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 focus:text-green-600 focus:visible"
        >
          About
        </a>
        <a
          href="#team"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 focus:text-green-600"
        >
          Team
        </a>
        <a
          href="#crops"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 focus:text-green-600"
        >
          Crops
        </a>
        <a
          href="#equipment"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
        >
          Mechanisation
        </a>
        <a
          href="#networking"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
        >
          Networking
        </a>
        <a
          href="#contact"
          className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
        >
          Contact
        </a>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
