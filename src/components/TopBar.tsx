import { LayoutDashboard, Settings2 } from "lucide-react";

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

const presenceLabel: Record<PresenceMode, string> = {
  virtual: "Virtual",
  physical: "Physical",
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
    <div className="fixed left-0 right-0 top-0 z-20 flex items-start justify-between gap-3 px-4 py-4 sm:items-center sm:px-7">
      <span className="mt-1 text-[11px] font-light uppercase tracking-[0.32em] text-white/58 sm:mt-0">ZARA</span>

      <div className="flex max-w-[78vw] flex-wrap items-center justify-end gap-2 sm:max-w-none">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-light uppercase tracking-[0.18em] text-white/55 sm:px-3 sm:text-[10px]">
          {modeLabel[mode]}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-light uppercase tracking-[0.18em] text-white/55 sm:px-3 sm:text-[10px]">
          {presenceLabel[presence]}
        </span>
        {homeAutomation ? (
          <span className="rounded-full border border-amber-300/40 bg-amber-300/12 px-2.5 py-1 text-[9px] font-light uppercase tracking-[0.18em] text-amber-100/90 sm:px-3 sm:text-[10px]">
            Home
          </span>
        ) : null}
        {continuousLoop ? (
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-light uppercase tracking-[0.18em] text-cyan-100/85 sm:px-3 sm:text-[10px]">
            Loop
          </span>
        ) : null}
        <button
          type="button"
          onClick={onOpenDashboard}
          className="group flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-2 text-[9px] uppercase tracking-[0.18em] text-white/65 transition-all duration-300 hover:border-cyan-300/35 hover:text-[#EAEAEA] hover:shadow-[0_0_20px_rgba(34,211,238,0.16)] sm:px-3 sm:text-[10px]"
          aria-label="Open dashboard"
        >
          <LayoutDashboard className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        </button>
        <button
          type="button"
          onClick={onOpenSettings}
          className="group rounded-full border border-white/12 bg-white/[0.03] p-2 text-white/65 transition-all duration-300 hover:border-cyan-300/35 hover:text-[#EAEAEA] hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]"
          aria-label="Open settings"
        >
          <Settings2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
