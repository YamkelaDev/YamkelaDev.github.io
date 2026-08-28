import { Suspense, useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Preload } from "@react-three/drei";
import type { Group, Mesh } from "three";
import CanvasLoader from "./CanvasLoader";

type ComputerFrameProps = {
  children: ReactNode;
};

/**
 * A stylized, procedurally-built 3D monitor + stand (not a downloaded
 * model) with an HTML screen embedded in 3D space via drei's <Html
 * transform>. Used to present project content "inside" a 3D computer.
 */
const Monitor = ({ children }: ComputerFrameProps) => {
  const group = useRef<Group>(null);
  const screen = useRef<Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.25) * 0.12;
    group.current.position.y = -0.05 + Math.sin(t * 0.5) * 0.03;
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.35} groundColor="#0e1318" />
      <pointLight position={[2, 3, 3]} intensity={1.3} color="#e8b84b" />
      <pointLight position={[-3, -1, -2]} intensity={0.5} color="#4a9e30" />

      {/* monitor bezel */}
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 2.1, 0.12]} />
        <meshStandardMaterial color="#141b20" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* screen (emissive frame, Html rendered on top) */}
      <mesh ref={screen} position={[0, 0.55, 0.07]}>
        <planeGeometry args={[3.32, 1.84]} />
        <meshStandardMaterial
          color="#080c10"
          emissive="#0e1318"
          emissiveIntensity={0.6}
        />
      </mesh>

      <Html
        transform
        occlude
        position={[0, 0.55, 0.075]}
        distanceFactor={1.45}
        style={{ pointerEvents: "auto" }}
      >
        <div className="w-[720px] h-[400px] overflow-hidden rounded-[4px]">
          {children}
        </div>
      </Html>

      {/* stand neck */}
      <mesh position={[0, -0.75, -0.05]} castShadow>
        <boxGeometry args={[0.2, 0.9, 0.2]} />
        <meshStandardMaterial color="#0e1318" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* base */}
      <mesh position={[0, -1.22, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.08, 0.75]} />
        <meshStandardMaterial color="#0e1318" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* subtle gold rim accent */}
      <mesh position={[0, 0.55, -0.04]}>
        <boxGeometry args={[3.66, 2.16, 0.02]} />
        <meshStandardMaterial
          color="#c9972b"
          emissive="#c9972b"
          emissiveIntensity={0.15}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
};

const ComputerFrameCanvas = ({ children }: ComputerFrameProps) => (
  <Canvas
    shadows
    dpr={[1, 1.6]}
    camera={{ position: [0, 0.4, 5.4], fov: 32 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <Monitor>{children}</Monitor>
    </Suspense>
    <Preload all />
  </Canvas>
);

export default ComputerFrameCanvas;
