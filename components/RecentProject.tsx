import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import { Span } from "next/dist/trace";
import { projects } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/CardContainer";
import { PinContainer } from "./ui/3d-pin";
import FloatingIcons from "@/components/ui/FloatingIcons";
import { FlickeringGrid } from "./ui/GridBg";
import { InteractiveHoverButton } from "./ui/ButtonMagicUI";
const RecentProject = () => {
  return (
    <>
      <div className="pt-32" id="projects">
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

        <section className="py-8" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="relative overflow-hidden bg-background bg-black-100"
              >
                <FlickeringGrid
                  className="absolute inset-0 z-0 size-full"
                  squareSize={4}
                  gridGap={6}
                  color="#6B7280"
                  maxOpacity={0.2}
                  flickerChance={0.1}
                  height={800}
                  width={800}
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.des}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Gambar pakai 3D Pin */}
                  <PinContainer title={project.title} href={project.link}>
                    <div className="relative overflow-hidden w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[22rem] aspect-video">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full rounded-sm"
                      />
                    </div>
                  </PinContainer>
                  {/* Floating Icons & Visit Button */}
                  <div className="flex flex-wrap items-start gap-4 mt-4 w-full">
                    {/* Wrapper buat ikon */}
                    <div className="flex flex-wrap gap-2 flex-grow">
                      <FloatingIcons
                        icons={project.techStack.map((tech, index) => ({
                          name: tech,
                          src: project.iconLists[index] || "",
                        }))}
                      />
                    </div>

                    {/* Tombol Visit Site */}
                    {project.link && (
                      <InteractiveHoverButton
                        href={project.link}
                        className="flex-shrink-0 sm:ml-auto"
                      >
                        Visit Site
                      </InteractiveHoverButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              wadaw
            </PinContainer>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
      </div>
    </>
  );
};

export default RecentProject;
