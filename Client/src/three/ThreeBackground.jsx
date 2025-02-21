import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        // Prevent interaction with the canvas
      }}
    >
      <Stars />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeBackground;
