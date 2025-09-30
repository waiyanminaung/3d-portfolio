import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Me } from "@3d/characters";

export default function HomeScence() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Me scale={1} />
      </Suspense>
    </Canvas>
  );
}
