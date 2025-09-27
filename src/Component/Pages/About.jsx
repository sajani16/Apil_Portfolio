import React from "react";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

import { descriptionSections } from "../Data/Aboutdata";
import bgImage from "../../assets/apilabout3.jpg";
import { team } from "../Data/Team";
export default function AboutPage() {
  

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A]">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Discover APIL
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white">
            At APIL, we blend creativity, strategy, and technology to craft
            meaningful digital experiences. Our vision is to empower businesses
            with solutions that are innovative, scalable, and impactful.
          </p>
        </div>
      </section>

      {/* Mission & Goals Section */}
      <section className="py-20 px-6 bg-gray-100 text-[#0B1F3A]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Mission & Goals
        </h2>
        <p className="max-w-6xl mx-auto mb-12 text-center text-gray-700 text-lg leading-relaxed">
          At APIL, we empower businesses with cutting-edge digital solutions
          tailored to their unique needs. Our approach combines innovation,
          collaboration, and excellence to deliver impactful results. We work
          closely with our clients to understand their goals, craft creative
          strategies, and implement technology-driven solutions that drive
          growth, enhance user experiences, and ensure long-term success. Every
          project is an opportunity to create meaningful value and transform
          ideas into reality.
        </p>
      </section>

      {/* Description Sections */}
      {descriptionSections.map((section, index) => (
        <section key={index} className="py-5 px-6 bg-white">
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="shadow-md w-full object-cover rounded-md"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B1F3A]">
                {section.title}
              </h3>
              <p className="text-gray-700 text-lg">{section.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Team Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet the Team</h2>
        <p className="max-w-3xl mx-auto mb-12 text-gray-700">
          We are a group of passionate and skilled professionals dedicated to
          crafting innovative digital solutions. Each member brings unique
          expertise and a shared commitment to excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 group"
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover rounded-2xl"
              />

              {/* Description Overlay */}
              <div
                className="absolute bottom-0 w-full p-6 flex flex-col items-center text-white 
    bg-gradient-to-t from-black/100 to-transparent rounded-b-2xl"
              >
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm mb-3">{member.role}</p>
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-800 transition"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
