const WORDS = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Tailwind",
  "Motion",
  "Node.js",
  "WebGL",
  "Figma",
  "Prisma",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-surface py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-bold text-text/80 sm:text-3xl">
              {w}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
