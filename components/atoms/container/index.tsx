import { ComponentChildren, JSX } from "preact";

export interface ContainerProps {
  children: ComponentChildren;
  asChild: "main" | "section" | "div";
  className?: string;
}

export function Container({
  children,
  asChild = "section",
  className,
}: ContainerProps) {
  const Component = asChild;

  return (
    <Component className={`w-full m-auto my-4 ${className}`}>
      {children}
    </Component>
  );
}
