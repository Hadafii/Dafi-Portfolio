"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-6">
      <motion.div
        className="relative bg-gray-800 border-2 border-transparent rounded-3xl overflow-hidden p-6 shadow-lg
        transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      >
        {/* Moving Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 animate-border-motion rounded-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-white p-6 bg-gray-900 rounded-3xl">
          {/* Image */}
          <div className="w-52 h-60 rounded-3xl overflow-hidden border-2 border-yellow-500">
            <Image
              src="/DAFIUTOMO.jpg"
              alt="About Me"
              width={250}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold">
              A Little Bit About <span className="text-violet-500">Me</span>
            </h1>
            <p className="mt-4 text-lg">
              Hello, I'm <span className="font-semibold">Dafi!</span>
            </p>
            <p className="mt-2 text-gray-300">
              I'm a Computer Science student at Telkom University with a strong
              passion for software development, system security, and web
              development.
            </p>
            <p className="mt-4 text-gray-300">
              I have experience in{" "}
              <span className="font-bold">
                Node.js, React, Next.js, and Tailwind CSS
              </span>
              . My projects range from ticket booking platforms to financial
              management apps.
            </p>
            <p className="mt-4 text-gray-300">
              Let's connect and build something awesome together! 🚀
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tailwind CSS for moving border animation */}
      <style jsx>{`
        @keyframes border-motion {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-motion {
          animation: border-motion 4s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}
