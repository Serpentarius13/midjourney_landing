import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "px-8 py-4 font-josefine text-[2rem] border-2 border-solid  border-black transition-all",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-white hover:text-black",

        outline: "text-black bg-white hover:bg-black hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  ...props
}) => (
  <button className={button({ className, variant })} {...props}>
    {" "}
    {children}{" "}
  </button>
);
