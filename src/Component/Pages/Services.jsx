import React from "react";
import bgImage from "../../assets/about.jpg";

import Carousel from "../UI/Carousel";
import { services } from "../Data/Servicesdata";

const Services = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="relative z-20 max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Our Expertise
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white">
            Delivering modern software solutions that combine innovation,
            design, and technology. We help businesses achieve their digital
            goals with creativity and precision.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Do
          </h2>
          <div className="mx-auto mt-2 mb-8 w-20 h-1 bg-yellow-500 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We provide a full spectrum of digital services to help businesses
            thrive. From developing scalable software to designing beautiful
            user experiences, our goal is to empower your digital growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-yellow-300 hover:text-white"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500 text-white shadow-md">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="mt-20">
            <Carousel />
          </div>

          {/* Call-to-Action */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-gray-700 max-w-xl">
                We craft elegant, scalable, and innovative software solutions
                that help businesses succeed in the modern digital world.
              </p>
            </div>
            <a
              href="mailto:contact@apil.com"
              className="bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
