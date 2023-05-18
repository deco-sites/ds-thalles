import { ComponentChildren, JSX } from "preact";

export interface InputRootProps extends JSX.HTMLAttributes<HTMLElement> {
  children: ComponentChildren;
}

function InputRoot({ children, ...rest }: InputRootProps) {
  return (
    <div
      className={`${
        rest.class ?? ""
      } flex items-center gap-3 h-12 py-4 px-4 w-full rounded border border-zinc-900 focus-within:ring-2`}
    >
      {children}
    </div>
  );
}

export interface InputIconProps extends JSX.HTMLAttributes<HTMLElement> {
  children: ComponentChildren;
}

function InputInput(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`bg-transparent flex-1 text-xs outline-none ${
        props.class ?? ""
      }`}
    />
  );
}

InputRoot.displayName = "Input.Root";
InputInput.displayName = "Input.Input";

export const Input = {
  Root: InputRoot,
  Input: InputInput,
};
