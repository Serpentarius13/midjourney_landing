import IChildProps from "../../features/types/childrenProps";

export default function Paragraph({
  children,
  className,
  ...props
}: IChildProps<HTMLParagraphElement>) {
  return (
    <p className={` ${className} text-[2.4rem] font-josefine`} {...props}>
      {" "}
      {children}
    </p>
  );
}
