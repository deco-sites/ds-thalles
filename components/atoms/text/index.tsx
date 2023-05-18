import { ComponentChildren } from "preact";

export interface TextProps {
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xxl"
    | "xxxl";
  asChild?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ComponentChildren;
  className?: string;
}

export function Text({
  size = "md",
  asChild = "span",
  children,
  className,
}: TextProps) {
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
