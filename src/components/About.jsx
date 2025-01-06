import akImg from "../assets/akclr.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-16 relative bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
      <div className="relative z-10">
        <h1 className="text-center text-5xl font-extrabold text-white py-8 relative">
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 opacity-30 blur-sm rounded-xl"></span>
        <span className="relative z-10 text-shadow-md">About Me</span>
        </h1>
        <span className="block text-center text-neutral-300 mb-8 text-xl font-light relative">
          <span className="absolute inset-0 bg-gradient-to-l from-pink-500 to-purple-500 opacity-30 blur-sm rounded-xl"></span>
          <span className="relative z-10 text-shadow-md">A glimpse into my world</span>
        </span>

        <div className="flex flex-wrap lg:justify-center lg:items-center">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                src={akImg}
                alt="about"
                className="max-w-[80%] lg:max-w-[70%] h-auto rounded-3xl shadow-lg border-4 border-white"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-3xl"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="max-w-xl text-justify text-white leading-relaxed text-lg font-light tracking-wide">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
