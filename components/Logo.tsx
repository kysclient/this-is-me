import Image from "next/image";

/** Swaps the knot mark per theme via CSS so there's no JS flash. */
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="홈으로">
      <span className="relative inline-block" style={{ width: size, height: size }}>
        <Image
          src="/symbol-dark.png"
          alt=""
          width={size}
          height={size}
          className="block dark:hidden"
          priority
        />
        <Image
          src="/symbol-light.png"
          alt=""
          width={size}
          height={size}
          className="hidden dark:block"
          priority
        />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">imTrust</span>
    </a>
  );
}
