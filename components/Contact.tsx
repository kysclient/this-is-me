import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-accent px-7 py-20 text-accent-ink sm:px-12 sm:py-28">
        {/* decorative rings */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full border border-white/15" />

        <div className="relative text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-ink/70">
              [ Let&apos;s build something ]
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1] sm:text-6xl">
              새 프로젝트, 같이 만들어볼까요?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-accent-ink/80">
              아이디어 단계든, 이미 굴러가는 제품이든 좋습니다. 메일 한 통이면
              충분합니다.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="mailto:kysclient@gmail.com"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#fff] px-8 py-4 font-display text-lg font-bold text-[#0e1020] transition-transform hover:-translate-y-1"
            >
              kysclient@gmail.com
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>© {2026} 김유신.</p>
        <p className="font-mono text-xs tracking-widest">
          kysclient@gmail.com
        </p>
      </div>
    </footer>
  );
}
