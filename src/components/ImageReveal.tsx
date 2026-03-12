import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ImageReveal = ({ children, className = "", delay = 0 }: ImageRevealProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-accent z-10"
        initial={{ y: "0%" }}
        whileInView={{ y: "-101%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

export default ImageReveal;
