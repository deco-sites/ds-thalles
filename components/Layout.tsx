import { TextArea } from "deco-sites/ds-thalles/components/atoms/textarea/index.tsx";
import { Input } from "deco-sites/ds-thalles/components/atoms/input/index.tsx";

export default function Layout() {
  return (
    <main>
      <TextArea.Root>
        <TextArea.TextArea placeholder="Hello World" />
      </TextArea.Root>

      <Input.Root>
        <Input.Input />
      </Input.Root>
    </main>
  );
}
