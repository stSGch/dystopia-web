import LegalShell from "@/components/LegalShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — DYSTOPIA",
  description:
    "Datenschutzerklärung des Events DYSTOPIA — gemäss revidiertem Schweizer Datenschutzgesetz (revDSG).",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Datenschutzerklärung">
      <p>
        Diese Erklärung informiert darüber, wie die TBH Gastro &amp; Event AG
        im Rahmen des Events DYSTOPIA personenbezogene Daten bearbeitet. Sie
        orientiert sich am revidierten Schweizer Datenschutzgesetz (revDSG, in
        Kraft seit 1. September 2023) und ergänzend an der EU-DSGVO, soweit
        diese anwendbar ist.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        <strong>TBH Gastro &amp; Event AG</strong>
        <br />
        Florastrasse 2
        <br />
        9533 Kirchberg SG
        <br />
        Schweiz
        <br />
        Telefon: <a href="tel:+41719320068">+41 71 932 00 68</a>
        <br />
        E-Mail:{" "}
        <a href="mailto:contact@dystopia-dnb.ch">contact@dystopia-dnb.ch</a>
      </p>
      <p>
        Die TBH Gastro &amp; Event AG ist Verantwortliche im Sinne von Art. 5
        lit. j revDSG für die auf dieser Website bearbeiteten Personendaten.
      </p>

      <h2>2. Begriffe</h2>
      <p>
        <strong>Personendaten</strong> sind Angaben, die sich auf eine
        bestimmte oder bestimmbare natürliche Person beziehen (z.B. Name,
        Adresse, E-Mail-Adresse, Telefonnummer, IP-Adresse).{" "}
        <strong>Bearbeitung</strong> ist jeder Umgang mit Personendaten —
        unabhängig von den angewandten Mitteln und Verfahren — insbesondere das
        Beschaffen, Speichern, Verwenden, Umarbeiten, Bekanntgeben,
        Archivieren, Löschen oder Vernichten.
      </p>

      <h2>3. Grundsätze</h2>
      <p>
        Wir bearbeiten Personendaten rechtmässig, nach Treu und Glauben und
        verhältnismässig. Personendaten werden nur zu dem Zweck bearbeitet, der
        bei der Beschaffung angegeben wurde, aus dem sie hervorgehen oder der
        gesetzlich vorgesehen ist. Wir bearbeiten Personendaten nur, soweit
        dies für den jeweiligen Zweck erforderlich ist (Datensparsamkeit) und
        stellen deren Richtigkeit sicher.
      </p>

      <h2>4. Welche Daten wir bearbeiten</h2>

      <h3>4.1 Beim Besuch der Website (Server-Logfiles)</h3>
      <p>
        Beim Aufruf unserer Website übermittelt Ihr Browser automatisch
        technische Angaben an den Server unseres Hosting-Anbieters. Diese
        werden vorübergehend in sogenannten Server-Logfiles gespeichert: IP-
        Adresse (in der Regel gekürzt / anonymisiert), Datum und Uhrzeit des
        Zugriffs, aufgerufene Seite, Referrer-URL, Browser-Typ, Version und
        Betriebssystem, übertragene Datenmenge sowie HTTP-Statuscode. Diese
        Daten dienen der Sicherheit, Stabilität und technischen Analyse. Eine
        Zusammenführung mit anderen Datenquellen findet nicht statt.
      </p>

      <h3>4.2 Beim Ticketkauf</h3>
      <p>
        Der Ticketverkauf erfolgt nicht über diese Website, sondern über den
        externen Anbieter <strong>Bookinea</strong> (
        <a
          href="https://dystopia.shop.bookinea.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          dystopia.shop.bookinea.app
        </a>
        ). Beim Klick auf einen Ticket-Link verlassen Sie unsere Website. Es
        gelten die Datenschutzbestimmungen von Bookinea. Wir erhalten von
        Bookinea ausschliesslich diejenigen Personendaten, die für die
        Vertragsabwicklung (Einlasskontrolle, Buchhaltung, Kontaktaufnahme bei
        Eventänderungen) erforderlich sind.
      </p>

      <h3>4.3 Bei Kontaktaufnahme per E-Mail oder Telefon</h3>
      <p>
        Wenn Sie uns per E-Mail (contact@dystopia-dnb.ch) oder telefonisch
        kontaktieren, bearbeiten wir die von Ihnen mitgeteilten Angaben (Name,
        Kontaktdaten, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens.
      </p>

      <h2>5. Zwecke der Bearbeitung</h2>
      <p>
        Wir bearbeiten Personendaten zu folgenden Zwecken: Abwicklung des
        Ticketkaufs und Einlasskontrolle, Kommunikation mit Ticketkäufer:innen
        bei Eventänderungen, Erfüllung gesetzlicher Pflichten (Buchführung,
        MwSt, Aufbewahrungspflichten), Sicherheit und technische Stabilität
        der Website sowie Beantwortung von Anfragen.
      </p>

      <h2>6. Rechtsgrundlagen</h2>
      <p>
        Die Bearbeitung erfolgt im Rahmen des revDSG. Soweit die EU-DSGVO
        anwendbar ist (z.B. bei Besuchenden aus der EU), stützen wir die
        Bearbeitung auf folgende Grundlagen: Art. 6 Abs. 1 lit. b DSGVO
        (Anbahnung und Erfüllung eines Vertrags — Ticketverkauf), Art. 6
        Abs. 1 lit. c DSGVO (Erfüllung gesetzlicher Pflichten) sowie Art. 6
        Abs. 1 lit. f DSGVO (Wahrung berechtigter Interessen — IT-Sicherheit,
        Missbrauchsabwehr).
      </p>

      <h2>7. Empfänger / Auftragsbearbeiter</h2>
      <p>
        Wir setzen für den Betrieb der Website und die Abwicklung des Events
        sorgfältig ausgewählte Dienstleister ein, die ausschliesslich auf
        unsere Weisung tätig sind und vertraglich auf Vertraulichkeit und
        Datenschutz verpflichtet wurden — insbesondere unseren Hosting-
        Anbieter, den Ticketing-Anbieter <strong>Bookinea</strong>, unseren
        E-Mail-Provider sowie <strong>Umami Software, Inc.</strong> (Cloud-
        Analytics-Anbieter,{" "}
        <a href="https://umami.is" target="_blank" rel="noopener noreferrer">
          umami.is
        </a>
        ). Diese Liste entspricht dem aktuellen Stand und wird bei Änderungen
        angepasst.
      </p>

      <h2>8. Bekanntgabe ins Ausland</h2>
      <p>
        Eine Bekanntgabe von Personendaten in Länder ausserhalb der Schweiz
        und der EU kann im Rahmen der eingesetzten Dienste erfolgen. Für
        diese Bekanntgaben stützen wir uns auf die Angemessenheitsbeschlüsse
        des Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
        (EDÖB) sowie — falls kein angemessenes Schutzniveau besteht — auf
        anerkannte Standardvertragsklauseln und zusätzliche technische
        Schutzmassnahmen.
      </p>

      <h2>9. Aufbewahrungsdauer</h2>
      <p>
        Wir bearbeiten Personendaten nur so lange, wie es für die genannten
        Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungspflichten
        vorsehen: Anfragen ohne Vertragsschluss in der Regel bis zu 12 Monaten;
        vertragsbezogene Daten 10 Jahre nach dem Event (Art. 958f OR);
        Server-Logfiles maximal 14 Tage, anschliessend automatisierte Löschung
        bzw. Anonymisierung.
      </p>

      <h2>10. Cookies &amp; Reichweitenmessung</h2>
      <p>
        Diese Website setzt <strong>keine</strong> Cookies und{" "}
        <strong>keine</strong> klassischen Tracking-Technologien (Google
        Analytics, Facebook Pixel o.ä.) ein. Funktionale Cookies werden nur
        gesetzt, wenn sie für die technische Funktion unerlässlich sind.
      </p>
      <p>
        Für die anonymisierte Reichweitenmessung nutzen wir{" "}
        <strong>Umami</strong> (Anbieterin: Umami Software, Inc., USA;{" "}
        <a href="https://umami.is" target="_blank" rel="noopener noreferrer">
          umami.is
        </a>
        ). Umami arbeitet ohne Cookies und ohne Fingerprinting, speichert keine
        IP-Adressen im Klartext und legt keine Profile einzelner Besuchender
        an. Erfasst werden ausschliesslich aggregierte Informationen wie
        Seitenaufrufe, Referrer, Browser- und Geräteklasse sowie Klicks auf
        zentrale Buttons (z.B. Ticket-Link, Instagram-Link). Eine
        Identifizierung einzelner Personen ist mit diesen Daten nicht möglich.
        Rechtsgrundlage ist unser berechtigtes Interesse an einer
        datenschutzfreundlichen Reichweitenmessung (Art. 6 Abs. 1 lit. f
        DSGVO) bzw. die entsprechende Rechtfertigung nach revDSG.
      </p>
      <p>
        Sollten wir künftig Cookies zu Analyse- oder Marketingzwecken
        einsetzen, werden wir diese Erklärung anpassen und — soweit rechtlich
        erforderlich — eine vorherige Einwilligung einholen.
      </p>

      <h2>11. Datensicherheit</h2>
      <p>
        Wir treffen angemessene technische und organisatorische Massnahmen,
        um Ihre Personendaten gegen zufällige oder absichtliche Manipulation,
        Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu
        schützen. Dazu gehört insbesondere die Verschlüsselung der
        Datenübertragung via HTTPS / TLS.
      </p>

      <h2>12. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung unrichtiger
        oder unvollständiger Daten, Löschung oder Sperrung (soweit keine
        gesetzliche Aufbewahrungspflicht besteht), Herausgabe oder Übertragung
        Ihrer Daten (Datenportabilität, Art. 28 revDSG), Widerspruch gegen
        bestimmte Bearbeitungen sowie Widerruf erteilter Einwilligungen mit
        Wirkung für die Zukunft.
      </p>
      <p>
        Richten Sie entsprechende Anfragen bitte formlos an{" "}
        <a href="mailto:contact@dystopia-dnb.ch">contact@dystopia-dnb.ch</a>.
        Zur Identitätsprüfung können wir geeignete Nachweise verlangen. Zudem
        steht Ihnen das Recht zu, sich beim Eidgenössischen Datenschutz- und
        Öffentlichkeitsbeauftragten (EDÖB) zu beschweren:{" "}
        <a
          href="https://www.edoeb.admin.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          edoeb.admin.ch
        </a>
        .
      </p>

      <h2>13. Minderjährige</h2>
      <p>
        Das Event DYSTOPIA richtet sich an volljährige Personen (ab 18 Jahren).
        Minderjährige sollten uns ohne Zustimmung ihrer gesetzlichen
        Vertretung keine Personendaten übermitteln.
      </p>

      <h2>14. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
        stets an die aktuellen rechtlichen Anforderungen und technischen
        Gegebenheiten anzupassen. Für Ihren erneuten Besuch gilt jeweils die
        aktuelle Fassung.
      </p>

      <h2>15. Kontakt in Datenschutzfragen</h2>
      <p>
        Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie
        sich bitte an:
        <br />
        <strong>TBH Gastro &amp; Event AG</strong>
        <br />
        Florastrasse 2
        <br />
        9533 Kirchberg SG
        <br />
        E-Mail:{" "}
        <a href="mailto:contact@dystopia-dnb.ch">contact@dystopia-dnb.ch</a>
        <br />
        Telefon: <a href="tel:+41719320068">+41 71 932 00 68</a>
      </p>

      <p>
        Stand:{" "}
        {new Date().toLocaleDateString("de-CH", {
          year: "numeric",
          month: "long",
        })}
      </p>
    </LegalShell>
  );
}
