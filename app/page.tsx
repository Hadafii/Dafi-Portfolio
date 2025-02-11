import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";

const Home = () => {
  return (
    <>
      <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto px-0">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="container px-3 sm:px-6 md:px-8 lg:px-12 ">
          <Grid />
          <RecentProject />
        </div>
      </main>
    </>
  );
};

export default Home;
