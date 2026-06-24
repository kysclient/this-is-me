import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider, themeScript } from "@/components/theme";
import { Cursor } from "@/components/Cursor";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.author, url: site.url }],
  creator: site.author,
  publisher: site.author,
  category: "technology",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // TODO: 구글 서치콘솔 / 네이버 서치어드바이저 인증 코드 입력
    google: "",
    other: { "naver-site-verification": "5c81af37436c600efaf18a739772828ae6307e95" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.author,
      url: site.url,
      email: `mailto:${site.email}`,
      jobTitle: "Web & App Developer",
      description: site.description,
      knowsAbout: [
        "웹 개발",
        "앱 개발",
        "프론트엔드 개발",
        "백엔드 개발",
        "인프라",
        "UI/UX 디자인",
        "Next.js",
        "React",
        "TypeScript",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: "김유신 웹·앱 개발 외주",
      description: site.description,
      url: site.url,
      areaServed: { "@type": "Country", name: "대한민국" },
      availableLanguage: ["ko", "en"],
      priceRange: "₩₩",
      provider: { "@id": `${site.url}/#person` },
      serviceType: [
        "웹사이트 제작",
        "웹앱 개발",
        "모바일 앱 개발",
        "프론트엔드 개발",
        "백엔드 개발",
        "인프라 구축",
        "UI/UX 디자인",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "ko-KR",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${bricolage.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
