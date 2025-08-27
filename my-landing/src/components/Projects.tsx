import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 🎲 Floating Cubes
type FloatingCubeProps = {
  position: [number, number, number]; // strictly a 3D vector
};

function FloatingCube({ position }: FloatingCubeProps) {
  return (
    <mesh position={position} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"cyan"} wireframe />
    </mesh>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        {/* Scatter a few floating cubes */}
        <FloatingCube position={[-4, 2, -2]} />
        <FloatingCube position={[3, -1, -3]} />
        <FloatingCube position={[0, 3, -4]} />
        <FloatingCube position={[-2, -2, -5]} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl px-6 text-center space-y-10">
        {/* Title */}
        <h2 className="text-5xl font-bold text-cyan-300 flex items-center justify-center gap-3">
          <i className="bx bx-code-block text-6xl"></i> Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-black/60 p-6 rounded-2xl border border-cyan-400 shadow-lg hover:scale-105 transition transform">
            <i className="bx bx-joystick text-cyan-400 text-4xl mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">Horror Game</h3>
            <p className="text-gray-300 text-sm">
              A first-person horror game inspired by “Fears to Fathom,” built
              with Unity & custom assets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/60 p-6 rounded-2xl border border-purple-400 shadow-lg hover:scale-105 transition transform">
            <i className="bx bx-world text-purple-400 text-4xl mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-300 text-sm">
              Modern 3D interactive portfolio built with React, TailwindCSS,
              Three.js, and animations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/60 p-6 rounded-2xl border border-cyan-400 shadow-lg hover:scale-105 transition transform">
            <i className="bx bx-brain text-cyan-400 text-4xl mb-3"></i>
            <h3 className="text-xl font-semibold mb-2">PeaceCore AI</h3>
            <p className="text-gray-300 text-sm">
              A local AI assistant project focusing on peace, freedom &
              understanding with LM Studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
