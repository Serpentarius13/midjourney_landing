import { TChildren } from "../../features/types/childrenProps";
import SectionHeading from "./SectionHeading";

interface ISectionSkeleton {
  title: string;
  children: TChildren;
}

export default function SectionSkeleton({ children, title }: ISectionSkeleton) {
  return (
    <section className="center section-padding flex flex-col items-center gap-[6rem] lg:gap-[3rem] md:gap-[1.5rem] ">
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}
