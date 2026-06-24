import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, topics } from "@/lib/topics";
import { site } from "@/lib/site";
import { ProjectCover } from "@/components/ProjectCover";
import { DetailNav } from "@/components/DetailNav";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTopic(slug);
  if (!t) return { title: "Not found" };
  const url = `${site.url}/work/${t.id}`;
  const description = `${t.tagline} — ${t.lead}`;
  return {
    title: `${t.title} 개발`,
    description,
    keywords: [...t.tags, `${t.title} 외주`, `${t.title} 개발`, ...site.keywords],
    alternates: { canonical: `/work/${t.id}` },
    openGraph: {
      type: "article",
      url,
      title: `${t.title} — ${site.shortName}`,
      description,
      locale: site.locale,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.title} — ${site.shortName}`,
      description,
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const idx = topics.findIndex((t) => t.id === topic.id);
  const next = topics[(idx + 1) % topics.length];

  const url = `${site.url}/work/${topic.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${topic.title} — ${topic.tagline}`,
        description: topic.lead,
        articleSection: topic.kicker,
        keywords: topic.tags.join(", "),
        inLanguage: "ko-KR",
        mainEntityOfPage: url,
        url,
        author: { "@type": "Person", name: site.author, url: site.url },
        publisher: { "@type": "Person", name: site.author, url: site.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: topic.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailNav />

      <article className="px-4 pb-24 pt-10 sm:pt-14">
        {/* ---- header ---- */}
        <header className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/#works"
              className="label transition-colors hover:text-accent"
            >
              ← How I Work
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-mono text-sm text-accent">{topic.index}</span>
              <span className="label">{topic.kicker}</span>
              <span className="text-line">/</span>
              <span className="font-mono text-xs text-muted">
                {topic.readingTime} read
              </span>
            </div>
            <h1 className="mt-4 font-display text-5xl font-extrabold sm:text-6xl">
              {topic.title}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted">
              {topic.tagline}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {topic.tags.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </header>

        {/* ---- cover ---- */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-line">
            <div className="aspect-[16/9]">
              <ProjectCover topic={topic} />
            </div>
          </div>
        </Reveal>

        {/* ---- lead ---- */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-3xl font-display text-2xl font-medium leading-snug sm:text-3xl">
            {topic.lead}
          </p>
        </Reveal>

        {/* ---- body ---- */}
        <div className="mx-auto mt-14 max-w-3xl">
          {topic.sections.map((s, i) => (
            <Reveal key={s.heading} delay={0.05}>
              <section className="mt-12 first:mt-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">
                    {s.heading}
                  </h2>
                </div>
                <div className="mt-4 space-y-4 border-l border-line pl-5 sm:pl-7">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-lg leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-2.5 pt-1">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-muted"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* ---- principles ---- */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl">
            <p className="label mb-5">원칙</p>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {topic.principles.map((p) => (
                <div key={p.title} className="bg-surface p-6">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ---- footer CTA + next ---- */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-3xl bg-accent px-8 py-12 text-center text-accent-ink">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              이런 고민, 같이 해볼까요?
            </h2>
            <a
              href="mailto:kysclient@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#0e1020] transition-transform hover:-translate-y-0.5"
            >
              kysclient@gmail.com
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <Link
            href={`/work/${next.id}`}
            className="group mt-7 flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
          >
            <div>
              <p className="label">다음 — {next.kicker}</p>
              <p className="mt-1 font-display text-2xl font-bold">{next.title}</p>
            </div>
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </article>
    </>
  );
}
