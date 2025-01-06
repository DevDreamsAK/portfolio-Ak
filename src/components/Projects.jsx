import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for child elements
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
        Projects
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="mb-8 flex flex-wrap lg:justify-center lg:items-center bg-neutral-800 p-6 rounded-lg hover:shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Project Image */}
            <motion.div
              className="w-full lg:w-1/4"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg"
              />
            </motion.div>
            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="mb-2 text-lg font-semibold text-white"
                whileHover={{ color: "#4F46E5" }}
              >
                {project.title}
              </motion.h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#4F46E5",
                      color: "#FFFFFF",
                    }}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
