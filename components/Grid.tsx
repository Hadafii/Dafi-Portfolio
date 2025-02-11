import { gridItems } from "@/data";
import { GridGlow, GlowingGridItem } from "./ui/GlowingGrid";
import Image from "next/image";
import { BorderBeam } from "./ui/Moving-border";
import { Meteors } from "./ui/MeteorEffect";
const Grid = () => {
  return (
    <section id="about">
      <div className="md:px-16 lg:px-32">
        {/* Title */}
        <h1 className="heading text-center ">
          A Little Bit About <span className="text-violet-500">Me</span>
        </h1>
        <div className="py-5">
          {/* About Content */}
          <div
            className="relative w-full p-5 rounded-3xl border  overflow-hidden"
            style={{ background: "rgb(8,8,20)" }}
          >
            <Meteors number={30} />
            {/* Image Container */}
            <div className="relative w-52 h-60 md:w-52 md:h-60 rounded-3xl  overflow-hidden mx-auto md:float-left md:mr-6">
              <Image
                src="/DAFIUTOMO.jpg"
                alt="About Me"
                width={208} // 52 * 4 (Tailwind unit conversion)
                height={240} // 60 * 4
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-justify text-lg text-gray-300">
              <p className="font-bold text-white">Hello, I'm Dafi!</p>
              <p className="mt-2">
                I'm a Computer Science student at Telkom University with a
                strong passion for software development, system security, and
                web development. I enjoy exploring new technologies and building
                digital solutions.
              </p>
              <p className="mt-4">
                I have experience in{" "}
                <span className="font-bold">
                  Node.js, React, Next.js, and Tailwind CSS
                </span>
                . My projects range from ticket booking platforms to financial
                management apps. I'm always eager to learn and collaborate on
                exciting tech projects!
              </p>
              <p className="mt-4">
                Let's connect and build something awesome together! 🚀
              </p>
            </div>
            <BorderBeam />
          </div>
        </div>
      </div>

      <GridGlow className="w-full ">
        {gridItems.map((item, i) => (
          <GlowingGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </GridGlow>
    </section>
  );
};

export default Grid;
