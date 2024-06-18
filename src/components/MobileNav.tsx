import {Sheet, SheetContent, SheetTrigger} from '../components/ui/sheet';
import {Menu} from 'lucide-react'
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600"/>
      </SheetTrigger>
      <SheetContent>
      <div className="flex flex-col">
        <a href="#hero" className="font-medium">HOME</a>
        <a href="#about" className="font-medium">ABOUT</a>
        <a href="#products" className="font-medium">PRODUCTS</a>
        <a className="font-medium">TESTIMONIALS</a>
        <a href="#contact" className="font-medium">CONTACT</a>
      </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav