import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ReminderFlow",
    description: "A reminder app that helps you stay on top of your tasks.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://via.placeholder.com/150",
    link: "https://reminderflow.vercel.app/",
    github: "https://github.com/yourusername/reminderflow",
  },
  {
    title: "ReminderFlow",
    description: "A reminder app that helps you stay on top of your tasks.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://via.placeholder.com/150",
    link: "https://reminderflow.vercel.app/",
    github: "https://github.com/yourusername/reminderflow",
  },
  {
    title: "ReminderFlow",
    description: "A reminder app that helps you stay on top of your tasks.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://via.placeholder.com/150",
    link: "https://reminderflow.vercel.app/",
    github: "https://github.com/yourusername/reminderflow",
  },
  {
    title: "ReminderFlow",
    description: "A reminder app that helps you stay on top of your tasks.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://via.placeholder.com/150",
    link: "https://reminderflow.vercel.app/",
    github: "https://github.com/yourusername/reminderflow",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((techStack, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {techStack}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
