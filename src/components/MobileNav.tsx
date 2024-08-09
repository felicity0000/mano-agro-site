import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-700" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-8">
          <a
            href="#about"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            About
          </a>
          <a
            href="#team"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            team
          </a>
          <a
            href="#crops"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            CROPS
          </a>
          <a
            href="#equipment"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            MECHANISATION
          </a>
          <a
            href="#impact"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            impact
          </a>
          <a
            href="#networking"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            Networking
          </a>
          <a
            href="#contact"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
