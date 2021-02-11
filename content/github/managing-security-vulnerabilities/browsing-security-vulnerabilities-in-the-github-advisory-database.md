---
title: Browsing security vulnerabilities in the GitHub Advisory Database
intro: 'The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.'
shortTitle: Browsing the Advisory Database
versions:
  free-pro-team: '*'
---

### About security vulnerabilities

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} will send you {% data variables.product.prodname_dependabot_alerts %} if we detect that any of the vulnerabilities from the {% data variables.product.prodname_advisory_database %} affect the packages that your repository depends on. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

### About the {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a curated list of security vulnerabilities that have been mapped to packages tracked by the {% data variables.product.company_short %} dependency graph. {% data reusables.repositories.tracks-vulnerabilities %}

Each security advisory contains information about the vulnerability, including the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. For more information, see the "[National Vulnerability Database](https://nvd.nist.gov/)" from the National Institute of Standards and Technology.

The severity level is one of four possible levels defined in the "[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)."
- Low
- Medium/Moderate
- High
- Critical

Some advisories have a specific CVSS score, which is assigned according to the "[Common Vulnerability Scoring System Calculator](https://www.first.org/cvss/calculator)." The {% data variables.product.prodname_advisory_database %} uses CVSS version 3.1 standards.

{% data reusables.repositories.github-security-lab %}

### Accessing an advisory in the {% data variables.product.prodname_advisory_database %}

1. Navigate to https://github.com/advisories.
2. Optionally, to filter the list, use any of the drop-down menus.
  ![Dropdown filters](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Click on any advisory to view details.

{% note %}

The database is also accessible using the GraphQL API. For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

### Searching the {% data variables.product.prodname_advisory_database %}

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier  | Example |
| ------------- | ------------- |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

### Viewing your vulnerable repositories

For any vulnerability in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories have a {% data variables.product.prodname_dependabot %} alert for that vulnerability. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)."

1. Navigate to https://github.com/advisories.
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**.
   ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user).
   ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the vulnerability, and for advice on how to fix the vulnerable repository, click the repository name.

### Further reading

- MITRE's [definition of "vulnerability"](https://cve.mitre.org/about/terminology.html#vulnerability)
