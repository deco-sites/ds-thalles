import { ComponentChildren } from "preact";

export interface HeadingProps {
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xxl"
    | "xxxl";
  asChild?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ComponentChildren;
  className?: string;
}

export function Heading({
  size = "md",
  asChild = "h5",
  children,
  className,
}: HeadingProps) {
  const Component = asChild;
  const classSize = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xxl: "text-2xl",
    xxxl: "text-3xl",
  };

  return (
    <Component
      className={`text-gray-100 font-sans ${classSize[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
