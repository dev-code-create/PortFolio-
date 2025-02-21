import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const NavOptions = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        {/* <motion.div></motion.div> */}
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {NavOptions.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.dev
          className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {NavOptions.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </motion.dev>
      )}
    </nav>
  );
}
