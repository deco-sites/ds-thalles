import { ComponentChildren, JSX } from "preact";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren;
}

export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:opacity-95 focus:ring-2 ring-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
