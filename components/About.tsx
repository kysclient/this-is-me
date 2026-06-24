import { Reveal } from "./Reveal";

const STATS = [
  { value: "5+", label: "년 경력" },
  { value: "40+", label: "출시 프로젝트" },
  { value: "20+", label: "협업 클라이언트" },
  { value: "∞", label: "리팩터링" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="label mb-4">[ 01 — About ]</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            코드로 만드는
            <br />
            <span className="text-accent">경험</span>을 설계합니다
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              저는 아이디어를 실제로 동작하는 제품으로 만드는 일을 합니다.
              프론트엔드의 미세한 모션부터 백엔드 아키텍처, 모바일 앱 배포까지 —
              한 사람이 처음부터 끝까지 책임질 때 나오는 일관된 완성도를
              믿습니다.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 leading-relaxed text-muted">
              빠르게 만들되 대충 만들지 않습니다. 성능, 접근성, 그리고
              &ldquo;와&rdquo; 하는 순간의 디테일까지 챙기는 것이 제 일하는
              방식입니다.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.07}>
                <div className="bg-surface px-5 py-7">
                  <div className="font-display text-4xl font-extrabold text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
