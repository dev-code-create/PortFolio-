import { motion } from "motion/react";
import {
  Home,
  LayoutGrid,
  Book,
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, icon: <Home size={24} />, label: "Home", link: "/" },
  {
    id: 2,
    icon: <LayoutGrid size={24} />,
    label: "Projects",
    link: "/projects",
  },

  {
    id: 3,
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    link: "www.linkedin.com/in/ayush-kankale",
    external: true,
  },
  {
    id: 4,
    icon: <Instagram size={24} />,
    label: "Instagram",
    link: "https://instagram.com/ayush_kankale",
    external: true,
  },
  {
    id: 5,
    icon: <Twitter size={24} />,
    label: "Twitter",
    link: "https://x.com/AyushKanka74608",
    external: true,
  },
  {
    id: 6,
    icon: <Github size={24} />,
    label: "GitHub",
    link: "https://github.com/dev-code-create",
    external: true,
  },
];

export default function FloatingNavbar() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex bg-black bg-opacity-80 backdrop-blur-lg px-4 py-3 rounded-full space-x-4 shadow-lg"
      >
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center group"
          >
            {item.external ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                  whileHover={{ scale: 1.2, opacity: 1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
              </a>
            ) : (
              <Link to={item.link} className="block">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                  whileHover={{ scale: 1.2, opacity: 1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
              </Link>
            )}
            <span className="absolute bottom-16 flex items-center justify-center bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
