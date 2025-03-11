import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Our Project", path: "/Projects" },
    { name: "About us", path: "/About" },
  ];

  return (
    <nav className="flex justify-between items-center px-[120px] pt-[50px] bg-[#19191B] font-[Nunito_Sans]">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-[40px] text-white/70 text-lg font-normal">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`hover:text-[#5454D4] hover:font-semibold ${
                location.pathname === item.path ? "text-[#5454D4] font-semibold" : ""
              }`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Us Button */}
      <div>
        <Link to="/Contact">
          <button 
            className="bg-transparent border border-[#FFFFFF] px-[34px] pt-[11.26px] pb-[8.36px] text-white text-base font-semibold hover:text-[#5454D4] hover:border-[#5454D4] rounded-sm cursor-pointer">
            Contact us
          </button>
        </Link>
      </div>
    </nav>
  );
}
