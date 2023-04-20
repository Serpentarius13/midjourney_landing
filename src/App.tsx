import About from "./components/About";
import Banner from "./components/Banner";
import Characters from "./components/examples/Characters";
import Landings from "./components/examples/Landings";
import SectionSkeleton from "./components/shared/SectionSkeleton";

export default function Home() {
  return (
    <>
      <Banner />

      <main className="center flex flex-col gap-[6rem] lg:gap-[4rem] md:gap-[2.5rem]">
        <About />
        <SectionSkeleton title="Expore new possibilities">
          <Characters />
          <Landings />
        </SectionSkeleton>
      </main>
    </>
  );
}
