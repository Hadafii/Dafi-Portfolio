import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import { Span } from "next/dist/trace";

const RecentProject = () => {
  return (
    <>
      <div className="py-32" id="projects">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md relative">
          <h1 className="heading pb-3 text-center">
            A Few Things I've Been{" "}
            <span className="text-blue-400">Working On</span>
          </h1>
          <div className="w-full h-20 relative flex justify-center">
            {/* Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div
              className="absolute inset-0 w-full h-full bg-black-100 
  [mask-image:radial-gradient(200px_100px_at_top,transparent_20%,white)] 
  sm:[mask-image:radial-gradient(300px_120px_at_top,transparent_20%,white)] 
  md:[mask-image:radial-gradient(450px_150px_at_top,transparent_20%,white)]"
            ></div>
          </div>
        </div>
        awdaiwjdiawjd
      </div>
    </>
  );
};

export default RecentProject;
