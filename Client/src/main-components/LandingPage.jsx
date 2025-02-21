import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
export default function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Ayush Kankale</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400 mb-6 max-w-xl"
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
      >
        <Button className="px-6 bg-blue-500 text-lg hover:bg-blue-600 shadow-lg rounded-lg">
          Hire Me
        </Button>
        <Button className="px-6 bg-gray-500 text-lg hover:bg-gray-600 shadow-lg rounded-lg ml-3 border-2 border-gray-500 hover:text-red-200 ">
          Resume
        </Button>
      </motion.div>
    </div>
  );
}
