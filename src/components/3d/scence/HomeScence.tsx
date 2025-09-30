import { Canvas } from "@react-three/fiber";
import { Me } from "../characters";

export default function HomeScence() {
  return (
    <Canvas>
      <Me scale={0.5} />
    </Canvas>
  );
}
