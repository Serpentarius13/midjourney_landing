import IChildProps from "../../features/types/childrenProps";

export default function Heading({
  children,
  ...props
}: IChildProps<HTMLHeadingElement>) {
  return (
    <h1 {...props} className="text-[4rem] text-center font-playfair font-bold">
      {children}
    </h1>
  );
}
