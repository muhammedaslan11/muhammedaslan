interface ReferenceCardProps {
  name: string;
  title: string;
  quote: string;
  avatar?: string | null;
}

export default function ReferenceCard({ name, title, quote, avatar }: ReferenceCardProps) {
  return (
    <div className="border border-zinc-800 rounded-[8px] p-4 bg-[#111111] mb-3">
      <p className="text-zinc-400 text-xs leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-2.5 mt-3">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt={name} className="w-7 h-7 rounded-full object-cover" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-zinc-500">{name[0]}</span>
          </div>
        )}
        <div>
          <p className="text-white text-xs font-semibold leading-none">{name}</p>
          <p className="text-zinc-600 text-[10px] mt-0.5">{title}</p>
        </div>
      </div>
    </div>
  );
}
