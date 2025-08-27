import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles() {
  const mesh = useRef<any>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  // Create random positions for points
  const positions = new Float32Array(5000)
    .map(() => (Math.random() - 0.5) * 20);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} // <-- FIX: args instead of count/array/itemSize
        />
      </bufferGeometry>
      <pointsMaterial color="cyan" size={0.05} />
    </points>
  );
}

export default function ThreeBg() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}
