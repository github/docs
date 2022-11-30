---
title: GitHub Enterprise-Vereinbarung zum Servicelevel (SLA)
hidden: true
redirect_from:
  - /github-enterprise-cloud-addendum
  - /github-business-cloud-addendum
  - /articles/github-enterprise-cloud-addendum
  - /github/site-policy/github-enterprise-service-level-agreement
  - /github/site-policy-deprecated/github-enterprise-cloud-addendum
versions:
  fpt: '*'
ms.openlocfilehash: e21816ada1c6b6d3062cecb5d4f0144702ea0f8e
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099281'
---
_Diese Bestimmungen gelten für Kunden, die die Produkte vor dem 4. Januar 2021 lizenziert haben. Kunden, die GitHub-Produkte nach diesem Datum erwerben, werden zu den aktuellen Bestimmungen unter https://www.github.com/enterprise-legal weitergeleitet._

**Kurzfassung:** GitHub garantiert eine vierteljährliche Uptime von 99,9 % für den entsprechenden GitHub-Dienst (der „**Servicelevel**“ oder die „**SLA**“, Service Level Agreement). Wenn GitHub die SLA nicht erfüllt, hat der Kunde Anspruch auf eine Servicegutschrift auf ein Konto des Kunden („**Servicegutschriften**“).

