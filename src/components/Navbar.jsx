import logo from "../assets/ak.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const hoverEffect = { scale: 1.2, color: "#4F46E5" }; // Interactive hover effect

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20 flex items-center justify-between py-6 bg-neutral-900 shadow-md"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-2 w-16 h-16" // Increased size for better visibility
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Social Media Links */}
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/akash-ahamed-1629521a1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={hoverEffect}
          transition={{ duration: 0.3 }}
          className="text-gray-500 hover:text-blue-600"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/DevDreamsAK"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={hoverEffect}
          transition={{ duration: 0.3 }}
          className="text-gray-500 hover:text-gray-800"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://x.com/AKASH53079665"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          whileHover={hoverEffect}
          transition={{ duration: 0.3 }}
          className="text-gray-500 hover:text-blue-400"
        >
          <FaTwitterSquare />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/akahins/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          whileHover={hoverEffect}
          transition={{ duration: 0.3 }}
          className="text-gray-500 hover:text-pink-500"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
