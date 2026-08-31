import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Preload } from "@react-three/drei";
import type { Group } from "three";
import CanvasLoader from "./CanvasLoader";
import { useIsMobile, usePointer } from "../../hooks/usePointer";

type ComputersProps = {
  isMobile: boolean;
};

const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("/models/desktop_pc/scene.gltf");
  const rig = useRef<Group>(null);
  const pointer = usePointer();

  useFrame((state) => {
    if (!rig.current) return;
    const targetY = pointer.current.x * 0.5;
    const targetX = pointer.current.y * 0.15;
    rig.current.rotation.y += (targetY - rig.current.rotation.y) * 0.04;
    rig.current.rotation.x += (targetX - rig.current.rotation.x) * 0.04;
    // gentle idle bob so the scene never feels static
    rig.current.position.y =
      (isMobile ? -1.35 : -1.5) + Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
  });

  return (
    <group ref={rig}>
      <hemisphereLight intensity={0.35} groundColor="#151030" />
      <pointLight intensity={1.1} position={[0, 3, 2]} color="#00d3f2" />
      <spotLight
        position={[-6, 8, 4]}
        angle={0.28}
        penumbra={1}
        intensity={2.4}
        color="#915eff"
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.85 : 1.02}
        position={isMobile ? [0, -1.2, -1.5] : [0, -1.6, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const isMobile = useIsMobile();

  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [18, 2.6, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
