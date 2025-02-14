"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
}

export const ShinyButtonV2 = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShinyButtonProps
>(({ children, className, href, download, ...props }, ref) => {
  // Jika ada `href`, gunakan `<a>`, jika tidak gunakan `<motion.button>`
  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        download={download}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 animate-shimmer",
          className
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 animate-shimmer",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});

ShinyButtonV2.displayName = "ShinyButtonV2";
