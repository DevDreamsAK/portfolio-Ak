// import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, color: "#4F46E5" }} // Interactive hover effect
        className="my-10 text-center text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold"
      >
        Get In Touch
      </motion.h1>

      {/* Social Media Icons with Motion */}
      <div className="mt-10 flex justify-center gap-6 text-2xl">
        {[
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/your-linkedin-profile",
            color: "text-blue-600",
            hoverColor: "hover:text-blue-800",
          },
          {
            icon: <FaGithub />,
            link: "https://github.com/your-github-profile",
            color: "text-gray-600",
            hoverColor: "hover:text-black",
          },
          {
            icon: <FaTwitterSquare />,
            link: "https://twitter.com/your-twitter-handle",
            color: "text-blue-400",
            hoverColor: "hover:text-blue-600",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/your-instagram-handle",
            color: "text-pink-500",
            hoverColor: "hover:text-pink-700",
          },
        ].map(({ icon, link, color, hoverColor }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} ${hoverColor}`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Akash Ahamed. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
