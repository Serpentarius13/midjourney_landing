import IChildProps from "../../features/types/childrenProps";

export default function Heading({
  children,
  className,
  ...props
}: IChildProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={`text-[3.2rem] font-playfair font-bold ${className}`}
    >
      {children}
    </h2>
  );
}
