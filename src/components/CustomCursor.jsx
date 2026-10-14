import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'hover' | 'voir'

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="voir"]');
      if (projectCard) {
        setCursorMode('voir');
        return;
      }

      const interactive = target.closest('a, button, [role="button"], input, textarea');
      if (interactive) {
        setCursorMode('hover');
        return;
      }

      setCursorMode('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#10d9a0',
      transition: { type: 'spring', damping: 28, stiffness: 400, mass: 0.1 }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(16, 217, 160, 0.25)',
      border: '1.5px solid #10d9a0',
      transition: { type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }
    },
    voir: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      backgroundColor: '#10d9a0',
      transition: { type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      animate={cursorMode}
      variants={variants}
    >
      {cursorMode === 'voir' && (
        <span className="text-[11px] font-black tracking-widest text-black uppercase font-display select-none">
          VOIR
        </span>
      )}
    </motion.div>
  );
}
