---
title: Sicherheitslücken in der GitHub Advisory Database durchsuchen
intro: 'Die {% data variables.product.prodname_advisory_database %} erlaubt Dir, nach Schwachstellen zu suchen, die Open-Source-Projekte auf {% data variables.product.company_short %} betreffen.'
shortTitle: Browsing the Advisory Database
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

### Informationen zu Sicherheitslücken

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} will send you {% data variables.product.prodname_dependabot_alerts %} if we detect that any of the vulnerabilities from the {% data variables.product.prodname_advisory_database %} affect the packages that your repository depends on. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." |

### Informationen zu {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that have been mapped to packages tracked by the {% data variables.product.company_short %} dependency graph. {% data reusables.repositories.tracks-vulnerabilities %}

Each security advisory contains information about the vulnerability, including the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. Weitere Informationen findest Du unter „[National Vulnerability Database](https://nvd.nist.gov/)" (Nationale Schwachstellen-Datenbank) des 'National Institute of Standards and Technology' (Amerikanisches Nationales Institut für Standards und Technologie).

The severity level is one of four possible levels defined in the "[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)."
- Niedrig
- Medium/Moderate
- Hoch
- Kritisch

The {% data variables.product.prodname_advisory_database %} uses the CVSS levels described above. If {% data variables.product.company_short %} obtains a CVE, the {% data variables.product.prodname_advisory_database %} uses CVSS version 3.1. If the CVE is imported, the {% data variables.product.prodname_advisory_database %} supports both CVSS versions 3.0 and 3.1.

{% data reusables.repositories.github-security-lab %}

### Zugriff auf einen Hinweis in der {% data variables.product.prodname_advisory_database %}

1. Navigiere zu „https://github.com/advisories“.
2. Optionally, to filter the list, use any of the drop-down menus. ![Dropdownmenüs zum filtrieren](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Klicke auf irgendeinen Hinweis, um die Details zu sehen.

{% note %}

Die Datenbank ist auch über die GraphQL-API zugänglich. For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

### Durchsuche die {% data variables.product.prodname_advisory_database %}

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer         | Beispiel                                                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number.                                                          |
| `ecosystem:ÖKOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) wird nur Hinweise zeigen, die NPM Pakete betreffen.                                       |
| `severity:STUFE`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) wird nur Hinweise mit einer Schweregrad von Hoch zeigen.                                  |
| `affects:BIBLIOTHEK`  | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) wird nur Hinweise anzeigen, die die lodash Bibliothek betreffen.                        |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number.                                                                      |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account.                                      |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) sortiert nach ältesten Hinweisen zuerst.                                            |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) sortiert nach neuesten Hinweisen zuerst.                                          |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) sortiert nach den ältesten Aktualisierungen von Hinweisen zuerst.                   |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) sortiert nach den neuesten Aktualisierungen von Hinweisen zuerst.                 |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) zeigt nur zurückgezogene Hinweise.                                                          |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) zeigt nur Hinweise, die an diesem Datum erstellt wurden.                        |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) zeigt nur Hinweise, die an diesem Datum aktualisiert wurden.                    |

### Viewing your vulnerable repositories

For any vulnerability in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories have a {% data variables.product.prodname_dependabot %} alert for that vulnerability. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)." |

1. Navigiere zu „https://github.com/advisories“.
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**. ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user). ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the vulnerability, and for advice on how to fix the vulnerable repository, click the repository name.

### Weiterführende Informationen

- [Definition einer „Sicherheitslücke“](https://cve.mitre.org/about/terminology.html#vulnerability) von MITRE
