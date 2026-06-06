import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Placeholder({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-full bg-sand border border-ink/5 flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/30 px-3 text-center">
        {label}
      </span>
      {children}
    </div>
  );
}
