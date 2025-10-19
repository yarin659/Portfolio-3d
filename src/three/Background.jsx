import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// גוונים רכים של זהב - פחות בוהקים
const GOLD_COLORS = ["#E5C158", "#D4AF37", "#C9A227", "#B08D2F"];

function GoldParticles() {
  const ref = useRef();
  const count = 350;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = THREE.MathUtils.randFloat(1.5, 5);
      const angle = Math.random() * Math.PI * 2;
      const y = THREE.MathUtils.randFloatSpread(3);
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      color.set(GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)]);
      arr[i * 3] = color.r;
      arr[i * 3 + 1] = color.g;
      arr[i * 3 + 2] = color.b;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.12) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.04}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function BreathingLight({ mouseRef }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current && mouseRef.current) {
      const { x, y } = mouseRef.current;
      const t = state.clock.elapsedTime;

      // תנועה רכה
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x * 3, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y * 2, 0.05);

      // "נשימה" רכה יותר
      const breathing = 1.8 + Math.sin(t * 1.3) * 0.3 + Math.sin(t * 0.4) * 0.15;
      ref.current.intensity = breathing;

      // זהב רך ולא מסנוור
      ref.current.color.set("#E2BF5A");
    }
  });

  return (
    <>
      <pointLight ref={ref} intensity={2} distance={6} decay={2} color="#E2BF5A" />
      <pointLight position={[0, 0, -3]} intensity={0.2} color="#D4AF37" />
    </>
  );
}

export default function Background() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  };

  return (
    <div className="bg-canvas" aria-hidden onMouseMove={handleMouseMove}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 60 }}>
        {/* רקע שחור אלגנטי נקי */}
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />

        {/* תאורה נושמת רכה */}
        <BreathingLight mouseRef={mouseRef} />
        <GoldParticles />

        {/* אפקט זוהר מעודן */}
        <EffectComposer>
          <Bloom
            intensity={0.9}              // ↓ פחות עוצמתי
            luminanceThreshold={0.15}    // ↓ רק האזורים הבהירים באמת יזהרו
            luminanceSmoothing={0.95}    // ↑ מעבר חלק מאוד
            height={240}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
