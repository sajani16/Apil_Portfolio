import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bg from "../../assets/first.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp leading-tight">
          Crafting <span className="text-[#FFD700]">Digital Experiences</span> 
          That Inspire Growth
        </h1>
        <p className="text-l md:text-xl mb-8 text-gray-100 animate-fadeInUp delay-200">
          At APIL, we design and develop sophisticated web and mobile solutions that elevate businesses, streamline processes, and engage audiences with seamless digital experiences.
        </p>
        <NavLink
          to="/services"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white rounded-full text-lg font-semibold text-white hover:bg-white hover:text-[#0B1F3A] transition-all animate-fadeInUp delay-400"
        >
          Explore More <ArrowRight className="text-yellow-400 w-7 h-7" />
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
