import React from "react";
import Hero from "../UI/Hero";
import RecentProjects from "../UI/Project";
import CallToAction from "../UI/Cta";
import AboutSection from "../UI/AboutSection";
import Who from "../UI/Who";
import Bottom from "../UI/Bottom";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Bottom />
      <Who />
      <RecentProjects />
      <CallToAction />
      <section className="py-15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B1F3A] text-center">
            Our Location
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Visit our office or see where we operate from.
          </p>
          <div className="mx-auto w-full h-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d85.324!3d27.710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19123456789%3A0xabcdef123456789!2sYour%20Company!5e0!3m2!1sen!2snp!4v1693721234567!5m2!1sen!2snp"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
