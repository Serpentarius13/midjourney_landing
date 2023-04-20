interface ITextInput {
  isTextArea?: boolean;
  label: string;
  onChange: (event: Event | any) => void;
}

export default function TextInput({
  isTextArea = false,
  label,
  onChange,
}: ITextInput) {
  const baseClass =
    "round w-full bg-white border-2 border-solid border-black p-8 text-[1.6rem]";
  return (
    <label className="flex flex-col gap-[1rem]">
      <span className="text-[2.4rem] font-josefine">{label}</span>
      {isTextArea ? (
        <textarea
          className={`${baseClass} min-h-[25rem] resize-none`}
          onChange={onChange}
        />
      ) : (
        <input type="text" className={baseClass} onChange={onChange} />
      )}
    </label>
  );
}
