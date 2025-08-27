import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingModel() {
  return (
    <mesh>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial
        color="cyan"
        emissive="blue"
        emissiveIntensity={1.5}
        metalness={0.7}
        roughness={0.1}
      />
    </mesh>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* 3D Background */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <FloatingModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      {/* Glassmorphism Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center p-10 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl text-center text-white max-w-xl w-full"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-cyan-300 mb-8 flex items-center justify-center gap-3">
          <i className="bx bx-envelope text-5xl"></i> Contact Me
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 text-lg w-full">
          <a
            href="mailto:gokulakumaran2007@gmail.com"
            className="flex items-center justify-center gap-3 text-cyan-400 hover:text-purple-400"
          >
            <i className="bx bx-envelope text-2xl"></i>
            gokulakumaran2007@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/gokula-kumaran-503545328"
            target="_blank"
            className="flex items-center justify-center gap-3 text-cyan-400 hover:text-purple-400"
          >
            <i className="bx bxl-linkedin text-2xl"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/sGokulaKumaran"
            target="_blank"
            className="flex items-center justify-center gap-3 text-cyan-400 hover:text-purple-400"
          >
            <i className="bx bxl-github text-2xl"></i>
            GitHub
          </a>
          <a
            href="tel:+917373980805"
            className="flex items-center justify-center gap-3 text-cyan-400 hover:text-purple-400"
          >
            <i className="bx bx-phone text-2xl"></i>
            +91 73739 80805
          </a>
        </div>
      </motion.div>
    </section>
  );
}
