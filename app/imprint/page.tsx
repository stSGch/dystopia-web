import LegalShell from "@/components/LegalShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — DYSTOPIA",
  description:
    "Impressum und Anbieter-Kennzeichnung des Events DYSTOPIA — TBH Gastro & Event AG, Kirchberg SG.",
  alternates: { canonical: "/imprint" },
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <LegalShell title="Impressum">
      <p>
        Rechtliche Angaben gemäss Art. 3 Abs. 1 lit. s UWG (Schweiz) und
        Informationen über die Verantwortlichen dieser Website.
      </p>

      <h2>Veranstalterin / Betreiberin</h2>
      <p>
        <strong>TBH Gastro &amp; Event AG</strong>
        <br />
        Marke: DYSTOPIA
        <br />
        Florastrasse 2
        <br />
        9533 Kirchberg SG
        <br />
        Schweiz
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+41719320068">+41 71 932 00 68</a>
        <br />
        E-Mail:{" "}
        <a href="mailto:contact@dystopia-dnb.ch">contact@dystopia-dnb.ch</a>
        <br />
        Website:{" "}
        <a href="https://dystopia-dnb.ch" target="_blank" rel="noopener noreferrer">
          dystopia-dnb.ch
        </a>
      </p>

      <h2>Handelsregister</h2>
      <p>
        Rechtsform: Aktiengesellschaft (AG) nach Schweizer Recht
        <br />
        Sitz: Kirchberg SG, Schweiz
        <br />
        Handelsregister-Eintrag: Handelsregisteramt des Kantons St. Gallen ·
        CHE-486.260.086
        <br />
        UID-Nummer: CHE-486.260.086
        <br />
        MwSt-Nummer: CHE-486.260.086 MWST
      </p>
      <p>
        Öffentliche Einsicht unter{" "}
        <a href="https://www.zefix.ch/" target="_blank" rel="noopener noreferrer">
          zefix.ch
        </a>
        .
      </p>

      <h2>Konzept, Gestaltung und technische Umsetzung</h2>
      <p>
        TBH Gastro &amp; Event AG in Eigenregie. Logo und Markengestaltung:
        TBH Gastro &amp; Event AG.
      </p>

      <h2>Bildnachweise</h2>
      <p>
        Artist-Portraits stammen aus den offiziellen Press-Kits der jeweiligen
        Künstler:innen und werden mit deren Einverständnis verwendet. Eigene
        Event- und Stimmungsbilder: TBH Gastro &amp; Event AG.
      </p>

      <h2>Haftungsausschluss</h2>
      <h3>Inhalte dieser Website</h3>
      <p>
        Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt
        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
        Inhalte übernimmt die TBH Gastro &amp; Event AG jedoch keine Gewähr.
        Ansprüche gegen die Gesellschaft, welche sich auf Schäden materieller
        oder immaterieller Art beziehen, die durch die Nutzung oder
        Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
        fehlerhafter und unvollständiger Informationen verursacht wurden, sind
        grundsätzlich ausgeschlossen.
      </p>

      <h3>Verweise und Links</h3>
      <p>
        Verweise und Links auf Websites Dritter (insbesondere{" "}
        <a
          href="https://dystopia.shop.bookinea.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          dystopia.shop.bookinea.app
        </a>
        ) liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche
        Verantwortung für solche Websites abgelehnt. Der Zugriff und die
        Nutzung solcher Websites erfolgen auf eigene Gefahr.
      </p>

      <h2>Urheberrechte</h2>
      <p>
        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
        anderen Dateien auf dieser Website gehören ausschliesslich der TBH
        Gastro &amp; Event AG oder den speziell genannten Rechteinhabern. Für
        die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
        der Urheberrechtsträger im Voraus einzuholen.
      </p>

      <h2>Datenschutz</h2>
      <p>
        Die Bearbeitung personenbezogener Daten auf dieser Website ist in
        einer separaten <a href="/privacy">Datenschutzerklärung</a> geregelt.
      </p>
    </LegalShell>
  );
}
