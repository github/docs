---
title: Browsing security advisories in the GitHub Advisory Database
intro: 'You can browse the {% data variables.product.prodname_advisory_database %} to find advisories for security risks in open source projects that are hosted on {% data variables.product.company_short %}.'
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
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## About the {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, {% endif %}grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## About types of security advisories

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Vulnerabilities in code are usually introduced by accident and fixed soon after they are discovered. You should update your code to use the fixed version of the dependency as soon as it is available.

{% ifversion GH-advisory-db-supports-malware %}

In contrast, malicious software, or malware, is code that is intentionally designed to perform unwanted or harmful functions. The malware may target hardware, software, confidential data, or users of any application that uses the malware. You need to remove the malware from your project and find an alternative, more secure replacement for the dependency.

{% endif %}

### {% data variables.product.company_short %}-reviewed advisories

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support. We carefully review each advisory for validity and ensure that they have a full description, and contain both ecosystem and package information.

Generally, we name our supported ecosystems after the software programming language's associated package registry. We review advisories if they are for a vulnerability in a package that comes from a supported registry.

- Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registry: https://hex.pm/){% endif %}
- Go (registry: https://pkg.go.dev/)
{%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registry: https://repo.maven.apache.org/maven2)
- npm (registry: https://www.npmjs.com/)
- NuGet (registry: https://www.nuget.org/)
- pip (registry: https://pypi.org/)
- RubyGems (registry: https://rubygems.org/)
- Rust (registry: https://crates.io/)

If you have a suggestion for a new ecosystem we should support, please open an [issue](https://github.com/github/advisory-database/issues) for discussion.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} for a package you depend on. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."

### Unreviewed advisories

Unreviewed advisories are security vulnerabilites that we publish automatically into the {% data variables.product.prodname_advisory_database %}, directly from the National Vulnerability Database feed. 

{% data variables.product.prodname_dependabot %} doesn't create {% data variables.product.prodname_dependabot_alerts %} for unreviewed advisories as this type of advisory isn't checked for validity or completion.

## About information in security advisories

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. For more information, see the "[National Vulnerability Database](https://nvd.nist.gov/)" from the National Institute of Standards and Technology.

The severity level is one of four possible levels defined in the "[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)."
- Low
- Medium/Moderate
- High
- Critical

The {% data variables.product.prodname_advisory_database %} uses the CVSS levels described above. If {% data variables.product.company_short %} obtains a CVE, the {% data variables.product.prodname_advisory_database %} uses CVSS version 3.1. If the CVE is imported, the {% data variables.product.prodname_advisory_database %} supports both CVSS versions 3.0 and 3.1.

{% data reusables.repositories.github-security-lab %}

## Accessing an advisory in the {% data variables.product.prodname_advisory_database %}

1. Navigate to https://github.com/advisories.
2. Optionally, to filter the list, use any of the drop-down menus.
  ![Dropdown filters](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **Tip:** You can use the sidebar on the left to explore  {% data variables.product.company_short %}-reviewed and unreviewed advisories separately.

   {% endtip %}
3. Click an advisory to view details. By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. {% ifversion GH-advisory-db-supports-malware %}To show malware advisories, use `type:malware` in the search bar.{% endif %}


{% note %}

The database is also accessible using the GraphQL API. {% ifversion GH-advisory-db-supports-malware %}By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`.{% endif %} For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## Editing an advisory in the {% data variables.product.prodname_advisory_database %}
You can suggest improvements to any advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[Editing security advisories in the {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)."

## Searching the {% data variables.product.prodname_advisory_database %}

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier  | Example |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) will show {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
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

## Viewing your vulnerable repositories

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)."

1. Navigate to https://github.com/advisories.
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**.
   ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user).
   ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the advisory, and for advice on how to fix the vulnerable repository, click the repository name.

{% ifversion security-advisories-ghes-ghae %}
## Accessing the local advisory database on {% data variables.product.product_location %}

If your site administrator has enabled {% data variables.product.prodname_github_connect %} for {% data variables.product.product_location %}, you can also browse reviewed advisories locally. For more information, see "[About {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories. 

1. Navigate to `https://HOSTNAME/advisories`.
2. Optionally, to filter the list, use any of the drop-down menus.
  ![Dropdown filters](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% note %}

   **Note:** Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database)". 

   {% endnote %}
3. Click an advisory to view details.{% ifversion GH-advisory-db-supports-malware %} By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.{% endif %}

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see "[Editing advisories from {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Viewing vulnerable repositories for {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In the local advisory database, you can see which repositories are affected by each security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)."

1. Navigate to `https://HOSTNAME/advisories`.
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**.
   ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user).
   ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the advisory, and for advice on how to fix the vulnerable repository, click the repository name.

{% endif %}

## Further reading

- MITRE's [definition of "vulnerability"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
