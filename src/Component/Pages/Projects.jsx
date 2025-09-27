import React, { useState } from "react";
import { projectsData, categories } from "../Data/Projectdata";
import { ExternalLink } from "lucide-react";
import bgImage from "../../assets/aboutapil2.jpg";
import CallToAction from "../UI/Cta";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projectsData
      : projectsData.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-white">
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
            Explore Our Projects
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white mb-2">
            Discover our carefully curated projects, showcasing creativity,
            technical expertise, and modern digital solutions. Each project is
            crafted to deliver exceptional user experiences and measurable
            impact.
          </p>
        </div>
      </section>

      {/* Page Heading */}
      <h2 className="text-4xl font-bold text-[#0B1F3A] text-center mb-8 mt-15">
        Featured Projects
      </h2>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.name)}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              activeFilter === cat.name
                ? "bg-yellow-400 text-white border-yellow-400"
                : "bg-[#0B1F3A] text-white border-gray-300 hover:bg-[#050f1c]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mb-15">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
        <a
          href={project.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-yellow-300 text-[#0B1F3A] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition transform hover:-translate-y-1"
        >
          View Project <ExternalLink size={18} className="ml-2" />
        </a>
      </div>

      {/* Project Info */}
      <div className="p-6 bg-white ">
        <span className="inline-block text-sm font-medium text-white bg-[#0B1F3A] px-3 py-1 rounded-full mb-3 capitalize">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {project.description ||
            "A modern project combining creativity, technology, and user experience to deliver measurable results."}
        </p>
      </div>
    </div>
  ))}
</div>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
}
