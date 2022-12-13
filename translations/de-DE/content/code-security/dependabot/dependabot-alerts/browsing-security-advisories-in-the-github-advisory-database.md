---
title: Durchsuchen von Sicherheitsempfehlungen in der GitHub Advisory Database
intro: Du kannst die {% data variables.product.prodname_advisory_database %} durchsuchen, um Hinweise auf Sicherheitsrisiken in Open Source-Projekten zu finden, die auf {% data variables.product.company_short %} gehostet werden.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 816d610c40a7551190a510a37a88dbe3de978dac
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147783151"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## Informationen zu {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} enthält eine Liste bekannter Sicherheitsrisiken {% ifversion GH-advisory-db-supports-malware %}und Malware, {% endif %}, die in die beiden Kategorien „Empfehlungen, die von {% data variables.product.company_short %} überprüft wurden“ und „nicht überprüfte Empfehlungen“ gruppiert sind.

{% data reusables.repositories.tracks-vulnerabilities %}

## Informationen zu Typen von Sicherheitsempfehlungen

{% data reusables.advisory-database.beta-malware-advisories %}

Jeder Hinweis in der {% data variables.product.prodname_advisory_database %} bezieht sich auf ein Sicherheitsrisiko in Open Source-Projekten{% ifversion GH-advisory-db-supports-malware %} oder böswillige Open Source-Software{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Sicherheitsrisiken im Code entstehen in der Regel versehentlich und werden bald nach ihrer Entdeckung beseitigt. Du solltest deinen Code aktualisieren, um die korrigierte Version der Abhängigkeit zu verwenden, sobald sie verfügbar ist.

{% ifversion GH-advisory-db-supports-malware %}

Im Gegensatz dazu ist Schadsoftware oder Malware Code, der absichtlich für unerwünschte oder schädliche Funktionen konzipiert wird. Die Schadsoftware kann auf Hardware, Software, vertrauliche Daten oder Benutzer einer beliebigen Anwendung abzielen, die die Schadsoftware verwendet. Du musst die Schadsoftware aus deinem Projekt entfernen und einen alternativen, sichereren Ersatz für die Abhängigkeit finden.

{% endif %}

### Von {% data variables.product.company_short %} überprüfte Empfehlungen

Von {% data variables.product.company_short %} überprüfte Empfehlungen beziehen sich auf Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %}, die Paketen in von uns unterstützten Ökosystemen zugeordnet wurden. Wir überprüfen jede Empfehlung sorgfältig auf ihre Gültigkeit und stellen sicher, dass sie eine vollständige Beschreibung sowie Informationen zum Ökosystem und zum Paket enthält.

Im Allgemeinen benennen wir unsere unterstützten Ökosysteme nach der Paketregistrierung, die der Softwareprogrammiersprache zugeordnet ist. Wir überprüfen Empfehlungen, wenn sie sich auf ein Sicherheitsrisiko in einem Paket beziehen, das von einer unterstützten Registrierung stammt.

