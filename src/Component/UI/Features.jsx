import React from "react";
import { Laptop, Smartphone, Brush, Search } from "lucide-react";
import Who from "./Who";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Build robust, scalable, and secure websites tailored to your business needs.",
    icon: <Laptop className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: " App Development",
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
    title: " Digital Marketing",
    description:
      "Boost your website’s visibility with SEO strategies and digital marketing solutions.",
    icon: <Search className="w-8 h-8 text-[#0B1F3A]" />,
  },
];

const Features = () => {
  return (
    <section className="py-16  bg-gray-50">
        
     <div className=" max-w-6xl mx-auto px-6 flex items-center justify-center mb-16">
          <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
          <h2 className="px-6 text-4xl font-bold text-[#0B1F3A]">Our Services</h2>
          <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className=" p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
              {service.title}
            </h3>
            <p className="text-black text-md">{service.description}</p>
          </div>
        ))}
      </div>
      <Who />
    </section>
  );
};

export default Features;
