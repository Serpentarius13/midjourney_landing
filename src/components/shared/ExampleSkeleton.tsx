import IChildProps from "../../features/types/childrenProps";
import Paragraph from "./Paragraph";

interface IExampleProps extends IChildProps<HTMLDivElement> {
  text: string;
  subtitle: string;
  isReverse?: boolean;
}

export default function ExampleSkeleton({
  text,
  subtitle,
  children,
  className,
  isReverse = false,
}: IExampleProps) {
  const reverseText = isReverse ? "text-end" : "text-start";
  return (
    <section
      className={`${
        isReverse ? "flex-row-reverse lg:items-end" : "" 
      } ${className} flex justify-between center lg:flex-col lg:gap-[4rem]`}
    >
      <div className="flex flex-col gap-[3rem] md:gap-[2rem]  max-w-[32.5rem] lg:max-w-[50rem] ">
        <h3 className={`text-[2.8rem] font-bold font-playfair ${reverseText}`}>
          {subtitle}
        </h3>

        <Paragraph className={reverseText}>{text}</Paragraph>
      </div>

      {children}
    </section>
  );
}
