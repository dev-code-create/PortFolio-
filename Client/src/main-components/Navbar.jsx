import { motion } from "framer-motion";
import {
  Home,
  LayoutGrid,
  Book,
  Linkedin,
  Instagram,
  X,
  Github,
} from "lucide-react";

const navItems = [
  { id: 1, icon: <Home size={24} />, label: "Home", link: "#home" },
  {
    id: 2,
    icon: <LayoutGrid size={24} />,
    label: "Projects",
    link: "#projects",
  },
  { id: 3, icon: <Book size={24} />, label: "Blog", link: "#blog" },
  {
    id: 4,
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    id: 5,
    icon: <Instagram size={24} />,
    label: "Instagram",
    link: "https://instagram.com",
  },
  {
    id: 6,
    icon: <X size={24} />,
    label: "Twitter",
    link: "https://twitter.com",
  },
  {
    id: 7,
    icon: <Github size={24} />,
    label: "GitHub",
    link: "https://github.com",
  },
];

export default function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex bg-black bg-opacity-80 backdrop-blur-lg px-4 py-3 rounded-full space-x-4 shadow-lg"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            whileHover={{ scale: 1.2, opacity: 1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duratiom: 0.2 }}
          >
            {item.icon}
            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1, y: -1 }}
              transition={{ duration: 0.2 }}
              className="absolute  bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 "
            >
              {item.label}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
