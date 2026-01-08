import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Petal {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function FloatingPetals() {
  const petals = useMemo<Petal[]>(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: -20,
            width: petal.size,
            height: petal.size,
          }}
          initial={{ y: -20, rotate: petal.rotation, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50],
            rotate: [petal.rotation, petal.rotation + 720],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <path
              d="M10 0C10 0 15 5 15 10C15 15 10 20 10 20C10 20 5 15 5 10C5 5 10 0 10 0Z"
              fill="hsl(350, 70%, 85%)"
              opacity={0.6}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
