import { motion } from "motion/react";
import {
  Home,
  LayoutGrid,
  Linkedin,
  Instagram,
  Twitter,
  Github,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, icon: <Home size={22} />, label: "Home", link: "/" },
  {
    id: 2,
    icon: <LayoutGrid size={22} />,
    label: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/ayush-kankale",
    external: true,
  },
  {
    id: 4,
    icon: <Instagram size={22} />,
    label: "Instagram",
    link: "https://instagram.com/ayush_kankale",
    external: true,
  },
  {
    id: 5,
    icon: <Twitter size={22} />,
    label: "Twitter",
    link: "https://x.com/AyushKanka74608",
    external: true,
  },
  {
    id: 6,
    icon: <Github size={22} />,
    label: "GitHub",
    link: "https://github.com/dev-code-create",
    external: true,
  },
];

export default function FloatingNavbar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex bg-black bg-opacity-80 backdrop-blur-lg px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg space-x-2 sm:space-x-4"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.link;

          return (
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
                    className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full ${
                      isActive ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
                    } text-white transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </a>
              ) : (
                <Link to={item.link} className="block">
                  <motion.div
                    className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full ${
                      isActive ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
                    } text-white transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </Link>
              )}
              <span className="absolute bottom-14 sm:bottom-16 flex items-center justify-center bg-red-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
