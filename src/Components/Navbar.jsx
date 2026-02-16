import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <>
    <div className="fixed top-0 left-0 w-full h-14 bg-black text-white 
    flex justify-between items-center px-6 z-50">
    
      <p className="text-2xl font-bold">&lt;/&gt;</p>

      <ul className="hidden md:flex gap-8 items-center">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <button className="bg-white text-black text-md px-2 py-1 rounded-full cursor-pointer">Download Resume</button>
      </ul>

      <button onClick={toggleMenu} className="md:hidden">
        {open ? <X /> : <Menu />}
      </button>
    </div>

    {/*Push content down */}
    <div className="pt-14">
    {/* Your page content */}
    </div>

    {open && <MobileMenu />}
    </>

    </>
  );
};

export default Navbar;
