import "./globals.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

const SITE_URL = "https://dystopia-dnb.ch";
const TITLE_LONG = "DYSTOPIA — Aftermovie & Recap 2026 | Drum & Bass Wil SG";
const DESCRIPTION =
  "Thank you, Wil. Aftermovie und Fotos von DYSTOPIA, dem Drum & Bass Event vom 19.09.2026 im Stadtsaal Wil (SG). DYSTOPIA 2027 ist in Planung.";
const OG_TITLE = "DYSTOPIA — Aftermovie & Recap 2026";
const OG_DESCRIPTION =
  "Thank you, Wil. Das Aftermovie und die Bilder vom 19.09.2026 im Stadtsaal Wil. DYSTOPIA 2027 ist in Planung.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE_LONG,
  description: DESCRIPTION,
  keywords: [
    "DYSTOPIA",
    "Drum and Bass",
    "Drum & Bass",
    "DnB",
    "Event Wil",
    "Stadtsaal Wil",
    "DnB Schweiz",
    "Drum and Bass Ostschweiz",
    "Drum and Bass Wil",
    "DnB Event Ostschweiz",
    "Wil SG",
    "Arcando",
    "Fox Stevenson",
    "Tantron",
    "NPSTR",
    "Gingerbell",
    "LUiFF",
    "Aftermovie",
    "Recap",
    "DYSTOPIA 2026",
    "DYSTOPIA 2027",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "TBH Gastro & Event AG" }],
  creator: "TBH Gastro & Event AG",
  publisher: "TBH Gastro & Event AG",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: `${SITE_URL}/`,
    siteName: "DYSTOPIA",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og-recap.jpg",
        width: 1200,
        height: 630,
        alt: "DYSTOPIA — Aftermovie & Recap 2026 · DYSTOPIA 2027 in Planung",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: `${SITE_URL}/video/aftermovie-2026.mp4`,
        width: 720,
        height: 1280,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-recap.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "CH-SG",
    "geo.placename": "Wil",
    "geo.position": "47.4626;9.0413",
    ICBM: "47.4626, 9.0413",
  },
};

export const viewport: Viewport = {
  themeColor: "#cd4903",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body className="antialiased">
        {/* Verbindungs-Vorwärmung: Analytics-Host.
            React 19 hebt diese <link>-Tags automatisch in den <head>. */}
        <link rel="preconnect" href="https://cloud.umami.is" />
          {children}
        {/* Umami Analytics — cookie-frei, kein Personenbezug */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9588e37a-b5c8-4869-90f5-44b3a654f39c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
