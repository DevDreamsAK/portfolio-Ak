import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aks.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Profile = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-16 bg-gradient-to-b from-gray-900 to-black text-white rounded-xl overflow-hidden">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-8 lg:px-16">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left pb-6 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl"
            >
              <span className="text-blue-500">Akash Ahamed</span>
            </motion.h1>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-3xl tracking-wide text-transparent mb-6"
            >
              BSc in Computer Science
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-wide text-gray-300 text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* <motion.a
              href="/path/to/your/resume.pdf" // Replace with actual resume path
              download="Akash_Ahamed_Resume.pdf"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3b82f6",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-600"
            >
              Download Resume
            </motion.a> */}
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative">
            {/* Profile Image */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={profilePic}
              alt="Profile"
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
            />

            {/* Decorative Glow Effect */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="absolute w-80 h-80 lg:w-[400px] lg:h-[400px] bg-blue-500 rounded-full blur-3xl opacity-30 -top-10 -left-10"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
