import type { Topic } from "@/lib/topics";

/**
 * 토픽별 생성형 커버 아트 — 스톡 이미지 없이 SSR-결정적으로 그린다.
 * variant마다 팔레트에 맞춘 다른 구성을 사용한다.
 */
export function ProjectCover({ topic }: { topic: Topic }) {
  const [base, glow, accent] = topic.cover;
  const gid = `g-${topic.id}`;

  return (
    <svg
      viewBox="0 0 800 520"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${topic.title} cover`}
    >
      <defs>
        <radialGradient id={`${gid}-glow`} cx="32%" cy="28%" r="80%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="45%" stopColor={glow} stopOpacity="0.12" />
          <stop offset="100%" stopColor={base} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="55%" stopColor={base} stopOpacity="0" />
          <stop offset="100%" stopColor="#08080a" stopOpacity="0.9" />
        </linearGradient>
        <filter id={`${gid}-blur`}>
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect width="800" height="520" fill={base} />
      <rect width="800" height="520" fill={`url(#${gid}-glow)`} />

      <g stroke={accent} strokeOpacity="0.1" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="520" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
        ))}
      </g>

      {topic.variant === "orbit" && (
        <g fill="none" stroke={accent} strokeOpacity="0.7" strokeWidth="1.5">
          {[70, 130, 195, 265].map((r, i) => (
            <circle key={r} cx="300" cy="250" r={r} strokeOpacity={0.6 - i * 0.12} />
          ))}
          <circle cx="300" cy="250" r="22" fill={accent} stroke="none" />
          <circle cx="495" cy="250" r="9" fill={glow} stroke="none" />
          <circle cx="170" cy="120" r="6" fill={accent} stroke="none" />
          <circle cx="430" cy="445" r="7" fill={glow} stroke="none" />
        </g>
      )}

      {topic.variant === "grid" && (
        <g>
          {Array.from({ length: 28 }).map((_, i) => {
            const col = i % 7;
            const row = Math.floor(i / 7);
            const lit = (col * 3 + row * 5) % 4 === 0;
            return (
              <rect
                key={i}
                x={120 + col * 78}
                y={90 + row * 78}
                width="58"
                height="58"
                rx="8"
                fill={lit ? accent : "transparent"}
                fillOpacity={lit ? 0.9 : 0}
                stroke={accent}
                strokeOpacity={lit ? 0 : 0.28}
                strokeWidth="1.5"
              />
            );
          })}
        </g>
      )}

      {topic.variant === "wave" && (
        <g fill="none" strokeWidth="2.5">
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 130 + i * 42;
            const amp = 30 + i * 6;
            return (
              <path
                key={i}
                d={`M -20 ${y} C 180 ${y - amp}, 320 ${y + amp}, 520 ${y} S 860 ${y - amp}, 1020 ${y}`}
                stroke={i % 2 ? glow : accent}
                strokeOpacity={0.25 + i * 0.09}
              />
            );
          })}
        </g>
      )}

      {topic.variant === "shard" && (
        <g>
          <polygon
            points="180,90 470,160 360,430 120,330"
            fill={accent}
            fillOpacity="0.16"
            stroke={accent}
            strokeWidth="1.5"
          />
          <polygon
            points="380,120 620,210 540,400 330,360"
            fill={glow}
            fillOpacity="0.14"
            stroke={glow}
            strokeWidth="1.5"
          />
          <circle cx="470" cy="160" r="8" fill={accent} />
          <circle cx="330" cy="360" r="6" fill={glow} />
          <circle cx="560" cy="300" r="60" fill={accent} fillOpacity="0.5" filter={`url(#${gid}-blur)`} />
        </g>
      )}

      <rect width="800" height="520" fill={`url(#${gid}-fade)`} />
    </svg>
  );
}
