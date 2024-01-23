import { AlignJustify, ArrowUpRight, Asterisk, Minimize } from "lucide-react"
import {
   //  RefObject,
     // useRef,
       useState } from "react"

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

   // const refMenu: RefObject<HTMLDivElement> = useRef(null);

    const handleBurgerMenu = () => {
        console.log('open');  
      //  refMenu.current && (refMenu.current.style.display = "flex");   
        setIsMenuOpen(true);
        document.documentElement.style.overflow = 'hidden';
    }

    const handleCloseBurgerMenu = () => {
        console.log('close');
      // refMenu.current && (refMenu.current.style.display = "none"); 
       setIsMenuOpen(false);   
       document.documentElement.style.overflow = 'scroll'; 
    }


  return (
   <>
    <nav className="flex justify-between px-3 items-center h-16">
        <h1><Asterisk size={70} color="black" /></h1>
        <div className="flex"> 
        <a href="#" className="py-2 px-3 mr-3 bg-black text-white rounded-md hidden md:flex items-center">Malt <ArrowUpRight /> </a>
        <button onClick={handleBurgerMenu} ><AlignJustify /></button>
        </div>
    </nav>
    <div 
    //ref={refMenu}
     className={`top-0 z-10 absolute w-full h-screen overflow-hidden bg-black text-white ${isMenuOpen ? 'flex' : 'hidden'} flex-col justify-center items-center`}>
        <a href="#about" className="text-6xl hover-menu font-bold">About</a>
        <a href="#project" className="text-6xl hover-menu py-3 font-bold">Project</a>
        <a href="#" className="text-6xl mb-5 hover-menu font-bold">Contact</a>
        <button onClick={handleCloseBurgerMenu}><Minimize /></button>
    </div>
   </>
  )
}
