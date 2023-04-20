export default function Tariff({
  isBig = false,
  list,
  price,
}: {
  isBig?: boolean;
  list: string[];
  price: string;
}) {
  const baseClass =
    "max-w-[95vw] bg-white aspect-square rounded-full border-2 border-solid border-black p-[5rem] flex flex-col gap-[2rem] items-center justify-start hover:z-[10] transition-all";
  return (
    <>
      {isBig ? (
        <div
          className={`${baseClass} w-[50rem]   gap-[5rem] lg:w-[35rem] lg:h-[35rem] lg:gap-[3rem]  `}
        >
          <h4 className="text-[8rem] lg:text-[5.5rem] font-bold font-playfair">
            {" "}
            {price}$
          </h4>

          <ul className="flex flex-col gap-[1rem]">
            {list.map((item) => (
              <li
                className="list-disc text-[2.4rem] font-josefin font-bold lg:text-[1.6rem]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={` ${baseClass}  w-[30rem] h-[30rem]  gap-[3rem]`}>
          <h4 className="text-[4rem] font-bold font-playfair"> {price}$ </h4>

          <ul className="flex flex-col gap-1rem">
            {list.map((item) => (
              <li
                className="list-disc text-[1.6rem] font-josefin font-bold"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
