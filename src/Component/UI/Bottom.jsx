import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/backapil3.jpg"; // Make sure this path and file name are correct

export default function Bottom() {
  return (
    <section
      className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          Empowering Your Digital Journey
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white mb-2">
          We transform ideas into powerful digital experiences that make an
          impact. From sleek, responsive web applications to innovative mobile
          solutions, we help your brand stand out and connect with your audience
          in meaningful ways.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-white">
          Our team combines creativity and technology to craft products that not
          only look stunning but also deliver seamless performance. Every
          project is built with precision, passion, and a focus on creating
          experiences that users love.
        </p>
      </motion.div>
    </section>
  );
}
