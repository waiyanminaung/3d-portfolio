export default function DetailLighting() {
  return (
    <>
      <directionalLight position={[-3, -1, 1]} intensity={6} color="#FFDAB9" />
      <hemisphereLight intensity={0.3} />
      <ambientLight intensity={1} />
    </>
  );
}
