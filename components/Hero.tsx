"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./theme";
import { MobileMenu } from "./MobileMenu";

const ease = [0.16, 1, 0.3, 1] as const;
const rise = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

/* ---- in-card top navigation (matches the reference exactly) ---- */
function HeroNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="flex items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-active={l.id === "home"}
                  className="link-underline text-sm font-medium text-muted transition-colors hover:text-text data-[active=true]:font-semibold data-[active=true]:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            <MobileMenu active="home" />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-line" />
    </motion.div>
  );
}

const KAKAO_PATH =
  "M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.86 5.18 4.65 6.55-.2.71-.73 2.62-.84 3.03-.13.5.18.49.38.36.16-.11 2.55-1.73 3.59-2.44.71.1 1.45.16 2.22.16 5.52 0 10-3.48 10-7.8S17.52 3 12 3z";
const KAKAO_ID = "kimnewscene";

/* ---- KakaoTalk ID modal ---- */
function KakaoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(KAKAO_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="카카오톡 아이디"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative w-full max-w-sm rounded-3xl border border-line bg-surface p-8 text-center shadow-[0_30px_80px_rgba(20,25,60,0.3)]"
          >
            <button
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#FEE500]">
              <svg viewBox="0 0 24 24" fill="#3A1D1D" className="h-9 w-9">
                <path d={KAKAO_PATH} />
              </svg>
            </div>

            <p className="label mt-6">KakaoTalk</p>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-tight">
              kt: {KAKAO_ID}
            </p>

            <button
              onClick={copy}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  복사됨
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </svg>
                  아이디 복사
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---- flat contact icons (KakaoTalk · Phone · Gmail) ---- */
function Socials() {
  const [kakaoOpen, setKakaoOpen] = useState(false);
  const links = [
    {
      label: "전화 010-7687-1592",
      href: "tel:01076871592",
      path: "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1A17 17 0 0 1 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z",
    },
    {
      label: "Gmail kysclient@gmail.com",
      href: "mailto:kysclient@gmail.com",
      path: "M24 5.46v13.91c0 .9-.73 1.63-1.64 1.63h-1.81V11.73L12 18.18l-8.55-6.45v9.27H1.64A1.64 1.64 0 0 1 0 19.37V5.46c0-2.02 2.31-3.18 3.93-1.96l1.52 1.14L12 9.55l6.55-4.91 1.52-1.14C21.69 2.28 24 3.43 24 5.46z",
    },
  ];
  return (
    <>
      <ul className="flex items-center gap-5">
        <li>
          <button
            onClick={() => setKakaoOpen(true)}
            aria-label="카카오톡 아이디 보기"
            title="카카오톡 kimnewscene"
            className="block text-text/75 transition-all hover:-translate-y-0.5 hover:text-accent"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px]">
              <path d={KAKAO_PATH} />
            </svg>
          </button>
        </li>
        {links.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              title={s.label}
              className="block text-text/75 transition-all hover:-translate-y-0.5 hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px]">
                <path d={s.path} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
      <KakaoModal open={kakaoOpen} onClose={() => setKakaoOpen(false)} />
    </>
  );
}

/* ---- blue blob + portrait ---- */
function Portrait() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mx-auto aspect-[4/5] w-[80%] max-w-[420px] floaty lg:w-full">
      <div className="blob absolute inset-0 bg-accent" />
      <div className="blob absolute inset-0 overflow-hidden">
        {!failed ? (
          // Drop your photo at /public/portrait.png (transparent-bg cutout looks best).
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/portrait.webp"
            alt="김유신 프로필 사진"
            className="h-full w-full object-cover object-bottom"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlaceholderFace />
        )}
      </div>
    </div>
  );
}

function PlaceholderFace() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <rect width="200" height="240" fill="var(--accent)" />
      <circle cx="100" cy="92" r="46" fill="rgba(255,255,255,0.92)" />
      <rect x="34" y="150" width="132" height="120" rx="60" fill="rgba(255,255,255,0.92)" />
      <text
        x="100"
        y="232"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        letterSpacing="1.5"
        fill="var(--accent)"
      >
        /public/portrait.png
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="px-4 pt-5 sm:pt-7">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col rounded-[2rem] border border-line bg-surface p-6 shadow-[var(--shadow)] sm:p-10 lg:p-12">
        <HeroNav />

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---- left ---- */}
          <div className="flex h-full flex-col justify-center">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              <motion.span {...rise} transition={{ duration: 0.7, delay: 0.05, ease }} className="block">
                Hi,
              </motion.span>
              <motion.span {...rise} transition={{ duration: 0.7, delay: 0.13, ease }} className="block">
                I&apos;m Developer
              </motion.span>
              <motion.span {...rise} transition={{ duration: 0.7, delay: 0.21, ease }} className="block">
                <span className="text-accent">김유신</span>
              </motion.span>
            </h1>

            <motion.div {...rise} transition={{ duration: 0.7, delay: 0.32, ease }}>
              <a
                href="#contact"
                className="mt-9 inline-block rounded-xl bg-accent px-9 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* ---- right ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="order-first lg:order-last"
          >
            <Portrait />
          </motion.div>
        </div>

        {/* ---- socials bottom-left ---- */}
        <motion.div {...rise} transition={{ duration: 0.7, delay: 0.45, ease }}>
          <Socials />
        </motion.div>
      </div>
    </section>
  );
}
