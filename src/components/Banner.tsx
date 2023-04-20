import { Button } from "./shared/Button";
import Heading from "./shared/Heading";

export default function Banner() {
  
  return (
    <header className="w-screen h-screen flex flex-col gap-[1rem] items-center justify-center">
      <Heading>Midjourney Assistant</Heading>

      <p className="text-[2rem] font-josefin text-center max-w-[45rem]">
        Explore creative possibilities of neural network with the help of
        professional. Receive that which you seek
      </p>

      <Button variant="outline">Try now</Button>
    </header>
  );
}
