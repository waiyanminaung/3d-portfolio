import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Me } from "@3d/characters";
import DetailLighting from "./Lighting";
import useDeviceSize from "@/hooks/useDeviceSize";

export default function HomeScence() {
  const [position, setPosition] = useState<[number, number, number]>([
    0, -1.7, 1.0,
  ]);

  const { width, height } = useDeviceSize();

  useEffect(() => {
    const dynamicPosition = width > 767 ? [0, -1.7, 1.0] : [0.1, -1.7, 1.0];

    setPosition(dynamicPosition as [number, number, number]);
  }, [width, height]);

  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 9, near: 0.1 }}>
      <Suspense fallback={null}>
        <Me scale={1} position={position} rotation={[0, 0.4, 0]} />

        {/* Lights */}
        <DetailLighting />
      </Suspense>
    </Canvas>
  );
}
