# DYSTOPIA — Drum & Bass Event Website

Website zum Event **DYSTOPIA**: Drum & Bass im **Stadtsaal Wil (SG)**. Die erste
Ausgabe fand am **Samstag, 19. September 2026** statt. Veranstalter:
TBH Gastro & Event AG.

**Aktueller Stand: Recap-Seite** — Aftermovie, Recap-Text, Fotogalerie, Line-up-
Rückblick und Teaser für DYSTOPIA 2027. Ticket-Section, Ticket-Links und
Location-Section sind seit dem Event entfernt.

**Live:** [dystopia-dnb.ch](https://dystopia-dnb.ch)

Line-up 2026: Tantron · Fox Stevenson · Arcando (Headliner) — NPSTR (Swiss Support) —
Gingerbell · LUiFF (Support)

## Branches

| Branch | Inhalt |
|---|---|
| **`master`** | **Prod-Stand** — entspricht immer der deployten Live-Website. Jede Änderung hier wird nach dem Deploy auch hierhin gepusht. |
| **`redesign`** | Fertig entwickeltes **Redesign im Backlog** (flyer-treue Barlow-Typografie, neue Copy, Video-Integration, Accessibility-Fixes). Geht vorerst **nicht** live. Alle Details, offene Punkte und die Wiederaufnahme-Anleitung stehen im [`REDESIGN-BACKLOG.md`](https://github.com/stSGch/dystopia-web/blob/redesign/REDESIGN-BACKLOG.md) auf dem Branch. |

## Tech-Stack

- **Next.js 16** (App Router) mit **Static Export** (`output: "export"`) — reines
  HTML/CSS/JS, kein Node-Server nötig
- **Tailwind CSS v4**
- SEO: Schema.org **MusicEvent** + **VideoObject** + **Organization** (JSON-LD), Sitemap, OpenGraph,
  regionale Keyword-Ausrichtung (Drum and Bass Ostschweiz / Wil SG)
- Analytics: Umami (cookie-frei)

## Entwicklung

```bash
npm ci
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

## Build & Deployment

```bash
npx next build
```

Erzeugt den Ordner `out/` mit der kompletten statischen Website. Deployment =
**manueller Upload von `out/`** (FTP/SFTP) auf den Webhost (nginx).

Wichtig: Redirects, Cache-Header und HSTS können wegen des Static Exports nicht
im Next-Code konfiguriert werden — das liegt in der nginx-Konfiguration des Hosts.

## Aftermovie & Galerie

Video und Fotos sind **selbst gehostet** (kein YouTube/Vimeo, kein Consent nötig)
und liegen fertig komprimiert im Repo:

- **`public/video/`** — Aftermovie 720×1280 als WebM (VP9, ~5 MB) und MP4
  (H.264, ~8 MB, `+faststart`) plus Poster. Der Player (`components/AftermoviePlayer.tsx`)
  lädt mit `preload="none"` nur das Poster; Videodaten erst nach dem Tap auf Play.
  Encoding (ffmpeg, 2-Pass): H.264 `-b:v 1700k` + AAC 128k, VP9 `-b:v 1100k` + Opus 96k,
  jeweils `scale=720:1280`.
- **`public/gallery/`** — 48 Fotos als WebP, je drei Varianten: Kachel 480×600 und
  800×1000 (4:5-Zuschnitt) sowie Vollbild (max. 1600 px) für die Lightbox.
  Reihenfolge, Bildunterschriften und Alt-Texte stehen in
  `components/sections/Gallery.tsx`; die ersten 10 sind die Vorschau, der Rest
  erscheint nach «Mehr anzeigen».
- **`public/og-recap.jpg`** — Share-Bild (1200×630) für den Recap-Stand.

Bei einem neuen Video: Dateien ersetzen und `uploadDate`/`duration` im
VideoObject-Schema (`app/page.tsx`) sowie `LAST_CONTENT_UPDATE` in
`app/sitemap.ts` anpassen.

Der Webhost muss MP4/WebM mit **Range-Requests** ausliefern (nginx-Standard),
sonst funktioniert das Spulen im Video nicht.

## Was bewusst NICHT im Repo liegt

- **`material/`** — Rohmaterial (Pressefotos, Videos, Flyer-Druckdaten, Logos,
  ~500 MB). Liegt nur lokal; Bezugsquelle ist der Grafiker/Veranstalter. Dazu
  gehören auch das Original-Aftermovie (4K) und die unkomprimierten Event-Fotos.
- **`public/video/`** (nur auf `redesign`) — unkomprimierte Videoschnitte; das
  Mapping zur Wiederherstellung aus `material/Video/` steht im
  `REDESIGN-BACKLOG.md`.
- **`.claude/`** — lokale Tooling-Arbeitsdaten.

## Kontakt

Booking · Partner · Presse: [contact@dystopia-dnb.ch](mailto:contact@dystopia-dnb.ch)
· Instagram: [@dystopia.dnb](https://www.instagram.com/dystopia.dnb)
