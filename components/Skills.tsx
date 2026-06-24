import { Reveal } from "./Reveal";

const GROUPS = [
  {
    title: "Frontend",
    desc: "픽셀과 모션이 만나는 곳",
    items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Motion / GSAP", "WebGL / Canvas"],
  },
  {
    title: "Mobile",
    desc: "한 번 쓰고 두 플랫폼에",
    items: ["React Native", "Expo", "Reanimated", "Skia", "App Store / Play 배포"],
  },
  {
    title: "Backend",
    desc: "보이지 않는 단단함",
    items: ["Node.js / Nest", "PostgreSQL / Prisma", "Redis", "REST / WebSocket", "AWS / Vercel"],
  },
  {
    title: "Craft",
    desc: "제품을 완성하는 감각",
    items: ["Figma", "디자인 시스템", "성능 최적화", "웹 접근성", "애니메이션 디렉팅"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <Reveal>
          <p className="label mb-4">[ 02 — Skills ]</p>
          <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            한 명의 개발자가,
            <br />
            <span className="text-accent">풀스택</span>으로
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div
                data-cursor
                className="group h-full bg-surface p-7 transition-colors hover:bg-surface-2"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold">{g.title}</h3>
                  <span className="label !text-[0.6rem]">0{i + 1}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{g.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2.5 text-sm text-muted transition-colors group-hover:text-text"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
