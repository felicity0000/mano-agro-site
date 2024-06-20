import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-5">
          <a
            href="#hero"
            className="font-medium text-gray-800 hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-medium text-gray-800 hover:text-green-600"
          >
            About
          </a>
          <a
            href="#products"
            className="font-medium text-gray-800 hover:text-green-600"
          >
            Products
          </a>
          <a
            href="#equipment"
            className="font-medium text-gray-800 hover:text-green-600"
          >
            Equipment
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-800 hover:text-green-600"
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