- Composer (Registrierung: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (Registrierung: https://hex.pm/){% endif %}
- Go (Registrierung: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (Registrierung: https://repo.maven.apache.org/maven2)
- npm (Registrierung: https://www.npmjs.com/)
- NuGet (Registrierung: https://www.nuget.org/)
- pip (Registrierung: https://pypi.org/)
- RubyGems (Registrierung: https://rubygems.org/)
- Rust (Registrierung: https://crates.io/)

Wenn du einen Vorschlag für ein neues Ökosystem hast, das wir unterstützen sollten, öffne bitte ein [Issue](https://github.com/github/advisory-database/issues) für die Diskussion.

Wenn du {% data variables.product.prodname_dependabot_alerts %} für deine Repositorys aktivierst, wirst du automatisch benachrichtigt, wenn eine neue, von {% data variables.product.company_short %} überprüfte Empfehlung ein Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %} für ein Paket meldet, von dem du abhängig bist. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).

### Nicht überprüfte Empfehlungen

Nicht überprüfte Empfehlungen sind Sicherheitsrisiken, die direkt aus dem Feed der National Vulnerability Database (Nationale Datenbank zu Sicherheitsrisiken) automatisch in {% data variables.product.prodname_advisory_database %} veröffentlicht werden. 

{% data variables.product.prodname_dependabot %} erstellt keine {% data variables.product.prodname_dependabot_alerts %} für nicht überprüfte Empfehlungen, da diese nicht auf Gültigkeit oder Vollständigkeit überprüft werden.

## Informationen in Sicherheitsempfehlungen

Jede Sicherheitsempfehlung enthält Informationen zum jeweiligen Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder zur Malware{% endif %}, z. B. Beschreibung, Schweregrad, betroffenes Paket, Paketökosystem, betroffenen Versionen und Patchversionen, Auswirkungen sowie optionale Informationen wie Verweise, Problemumgehungen und Quellen. Zudem enthalten die Empfehlungen aus der Liste der National Vulnerability Database einen Link zum CVE-Eintrag mit weiteren Details zum Sicherheitsrisiko, der CVSS-Bewertung und dem qualitativen Schweregrad. Weitere Informationen findest du unter [National Vulnerability Database](https://nvd.nist.gov/) des National Institute of Standards and Technology (NIST).

Der Schweregrad ist eine von vier möglichen Ebenen, die in Abschnitt 5 des [Common Vulnerability Score System (CVSS)](https://www.first.org/cvss/specification-document) (Allgemeines Bewertungssystem für Schwachstellen) definiert sind.
- Niedrig
- Mittel/Moderat
- High
- Kritisch

{% data variables.product.prodname_advisory_database %} verwendet die oben beschriebenen CVSS-Ebenen. Ruft {% data variables.product.company_short %} einen CVE-Eintrag ab, verwendet {% data variables.product.prodname_advisory_database %} die CVSS-Version 3.1. Wird der CVE-Eintrag importiert, unterstützt {% data variables.product.prodname_advisory_database %} die CVSS-Versionen 3.0 und 3.1.

{% data reusables.repositories.github-security-lab %}

## Zugriff auf einen Hinweis in der {% data variables.product.prodname_advisory_database %}

1. Navigieren Sie zu https://github.com/advisories.
2. Du kannst die Liste auch mit einem der Dropdownmenüs filtern.
  ![Dropdownfilter](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Tipp**: Über die linke Randleiste kannst du die von {% data variables.product.company_short %} überprüften und die nicht überprüften Empfehlungen separat durchsuchen.

   {% endtip %}
3. Klicke auf eine Empfehlung, um die Details zu sehen. Standardmäßig werden von {% data variables.product.company_short %} überprüfte Empfehlungen zu Sicherheitsrisiken angezeigt. {% ifversion GH-advisory-db-supports-malware %} Zeige Empfehlungen zu Schadsoftware mit `type:malware` in der Suchleiste an.{% endif %}


{% note %}

Die Datenbank ist auch über die GraphQL-API zugänglich. {% ifversion GH-advisory-db-supports-malware %}Standardmäßig geben Abfragen von {% data variables.product.company_short %} überprüfte Empfehlungen zu Sicherheitsrisiken zurück, es sei denn, du gibst `type:malware` an.{% endif %} Weitere Informationen findest du im [`security_advisory` Webhook-Ereignis](/webhooks/event-payloads/#security_advisory).

{% endnote %}

## Bearbeiten einer Empfehlung in {% data variables.product.prodname_advisory_database %}
Du kannst für alle Empfehlungen in {% data variables.product.prodname_advisory_database %} Verbesserungen vorschlagen. Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## Durchsuche die {% data variables.product.prodname_advisory_database %}

Du kannst die Datenbank durchsuchen und die Suche mithilfe von Qualifizierern eingrenzen. Du kannst die Suche z. B. nach Empfehlungen eingrenzen, die an einem bestimmten Datum, in einem bestimmten Ökosystem oder in einer bestimmten Bibliothek erstellt wurden.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer  | Beispiel |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) zeigt von {% data variables.product.company_short %} überprüfte Empfehlungen zu Sicherheitsrisiken an. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) zeigt von {% data variables.product.company_short %} überprüfte Empfehlungen zu Malware an. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) zeigt nicht überprüfte Empfehlungen an. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) zeigt die Empfehlung mit dieser {% data variables.product.prodname_advisory_database %}-ID an. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) zeigt die Empfehlung mit dieser CVE-ID an. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) zeigt nur Empfehlungen für NPM-Pakete an. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) zeigt nur Empfehlungen mit hohem Schweregrad an. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) zeigt nur Empfehlungen für die Bibliothek „lodash“ an. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) zeigt nur Empfehlungen mit dieser CWE-Nummer an. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) zeigt nur Empfehlungen des Benutzerkontos „octocat“ an. |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) sortiert die Empfehlungen in absteigender Reihenfolge nach dem Datum. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) sortiert die Empfehlungen in aufsteigender Reihenfolge nach dem Datum. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) sortiert die Empfehlungen in absteigender Reihenfolge nach dem Zeitpunkt der Aktualisierung. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) sortiert die Empfehlungen in aufsteigender Reihenfolge nach dem Zeitpunkt der Aktualisierung. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) zeigt nur zurückgezogene Empfehlungen an. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) zeigt nur Empfehlungen an, die an diesem Datum erstellt wurden. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) zeigt nur Empfehlungen an, die an diesem Datum aktualisiert wurden. |

