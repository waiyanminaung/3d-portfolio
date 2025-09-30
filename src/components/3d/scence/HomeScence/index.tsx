import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Me } from "@3d/characters";

export default function HomeScence() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 9, near: 0.1 }}>
      <Suspense fallback={null}>
        <Me scale={1} position={[0, -1.7, 1.0]} rotation={[0, 0.4, 0]} />

        {/* Lights */}
        <ambientLight intensity={2} />
      </Suspense>
    </Canvas>
  );
}
