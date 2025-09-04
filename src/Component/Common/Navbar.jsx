import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className={`text-3xl font-bold ${
            isScrolled ? "text-[#0B1F3A]" : "text-white"
          }`}
        >
          APIL
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-yellow-400"
                    : isScrolled
                    ? "text-[#0B1F3A]"
                    : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-yellow-400"
                    : isScrolled
                    ? "text-[#0B1F3A]"
                    : "text-white"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-yellow-400"
                    : isScrolled
                    ? "text-[#0B1F3A]"
                    : "text-white"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-yellow-400"
                    : isScrolled
                    ? "text-[#0B1F3A]"
                    : "text-white"
                }`
              }
            >
              Our Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-3 rounded-full font-medium transition ${
                  isActive
                    ? "bg-yellow-400 text-[#0B1F3A]"
                    : isScrolled
                    ? "bg-yellow-400 text-[#0B1F3A]"
                    : "bg-yellow-400 text-[#0B1F3A]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={isScrolled ? "text-[#0B1F3A]" : "text-white"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 flex flex-col space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0B1F3A] font-medium hover:bg-yellow-100 py-3 px-2 "
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0B1F3A] font-medium hover:bg-yellow-100 py-3 px-2 "
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0B1F3A] font-medium hover:bg-yellow-100 py-3 px-2 "
          >
            Our Projects
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0B1F3A] font-medium hover:bg-yellow-100 py-3 px-2 "
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0B1F3A] font-medium hover:bg-yellow-100 py-3 px-2 "
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
