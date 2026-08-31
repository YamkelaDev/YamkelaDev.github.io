import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import type { Group } from "three";
import CanvasLoader from "./CanvasLoader";

const PlanetModel = () => {
  const planet = useGLTF("/models/planet/scene.gltf");
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.4} groundColor="#151030" />
      <directionalLight position={[3, 4, 3]} intensity={1.1} color="#b99cff" />
      <pointLight position={[-3, -2, -3]} intensity={0.4} color="#00d3f2" />
      <primitive object={planet.scene} scale={1.9} position={[0, 0, 0]} />
    </group>
  );
};

const PlanetCanvas = () => (
  <Canvas
    frameloop="always"
    dpr={[1, 1.6]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 5.2] }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
      <PlanetModel />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default PlanetCanvas;
