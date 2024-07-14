import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
const AgricMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="relative inline-flex">
      <button className="flex items-center font-semibold text-green-700 bg-white px-3">
        AGRICULTURE<ChevronDown className="text-green-700 ml-1" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="relative bg-white shadow-lg rounded-md  z-50">
      <DropdownMenuItem>
        <a href="/equipment" className="uppercase font-bold">MECHANISATION</a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <a href="/crops" className="uppercase font-bold">CROPS</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default AgricMenu