---
title: Sicherheitslücken in der GitHub Advisory Database durchsuchen
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104619"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>Informationen zu Sicherheitslücken

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>Informationen zu {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} enthält eine Liste bekannter Sicherheitsrisiken, die in die beiden Kategorien „Empfehlungen, die von {% data variables.product.company_short %} überprüft wurden“ und „nicht überprüfte Empfehlungen“ gruppiert sind.

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>Informationen zu Empfehlungen, die von {% data variables.product.company_short %} überprüft wurden

Von {% data variables.product.company_short %} überprüfte Empfehlungen sind Sicherheitsrisiken, die Paketen zugeordnet wurden, die vom {% data variables.product.company_short %}-Abhängigkeitsdiagramm nachverfolgt wurden.

Die Gültigkeit jeder Empfehlung wird sorgfältig überprüft. Jede von {% data variables.product.company_short %} überprüfte Empfehlung enthält eine vollständige Beschreibung sowie Ökosystem- und Paketinformationen.

Wenn du für deine Repositorys {% data variables.product.prodname_dependabot_alerts %} aktivierst, wirst du automatisch benachrichtigt, wenn eine neue von {% data variables.product.company_short %} überprüfte Empfehlung Pakete betrifft, von denen du abhängig bist. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).

### <a name="about-unreviewed-advisories"></a>Informationen zu nicht überprüften Empfehlungen

Nicht überprüfte Empfehlungen sind Sicherheitsrisiken, die direkt aus dem Feed der National Vulnerability Database (Nationale Datenbank zu Sicherheitsrisiken) automatisch in {% data variables.product.prodname_advisory_database %} veröffentlicht werden. 

{% data variables.product.prodname_dependabot %} erstellt keine {% data variables.product.prodname_dependabot_alerts %} für nicht überprüfte Empfehlungen, da diese nicht auf Gültigkeit oder Vollständigkeit überprüft werden.

## <a name="about-security-advisories"></a>Informationen zu Sicherheitsempfehlungen

Jede Sicherheitsempfehlung enthält Informationen zum jeweiligen Sicherheitsrisiko, z. B. Beschreibung, Schweregrad, betroffenes Paket, Paketökosystem, betroffenen Versionen und Patchversionen, Auswirkungen sowie optionale Informationen wie Verweise, Problemumgehungen und Quellen. Zudem enthalten die Empfehlungen aus der Liste der National Vulnerability Database einen Link zum CVE-Eintrag mit weiteren Details zum Sicherheitsrisiko, der CVSS-Bewertung und dem qualitativen Schweregrad. Weitere Informationen findest du unter [National Vulnerability Database](https://nvd.nist.gov/) des National Institute of Standards and Technology (NIST).

Der Schweregrad ist eine von vier möglichen Ebenen, die in Abschnitt 5 des [Common Vulnerability Score System (CVSS)](https://www.first.org/cvss/specification-document) (Allgemeines Bewertungssystem für Schwachstellen) definiert sind.
- Niedrig
- Mittel/Moderat
- High
- Kritisch

{% data variables.product.prodname_advisory_database %} verwendet die oben beschriebenen CVSS-Ebenen. Ruft {% data variables.product.company_short %} einen CVE-Eintrag ab, verwendet {% data variables.product.prodname_advisory_database %} die CVSS-Version 3.1. Wird der CVE-Eintrag importiert, unterstützt {% data variables.product.prodname_advisory_database %} die CVSS-Versionen 3.0 und 3.1.

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Zugriff auf einen Hinweis in der {% data variables.product.prodname_advisory_database %}

1. Navigiere zu https://github.com/advisories.
2. Du kannst die Liste auch mit einem der Dropdownmenüs filtern.
  ![Dropdownfilter](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Tipp**: Über die linke Randleiste kannst du die von {% data variables.product.company_short %} überprüften und die nicht überprüften Empfehlungen separat durchsuchen.

   {% endtip %}
3. Klicke auf irgendeinen Hinweis, um die Details zu sehen.

{% note %}

Die Datenbank ist auch über die GraphQL-API zugänglich. Weitere Informationen findest du im [Webhook-Ereignis `security_advisory`](/webhooks/event-payloads/#security_advisory).

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Bearbeiten einer Empfehlung in {% data variables.product.prodname_advisory_database %}
Du kannst für alle Empfehlungen in {% data variables.product.prodname_advisory_database %} Verbesserungen vorschlagen. Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Durchsuche die {% data variables.product.prodname_advisory_database %}

Du kannst die Datenbank durchsuchen und die Suche mithilfe von Qualifizierern eingrenzen. Du kannst die Suche z. B. nach Empfehlungen eingrenzen, die an einem bestimmten Datum, in einem bestimmten Ökosystem oder in einer bestimmten Bibliothek erstellt wurden.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer  | Beispiel |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) zeigt von {% data variables.product.company_short %} überprüfte Empfehlungen an. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) zeigt nicht überprüfte Empfehlungen an. |
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

## <a name="viewing-your-vulnerable-repositories"></a>Anzeigen von anfälligen Repositorys

Du kannst für alle von {% data variables.product.company_short %} überprüften Empfehlungen in {% data variables.product.prodname_advisory_database %} diejenigen Repositorys anzeigen, die von einem bestimmten Sicherheitsrisiko betroffen sind. Dafür benötigst du für dieses Repository Zugriff auf {% data variables.product.prodname_dependabot_alerts %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts).

1. Navigiere zu https://github.com/advisories.
2. Klicke auf eine Empfehlung.
3. Klicke oben auf der Seite der Empfehlung auf **Dependabot-Warnungen**.
   ![Dependabot-Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Du kannst die Liste auch über die Suchleiste oder mit einem der Dropdownmenüs filtern. Über das Dropdownmenü „Organisation“ kannst du {% data variables.product.prodname_dependabot_alerts %} nach Besitzer (Organisation oder Benutzer*in) filtern.
   ![Suchleiste und Dropdownmenüs zum Filtern von Warnungen](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Klicke auf den Namen des Repositorys, um weitere Informationen zum jeweiligen Sicherheitsrisiko sowie Ratschläge zu dessen Behebung anzuzeigen.

## <a name="further-reading"></a>Weiterführende Themen

- [MITRE-Definition von „Sicherheitsrisiko“](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
