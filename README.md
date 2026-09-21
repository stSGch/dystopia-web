# DYSTOPIA — Drum & Bass Event Website

Website zum Event **DYSTOPIA**: Drum & Bass am **Samstag, 19. September 2026** im
**Stadtsaal Wil (SG)** — Türöffnung 21:00, Schluss 03:00. Veranstalter:
TBH Gastro & Event AG. Tickets über [Bookinea](https://dystopia.shop.bookinea.app).

**Live:** [dystopia-dnb.ch](https://dystopia-dnb.ch)

Line-Up: Tantron · Fox Stevenson · Arcando (Headliner) — NPSTR (Swiss Support) —
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
- SEO: Schema.org **MusicEvent** + **Organization** (JSON-LD), Sitemap, OpenGraph,
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

## Was bewusst NICHT im Repo liegt

- **`material/`** — Rohmaterial (Pressefotos, Videos, Flyer-Druckdaten, Logos,
  ~500 MB). Liegt nur lokal; Bezugsquelle ist der Grafiker/Veranstalter.
- **`public/video/`** (nur auf `redesign`) — unkomprimierte Videoschnitte; das
  Mapping zur Wiederherstellung aus `material/Video/` steht im
  `REDESIGN-BACKLOG.md`.
- **`.claude/`** — lokale Tooling-Arbeitsdaten.

## Kontakt

Booking · Partner · Presse: [contact@dystopia-dnb.ch](mailto:contact@dystopia-dnb.ch)
· Instagram: [@dystopia.dnb](https://www.instagram.com/dystopia.dnb)
