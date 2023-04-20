import { Button } from "./shared/Button";
import Heading from "./shared/Heading";

export default function Banner() {
  function scrollDown() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="w-screen h-screen flex flex-col gap-[1rem] items-center justify-center">
      <Heading>Midjourney Assistant</Heading>

      <p className="text-[2rem] font-josefin text-center max-w-[45rem]">
        Explore creative possibilities of neural network with the help of
        professional. Receive that which you seek
      </p>

      <Button variant="outline" onClick={scrollDown}>
        Try now
      </Button>
    </header>
  );
}
