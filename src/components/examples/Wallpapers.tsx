import ExampleSkeleton from "../shared/ExampleSkeleton";

export default function Wallpapers() {
  return (
    <ExampleSkeleton
      subtitle="Wallpapers"
      text="Decorate your desktop with the magnificient look of a fantasy world. Make your phone special by filling it with the power of imagination."
    >
      <div className="flex flex-col gap-grid items-center">
        <img
          src="/img/wallpapers/1.png"
          alt="A soviet house at night in foggy background with few lights glowing nearby"
          className="w-[54rem] h-[30.2rem]"
        />

        <div className="flex gap-grid max-w-full">
          <img src="/img/wallpapers/2.png" className="w-[25rem] h-[45rem] md:w-[15rem] md:h-[30rem]" />
          <img src="/img/wallpapers/3.png" className="md:w-[25rem]" />
        </div>
      </div>
    </ExampleSkeleton>
  );
}
