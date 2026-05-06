import { LayoutDashboard, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

import type { PresenceMode, ResponseMode } from "@/lib/settings";

interface TopBarProps {
  mode: ResponseMode;
  presence: PresenceMode;
  homeAutomation?: boolean;
  continuousLoop?: boolean;
  onOpenDashboard: () => void;
  onOpenSettings: () => void;
}

const modeLabel: Record<ResponseMode, string> = {
  online: "Online",
  smart: "Smart",
  offline: "Offline",
};

const topBarVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};

const TopBar = ({
  mode,
  presence,
  homeAutomation = false,
  continuousLoop = false,
  onOpenDashboard,
  onOpenSettings,
}: TopBarProps) => {
  return (
    <motion.div 
      variants={topBarVariants}
      initial="hidden"
      animate="show"
      className="fixed left-0 right-0 top-0 z-20 flex items-start justify-between gap-3 px-4 py-4 sm:items-center sm:px-7"
    >
      <motion.span variants={itemVariants} className="mt-1 text-[11px] font-medium uppercase tracking-[0.32em] text-white/70 drop-shadow-sm sm:mt-0">
        ZARA
      </motion.span>

      <div className="flex max-w-[78vw] flex-wrap items-center justify-end gap-2 sm:max-w-none">
        <motion.span variants={itemVariants} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-colors hover:bg-white/[0.08] sm:px-4 sm:text-[10px]">
          {modeLabel[mode]}
        </motion.span>
        {homeAutomation ? (
          <motion.span variants={itemVariants} className="rounded-full border border-amber-300/40 bg-amber-300/12 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-amber-100/90 backdrop-blur-md sm:px-4 sm:text-[10px]">
            Home
          </motion.span>
        ) : null}
        {continuousLoop ? (
          <motion.span variants={itemVariants} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-cyan-100/85 backdrop-blur-md sm:px-4 sm:text-[10px]">
            Loop
          </motion.span>
        ) : null}
        <motion.button
          variants={itemVariants}
          type="button"
          onClick={onOpenDashboard}
          className="group flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] sm:px-4 sm:text-[10px]"
          aria-label="Open dashboard"
        >
          <LayoutDashboard className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        </motion.button>
        <motion.button
          variants={itemVariants}
          type="button"
          onClick={onOpenSettings}
          className="group rounded-full border border-white/12 bg-white/[0.04] p-2 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          aria-label="Open settings"
        >
          <Settings2 className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[120deg]" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopBar;
