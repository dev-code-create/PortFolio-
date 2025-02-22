import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then((result) => {
        setSubmitStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect! 🤝
      </motion.h2>
      <p className="text-gray-400 mb-8 text-center">
        Feel free to reach out! Whether it's a project, collaboration, or just a
        chat, I'm always happy to connect.
      </p>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="user_name"
          id="name"
          required
          className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          id="email"
          required
          className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          name="message"
          id="message"
          required
          className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Sending..." : "Send Message 🚀"}
        </motion.button>

        {submitStatus === "success" && (
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </motion.form>

      {/* Contact Info & Socials */}
      <div className="flex space-x-6 mt-6">
        <a
          href="mailto:ayushkankale04@gmail.com"
          className="hover:text-blue-400 transition"
        >
          <Mail size={24} />
        </a>
        <a href="tel:+919284582601" className="hover:text-blue-400 transition">
          <Phone size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ayush-kankale"
          className="hover:text-blue-400 transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/dev-code-create"
          className="hover:text-blue-400 transition"
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
