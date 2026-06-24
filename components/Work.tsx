import Link from "next/link";
import { topics } from "@/lib/topics";
import { ProjectCover } from "./ProjectCover";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label mb-4">[ 03 — How I Work ]</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              제가 <span className="text-accent">일하는 방식</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            화려한 포트폴리오 대신, 각 영역에서 제가 어떤 기준과 완성도로
            일하는지를 글로 풀었습니다. 카드를 누르면 자세히 읽을 수 있어요.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-7 md:grid-cols-2">
        {topics.map((t, i) => (
          <Reveal key={t.id} delay={(i % 2) * 0.08}>
            <Link
              href={`/work/${t.id}`}
              data-cursor
              className="group relative block overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(20,25,60,0.16)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <ProjectCover topic={t} />
                </div>
                <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-white/75">
                  {t.index} — {t.kicker}
                </span>
                <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {t.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {t.readingTime} read
                  </span>
                </div>
                <p className="mt-2 text-muted">{t.tagline}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.tags.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  자세히 보기
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
