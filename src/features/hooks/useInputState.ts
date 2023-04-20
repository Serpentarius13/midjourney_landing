import { useState } from "react";

export default function useInputState() {
  const [text, setText] = useState<string>("");

  function handleText(event: Event) {
    const input = event.target as HTMLInputElement;

    setText(input.value);
  }

  return { handleText, text };
}
