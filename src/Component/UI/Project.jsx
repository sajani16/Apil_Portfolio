import React from "react";
import { projectsData } from "../Data/Projectdata";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const featured = projectsData.slice(0, 3); 

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-8xl mx-auto px-6 text-start">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center mb-16">
          <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
          <h2 className="px-6 text-4xl font-bold text-[#0B1F3A]">
             Recent Projects
          </h2>
          <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay  */}
              <div
                className="absolute inset-0 bg-black/75 flex items-center justify-center 
                transform -translate-x-full group-hover:translate-x-0 
                transition-transform duration-500 ease-in-out"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0B1F3A] p-4 rounded-full shadow-lg hover:scale-105 transition duration-500 font-semibold "
                >
                  Live Preview <FaExternalLinkAlt className="inline ml-2" />
                </a>
                
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <span className="inline-block text-sm font-medium text-white  bg-yellow-400 px-3 py-1 rounded-full mb-3 capitalize">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All  */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/projects")} 
            className="mt-6 px-6 py-3  rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-700 transition"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
