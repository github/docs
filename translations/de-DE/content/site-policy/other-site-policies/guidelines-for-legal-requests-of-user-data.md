---
title: Richtlinien für rechtliche Anfragen von Nutzerdaten
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 991c060af22a9161e026aa396037a1d52e66fcea
ms.sourcegitcommit: d298d354a4585e6c154f2a8428aebb214d49e2a1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/07/2022
ms.locfileid: '147858618'
---
Sind Sie ein Strafverfolgungsbeamter, der eine Untersuchung durchführt, die möglicherweise auf GitHub gehostete Nutzerinhalte betrifft?
Oder vielleicht legen Sie einfach sehr viel Wert auf Datenschutz und möchten wissen, welche Informationen wir an die Strafverfolgungsbehörden weitergeben und unter welchen Umständen.
In jedem der beiden Fälle sind Sie hier richtig.

In diesen Richtlinien geben wir einen kleine Einführung über GitHub, die Arten von Daten, die wir haben und unter die Bedingungen unter denen wir private Nutzerinformationen offenlegen.
Bevor wir jedoch ins Detail gehen, hier ein paar wichtige Details, die Sie interessieren könnten:

- Wir [**benachrichtigen alle betroffenen Nutzer**](#we-will-notify-any-affected-account-owners) über alle Anfragen nach ihren Kontoinformationen, es sei denn, dies ist gesetzlich oder per Gerichtsbeschluss untersagt.
- Wir legen keine **Standortverfolgungsdaten** offen, wie z. B. IP-Adressprotokolle, ohne dass ein [gültiger Gerichtsbeschluss oder Durchsuchungsbefehl](#with-a-court-order-or-a-search-warrant) vorliegt.
- Wir legen keine **privaten Nutzerinhalte** offen, einschließlich der Inhalte privater Repositories, ohne dass ein gültiger [Durchsuchungsbefehl](#only-with-a-search-warrant) vorliegt.

## Über diese Richtlinien

Unsere Nutzer vertrauen uns ihre Softwareprojekte und ihren Code an – häufig zählen diese zu ihren wertvollsten geschäftlichen oder persönlichen Vermögenswerten.
Die Aufrechterhaltung dieses Vertrauens ist für uns von entscheidender Bedeutung, daher müssen Nutzerdaten stets sicher, geschützt und privat bleiben.

Während die meisten Nutzer die Dienste von GitHub nutzen, um neue Unternehmen zu gründen, neue Technologien aufzubauen oder allgemein einen Beitrag für die Allgemeinheit zu leisten, sind wir uns bewusst, dass es bei Millionen von Nutzern auf der ganzen Welt zwangsläufig ein paar schwarze Schafe gibt.
In diesen Fällen wollen wir den Strafverfolgungsbehörden helfen, ihr legitimes Interesse am Schutz der Öffentlichkeit zu wahren.

Durch die Bereitstellung von Leitlinien für Strafverfolgungsbeamte hoffen wir, ein Gleichgewicht zwischen den oft konkurrierenden Interessen des Datenschutzes und der Justiz herzustellen.
Wir hoffen, dass diese Richtlinien dazu beitragen, die Erwartungen auf beiden Seiten zu definieren und die internen Prozesse von GitHub transparenter zu gestalten.
Unsere Nutzer sollten wissen, dass wir ihre privaten Informationen wertschätzen und alles tun, um sie zu schützen.
Dies bedeutet, dass Daten nur dann an Dritte weitergegeben werden, wenn die entsprechenden gesetzlichen Anforderungen erfüllt sind.
Indem wir die Strafverfolgungsbehörden über die Systeme von GitHub informieren, möchten wir dafür sorgen, dass sie ihre Datenanfragen effizienter gestalten und genau die Informationen erhalten können, die sie für ihre Ermittlungen benötigen.

## GitHub Terminologie

Bevor Sie uns bitten, Daten offenzulegen, kann es hilfreich sein, zu verstehen, wie unser System implementiert ist.
GitHub hostet Millionen von Datenrepositories mit dem [Git Versionskontrollsystem](https://git-scm.com/video/what-is-version-control).
Repositories auf GitHub – die öffentlich oder privat sein können – werden meist für Softwareentwicklungsprojekte verwendet, aber auch, um an Inhalten jeglicher Art zu arbeiten.

- [**Nutzer**](/articles/github-glossary#user) – Nutzer werden in unserem System als persönliche GitHub Konten dargestellt.
Jeder Nutzer hat ein persönliches Profil und kann mehrere Repositories besitzen.
Nutzer können Organisationen erstellen oder dazu eingeladen werden, ihnen beizutreten oder am Repository eines anderen Nutzers mitzuarbeiten.

- [**Mitarbeiter**](/articles/github-glossary#collaborator) – Ein Mitarbeiter ist ein Nutzer mit Lese- und Schreibzugriff auf ein Repository, der vom Eigentümer des Repository eingeladen wurde, Beiträge zu leisten.

- [**Organisationen**](/articles/github-glossary#organization) – Organisationen sind eine Gruppe von zwei oder mehr Nutzern, die in der Regel reale Organisationen wie Unternehmen oder Projekte widerspiegeln.
Sie werden von Nutzern verwaltet und können sowohl Repositories als auch Teams von Nutzern enthalten.

- [**Aufbewahrungsorte**](/articles/github-glossary#repository) – Ein Repository ist eines der grundlegendsten GitHub Elemente.
Sie können es sich am einfachsten als Ordner eines Projekts vorstellen.
Ein Repository enthält alle Projektdateien (einschließlich Dokumentation) und speichert den Revisionsverlauf jeder Datei.
Repositories können mehrere Mitarbeiter haben und können nach Ermessen ihrer Administratoren öffentlich einsehbar sein oder nicht.

- [**Pages**](/articles/what-is-github-pages) – GitHub Pages sind öffentliche Webseiten, die kostenlos von GitHub gehostet werden und die die Nutzer einfach über Code veröffentlichen können, welcher in ihren Repositories gespeichert ist.
Wenn ein Nutzer oder eine Organisation eine GitHub Seite hat, kann sie normalerweise unter einer URL wie z. B. `https://username.github.io` gefunden werden, oder die Webseite wurde dem eigenen nutzerdefinierten Domänennamen des Nutzers bzw. der Organisation zugeordnet.

- [**Gists**](/articles/creating-gists) – Gists sind Ausschnitte aus Quellcode oder anderem Text, die Nutzer verwenden können, um Ideen zu speichern oder mit Freunden zu teilen.
Wie normale GitHub Repositories werden Gists mit Git erstellt, sodass sie automatisch versioniert, verzweigt und heruntergeladen werden können.
Gists können entweder öffentlich oder geheim sein (nur über eine bekannte URL zugänglich). Öffentliche Gists können nicht in geheime Gists umgewandelt werden.

## Nutzerdaten auf GitHub.com

Hier ist eine Liste der Arten von Daten, die wir über Nutzer und Projekte auf GitHub pflegen. Die Liste erfüllt keinen Anspruch auf Vollständigkeit.

- <a name="public-account-data"></a>
**Öffentliche Kontodaten** – Auf GitHub ist eine Vielzahl von Informationen über Nutzer und ihre Repositories öffentlich verfügbar.
Nutzerprofile finden Sie unter einer URL wie z. B. `https://github.com/username`.
In Nutzerprofilen werden Informationen darüber angezeigt, wann der Nutzer sein Konto erstellt hat, sowie seine öffentlichen Aktivitäten auf GitHub.com und soziale Interaktionen.
Öffentliche Nutzerprofile können auch zusätzliche Informationen enthalten, die ein Nutzer möglicherweise öffentlich geteilt hat.
Alle öffentlichen Nutzerprofile zeigen Folgendes an:
  - Nutzername
  - Die Repositories, die der Nutzer markiert hat
  - Die anderen GitHub Nutzer, denen der Nutzer folgt
  - Die Nutzer, die ihm folgen

  Optional kann ein Nutzer auch die folgenden Informationen öffentlich teilen:
  - seinen richtigen Namen
  - einen Avatar
  - ein verbundenes Unternehmen
  - seinen Standort
  - eine öffentliche E-Mail-Adresse
  - seine persönliche Webseite
  - Organisationen, bei denen der Nutzer Mitglied ist (*abhängig von den Einstellungen der Organisation oder des Nutzers*)

- <a name="private-account-data"></a>
**Private Kontodaten** – GitHub sammelt und verwaltet auch bestimmte private Informationen über Nutzer, wie in unseren [Datenschutz-Bestimmungen](/articles/github-privacy-statement).
Dies kann enthalten:
  - Private E-Mail-Adressen
  - Zahlungsdetails
  - Sicherheitszugriffsprotokolle
  - Daten über Interaktionen mit privaten Repositories

  Um sich ein Bild von der Art der privaten Kontoinformationen zu machen, die GitHub sammelt, können Sie Ihr {% data reusables.user-settings.personal_dashboard %} besuchen und durch die Rubriken in der linken Menüleiste blättern.

- <a name="organization-account-data"></a>
**Kontodaten von Organisationen** – Informationen über Organisationen, ihre administrativen Nutzer und Repositories sind auf GitHub öffentlich zugänglich.
Organisationsprofile finden Sie unter einer URL wie z. B. `https://github.com/organization`.
Öffentliche Organisationsprofile können auch zusätzliche Informationen enthalten, die ein Profilinhaber möglicherweise öffentlich geteilt hat.
Alle öffentlichen Organisationsprofile zeigen Folgendes an:
  - Name der Organisation
  - Die Repositories, die der Inhaber markiert hat
  - Alle GitHub Nutzer, die Eigentümer der Organisation sind

  Optional kann ein administrativer Nutzer auch die folgenden Informationen öffentlich teilen:
  - einen Avatar
  - ein verbundenes Unternehmen
  - seinen Standort
  - Direkte Mitglieder und Teams
  - Mitarbeiter

- <a name="public-repository-data"></a>
**Öffentliche Repository-Daten** – GitHub vereint Millionen von öffentlichen Open-Source-Softwareprojekten.
Sie können fast jedes öffentliche Repository durchsuchen (z. B. das [Atom-Projekt](https://github.com/atom/atom)), um ein Gefühl für die Informationen zu bekommen, die GitHub über Repositories sammelt und verwaltet.
Dies kann beinhalten:

  - den Code selbst
  - frühere Versionen des Codes
  - stabile Release-Versionen des Projekts
  - Informationen über Mitarbeiter, Mitwirkende und Repository-Mitglieder
  - Protokolle von Git-Operationen wie Commits, Branching, Pushing, Pulling, Forking und Cloning
  - Gespräche im Zusammenhang mit Git-Operationen wie Kommentare zu Pull-Requests oder Commits
  - Projektdokumentation wie Issues und Wiki-Seiten
  - Statistiken und Grafiken, die die Beiträge zum Projekt und zum Netzwerk der Mitwirkenden zeigen

- <a name="private-repository-data"></a>
**Private Repository-Daten** – GitHub sammelt und verwaltet für private Repositories dieselbe Art von Daten wie für öffentliche Repositories, mit der Ausnahme, dass nur speziell eingeladene Nutzer auf die Daten privater Repositories zugreifen können.

- <a name="other-data"></a>
**Andere Daten** – Darüber hinaus sammelt GitHub Analysedaten wie Seitenbesuche und Informationen, die gelegentlich freiwillig von unseren Nutzern bereitgestellt werden (z. B. Kommunikation mit unserem Support-Team, Umfrageinformationen und/oder Website-Registrierungen).

## Wir werden alle betroffenen Kontoinhaber benachrichtigen

Gemäß unseren Richtlinien haben wir Nutzer über alle ausstehenden Anfragen in Bezug auf ihre Konten oder Repositories zu benachrichtigen, es sei denn, dies ist uns gesetzlich oder per Gerichtsbeschluss untersagt. Vor der Offenlegung von Nutzerdaten bemühen wir uns in angemessener Weise, alle betroffenen Kontoinhaber zu benachrichtigen, indem wir ihnen eine Nachricht an ihre verifizierte E-Mail-Adresse schicken und ihnen eine Kopie der Vorladung, des Gerichtsbeschlusses oder des Haftbefehls zukommen lassen, damit sie die Möglichkeit haben, das rechtliche Verfahren anzufechten, falls sie dies wünschen. Unter (seltenen) dringenden Umständen können wir die Benachrichtigung verschieben, wenn wir feststellen, dass eine Verschiebung notwendig ist, um Tod oder ernsthaften Schaden zu verhindern, oder aufgrund einer laufenden Untersuchung.

## Offenlegung von nicht öffentlichen Informationen

Gemäß unseren Richtlinien dürfen wir nicht öffentliche Nutzerinformationen im Zusammenhang mit zivil- oder strafrechtlichen Ermittlungen nur mit Zustimmung des Nutzers oder nach Erhalt einer gültigen Vorladung, eines zivilrechtlichen Ermittlungsantrags, eines Gerichtsbeschlusses, eines Durchsuchungsbefehls oder eines anderen ähnlichen gültigen Rechtsverfahrens offenlegen. Unter bestimmten dringenden Umständen (siehe unten) können wir auch begrenzte Informationen weitergeben, jedoch nur entsprechend der Art der Umstände. Für alles, was darüber hinausgeht, wäre ein Gerichtsverfahren erforderlich.
GitHub behält sich das Recht vor, Anfragen nach nicht öffentlichen Informationen zu widersprechen.
Wenn GitHub zustimmt, nicht öffentliche Informationen als Antwort auf eine rechtmäßige Anfrage bereitzustellen, werden wir eine angemessene Suche nach den angeforderten Informationen durchführen.
Je nach Art des Gerichtsverfahrens, das uns zugestellt wird, sind wir mit der Herausgabe der folgenden Informationen einverstanden:

- <a name="with-user-consent"></a>
**Mit Zustimmung des Nutzers** – GitHub gibt private Kontoinformationen auf Anfrage direkt an den Nutzer (oder einen Inhaber, falls es sich um ein Organisationskonto handelt oder mit schriftlicher Zustimmung des Nutzers an einen benannten Dritten weiter, sobald GitHub sicher ist, dass der Nutzer seine Identität überprüft hat.

- <a name="with-a-subpoena"></a>
**Mit Vorladung** – Wenn uns eine gültige Vorladung, ein zivilrechtliches Ermittlungsverfahren oder ein ähnliches Gerichtsverfahren im Zusammenhang mit einer offiziellen straf- oder zivilrechtlichen Untersuchung zugestellt wird, können wir bestimmte nicht öffentliche Kontoinformationen bereitstellen, darunter:

  - Mit dem Konto verknüpfte Namen
  - Mit dem Konto verknüpfte E-Mail-Adresse(n).
  - Abrechnungsinformationen
  - Registrierungsdatum und Kündigungsdatum
  - IP-Adresse, Datum und Uhrzeit zum Zeitpunkt der Kontoregistrierung
  - IP-Adresse(n), die für den Zugriff auf das Konto zu einem bestimmten Zeitpunkt oder bei einem für die Untersuchung relevanten Ereignis verwendet wurden

Bei Organisationskonten können wir die Namen und E-Mail-Adressen der Kontoinhaber sowie das Datum und die IP-Adresse zum Zeitpunkt der Erstellung des Organisationskontos angeben. Wir geben nur Informationen über andere Mitglieder oder Mitwirkende des Organisationskontos oder zusätzliche Informationen über den/die identifizierten Kontoinhaber heraus, wenn eine Folgeanfrage für diese spezifischen Nutzer gestellt wurde.

Bitte beachten Sie, dass die verfügbaren Informationen von Fall zu Fall variieren. Die Angabe einiger Informationen ist den Nutzern freigestellt. In anderen Fällen kann es sein, dass wir die Informationen nicht erfasst oder gespeichert haben.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**Mit Gerichtsbeschluss *oder* Durchsuchungsbefehl** – Wir legen Kontozugriffsprotokolle nur dann offen, wenn wir entweder (i) durch einen Gerichtsbeschluss, der gemäß 18 U.S.C. Abschnitt 2703(d) ausgestellt wurde, dazu gezwungen sind, und zwar bei Vorliegen spezifischer und artikulierbarer Fakten, die zeigen, dass es vernünftige Gründe für die Annahme gibt, dass die gesuchten Informationen für eine laufende strafrechtliche Untersuchung relevant und wesentlich sind; oder (ii) durch einen Durchsuchungsbefehl dazu gezwungen sind, der gemäß den in den Federal Rules of Criminal Procedure beschriebenen Verfahren oder gleichwertigen staatlichen Durchsuchungsbefehlsverfahren bei Vorliegen eines hinreichenden Verdachts ausgestellt wurde.
Zusätzlich zu den oben aufgeführten nicht öffentlichen Kontoinformationen stellen wir bei Vorliegen eines Gerichtsbeschlusses oder eines Durchsuchungsbefehls gegebenenfalls Kontozugriffsprotokolle bereit, die Folgendes beinhalten können:

  - alle Protokolle, die Aufschluss über die Bewegungen eines Nutzers innerhalb eines bestimmten Zeitraums geben
  - Konto- oder private Repository-Einstellungen (z. B. welche Nutzer bestimmte Berechtigungen haben usw.)
  - Nutzer- oder IP-spezifische Analysedaten wie der Browserverlauf
  - andere Sicherheitszugriffsprotokolle als Protokolle über die Kontoerstellung oder Protokolle für einen bestimmten Zeitraum

- <a name="only-with-a-search-warrant"></a>
**Nur mit Durchsuchungsbefehl** – Wir legen die privaten Inhalte eines Kontos nur dann offen, wenn wir durch einen Durchsuchungsbefehl dazu gezwungen sind, der gemäß den in den Federal Rules of Criminal Procedure beschriebenen Verfahren oder gleichwertigen staatlichen Durchsuchungsbefehlsverfahren bei Vorliegen eines hinreichenden Verdachts ausgestellt wurde.
Zusätzlich zu den oben aufgeführten nicht öffentlichen Kontoinformationen und Kontozugriffsprotokollen stellen wir bei Vorliegen eines Gerichtsbeschlusses oder eines Durchsuchungsbefehls auch private Kontoinhalte bereit, die Folgendes beinhalten können:

  - Inhalte geheimer Gists
  - Quellcode oder andere Inhalte in privaten Repositories
  - Aufzeichnungen über Beiträge und Mitarbeit für private Repositories
  - Mitteilungen oder Dokumentation (z. B. Issues oder Wikis) in privaten Repositories
  - alle Sicherheitsschlüssel, die für die Authentifizierung oder Verschlüsselung verwendet werden

- <a name="in-exigent-circumstances"></a>
**Unter dringenden Umständen** – Wenn wir eine Anfrage nach Informationen unter bestimmten dringenden Umständen erhalten (wenn wir glauben, dass die Offenlegung notwendig ist, um einen Notfall zu verhindern, bei dem die Gefahr des Todes oder einer schweren körperlichen Verletzung einer Person besteht), können wir begrenzte Informationen offenlegen, die wir als notwendig erachten, um den Strafverfolgungsbehörden die Bewältigung des Notfalls zu ermöglichen. Für alle darüber hinausgehenden Informationen benötigen wir eine Vorladung, einen Durchsuchungsbefehl oder eine gerichtliche Anordnung, wie oben beschrieben. Beispielsweise geben wir Inhalte privater Repositories nicht ohne Durchsuchungsbefehl heraus. Bevor wir Informationen offenlegen, vergewissern wir uns, dass die Anfrage von einer Strafverfolgungsbehörde stammt und dass eine Behörde eine offizielle Mitteilung mit einer Zusammenfassung des Notfalls verschickt hat und holen Informationen dazu ein, wie die angeforderten Informationen zur Bewältigung des Notfalls beitragen werden.

## Kostenerstattung

Nach staatlichem und bundesstaatlichem Recht kann GitHub die Erstattung von Kosten verlangen, die mit der Erfüllung einer gültigen rechtlichen Forderung verbunden sind, wie z. B. einer Vorladung, einem Gerichtsbeschluss oder einem Durchsuchungsbefehl. Wir stellen nur einen Teil der Kosten in Rechnung, und die Erstattung dieser Kosten deckt nur einen Teil der Gesamtkosten ab, die uns tatsächlich entstehen, um rechtlichen Anordnungen nachzukommen.

Während wir in Notfällen oder unter anderen dringenden Umständen keine Gebühren erheben, beantragen wir für alle anderen rechtlichen Anfragen eine Erstattung nach dem folgenden Schema, sofern nicht gesetzlich anders vorgeschrieben:

- Erste Suche von bis zu 25 Identifikatoren: Kostenlos
- Erstellung von Teilnehmerinformationen/Daten für bis zu 5 Konten: Kostenlos
- Erstellung von Teilnehmerinformationen/Daten für mehr als 5 Konten: 20 USD pro Konto.
- Sekundäre Suche: 10 USD pro Suche

## Datenaufbewahrung

Auf formale Anfrage von US-Strafverfolgungsbehörden im Zusammenhang mit offiziellen strafrechtlichen Ermittlungen und bis zum Erlass eines Gerichtsbeschlusses oder eines anderen Verfahrens werden wir Maßnahmen ergreifen, um Kontodaten bis zu 90 Tage lang aufzubewahren.

## Anträge stellen

Richten Sie Anfragen bitte an folgende Adresse:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Anfragen für Belegexemplare von Dokumenten können per E-Mail an legal-support@github.com gesendet werden.

Bitte formulieren Sie Ihre Anfrage so spezifisch und eng wie möglich, und geben Sie folgende Informationen an:

- vollständige Angaben zu der Behörde, die die Informationsanfrage gestellt hat
- Namen und Referenznummer/ID des verantwortlichen Beamten/Mitarbeiters
- eine offizielle E-Mail-Adresse und Telefonnummer
- die Namen der betroffenen Nutzer, Organisationen und Repositories
- die URLs aller Seiten, Gists oder Dateien von Interesse
- eine Beschreibung der Arten von Aufzeichnungen, die Sie benötigen

Bitte geben Sie uns mindestens zwei Wochen Zeit, um Ihre Anfrage zu prüfen.

## Anfragen ausländischer Strafverfolgungsbehörden

Als US-amerikanisches Unternehmen mit Sitz in Kalifornien ist GitHub nicht verpflichtet, Daten an ausländische Regierungen weiterzugeben, wenn ein Gerichtsverfahren von ausländischen Behörden eingeleitet wird.
Ausländische Strafverfolgungsbeamte, die Informationen von GitHub anfordern möchten, können sich an das Office of International Affairs des United States Department of Justice Criminal Division wenden.
GitHub wird umgehend auf Anfragen reagieren, die über ein US-Gericht im Rahmen eines Rechtshilfeabkommens (Mutual Legal Assistance Treaty, MLAT) oder eines Rechtshilfeersuchens gestellt werden.

## Fragen

Haben Sie Fragen, Anmerkungen oder Anregungen? Bitte kontaktieren Sie uns unter {% data variables.contact.contact_privacy %}.
