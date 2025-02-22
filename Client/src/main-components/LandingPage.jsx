import { Button } from "@/components/ui/button";
import ThreeBackground from "@/three/ThreeBackground";
import { motion } from "motion/react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiPython,
  SiExpress,
} from "react-icons/si";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const techStack = [
    {
      id: 1,
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    { id: 2, name: "React.js", icon: <SiReact className="text-blue-400" /> },
    {
      id: 3,
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
    },
    { id: 4, name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-300" />,
    },
    { id: 6, name: "React", icon: <SiReact className="text-blue-500" /> },
    { id: 7, name: "MySQL", icon: <SiMysql className="text-yellow-500" /> },
    { id: 8, name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { id: 9, name: "Python", icon: <SiPython className="text-yellow-300" /> },
    {
      id: 10,
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
    },
  ];
  return (
    <div className="min-h-screen px-4 flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white">
      <ThreeBackground />
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 z-10 relative text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Ayush Kankale</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 max-w-xl z-10 relative text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        A MERN Stack Developer passionate about creating stunning web
        experiences with smooth animations and elegant UI.
      </motion.p>
      {/* buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row gap-3 w-full justify-center"
      >
        <Link to="/contact">
          <Button className="px-6 bg-blue-500 text-base sm:text-lg hover:bg-blue-600 shadow-lg rounded-lg">
            Hire Me
          </Button>
        </Link>
        <Button className="px-6 bg-gray-500 text-base sm:text-lg hover:bg-gray-600 shadow-lg rounded-lg border-2 border-gray-500 hover:text-red-200">
          Resume
        </Button>
      </motion.div>
      {/* Tools & Technologies Section */}
      <motion.div
        className="relative z-10 text-center mt-12 sm:mt-16 w-full px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
          Tools & Technologies
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-0.5 sm:gap-y-4 sm:gap-x-1 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <motion.div
              key={tech.id}
              className="flex flex-col items-center p-2 sm:p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-[120px] mx-auto"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-4xl text-blue-400">
                {tech.icon}
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
