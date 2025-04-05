// components/SmokeCursor.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

interface SmokeParticleProps {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  initialVelocityX: number;
  initialVelocityY: number;
  fadeDuration: number;
}

const SmokeParticle: React.FC<SmokeParticleProps> = ({
  x,
  y,
  size,
  opacity,
  rotation,
  initialVelocityX,
  initialVelocityY,
  fadeDuration,
}) => {
  const motionX = useMotionValue(x);
  const motionY = useMotionValue(y);
  const motionOpacity = useMotionValue(opacity);
  const motionScale = useMotionValue(size);
  const motionRotation = useMotionValue(rotation);

  useEffect(() => {
    void motionX.start({
      // @ts-expect-error
      x: x + initialVelocityX * 10,
      transition: { duration: 0.5 },
    });
    void motionY.start({
      // @ts-expect-error
      y: y + initialVelocityY * 10,
      transition: { duration: 0.5 },
    });
    void motionScale.start({
      // @ts-expect-error
      scale: size * 1.5,
      transition: { duration: 0.5 },
    });
    void motionOpacity.start({
      // @ts-expect-error
      opacity: 0,
      transition: { duration: fadeDuration },
    });
    void motionRotation.start({
      // @ts-expect-error
      rotate: rotation + (Math.random() - 0.5) * 90,
      transition: { duration: fadeDuration },
    });
  }, [
    x,
    y,
    size,
    opacity,
    rotation,
    initialVelocityX,
    initialVelocityY,
    fadeDuration,
    motionX,
    motionY,
    motionOpacity,
    motionScale,
    motionRotation,
  ]);

  return (
    <motion.div
      key={Math.random().toLocaleString()}
      style={{
        position: "fixed",
        pointerEvents: "none",
        left: 0,
        top: 0,
        x: motionX,
        y: motionY,
        scale: motionScale,
        opacity: motionOpacity,
        rotate: motionRotation,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "rgba(100, 100, 100, 0.8)",
        filter: "blur(3px)",
      }}
    />
  );
};

const SmokeCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const particleCounter = useRef(0);

  const spawnParticles = useCallback((x: number, y: number) => {
    const numberOfParticles = 5;

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 8 + 4;
      const opacity = Math.random() * 0.6 + 0.4;
      const rotation = (Math.random() - 0.5) * 360;
      const initialVelocityX = (Math.random() - 0.5) * 20;
      const initialVelocityY = -(Math.random() * 30 + 10);
      const fadeDuration = Math.random() * 0.5 + 0.5;

      const newParticle = (
        <SmokeParticle
          key={particleCounter.current++}
          x={x}
          y={y}
          size={size}
          opacity={opacity}
          rotation={rotation}
          initialVelocityX={initialVelocityX}
          initialVelocityY={initialVelocityY}
          fadeDuration={fadeDuration}
        />
      );

      setParticles((prevParticles) => [...prevParticles, newParticle]);

      setTimeout(
        () => {
          setParticles((prevParticles) =>
            prevParticles.filter(
              (p) => (p as React.ReactElement).key !== newParticle.key,
            ),
          );
        },
        fadeDuration * 1000 + 600,
      );
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      spawnParticles(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [spawnParticles]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {particles}
    </div>
  );
};

export default SmokeCursor;
