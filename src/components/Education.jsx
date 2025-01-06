import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for each child
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, color: "#4F46E5" }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold"
      >
        Education
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {EDUCATION.map((edu, ind) => (
          <motion.div
            key={ind}
            variants={item}
            className="mb-8 flex flex-wrap lg:justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{edu.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <span className="text-lg font-semibold">{edu.course}</span>{" "}
              <span className="text-sm text-neutral-500">at</span>{" "}
              <span className="text-lg font-medium text-blue-600">
                {edu.institute}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
