import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-row p-4">
          <div className="space-x-8">
            <a
              href="#about"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              About
            </a>
            <a
              href="#team"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              team
            </a>
            <a
              href="#crops"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              CROPS
            </a>
            <a
              href="#equipment"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              MECHANISATION
            </a>
            <a
              href="#impact"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              impact
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
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
