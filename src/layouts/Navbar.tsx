import { AlignJustify, ArrowUpRight, Asterisk, Minimize } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsMenuOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  const handleCloseBurgerMenu = () => {
    setIsMenuOpen(false);
    document.documentElement.style.overflow = "scroll";
  };

  const handleRedirect = (website: string) => {
    setIsMenuOpen(false);
    document.documentElement.style.overflow = "scroll";
    window.location.href = `#${website}`;
  };

  const handleContact = () => {
    setIsMenuOpen(false);
    document.documentElement.style.overflow = "scroll";
  };

  return (
    <>
      <nav className="flex justify-between px-3 items-center h-16 bg-[#F8F7F3]">
        <h1>
          <Asterisk size={70} color="black" />
        </h1>
        <p> CEDRIC FONSAT</p>
        <div className="flex">
          <a
            href="https://www.malt.fr/profile/cedricfonsat"
            className="py-2 px-4 mr-3 bg-black text-white rounded-md hidden md:flex items-center"
          >
            Malt <ArrowUpRight />
          </a>
          <button onClick={handleBurgerMenu}>
            <AlignJustify />
          </button>
        </div>
      </nav>
      <div
        className={`top-0 z-20 absolute w-full h-screen overflow-hidden bg-black text-white ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col justify-center items-center`}
      >
        <button
          onClick={() => handleRedirect("about")}
          className="text-6xl hover-menu font-bold"
        >
          About
        </button>
        <button
          onClick={() => handleRedirect("project")}
          className="text-6xl hover-menu py-3 font-bold"
        >
          Project
        </button>
        <a
          onClick={handleContact}
          href="mailto:fonsat.cedric@outlook.com?subject=Portfolio%20Contact&body=Hello%20World"
          className="text-6xl mb-5 hover-menu font-bold"
        >
          Contact
        </a>
        <button onClick={handleCloseBurgerMenu}>
          <Minimize />
        </button>
      </div>
    </>
  );
};
