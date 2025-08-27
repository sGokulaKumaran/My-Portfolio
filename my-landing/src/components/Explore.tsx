import { motion } from "framer-motion";

export default function Explore() {
  return (
    <section
      id="explore"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Explore Me
      </motion.h2>

      <p className="text-lg mb-6 text-center">
        Want to collaborate or just say hi? Reach out through the links below!
      </p>

      <div className="flex gap-8 text-4xl">
        <a href="gokulakumaran2007@gmail.com">
          <i className="bx bx-envelope hover:text-cyan-400"></i>
        </a>
        <a href="https://github.com/sGokulaKumaran" target="_blank" rel="noreferrer">
          <i className="bx bxl-github hover:text-cyan-400"></i>
        </a>
        <a href="http://www.linkedin.com/in/gokula-kumaran-503545328" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin-square hover:text-cyan-400"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter hover:text-cyan-400"></i>
        </a>
      </div>
    </section>
  );
}
