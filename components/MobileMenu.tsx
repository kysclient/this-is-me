"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative z-50 md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="메뉴 열기"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-text transition-colors hover:border-accent"
      >
        <span className="relative block h-[14px] w-[18px]">
          <motion.span
            animate={open ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
            transition={{ duration: 0.3, ease }}
            className="absolute left-0 block h-[2px] w-full rounded-full bg-current"
            style={{ top: 0 }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[6px] block h-[2px] w-full rounded-full bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, top: 6 } : { rotate: 0, top: 12 }}
            transition={{ duration: 0.3, ease }}
            className="absolute left-0 block h-[2px] w-full rounded-full bg-current"
            style={{ top: 12 }}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* tap-outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10"
            />
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.32, ease }}
              className="absolute right-0 top-[calc(100%+12px)] w-52 origin-top-right overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-[0_20px_50px_rgba(20,25,60,0.18)]"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } } }}
              >
                {LINKS.map((l) => (
                  <motion.li
                    key={l.id}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      data-active={active === l.id}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-text data-[active=true]:text-accent"
                    >
                      {l.label}
                      <span className="font-mono text-[0.65rem] text-line">
                        0{LINKS.indexOf(l) + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
