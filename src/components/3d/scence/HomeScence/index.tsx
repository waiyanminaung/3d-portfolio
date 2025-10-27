import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Me } from "@3d/characters";
import DetailLighting from "./Lighting";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Html, useProgress } from "@react-three/drei";
import type { Mesh } from "three";

function Loader3D() {
  const { active, progress } = useProgress();
  const ref = useRef<Mesh | null>(null);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      {active && (
        <Html center style={{ pointerEvents: "none" }}>
          <div style={{ color: "white", fontWeight: 600 }}>
            {Math.round(progress)}%
          </div>
        </Html>
      )}
    </mesh>
  );
}

export default function HomeScence() {
  const [position, setPosition] = useState<[number, number, number]>([
    0, -1.7, 1.0,
  ]);

  const { width, height } = useDeviceSize();

  useEffect(() => {
    const dynamicPosition = width > 767 ? [0, -1.7, 1.0] : [0.09, -1.7, 1.0];

    setPosition(dynamicPosition as [number, number, number]);
  }, [width, height]);

  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 9, near: 0.1 }}>
      <Suspense fallback={<Loader3D />}>
        <Me scale={1} position={position} rotation={[0, 0.4, 0]} />

        {/* Lights */}
        <DetailLighting />
      </Suspense>
    </Canvas>
  );
}
