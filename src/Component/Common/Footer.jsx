import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div>
     
      <footer className="bg-[#0B1F3A] text-white pt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-3">APIL</h2>
            <p className="text-sm">
              Providing innovative software solutions to help businesses grow in
              the digital era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +977 9800000000</p>
            <p>Address: Kathmandu, Nepal</p>

            {/* Social Media */}
            <div className="mt-4">
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="hover:text-yellow-400">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xl font-bold mb-3">Support & Policies</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-600 py-4 text-center text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
