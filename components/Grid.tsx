import { gridItems } from "@/data";
import { GridGlow, GlowingGridItem } from "./ui/GlowingGrid";

const Grid = () => {
  return (
    <section id="about">
      <GridGlow className="w-full py-10 ">
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
