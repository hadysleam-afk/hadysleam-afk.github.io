import type { Metadata } from "next";
import "./globals.css";

const url = "https://hadysleam-afk.github.io/";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Hady Sleam | Backend Developer",
  description:
    "Hady Sleam, backend developer from Egypt. Node.js, Express, PHP, Laravel, SQL. Real backends, honest demos.",
  alternates: { canonical: url },
  openGraph: {
    title: "Hady Sleam | Backend Developer",
    description: "APIs, databases and the services behind real interfaces. Node.js · Laravel · SQL.",
    type: "website",
    url,
    images: [`${url}images/og-cover.jpg`],
  },
  twitter: { card: "summary_large_image", title: "Hady Sleam | Backend Developer", images: [`${url}images/og-cover.jpg`] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hady Sleam",
  jobTitle: "Backend Developer",
  url,
  image: `${url}images/og-cover.jpg`,
  sameAs: ["https://github.com/hadysleam-afk", "https://www.linkedin.com/in/hady-sleam/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Cairo:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
