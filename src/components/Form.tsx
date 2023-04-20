import { FormEvent, useState } from "react";
import SectionSkeleton from "./shared/SectionSkeleton";
import TextInput from "./shared/TextInput";
import useInputState from "../features/hooks/useInputState";
import { Button } from "./shared/Button";

import { ToastContainer, toast } from "react-toastify";
import validateText from "../features/functions/validateText";

import emailjs from "@emailjs/browser";
import Loader from "./shared/Loader";

export default function FeedbackForm() {
  const linkClassName =
    "text-[3.6rem] lg:text-[3rem] md:text-[2.6rem] font-bold hover:text-gray-600";

  const { text: name, handleText: handleName } = useInputState();
  const { text: contact, handleText: handleContact } = useInputState();

  const { text: text, handleText } = useInputState();

  const [formLoading, setFormLoading] = useState({
    isLoading: false,
    isDone: false,
  });

  const [isDiscordShowing, setDiscord] = useState(false);

  function openDiscord() {
    setDiscord(true);
  }

  async function sendEmail() {
    try {
      await emailjs.send(
        "service_bgnfi8b",
        "template_wag1yu8",
        { text, contact, name },
        import.meta.env.VITE_EMAIL_KEY
      );

      toast.success("Success!");
      setFormLoading({ isLoading: false, isDone: true });
    } catch (error) {
      console.log(error);
      setFormLoading({ ...formLoading, isLoading: false });
      toast.error("There was an error. Sorry for inconvienience.");
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    let check = true;
    if (!validateText(name)) {
      toast.warning("Check the name");
      check = false;
    }
    if (!validateText(contact)) {
      toast.warning("Check the contacts");
      check = false;
    }
    if (!check) return;

    setFormLoading({ ...formLoading, isLoading: true });

    await sendEmail();

    setFormLoading({ isLoading: false, isDone: true });
  }

  return (
    <SectionSkeleton title="Contact me">
      <p className="text-[2.4rem] font-josefin text-center">
        {" "}
        You can find me in{" "}
        <button onClick={openDiscord} className={linkClassName}>
          discord{" "}
        </button>{" "}
        {isDiscordShowing && (
          <span>(крышечка крышечка крышечка хуй#6613) </span>
        )}
        or{" "}
        <a className={linkClassName} href="https://t.me/cvrsll">
          telegram
        </a>
        <br />
        Also you can fill the form below and I will contact you myself.
      </p>

      {formLoading.isDone ? (
        <h4 className="w-[30rem] h-[15rem] flex items-center justify-center text-[4rem] font-bold font-josefine mx-auto">
          {" "}
          Sent!
        </h4>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-[1rem] w-[58.7rem] max-w-[95%] mx-auto relative  "
        >
          <TextInput label="Your name*" onChange={handleName} />
          <TextInput
            label="Your contacts (email, discord, telegram tag)*"
            onChange={handleContact}
          />
          <TextInput label="A message to me" onChange={handleText} isTextArea />

          <Button className="max-w-[30rem] mx-auto w-full">Send</Button>

          {formLoading.isLoading && (
            <div className="w-full h-full bg-white absolute flex items-center jusitify-center ">
              <Loader />
            </div>
          )}
        </form>
      )}

      <ToastContainer />
    </SectionSkeleton>
  );
}
