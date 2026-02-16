import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Resume from "./resume.pdf"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = ["home", "about", "projects", "contact"];

  function toggleMenu() {
    setOpen(!open);
  }

  // Disable body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section) =>
    active === section
      ? "text-white border-b-2 border-white pb-1"
      : "text-gray-400 hover:text-white transition";

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-14 bg-black text-white 
      flex justify-between items-center px-6 z-50">

        {/* Logo */}
        <p className="text-2xl font-bold cursor-pointer">
          <a href="#home">&lt;/&gt;</a>
        </p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-md">

          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={linkStyle(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}

          {/* Resume Download */}
          <li>
            <a
              href={Resume}
              download="Anshuman-Gupta-Resume.pdf"
              className="bg-white text-black px-3 py-1 rounded-full 
              hover:bg-gray-300 transition"
            >
              Download Resume
            </a>
          </li>

        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && <MobileMenu setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
