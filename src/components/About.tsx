import Paragraph from "./shared/Paragraph";
import SectionSkeleton from "./shared/SectionSkeleton";

export default function About() {
  return (
    <SectionSkeleton title="About">
      <div className="w-full flex gap-[6rem] justify-center md:flex-col md:items-center">
        <img
          alt="My photo"
          src="/img/photo.png"
          className="w-[50rem] lg:w-[40rem] tbl:w-[30rem] md:w-[40rem] round object-cover"
        />

        <Paragraph className="max-w-[50rem] flex flex-col gap-[3rem]">
          <span>My name is Andrey. </span>
          <span>
            Im 20 years old. Right now I take the role of Junior front-end
            developer. When I first got to know about Midjourney AI, I was
            excited and marvelled about the infinite artistic possibilities. I
            love to engage in new activities and be creative, so I have studied
            the ways to make the most appealing and beautiful images. Sometimes
            Im scared at how real they look, almost undistinguishable from the
            works of people.
          </span>
          <span>
            I would love to share my knowledge and skills to help you reach your
            dreams and deliver your imagination to reality.
          </span>
        </Paragraph>
      </div>
    </SectionSkeleton>
  );
}
