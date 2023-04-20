import { useState } from "react";
import SectionSkeleton from "./shared/SectionSkeleton";
import TextInput from "./shared/TextInput";
import useInputState from "../features/hooks/useInputState";
import { Button } from "./shared/Button";

export default function FeedbackForm() {
  const linkClassName =
    "text-[3.6rem] lg:text-[3rem] md:text-[2.6rem] font-bold hover:text-gray-600";

  const { text: name, handleText: handleName } = useInputState();
  const { text: contact, handleText: handleContact } = useInputState();

  const { text: text, handleText } = useInputState();

  console.log(text);

  const [isDiscordShowing, setDiscord] = useState(false);

  function openDiscord() {
    setDiscord(true);
  }

  return (
    <SectionSkeleton title="Contact me">
      <p className="text-[2.4rem] font-josefin text-center">
        {" "}
        You can find me in{" "}
        <button onClick={openDiscord} className={linkClassName}>
          discord{" "}
        </button>{" "}
        {isDiscordShowing && <span>крышечка крышечка крышечка хуй#6613</span>}or{" "}
        <a className={linkClassName} href="https://t.me/cvrsll">
          telegram
        </a>
        <br />
        Also you can fill the form below and I will contact you myself.
      </p>

      <form className="flex flex-col gap-[1rem] w-[58.7rem] max-w-[95%] mx-auto  ">
        <TextInput label="Your name*" onChange={handleName} />
        <TextInput
          label="Your contacts (email, discord, telegram tag)*"
          onChange={handleContact}
        />
        <TextInput label="A message to me" onChange={handleText} isTextArea />

        <Button className="max-w-[30rem] mx-auto w-full">Send</Button>
      </form>
    </SectionSkeleton>
  );
}
