import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TorusKnot() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusKnotGeometry args={[2, 0.5, 200, 32]} />
      <meshStandardMaterial color={"cyan"} wireframe />
    </mesh>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <TorusKnot />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl px-6 text-center space-y-6 bg-black/50 p-6 rounded-2xl">
        <img
          src="/Gokul.jpg"
          alt="Profile"
          className="w-36 h-36 mx-auto object-cover rounded-full border-4 border-cyan-400 shadow-lg"
        />
        <h2 className="text-4xl font-bold text-cyan-300">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Hi, I’m <span className="text-cyan-400 font-semibold">Gokula Kumaran S</span>,
          a passionate <span className="text-cyan-400">game & full-stack developer</span>.
          I create immersive experiences, from modern 3D games in Unity to
          interactive web applications. My journey is driven by creativity,
          storytelling, and the power of technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-xl">
            Unity
          </span>
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-xl">
            Blender
          </span>
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-xl">
            React
          </span>
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-xl">
            C# / C++ / Python
          </span>
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-xl">
            Full-Stack
          </span>
        </div>
      </div>
    </section>
  );
}
