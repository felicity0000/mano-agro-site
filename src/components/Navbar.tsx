import manoAgroLogo from "../assets/mano-agro-logo.jpg";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white items-center px-8 py-1 top-0 left-0 right-0 sticky z-50">
      <div className="flex flex-row space-x-2 items-center">
        <div>
          <a href="#hero">
            <img src={manoAgroLogo} className="h-16 w-16" />
          </a>
        </div>
        <div>
          <h1 className="text-green-600 font-medium text-base text-center">MANO AGRO INPUTS</h1>
          <h3 className="text-center text-xs text-gray-800 font-medium">ENTERPRISES LIMITED</h3>
          <p className="text-xs text-yellow-600 italic text-center">-Bridging Agro Technologies-</p>
        </div>
      </div>
      <div className="space-x-4">
        <a href="#hero" className="font-medium">HOME</a>
        <a href="#about" className="font-medium">ABOUT</a>
        <a href="#products" className="font-medium">PRODUCTS</a>
        <a className="font-medium">TESTIMONIALS</a>
        <a href="#contact" className="font-medium">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
