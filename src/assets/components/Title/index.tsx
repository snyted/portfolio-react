interface TitleProps {
  title: string;
  text?: string;
}

export default function Title({ title, text }: TitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1
  className="font-bold text-5xl 
             bg-[linear-gradient(to_left,#9ca3af_45%,white_50%,#9ca3af_55%)]
             bg-clip-text 
             text-transparent 
             bg-[length:200%_100%] 
             animate-shine text-center"
>
  {title}
</h1>
      <p className="text-white/40 text-center">{text}</p>
    </div>
  );
}
