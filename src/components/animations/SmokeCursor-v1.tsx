// components/SmokeCursor.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

interface SmokeParticleProps {
  particleId: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  initialVelocityX: number;
  initialVelocityY: number;
  fadeDuration: number;
  color: string; // Add a color prop
}

const SmokeParticle: React.FC<SmokeParticleProps> = ({
  particleId,
  x,
  y,
  size,
  opacity,
  rotation,
  initialVelocityX,
  initialVelocityY,
  fadeDuration,
  color,
}) => {
  const motionX = useMotionValue(x);
  const motionY = useMotionValue(y);
  const motionOpacity = useMotionValue(opacity);
  const motionScale = useMotionValue(size);
  const motionRotation = useMotionValue(rotation);

  useEffect(() => {
    void motionX.start({
      // @ts-expect-error
      x: x + initialVelocityX * 8, // Slightly less horizontal movement
      transition: { duration: 0.4 }, // Faster
    });
    void motionY.start({
      // @ts-expect-error
      y: y + initialVelocityY * 8, // Slightly less vertical movement
      transition: { duration: 0.4 }, // Faster
    });
    void motionScale.start({
      // @ts-expect-error
      scale: size * 1.2, // Less expansion
      transition: { duration: 0.4 }, // Faster
    });
    void motionOpacity.start({
      // @ts-expect-error
      opacity: 0,
      transition: { duration: fadeDuration },
    });
    void motionRotation.start({
      // @ts-expect-error
      rotate: rotation + (Math.random() - 0.5) * 60, // Less rotation
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
      key={particleId}
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
        backgroundColor: color, // Use the dynamic color
        filter: "blur(5px)", // Increased blur
      }}
    />
  );
};

const SmokeCursor: React.FC = () => {
  const particleCounter = useRef(0);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  const spawnParticles = useCallback((x: number, y: number) => {
    const numberOfParticles = 8;

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 6 + 2;
      const opacity = Math.random() * 0.5 + 0.3;
      const rotation = (Math.random() - 0.5) * 180;
      const initialVelocityX = (Math.random() - 0.5) * 15;
      const initialVelocityY = -(Math.random() * 20 + 5);
      const fadeDuration = Math.random() * 0.4 + 0.3;
      const particleId = `smoke-particle-${particleCounter.current++}`;
      const grayScale1 = Math.floor(Math.random() * 50 + 100);
      const grayScale2 = Math.floor(Math.random() * 50 + 1000);
      const grayScale3 = Math.floor(Math.random() * 10 + 100);
      const color = `rgba(${grayScale1}, ${grayScale2}, ${grayScale3}, ${opacity})`;

      const newParticle = (
        <SmokeParticle
          key={particleId}
          particleId={particleId}
          x={x + (Math.random() - 0.5) * 10}
          y={y + (Math.random() - 0.5) * 10}
          size={size}
          opacity={1}
          rotation={rotation}
          initialVelocityX={initialVelocityX}
          initialVelocityY={initialVelocityY}
          fadeDuration={fadeDuration}
          color={color}
        />
      );

      setParticles((prevParticles) => [...prevParticles, newParticle]);

      setTimeout(
        () => {
          setParticles((prevParticles) =>
            prevParticles.filter(
              (p) => (p as React.ReactElement).key !== particleId,
            ),
          );
        },
        fadeDuration * 1000 + 500,
      );
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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
