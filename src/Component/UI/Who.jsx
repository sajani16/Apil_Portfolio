import React from "react";
import { Laptop, Smartphone, Brush, Search, Users, Cpu } from "lucide-react";
import teamImg from "../../assets/WHOO.jpg";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Build robust, scalable, and secure websites tailored to your business needs.",
    icon: <Laptop className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "App Development",
    description:
      "Create engaging mobile applications for iOS and Android that deliver smooth performance.",
    icon: <Smartphone className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "Web Design",
    description:
      "Design visually stunning, user-friendly websites that reflect your brand identity.",
    icon: <Brush className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your website’s visibility with SEO strategies and digital marketing solutions.",
    icon: <Search className="w-8 h-8 text-[#0B1F3A]" />,
  },
];

const Who = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#F9FBFD]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section  */}
        <div>
          <h4 className=" text-sm  text-gray-400 mb-2">What We Offer?</h4>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-snug mb-6">
            We are your trusted partner for{" "}
            <span className="text-yellow-400">innovative digital solutions</span>
          </h2>
          <p className="text-gray-700 mb-6 text-xl leading-relaxed">
            We are a passionate team of engineers, designers, and strategists.
            Our mission is to craft scalable, impactful, and user-focused
            software solutions that empower businesses worldwide.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="bg-yellow-400 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-700 transition"
          >
            Explore More
          </button>

          {/* Why Choose Us */}
          <div className="mt-10">
           <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1F3A] leading-snug mb-6">
            Why Choose {""}
            <span className="text-yellow-400">Us</span>
          </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center text-xl gap-2">
                <Users className="text-yellow-400 w-6 h-6" /> Expert, passionate
                team
              </li>
              <li className="flex items-center gap-2 text-xl">
                <Laptop className="text-yellow-400  w-6 h-6" /> Innovative,
                scalable solutions
              </li>
              <li className="flex items-center gap-2 text-xl">
                <Cpu className="text-yellow-400 w-6 h-6" /> Cutting-edge
                technology
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Services */}
        <div className="grid sm:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-lg transition 
                ${
                  index === 0 || index === 3
                    ? "bg-yellow-400 text-[#0B1F3A]"
                    : "bg-white text-[#0B1F3A]"
                }`}
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#0B1F3A]/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Who;
