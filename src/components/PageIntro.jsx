import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-none select-none"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] } 
          }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-3xl xs:text-4xl sm:text-7xl font-display font-black tracking-tight text-white flex items-center justify-center gap-2 flex-wrap text-center px-4"
            >
              <span>MOHAMED</span>
              <span className="text-[#a3e635]">AMINE</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
              className="h-1 bg-[#a3e635] mt-4 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 mt-3"
            >
              PORTFOLIO ©2026
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
