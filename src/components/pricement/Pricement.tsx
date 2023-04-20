import SectionSkeleton from "../shared/SectionSkeleton";
import Tariff from "./Tariff";

interface ITariff {
  price: string;
  perks: string[];
}

export default function Pricement() {
  const tariffOne: ITariff = {
    price: "1",
    perks: [
      "One idea realisation",
      "Photoshop follow-up",
      "Help with your prompts",
    ],
  };

  const tariffThree: ITariff = {
    price: "3",
    perks: [
      "Three ideas realisation",
      "Photoshop and figma after-edit",
      "Voice-chat do-together",
    ],
  };

  const tariffFive: ITariff = {
    price: "5",
    perks: [
      "Ten ideas realisation",
      "Complete support",
      "Follow-up with website and characters",
      "Everything of lower grades",
    ],
  };
  return (
    <SectionSkeleton title="Pricement">
      <div className="flex justify-center p-[6rem] items-center gap-[9rem] relative lg:flex-col lg:gap-[3rem] lg:p-0 ">
        <div className="absolute lg:relative">
          <Tariff price={tariffFive.price} list={tariffFive.perks} isBig />
        </div>
        <div className="hover:-translate-x-[5rem] lg:hover:translate-x-0  transition-translate">
          <Tariff price={tariffOne.price} list={tariffOne.perks} />
        </div>
        <div className="hover:translate-x-[5rem]  lg:hover:translate-x-0 transition-translate">
          <Tariff price={tariffThree.price} list={tariffThree.perks} />
        </div>
      </div>
    </SectionSkeleton>
  );
}
