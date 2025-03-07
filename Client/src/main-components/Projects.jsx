import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import portfolioImage from "../assets/Portfolio.png";
import ReminderFlow from "../assets/ReminderFlow.png";
import SkyCast from "../assets/SkyCast.png";
import RealEstate from "../assets/Real-Estate.png";
import Interview from "../assets/Interview.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React, Three.js, and Tailwind CSS featuring smooth animations and 3D elements.",
    tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/dev-code-create/PortFolio-",
    live: "https://port-folio-three-khaki.vercel.app",
    image: portfolioImage,
    status: "Completed",
  },
  {
    id: 2,
    title: "SkillMeet",
    description:
      "An interview platform with real-time video calling and an integrated code editor, enabling seamless technical interviews.",
    tech: ["React", "Nextjs", "Convex", "Framer Motion", "zustand"],
    github:
      "https://github.com/dev-code-create/Video-Calling-Interview-Platform-with-Code-Editor",
    live: "https://video-calling-interview-platform-with-code-editor.vercel.app",
    image: Interview,
    status: "Completed",
  },
  {
    id: 3,
    title: "ReminderFlow",
    description:
      "ReminderFlow is a next-generation reminder and task management platform designed to help individuals stay organized and productive. It can set reminders, integrate tasks from Google Calendar, and more.",
    tech: ["React", "Nodejs", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/dev-code-create/ReminderFlow",
    live: "reminder-flow-eight.vercel.app",
    image: ReminderFlow,
    status: "Completed",
  },
  {
    id: 4,
    title: "SkyCast",
    description:
      "SkyCast is a cutting-edge weather forecasting platform designed to provide real-time, accurate weather updates and predictions for any location worldwide.",
    tech: [
      "React",
      "Nextjs",
      "Nodejs",
      "OpenWeather-API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/dev-code-create/Weather-App",
    live: "https://weather-app-six-beta-88.vercel.app/",
    image: SkyCast,
    status: "Completed",
  },
  {
    id: 5,
    title: "HomeVista",
    description:
      "A Real Estate website with a beautiful interface that is responsive and animated with Framer Motion.",
    tech: ["React", "Framer-motion", "Tailwind CSS"],
    github: "https://github.com/dev-code-create/Real-Estate-Web-App-",
    live: "https://real-estate-web-6rtk4302l-ayush-kankales-projects.vercel.app",
    image: RealEstate,
    status: "Completed",
  },
  // Add more projects here
];

export default function ProjectsSection() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          passion for web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-500 bg-opacity-20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
