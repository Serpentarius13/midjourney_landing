import ExampleSkeleton from "../shared/ExampleSkeleton";
import SectionSkeleton from "../shared/SectionSkeleton";

export default function Characters() {
  return (
    <ExampleSkeleton
      subtitle="Character designs"
      text="Create unique and detailed characters for your unique story. All examples are reproducible and it is possible to do one similar character in many posese and scenes"
    >
      <div className="flex flex-col items-center">
        <div className="flex gap-[1rem] items-end md:flex-col md:gap-[3rem]">
          <img
            src="/img/characters/1.png"
            alt="A girl with wheat hair in green dress sitting and reading a book"
            className="w-[33rem] h-[30rem] "
          />
          <img
            src="/img/characters/2.png"
            alt="A red-eyed boy with gray hair in dark-gray coat and red scarf"
            className="h-[40.5rem] w-[37.4rem]"
          />
        </div>
        <img
          src="/img/characters/3.png"
          alt="An evil deadly magician in orange coat and blue shirt"
          className="w-[58.1rem] h-[36.5rem] lg:w-full lg:h-full"
        />
      </div>
    </ExampleSkeleton>
  );
}
