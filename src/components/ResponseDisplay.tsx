import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResponseDisplayProps {
  text: string;
  subtext?: string | null;
}

const ResponseDisplay = ({ text, subtext }: ResponseDisplayProps) => {
  if (!text || text.trim() === "") {
    return null;
  }

  return (
    <div className="absolute bottom-24 z-10 flex w-full flex-col items-center px-6 text-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)", scale: 0.96 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -16, filter: "blur(8px)", scale: 0.96 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl rounded-2xl bg-black/10 px-6 py-4 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-foreground/95 drop-shadow-md">
            {text}
          </p>
          {subtext && (
            <motion.p
              className="mt-2 text-xs sm:text-sm font-light tracking-wider text-muted-foreground/80 drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {subtext}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResponseDisplay;
