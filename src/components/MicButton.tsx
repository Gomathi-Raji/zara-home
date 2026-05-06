import { motion } from "framer-motion";
import { Mic } from "lucide-react";

interface MicButtonProps {
  isActive: boolean;
  onToggle: () => void;
  accentHue?: number;
}

const MicButton = ({ isActive, onToggle, accentHue = 190 }: MicButtonProps) => {
  const glowColor = `hsla(${accentHue}, 90%, 68%, 0.45)`;
  const innerGlow = `hsla(${accentHue}, 90%, 68%, 0.2)`;

  return (
    <motion.button
      onClick={onToggle}
      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/40 text-foreground backdrop-blur-xl transition-all duration-500 overflow-hidden"
      style={{ 
        boxShadow: isActive ? `0 0 40px ${glowColor}, inset 0 0 20px ${innerGlow}` : "0 4px 20px rgba(0,0,0,0.5), inset 0 0 0 transparent" 
      }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
      whileTap={{ scale: 0.9, backgroundColor: "rgba(0,0,0,0.7)" }}
      animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
      transition={isActive ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { type: "spring", stiffness: 400, damping: 25 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: `radial-gradient(circle, ${innerGlow} 0%, transparent 70%)` }}
          animate={{ scale: [0.8, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <Mic className="relative z-10 h-6 w-6 text-white/80 drop-shadow-md transition-colors" />
    </motion.button>
  );
};

export default MicButton;
