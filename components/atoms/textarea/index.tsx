import { ComponentChildren, JSX } from "preact";

export interface TextAreaRootProps extends JSX.HTMLAttributes<HTMLElement> {
  children: ComponentChildren;
}

function TextAreaRoot({ children, ...rest }: TextAreaRootProps) {
  return (
    <div
      className={`${
        rest.class ?? ""
      } flex items-center gap-3 h-12 py-4 px-4 w-full border border-zinc-900 rounded focus-within:ring-2`}
    >
      {children}
    </div>
  );
}

export interface TextAreaIconProps extends JSX.HTMLAttributes<HTMLElement> {
  children: ComponentChildren;
}

function TextAreaIcon({ children, ...rest }: TextAreaIconProps) {
  return <div className={`${rest.class} w-6 h-6`}>{children}</div>;
}

function TextAreaTextArea(props: JSX.HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`bg-transparent flex-1 text-xs outline-none ${
        props.class ?? ""
      }`}
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
