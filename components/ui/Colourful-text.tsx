"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const [redIndex, setRedIndex] = React.useState(0);
  const [currentLength, setCurrentLength] = React.useState(1); // Mulai dari 1 huruf merah
  const redLength = 3; // Panjang blok merah maksimal

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRedIndex((prev) => {
        if (currentLength < redLength) {
          setCurrentLength(currentLength + 1); // Tambah panjang merah satu per satu
          return prev; // Tetap di posisi awal dulu
        }
        if (prev + 1 > text.length - redLength) {
          setCurrentLength(1); // Reset ke satu huruf merah saat restart
          return 0;
        }
        return prev + 1; // Setelah batas tercapai, geser ke kanan
      });
    }, 400); // Kecepatan animasi

    return () => clearInterval(interval);
  }, [text.length, currentLength]);

  return text.split("").map((char, index) => {
    const isRed = index >= redIndex && index < redIndex + currentLength;
    const color = isRed ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)";

    return (
      <motion.span
        key={`${char}-${index}`}
        initial={{ y: 0 }}
        animate={{
          color: color,
          y: [0, -2, 0],
          scale: [1, 1.02, 1],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
          opacity: [1, 0.95, 1],
        }}
        transition={{
          duration: 0.3,
          delay: index * 0.02,
        }}
        className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
      >
        {char}
      </motion.span>
    );
  });
}
