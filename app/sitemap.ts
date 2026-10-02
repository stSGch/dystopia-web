import type { MetadataRoute } from "next";

// Required for output: "export" — Next.js braucht den Hinweis, dass die
// Sitemap statisch zur Build-Zeit gerendert werden kann.
export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://dystopia-dnb.ch";

// Stabiles Datum der letzten inhaltlichen Aktualisierung. Bei echten Content-
// Änderungen (Aftermovie, Galerie, Infos zu 2027) manuell hochsetzen — NICHT new Date() nutzen,
// das würde bei jedem Deploy eine falsche Freshness an Google senden.
const LAST_CONTENT_UPDATE = "2026-10-01";

export default function sitemap(): MetadataRoute.Sitemap {
  // Nur die kanonische, indexierbare Startseite. /imprint/ und /privacy/ stehen
  // bewusst auf noindex und gehören daher NICHT in die Sitemap.
  return [
    {
      url: `${BASE}/`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
