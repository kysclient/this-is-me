"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme";

export function DetailNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="홈으로">
          <span className="relative inline-block h-7 w-7">
            <Image src="/symbol-dark.png" alt="" width={28} height={28} className="block dark:hidden" />
            <Image src="/symbol-light.png" alt="" width={28} height={28} className="hidden dark:block" />
          </span>
          <span className="font-display text-base font-bold">김유신</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/#works"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-text sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            전체 보기
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
