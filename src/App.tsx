import About from "./components/About";
import Banner from "./components/Banner";
import FeedbackForm from "./components/Form";
import Together from "./components/Together";
import Characters from "./components/examples/Characters";
import Landings from "./components/examples/Landings";
import Wallpapers from "./components/examples/Wallpapers";
import Pricement from "./components/pricement/Pricement";
import SectionSkeleton from "./components/shared/SectionSkeleton";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Banner />

      <main className="center flex flex-col gap-[6rem] lg:gap-[4rem] md:gap-[2.5rem]">
        <About />
        <SectionSkeleton title="Expore new possibilities">
          <Characters />
          <Landings />
          <Wallpapers />
        </SectionSkeleton>
        <Together />
        <Pricement />
        <FeedbackForm />

        <h4 className="text-[6.4rem] lg:text-[5rem] text-josefine font-bold text-center pb-[5rem]">
        Thanks for your support!
        </h4>
      </main>
    </>
  );
}
