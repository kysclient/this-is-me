"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./theme";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: shown ? 0 : -90, opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      style={{ pointerEvents: shown ? "auto" : "none" }}
    >
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-surface/80 px-4 py-2.5 shadow-[0_8px_40px_rgba(20,25,60,0.10)] backdrop-blur-xl sm:px-5">
        <Logo />

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-active={active === l.id}
                className="link-underline text-sm font-medium text-muted transition-colors hover:text-text data-[active=true]:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <MobileMenu active={active} />
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            연락하기
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
