import { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Project", id: "projects" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-[30px] lg:px-[120px] pt-[30px] pb-4 transition-all duration-300 ${
        scrolling ? "bg-[#19191B] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex space-x-[40px] text-white/70 text-lg font-normal">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.id}`}
              className="hover:text-[#5454D4] hover:font-semibold"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Us Button (Desktop) */}
      <div className="hidden lg:block">
        <a href="#contact">
          <button className="bg-transparent border border-[#FFFFFF] px-[34px] pt-[11.26px] pb-[8.36px] text-white text-base font-semibold hover:text-[#5454D4] hover:border-[#5454D4] rounded-sm cursor-pointer">
            Contact us
          </button>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button className="text-white lg:hidden" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#19191B] p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-[9999]`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center mb-6">
          <img src={Logo} alt="Logo" />
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 text-white/70 text-lg font-normal">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#5454D4] hover:font-semibold"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-transparent border border-[#FFFFFF] px-[20px] py-[10px] text-white text-base font-semibold hover:text-[#5454D4] hover:border-[#5454D4] rounded-sm cursor-pointer">
                Contact us
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
