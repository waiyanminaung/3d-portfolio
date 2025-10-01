export default function DetailLighting() {
  return (
    <>
      <directionalLight position={[-2, 2, 4]} intensity={5} color="#FFDAB9" />
      <hemisphereLight intensity={0.3} />
      <ambientLight intensity={1} />
    </>
  );
}