## Anzeigen von anfälligen Repositorys

Du kannst für alle von {% data variables.product.company_short %} überprüften Empfehlungen in der {% data variables.product.prodname_advisory_database %} diejenigen Repositorys anzeigen, die von einem bestimmten Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %} betroffen sind. Dafür benötigst du für dieses Repository Zugriff auf {% data variables.product.prodname_dependabot_alerts %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts).

1. Navigieren Sie zu https://github.com/advisories.
2. Klicke auf eine Empfehlung.
3. Klicke oben auf der Seite der Empfehlung auf **Dependabot-Warnungen**.
   ![Dependabot-Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Du kannst die Liste auch über die Suchleiste oder mit einem der Dropdownmenüs filtern. Über das Dropdownmenü „Organisation“ kannst du {% data variables.product.prodname_dependabot_alerts %} nach Besitzer (Organisation oder Benutzer*in) filtern.
   ![Suchleiste und Dropdownmenüs zum Filtern von Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Klicke auf den Namen der Empfehlung, um weitere Informationen zum jeweiligen Sicherheitsrisiko sowie Ratschläge zu dessen Behebung anzuzeigen.

{% ifversion security-advisories-ghes-ghae %}
## Zugreifen auf die lokale Advisory Database auf {% data variables.product.product_location %}

Wenn dein Websiteadministrator {% data variables.product.prodname_github_connect %} für {% data variables.product.product_location %} aktiviert hat, kannst du überprüfte Empfehlungen auch lokal durchsuchen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

Du kannst mit deiner lokalen Advisory Database überprüfen, ob ein bestimmtes Sicherheitsrisiko vorliegt, und entsprechend Warnungen zu sicherheitsanfälligen Abhängigkeiten erhalten. Du kannst auch alle sicherheitsanfälligen Repositorys anzeigen. 

1. Navigiere zu `https://HOSTNAME/advisories`.
2. Du kannst die Liste auch mit einem der Dropdownmenüs filtern.
  ![Dropdownfilter](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Hinweis:** Nur überprüfte Empfehlungen werden aufgelistet. Nicht überprüfte Empfehlungen können in der {% data variables.product.prodname_advisory_database %} auf {% data variables.product.prodname_dotcom_the_website %} angezeigt werden. Weitere Informationen findest du unter [Zugreifen auf eine Empfehlung in der GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database). 

   {% endnote %}
3. Klicke auf eine Empfehlung, um Details anzuzeigen.{% ifversion GH-advisory-db-supports-malware %} Standardmäßig werden von {% data variables.product.company_short %} überprüfte Empfehlungen zu Sicherheitsrisiken angezeigt. Verwende `type:malware` in der Suchleiste zum Anzeigen von Empfehlungen zu Schadsoftware.{% endif %}

Du kannst Verbesserungen von Empfehlungen auch direkt von deiner lokalen Advisory Database aus vorschlagen. Weitere Informationen findest du unter [Bearbeiten von Empfehlungen aus {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance).

### Anzeigen sicherheitsanfälliger Repositorys für {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In der lokalen Advisory Database kannst du sehen, welche Repositorys von dem jeweiligen Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder von Malware{% endif %} betroffen sind. Dafür benötigst du für dieses Repository Zugriff auf {% data variables.product.prodname_dependabot_alerts %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts).

1. Navigieren Sie zu `https://HOSTNAME/advisories`.
2. Klicke auf eine Empfehlung.
3. Klicke oben auf der Seite der Empfehlung auf **Dependabot-Warnungen**.
   ![Dependabot-Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Du kannst die Liste auch über die Suchleiste oder mit einem der Dropdownmenüs filtern. Über das Dropdownmenü „Organisation“ kannst du {% data variables.product.prodname_dependabot_alerts %} nach Besitzer (Organisation oder Benutzer*in) filtern.
   ![Suchleiste und Dropdownmenüs zum Filtern von Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Klicke auf den Namen der Empfehlung, um weitere Informationen zum jeweiligen Sicherheitsrisiko sowie Ratschläge zu dessen Behebung anzuzeigen.

{% endif %}

## Weitere Informationsquellen

- [MITRE-Definition von „Sicherheitsrisiko“](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
