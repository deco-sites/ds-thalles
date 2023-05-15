import { ComponentChildren, JSX } from "preact";

export interface TextAreaRootProps {
  children: ComponentChildren;
}

function TextAreaRoot({ children }: TextAreaRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-4 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface TextAreaIconProps {
  children: ComponentChildren;
}

function TextAreaIcon({ children }: TextAreaIconProps) {
  return <div className="w-6 h-6 text-gray-400">{children}</div>;
}

function TextAreaTextArea(props: JSX.HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-900 outline-none"
    />
  );
}

TextAreaRoot.displayName = "TextArea.Root";
TextAreaTextArea.displayName = "TextArea.TextArea";
TextAreaIcon.displayName = "TextArea.Icon";

export const TextArea = {
  Root: TextAreaRoot,
  TextArea: TextAreaTextArea,
  Icon: TextAreaIcon,
};
