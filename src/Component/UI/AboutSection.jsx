import React from "react";
import { ArrowRight } from "lucide-react";
import aboutImg from "../../assets/aboutcompany.jpg"; 

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-gray-400 text-sm font-medium tracking-wide mb-2">
           Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-snug mb-6">
            Learn More About <br />
            <span className="text-yellow-400">Our Company</span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            <span className="font-bold text-yellow-400">APIL</span> is a full-service digital solutions company, 
            dedicated to helping businesses grow through innovative technology, creative design, and strategic solutions. 
            We focus on delivering meaningful experiences, leveraging modern tools and best practices to ensure every 
            project exceeds client expectations. Our team combines expertise, creativity, and passion to transform ideas 
            into impactful results.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-[#0B1F3A]">
                Innovative digital solutions
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-[#0B1F3A]">
                Customer-centric approach
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-[#0B1F3A]">
                Creative and modern design
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-[#0B1F3A]">
                Reliable and scalable support
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0B1F3A] transition">
              Meet Our Team
            </button>
            <button className="border-2 border-yellow-400 text-[#0B1F3A] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={aboutImg}
            alt="About Company"
            className="w-full h-[550px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
