import IChildProps, { TChildren } from "../../features/types/childrenProps";
import SectionHeading from "./SectionHeading";

interface ISectionSkeleton extends IChildProps<HTMLDivElement> {
  title: string;
}

export default function SectionSkeleton({
  children,
  title,
  ...props
}: ISectionSkeleton) {
  return (
    <section
      className="center section-padding flex flex-col gap-[6rem] lg:gap-[3rem] md:gap-[1.5rem] "
      {...props}
    >
      <SectionHeading className="text-center">{title}</SectionHeading>
      {children}
    </section>
  );
}
