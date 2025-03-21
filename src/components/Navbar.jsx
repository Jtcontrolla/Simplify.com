import { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change background after 50px scroll
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
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-[120px] pt-[50px] pb-4 transition-all duration-300 ${
        scrolling ? "bg-[#19191B] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-[40px] text-white/70 text-lg font-normal">
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

      {/* Contact Us Button */}
      <div>
        <a href="#contact">
          <button className="bg-transparent border border-[#FFFFFF] px-[34px] pt-[11.26px] pb-[8.36px] text-white text-base font-semibold hover:text-[#5454D4] hover:border-[#5454D4] rounded-sm cursor-pointer">
            Contact us
          </button>
        </a>
      </div>
    </nav>
  );
}
