import React from "react";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import a1 from "../../assets/apilabout2.jpg";
import a2 from "../../assets/aboutapil2.jpg";
import a3 from "../../assets/aboutapil1.jpg";
import t1 from "../../assets/team1.jpg";
import t2 from "../../assets/team2.jpg";
import t3 from "../../assets/team3.jpg";
import bgImage from "../../assets/about.jpg";

export default function AboutPage() {
  const descriptionSections = [
    {
      title: "Our Story",
      text: "APIL was founded with a mission to empower businesses with creative and efficient digital solutions. We believe in combining innovation, design, and technology to transform ideas into impactful experiences. Over the years, we have grown into a diverse team passionate about solving complex problems. Our journey is driven by a commitment to quality and customer satisfaction.",
      image: a1,
      reverse: false,
    },
    {
      title: "Our Approach",
      text: "We focus on understanding your business goals, identifying opportunities, and delivering tailored solutions. Collaboration and transparency are key to our process. Our approach ensures that every project aligns with your vision and meets business objectives. By emphasizing strategy and design thinking, we create lasting value.",
      image: a2,
      reverse: true,
    },
    {
      title: "Why Choose Us",
      text: "Our expertise, dedication, and passion make us the right partner for your digital journey. We ensure quality, innovation, and measurable results in every project we undertake. With a client-centric mindset, we deliver solutions that make a tangible impact. Choosing us means choosing a team committed to your growth and success.",
      image: a3,
      reverse: false,
    },
  ];

  const team = [
    {
      name: "Sharmila Poudel",
      role: "Founder & CEO",
      image: t1,
      linkedin: "https://linkedin.com/in/sharmila",
      facebook: "https://facebook.com/sharmila",
    },
    {
      name: "Ramesh Koirala",
      role: "Lead Developer",
      image: t2,
      linkedin: "https://linkedin.com/in/ramesh",
      facebook: "https://facebook.com/ramesh",
    },
    {
      name: "Anita Lama",
      role: "UI/UX Designer",
      image: t3,
      linkedin: "https://linkedin.com/in/anita",
      facebook: "https://facebook.com/anita",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A]">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30 z-10"></div>

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
