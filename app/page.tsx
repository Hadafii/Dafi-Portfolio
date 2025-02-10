import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";

const Home = () => {
  return (
    <>
      <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="container">
          <Grid />
        </div>
      </main>
    </>
  );
};

export default Home;
