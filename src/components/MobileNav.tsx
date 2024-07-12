import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-8">
          <a
            href="#hero"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            About
          </a>
          <a
            href="#team"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            team
          </a>
          <a
            href="#crops"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            crops
          </a>
          <a
            href="#equipment"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            mechanisation
          </a>
          <a
            href="#networking"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            networking
          </a>
          <a
            href="#contact"
            className="uppercase font-medium text-gray-800 hover:text-green-600"
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
