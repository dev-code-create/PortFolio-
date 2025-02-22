import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingStars = () => {
  const groupRef = useRef();

  useFrame(() => {
    // Rotates the stars continuously on the Y-axis
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // Adjust speed here
    }
  });

  return (
    <group ref={groupRef}>
      <Stars />
    </group>
  );
};

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
      }}
    >
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.3} />

      {/* Rotating Stars */}
      <RotatingStars />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeBackground;
