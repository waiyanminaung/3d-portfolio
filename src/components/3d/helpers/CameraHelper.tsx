// import { useFrame, useThree } from "@react-three/fiber";

export default function CameraHelper() {
  // get camera data
  //   const { camera } = useThree();
  //   const { position, rotation } = camera;

  //   useFrame(() => {
  //     console.log("camera position", position);
  //     console.log("camera rotation", rotation);
  //   });

  return (
    <>
      <gridHelper args={[10, 10]} />
      <axesHelper args={[5]} />
    </>
  );
}
