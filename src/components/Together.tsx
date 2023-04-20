import Paragraph from "./shared/Paragraph";
import SectionSkeleton from "./shared/SectionSkeleton";

export default function Together() {
  return (
    <SectionSkeleton title="Let's create together">
      <div className="flex flex-col gap-[5rem]">
        <Paragraph className="max-w-[60rem]">
          We could have a call and spend an evening creating something unique
          together and have a good time. Also we could just use text chat and
          not bother with the voice.
        </Paragraph>
        <img
          src="/img/discord-call.png"
          alt="Photo of discord call with me"
          className="max-w-[80%]  ml-auto"
        />
      </div>
    </SectionSkeleton>
  );
}
