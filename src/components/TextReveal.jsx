import React from 'react';
import { motion } from 'motion/react';

export default function TextReveal({ text, delay = 0, className = "" }) {
  if (!text) return null;

  const words = text.split(" ");
  
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] pb-[0.1em] -mb-[0.1em]">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
              delay: delay + (i * 0.05) 
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RevealLine({ children, delay = 0, className = "" }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] ${className}`}>
      <motion.span
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className="inline-block w-full"
      >
        {children}
      </motion.span>
    </span>
  );
}
