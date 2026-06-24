"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches)
      return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setActive(!!t.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[90]"
    >
      <motion.div
        animate={{ width: active ? 54 : 16, height: active ? 54 : 16 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-accent/20"
        style={{ mixBlendMode: "difference" }}
      />
    </motion.div>
  );
}
