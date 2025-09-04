import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

const techStack = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaDatabase, name: "SQL" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaLinux, name: "Linux" },
];

export default function Carousel() {
  return (
    <section className="py-10 bg-gray-50 mt-20">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center mb-16">
        <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
        <h2 className="px-6 text-4xl font-bold text-[#0B1F3A]">
          Technologies We Use
        </h2>
        <div className="flex-1 h-[1.5px] bg-yellow-400"></div>
      </div>

      {/* Carousel Wrapper with Padding */}
      <div className="overflow-hidden max-w-6xl mx-auto px-8">
        <motion.div
          className="flex gap-10 w-max animate-carousel"
          style={{ display: "flex" }}
          whileHover={{ animationPlayState: "paused" }} // pause on hover
        >
          {[...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="w-28 h-28 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md flex-shrink-0"
              >
                <Icon className="text-4xl text-[#0B1F3A]" />
                <span className="mt-2 text-sm font-medium text-black">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-carousel {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
