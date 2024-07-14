import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const PeopleMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <button className="flex items-center font-semibold text-green-700 bg-white px-3">
          ABOUT <ChevronDown className="text-green-700 ml-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-md z-50">
        <DropdownMenuItem>
          <a href="/team" className="uppercase font-bold">team</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#about" className="uppercase font-bold">About-Us</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PeopleMenu;
