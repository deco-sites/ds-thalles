import { ComponentChildren, JSX } from "preact";

export interface InputRootProps {
  children: ComponentChildren;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-4 w-full rounded bg-gray-800  focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface InputIconProps {
  children: ComponentChildren;
}

function InputIcon({ children }: InputIconProps) {
  return <div className="w-6 h-6 text-gray-400">{children}</div>;
}

function InputInput(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  );
}

InputRoot.displayName = "Input.Root";
InputInput.displayName = "Input.Input";
InputIcon.displayName = "Input.Icon";

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};
