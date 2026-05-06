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
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <Orb state={state} audioStream={audioStream} visuals={visuals} />
      </motion.div>

      <AnimatePresence mode="wait">
        {!isActive && (
          <motion.div
            key="greeting"
            className="absolute top-1/2 z-20 flex w-full flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
          >
            <motion.h2
              className="max-w-[16rem] text-xl font-medium leading-tight text-foreground/95 sm:max-w-none sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            {subtitle !== undefined && subtitle !== null && (
              <motion.p
                className="mt-2 max-w-[20rem] text-sm font-light leading-relaxed text-muted-foreground/60 sm:max-w-none sm:text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
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
