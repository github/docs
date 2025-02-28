---
title: About the GitHub Advisory database
intro: 'The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities and malware, grouped in three categories: {% data variables.product.company_short %}-reviewed advisories, unreviewed advisories, and malware advisories.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
redirect_from:
  - /code-security/security-advisories/global-security-advisories/about-the-github-advisory-database
---

## About the {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Security advisories are published as JSON files in the Open Source Vulnerability (OSV) format. For more information about the OSV format, see [Open Source Vulnerability format](https://ossf.github.io/osv-schema/).

## About types of security advisories

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects or for malicious open source software.

{% data reusables.repositories.a-vulnerability-is %} Vulnerabilities in code are usually introduced by accident and fixed soon after they are discovered. You should update your code to use the fixed version of the dependency as soon as it is available.

In contrast, malicious software, or malware, is code that is intentionally designed to perform unwanted or harmful functions. The malware may target hardware, software, confidential data, or users of any application that uses the malware. You need to remove the malware from your project and find an alternative, more secure replacement for the dependency.

### {% data variables.product.company_short %}-reviewed advisories

{% data reusables.advisory-database.github-reviewed-overview %}

Generally, we name our supported ecosystems after the software programming language's associated package registry. We review advisories if they are for a vulnerability in a package that comes from a supported registry.

* Composer (registry: https://packagist.org/)
* Erlang (registry: https://hex.pm/)
* Go (registry: https://pkg.go.dev/)
* GitHub Actions (https://github.com/marketplace?type=actions/)
* Maven (registry: https://repo.maven.apache.org/maven2)
* Npm (registry: https://www.npmjs.com/)
* NuGet (registry: https://www.nuget.org/)
* Pip (registry: https://pypi.org/)
* Pub (registry: https://pub.dev/packages/registry)
* RubyGems (registry: https://rubygems.org/)
* Rust (registry: https://crates.io/)
* Swift (registry: N/A)

If you have a suggestion for a new ecosystem we should support, please open an [issue](https://github.com/github/advisory-database/issues) for discussion.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability for a package you depend on. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

### Unreviewed advisories

{% data reusables.advisory-database.unreviewed-overview %}

{% data variables.product.prodname_dependabot %} doesn't create {% data variables.product.prodname_dependabot_alerts %} for unreviewed advisories as this type of advisory isn't checked for validity or completion.

### Malware advisories

{% data reusables.advisory-database.malware-overview %}

{% data variables.product.prodname_dependabot %} doesn't generate alerts when malware is detected as most of the vulnerabilities cannot be resolved by downstream users. You can view malware advisories by searching for `type:malware` in the {% data variables.product.prodname_advisory_database %}.

Our malware advisories are mostly about substitution attacks. During this type of attack, an attacker publishes a package to the public registry with the same name as a dependency that users rely on from a third party or private registry, with the hope that the malicious version is consumed. {% data variables.product.prodname_dependabot %} doesn’t look at project configurations to determine if the packages are coming from a private registry, so we aren't sure if you're using the malicious version or a non-malicious version. Users who have their dependencies appropriately scoped should not be affected by malware.

## About information in security advisories

In this section, you can find more detailed information about specific data attributes of the {% data variables.product.prodname_advisory_database %}.

### About GHSA IDs

Each security advisory, regardless of its type, has a unique identifier referred to as a GHSA ID. A `GHSA-ID` qualifier is assigned when a new advisory is created on {% data variables.product.prodname_dotcom %} or added to the {% data variables.product.prodname_advisory_database %} from any of the supported sources.

The syntax of GHSA IDs follows this format: `GHSA-xxxx-xxxx-xxxx` where:

* `x` is a letter or a number from the following set: `23456789cfghjmpqrvwx`.
* Outside the `GHSA` portion of the name:
  * The numbers and letters are randomly assigned.
  * All letters are lowercase.

You can validate a GHSA ID using a regular expression.

```bash copy
/GHSA(-[23456789cfghjmpqrvwx]{4}){3}/
```

### About CVSS levels

{% ifversion cvss-4 %} The {% data variables.product.prodname_advisory_database %} supports both CVSS version 3.1 and CVSS version 4.0.{% endif %}

Each security advisory contains information about the vulnerability or malware, which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. For more information, see the [National Vulnerability Database](https://nvd.nist.gov/) from the National Institute of Standards and Technology.

The severity level is one of four possible levels defined in the [Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document).
* Low
* Medium/Moderate
* High
* Critical

The {% data variables.product.prodname_advisory_database %} uses the CVSS levels described above. If {% data variables.product.company_short %} obtains a CVE, the {% data variables.product.prodname_advisory_database %} uses the CVSS version assigned by the maintainer, which can be version 3.1{% ifversion cvss-4 %} or 4.0{% endif %}. If the CVE is imported, the {% data variables.product.prodname_advisory_database %} supports CVSS versions {% ifversion cvss-4 %}4.0, {% endif %}3.1 and 3.0.

{% data reusables.repositories.github-security-lab %}

### About EPSS scores

The Exploit Prediction Scoring System, or EPSS, is a system devised by the global Forum of Incident Response and Security Teams (FIRST) for quantifying the likelihood of vulnerability exploit. The model produces a probability score between 0 and 1 (0 and 100%), where the higher the score, the greater the probability that a vulnerability will be exploited. For more information about FIRST, see https://www.first.org/.

The {% data variables.product.prodname_advisory_database %} includes EPSS scores from FIRST for advisories containing CVEs with corresponding EPSS data. {% data variables.product.company_short %} also displays the EPSS score percentile, which is the proportion of all scored vulnerabilities with the same or a lower EPSS score.

For example, if an advisory had an EPSS score that had a percentage of 90.534% at the 95th percentile, according to the [EPSS model](https://www.first.org/epss/model), this means that:

* There is a 90.534% chance of this vulnerability being exploited in the wild in the next 30 days.
* 95% of the total modeled vulnerabilities are considered less likely to be exploited in the next 30 days than this vulnerability.

Extended information about how to interpret this data can be found in FIRST's EPSS User Guide. This information helps you understand how both percentage and percentile can be used to interpret the likelihood that a vulnerability could be exploited in the wild according to FIRST's model. For more information, see the [FIRST's EPSS User Guide](https://www.first.org/epss/user-guide) on the FIRST website.

FIRST also provides additional information around the distribution of their EPSS data. For more information, see [EPSS data and statistics documentation](https://www.first.org/epss/data_stats) on the FIRST website.

>[!NOTE] {% data variables.product.company_short %} keeps EPSS data up to date with a daily synchronization action. While EPSS score percentages will always be fully synchronized, score percentiles will only be updated when significantly different.

At {% data variables.product.company_short %}, we do not author this data, but rather source it from FIRST, which means that this data is not editable in community contributions. For more information about community contributions, see [AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database).

## Further reading

* [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
* The CVE Program's [definition of "vulnerability"](https://www.cve.org/ResourcesSupport/Glossary#glossaryVulnerability)
