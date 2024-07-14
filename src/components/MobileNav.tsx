import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import PeopleMenu from "./PeopleMenu";
import AgricMenu from "./AgricMenu";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-700" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-8">
          <PeopleMenu />
          <AgricMenu />
          <a
            href="/#networking"
            className="uppercase font-medium text-gray-800 hover:text-green-600 active:text-green-600 ml-3"
          >
            Networking
          </a>
          <a
            href="/#contact"
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
