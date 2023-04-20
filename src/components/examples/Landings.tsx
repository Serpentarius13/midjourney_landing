import ExampleSkeleton from "../shared/ExampleSkeleton";

export default function Landings() {
  return (
    <ExampleSkeleton
      subtitle="Landing page design"
      text="Embrace plenty of new idea for your upcoming project. If you like the result, I can make a website out of it for you."
      isReverse
    >
      <div className="flex gap-grid">
        <img
          src="/img/landings/1.png"
          alt="Landing page with deep blue, aquamarine and dark tones"
          className="h-[49rem] "
        />

        <div className="flex flex-col gap-grid">
          <img src="/img/landings/2.png" className="w-[39.3rem]" />
          <img src="/img/landings/3.png" className="h-[48.2rem] w-[26.5rem]" />
        </div>
      </div>
    </ExampleSkeleton>
  );
}
