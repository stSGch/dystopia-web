# Redesign-Backlog — Stand 21.09.2026

**Entscheid:** Das Redesign ist fertig entwickelt und geprüft, geht aber vorerst NICHT live.
Die bestehende Website (master, deployed auf dystopia-dnb.ch) bleibt unverändert.

## Was in diesem Branch (`worktree-redesign`) steckt

- **Typografie:** Barlow + Barlow Condensed (Kandidat 1, flyer-treu), self-hosted via
  `@fontsource` — kein Google-Request, DSG-sauber. Zwei-Breiten-System wie auf dem Flyer.
- **Design:** KI-Template-Look entfernt — keine Glow-Orbs, Pulse-Dots, Ticker, rounded-2xl;
  harte Kanten, 1px-Linien, Flyer-Typoblock im Hero, asymmetrische Sektionen,
  Support-Karten flacher (4:3) als Headliner (1:1).
- **Copy:** komplett neu, freigegebene Fassung (kein Staccato, kein Keyword-Sound);
  SEO-Keywords im sichtbaren Text erhalten (Drum and Bass, Ostschweiz, Wil SG, DnB,
  Schweiz, St. Gallen/Winterthur/Zürich/Frauenfeld/Thurgau).
- **Videos:** Hero-Loop (DystopiaStart), Hover-Clips der 3 Headliner, "Wil vs. DnB"
  Click-to-play-Band. Preis CHF 28.90 prominent in der Tickets-Sektion.
- **Review:** 5-Linsen-Panel (Design/Copy/A11y/Perf/SEO) — 26 von 28 Findings gefixt,
  u. a. WCAG-Pause-Knopf fürs Hero-Video, Kontraste, Landmarks, LegalShell-Umstellung,
  scroll-padding, Fokus-Management.

## Offene Punkte vor einem Livegang

1. **Video-Kompression (Pflicht):** hero.mp4 34 MB, Artist-Clips je ~20 MB,
   wil-vs-dnb.mp4 71 MB. Ziel: Hero < 5 MB (720p, H.264 CRF 28–32, Audiospur raus),
   Hover-Clips 2–3 MB. Braucht ffmpeg (Installation war noch nicht freigegeben).
2. **Untertitel-Entscheid:** Spricht jemand im Wil-vs-DnB-Video? Bei Sprache → WebVTT-
   Untertitel nötig (WCAG 1.2.2), bei reiner Musik reicht Kennzeichnung.
3. Merge auf master + `npx next build` + Upload des `out/`-Ordners (manueller FTP-Deploy).

## Wiederaufnahme

- Worktree (falls Ordner noch da): `D:\DevProjects\dystopia-dnb\.claude\worktrees\redesign`
  → `npm ci`, dann `npm run dev -- -p 3210`.
- Nur noch Branch da? `git worktree add .claude/worktrees/redesign worktree-redesign`,
  `npm ci`, und die Videos neu kopieren (sind bewusst NICHT im Git):

| Ziel in `public/video/` | Quelle in `material/Video/` |
|---|---|
| hero.mp4 | DystopiaStart.mp4 |
| tantron.mp4 | Tantron_Pres_V01.mp4 |
| fox-stevenson.mp4 | FoxStevenson_Pres_V01.mp4 |
| arcando.mp4 | Arcando_Pres_V01.mp4 |
| wil-vs-dnb.mp4 | WilvsDnB.mp4 |

`public/flyer-169.jpg` (Poster) ist im Git enthalten.