Definitionen der einzelnen Dienstfunktionen („**Dienstfunktion**“) sowie historische und aktuelle Informationen zur Uptime finden Sie auf der [GitHub-Statusseite](https://www.githubstatus.com/). Für Begriffe, die in dieser SLA verwendet, aber nicht definiert werden, gelten die in der entsprechenden Vereinbarung des Kunden festgelegten Bedeutungen.

## Uptimegarantie

„**Uptime**“ ist der Prozentsatz der möglichen Gesamtzahl von Minuten, in dem der entsprechende GitHub-Dienst in einem gegebenen Kalenderquartal verfügbar war. GitHub verpflichtet sich, mindestens 99,9 % Uptime für den entsprechenden GitHub-Dienst aufrechtzuerhalten. Die Berechnung der Uptime für die einzelnen Dienstfunktionen, die im entsprechenden GitHub-Dienst enthalten sein können, wird im Folgenden beschrieben („**Berechnung der Uptime**“). Wenn GitHub die SLA nicht erfüllt, hat der Kunde basierend auf der unten stehenden Berechnung Anspruch auf Servicegutschriften („**Berechnung der Servicegutschriften**“). Hinweis: Downtimes wirken sich nicht auf jeden Kunden gleichzeitig oder auf die gleiche Weise aus.

| **Dienstfunktion** | **Berechnung der Uptime** | **Definitionen** | **Berechnung der Servicegutschriften** |
|---|---|---|---|
| **Issues**,<br>**Pull&nbsp;Requests**,<br>**Git&nbsp;-Vorgänge**,<br>**API&nbsp;-Anforderungen (nur für Dienstfunktionen)** ,<br>**Webhooks**,<br>**Seiten** | (Gesamtzahl von Minuten in einem Kalenderquartal - Downtime) / Gesamtzahl von Minuten in einem Kalenderquartal | Eine „**Downtime**“ ist ein Zeitraum, in dem (a) die Fehlerrate für eine Dienstfunktion in einer gegebenen Minute fünf Prozent (5 %) übersteigt oder (b) der Dienst internen und externen Überwachungssystemen von GitHub zufolge nicht verfügbar war. | Ein Anspruch auf eine Servicegutschrift kann auf einer der folgenden Berechnungen beruhen (nicht auf beiden): <ul><li>10 % des Betrags, den der Kunde für eine Dienstfunktion in einem Kalenderquartal bezahlt hat, in dem die Uptime dieser Dienstfunktion unter 99,9 %, aber über 99,0 % lag <BR><BR>oder <BR><BR></li><li>25 % des Betrags, den der Kunde für eine Dienstfunktion in einem Kalenderquartal bezahlt hat, in dem die Uptime dieser Dienstfunktion unter 99,0 % lag</li></ul> | |
| **Aktionen** | (Gesamtzahl ausgelöster Ausführungen - Nicht verfügbare Ausführungen) / (Gesamtzahl ausgelöster Ausführungen) x 100 | „**Gesamtzahl ausgelöster Ausführungen**“ ist die Gesamtzahl aller Aktionsausführungen, die vom Kunden in einem Kalenderquartal ausgelöst wurden. <br><br> „**Nicht verfügbare Ausführungen**“ ist die Gesamtzahl von Ausführungen innerhalb der Gesamtzahl ausgelöster Ausführungen, die in einem Kalenderquartal nicht ausgeführt wurden.  Eine Ausführung gilt als nicht ausgeführt, wenn das Aktionsverlaufsprotokoll fünf (5) Minuten nach dem Auslösen des Triggers keine Ausgabe erfasst hat. | Wie oben |
| **Pakete** | Uptime für Übertragungen = siehe „Aktionen“ <br> <br> Uptime für Speicher = 100 % - Durchschnittliche Fehlerrate* <br> <br> *Von der Berechnung der Uptime ausgeschlossen sind öffentliche Nutzung und Speichertransaktionen, die weder auf die Gesamtzahl von Speichertransaktionen noch auf die Anzahl fehlgeschlagener Speichertransaktionen angerechnet werden (einschließlich Fehler vor der Authentifizierung, Authentifizierungsfehler, versuchte Transaktionen für Speicherkonten über deren festgelegte Kontingente hinaus). | „**Fehlerrate**“ ist die Gesamtzahl fehlgeschlagener Speichertransaktionen dividiert durch die Gesamtzahl von Speichertransaktionen während eines festgelegten Zeitintervalls (derzeit eine Stunde). Wenn die Gesamtzahl von Speichertransaktionen in einem bestimmten Ein-Stunden-Intervall Null ist, beträgt die Fehlerrate für dieses Intervall 0 %. <br><br> „**Durchschnittliche Fehlerrate**“ ist die Summe der Fehlerraten für jede Stunde in einem Kalenderquartal dividiert durch die Gesamtzahl von Stunden in einem Kalenderquartal. | Wie oben |

## Ausschlüsse
Von der Berechnung der Uptime ausgeschlossen sind Fehler von Dienstfunktionen, die auf Folgendes zurückzuführen sind: (i) Handlungen, Unterlassungen oder Zweckentfremdung des entsprechenden GitHub-Diensts durch den Kunden, einschließlich Verstöße gegen die Vereinbarung, (ii) Fehler bei der Internetverbindung des Kunden, (iii) Faktoren außerhalb der Kontrolle von GitHub, einschließlich höherer Gewalt, oder (iv) Geräte, Dienste oder andere Technologie des Kunden.

## Einlösung von Servicegutschriften
Wenn GitHub diese SLA nicht erfüllt, kann der Kunde Servicegutschriften nur nach schriftlicher Anfrage an GitHub innerhalb von dreißig (30) Tagen nach Ende des Kalenderquartals einlösen. Schriftliche Anfragen für die Einlösung von Servicegutschriften und monatliche oder vierteljährliche GitHub Enterprise Cloud-Berichte des Kunden sollten an den [GitHub-Support](https://support.github.com/contact?tags=docs-policy) gesendet werden.

Servicegutschriften erfolgen in Form einer Rückerstattung bzw. Gutschrift auf das Konto des Kunden (eine Barauszahlung ist nicht möglich), sind auf maximal neunzig (90) Tage bezahlten Dienst pro Kalenderquartal beschränkt, setzen voraus, dass der Kunde ausstehende Rechnungen beglichen hat, und laufen bei Beendigung der Vereinbarung des Kunden mit GitHub ab. Servicegutschriften sind der einzige und ausschließliche Abhilfeanspruch, sollte GitHub Verpflichtungen in dieser SLA nicht erfüllen.
