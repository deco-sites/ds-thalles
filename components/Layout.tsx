import { TextArea } from "deco-sites/ds-thalles/components/atoms/textarea/index.tsx";
import { Input } from "deco-sites/ds-thalles/components/atoms/input/index.tsx";

export default function Layout() {
  return (
    <main>
      <TextArea.Root>
        <TextArea.TextArea placeholder="Hello Textarea" />
      </TextArea.Root>

      <br />

      <Input.Root>
        <Input.Input placeholder="Hello Input" />
      </Input.Root>
    </main>
  );
}
