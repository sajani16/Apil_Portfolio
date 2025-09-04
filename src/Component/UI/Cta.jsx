import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/backapil2.jpg"; // Replace with your image

export default function CallToAction() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-96 flex items-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1F3A]/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Have a project idea or a challenge? Our team is ready to turn your
          vision into a digital experience that stands out.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#0B1F3A] font-semibold rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
