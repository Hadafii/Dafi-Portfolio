"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, type AnimationProps } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  href?: string; // Untuk menangani tautan
  className?: string;
  download?: boolean;
  variant?: "default" | "glow";
  icon?: React.ReactNode;
  position?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(function ShinyButton(
  {
    children,
    className,
    href,
    download,
    icon,
    position,
    variant = "default",
    ...props
  },
  ref
) {
  const Component = href ? "a" : motion.button; // Gunakan <a> jika ada href

  return (
    <motion.button
      ref={ref as any}
      href={href}
      download={download}
      className={cn(
        "group relative rounded-lg  px-6 py-3 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow flex items-center justify-center text-center",
        variant === "glow"
          ? // Body glow (sesuai kode awal)
            "hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:opacity-100 hover:backdrop-blur-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          : // Body default
            "dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className
      )}
      {...animationProps}
      {...props}
    >
      {/* Konten Tombol */}
      <span
        className="relative gap-2 w-full h-full  flex items-center justify-center font-bold uppercase tracking-wide text-white dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>

      {/* Border Tombol */}
      <span
        // Mask agar hanya terlihat area p-px (border)
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMaskComposite: "xor" /* Safari */,
          maskComposite: "exclude",
        }}
        className={cn(
          "absolute inset-0 z-10 block  rounded-[inherit] p-px overflow-hidden", // p-px + overflow-hidden agar border tampak
          variant === "glow"
            ? // Varian glow: conic-gradient spinning
              "backdrop-blur-sm group-hover:backdrop-blur-2xl"
            : // Varian default: gradient linear (sesuai kode awal)
              "bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))]"
        )}
      >
        {variant === "glow" && (
          // Elemen inilah yang menampilkan conic-gradient berputar
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        )}
      </span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
