import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center>
      <div className="flex flex-col items-center gap-3">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
        <p className="font-sans text-xs tracking-widest text-gold">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
