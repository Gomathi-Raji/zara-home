import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Orb from "@/components/Orb";

type OrbState = "idle" | "listening" | "thinking" | "speaking";

interface ZaraCoreProps {
  state: OrbState;
  audioStream?: MediaStream | null;
  visuals?: { hue: number; intensity: number; reactivity: number; dimmed?: boolean };
  title?: string;
  subtitle?: string | null;
}

const ZaraCore = ({ state, audioStream, visuals, title = "Hello, I'm ZARA.", subtitle }: ZaraCoreProps) => {
  const isActive = state !== "idle";

  return (
    <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1],
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="flex items-center justify-center"
      >
        <Orb state={state} audioStream={audioStream} visuals={visuals} />
      </motion.div>

      <AnimatePresence mode="wait">
        {!isActive && !!title && (
          <motion.div
            key="greeting"
            className="absolute bottom-32 z-20 flex w-full flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="max-w-[16rem] text-2xl font-semibold tracking-tight leading-tight text-foreground/95 sm:max-w-none md:text-4xl drop-shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {title}
            </motion.h2>
            {subtitle !== undefined && subtitle !== null && (
              <motion.p
                className="mt-3 max-w-[20rem] text-sm font-medium tracking-wide text-muted-foreground/80 sm:max-w-none sm:text-base drop-shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZaraCore;
