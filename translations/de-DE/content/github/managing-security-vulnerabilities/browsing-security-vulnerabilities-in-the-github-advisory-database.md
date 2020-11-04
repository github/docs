---
title: Sicherheitslücken in der GitHub Advisory Database durchsuchen
intro: 'Die {% data variables.product.prodname_advisory_database %} erlaubt Dir, nach Schwachstellen zu suchen, die Open-Source-Projekte auf {% data variables.product.company_short %} betreffen.'
shortTitle: Browsing the Advisory Database
versions:
  free-pro-team: '*'
---

### Informationen zu Sicherheitslücken

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} will send you {% data variables.product.prodname_dependabot_alerts %} if we detect that any of the vulnerabilities from the {% data variables.product.prodname_advisory_database %} affect the packages that your repository depends on. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |

### Informationen zu {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that have been mapped to packages tracked by the {% data variables.product.company_short %} dependency graph. {% data reusables.repositories.tracks-vulnerabilities %}

Each security advisory contains information about the vulnerability, including the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. Weitere Informationen findest Du unter „[National Vulnerability Database](https://nvd.nist.gov/)" (Nationale Schwachstellen-Datenbank) des 'National Institute of Standards and Technology' (Amerikanisches Nationales Institut für Standards und Technologie).

Es gibt vier mögliche Schweregrade, die im [Common Vulnerability Scoring System (CVSS), Abschnitt 2.1.2](https://www.first.org/cvss/specification-document) (Allgemeines Schwachstellen-Bewertungssystem) definiert sind:
- Niedrig
- Mittel
- Hoch
- Kritisch

The {% data variables.product.prodname_advisory_database %} uses CVSS version 3.0 standards and the CVSS levels described above. {% data variables.product.product_name %} doesn't publish CVSS scores.

{% data reusables.repositories.github-security-lab %}

### Zugriff auf einen Hinweis in der {% data variables.product.prodname_advisory_database %}

1. Navigiere zu „https://github.com/advisories“.
2. Optionally, to filter the list, use any of the drop-down menus. ![Dropdownmenüs zum filtrieren](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Klicke auf irgendeinen Hinweis, um die Details zu sehen.

{% note %}

Die Datenbank ist auch über die GraphQL-API zugänglich. For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

### Durchsuche die {% data variables.product.prodname_advisory_database %}
Du kannst die Datenbank durchsuchen und mit den Qualifizierern Deine Suche auf Hinweise einschränken, die an einem bestimmten Datum, in einem bestimmten Ökosystem oder in einer bestimmten Bibliothek erstellt wurden.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer         | Beispiel                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ecosystem:ÖKOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) wird nur Hinweise zeigen, die NPM Pakete betreffen.                       |
| `severity:STUFE`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) wird nur Hinweise mit einer Schweregrad von Hoch zeigen.                  |
| `affects:BIBLIOTHEK`  | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) wird nur Hinweise anzeigen, die die lodash Bibliothek betreffen.        |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) sortiert nach ältesten Hinweisen zuerst.                            |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) sortiert nach neuesten Hinweisen zuerst.                          |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) sortiert nach den ältesten Aktualisierungen von Hinweisen zuerst.   |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) sortiert nach den neuesten Aktualisierungen von Hinweisen zuerst. |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) zeigt nur zurückgezogene Hinweise.                                          |
| `created:YYYY-MM-DD`  | [**created:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2019-10-31) zeigt nur Hinweise, die an diesem Datum erstellt wurden.        |
| `updated:YYYY-MM-DD`  | [**updated:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2019-10-31) zeigt nur Hinweise, die an diesem Datum aktualisiert wurden.    |

### Weiterführende Informationen

- [Definition einer „Sicherheitslücke“](https://cve.mitre.org/about/terminology.html#vulnerability) von MITRE
