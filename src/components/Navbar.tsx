
import AgricMenu from "./AgricMenu";
import MobileNav from "./MobileNav";
import PeopleMenu from "./PeopleMenu";
const Navbar = () => {
  return (
    <div>
  
      <div className="hidden md:block">
        <div className="flex flex-row p-4">
          <div className="space-x-8">
            <PeopleMenu />
            <AgricMenu/>
            <a
              href="/#networking"
              className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600"
            >
              Networking
            </a>
            <a
              href="/#contact"
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
