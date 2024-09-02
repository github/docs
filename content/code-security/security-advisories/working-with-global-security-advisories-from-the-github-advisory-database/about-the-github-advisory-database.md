---
title: About the GitHub Advisory database
intro: 'The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, grouped in three categories: {% data variables.product.company_short %}-reviewed advisories, unreviewed advisories, and malware advisories.{% else %} grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.{% endif %}'
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

Security advisories are published as JSON files in the Open Source Vulnerability (OSV) format. For more information about the OSV format, see "[Open Source Vulnerability format](https://ossf.github.io/osv-schema/)."

## About types of security advisories

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}.

{% data reusables.repositories.a-vulnerability-is %} Vulnerabilities in code are usually introduced by accident and fixed soon after they are discovered. You should update your code to use the fixed version of the dependency as soon as it is available.

{% ifversion GH-advisory-db-supports-malware %}

In contrast, malicious software, or malware, is code that is intentionally designed to perform unwanted or harmful functions. The malware may target hardware, software, confidential data, or users of any application that uses the malware. You need to remove the malware from your project and find an alternative, more secure replacement for the dependency.

{% endif %}

### {% data variables.product.company_short %}-reviewed advisories

{% data reusables.advisory-database.github-reviewed-overview %}

Generally, we name our supported ecosystems after the software programming language's associated package registry. We review advisories if they are for a vulnerability in a package that comes from a supported registry.

* Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
* Erlang (registry: https://hex.pm/){% endif %}
* Go (registry: https://pkg.go.dev/)
* GitHub Actions (https://github.com/marketplace?type=actions/)
* Maven (registry: https://repo.maven.apache.org/maven2)
* npm (registry: https://www.npmjs.com/)
* NuGet (registry: https://www.nuget.org/)
* pip (registry: https://pypi.org/){% ifversion dependency-graph-dart-support %}
* pub (registry: https://pub.dev/packages/registry){% endif %}
* RubyGems (registry: https://rubygems.org/)
* Rust (registry: https://crates.io/){% ifversion supply-chain-features-swift-support %}
* Swift (registry: N/A){% endif %}

If you have a suggestion for a new ecosystem we should support, please open an [issue](https://github.com/github/advisory-database/issues) for discussion.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability for a package you depend on. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

### Unreviewed advisories

{% data reusables.advisory-database.unreviewed-overview %}

{% data variables.product.prodname_dependabot %} doesn't create {% data variables.product.prodname_dependabot_alerts %} for unreviewed advisories as this type of advisory isn't checked for validity or completion.

{% ifversion GH-advisory-db-supports-malware %}

### Malware advisories

{% data reusables.advisory-database.beta-malware-advisories %}

{% data reusables.advisory-database.malware-overview %}

{% data variables.product.prodname_dependabot %} doesn't generate alerts when malware is detected as most of the vulnerabilities cannot be resolved by downstream users. You can view malware advisories by searching for `type:malware` in the {% data variables.product.prodname_advisory_database %}.

Our malware advisories are mostly about substitution attacks. During this type of attack, an attacker publishes a package to the public registry with the same name as a dependency that users rely on from a third party or private registry, with the hope that the malicious version is consumed. {% data variables.product.prodname_dependabot %} doesn’t look at project configurations to determine if the packages are coming from a private registry, so we aren't sure if you're using the malicious version or a non-malicious version. Users who have their dependencies appropriately scoped should not be affected by malware.

{% endif %}

## About information in security advisories

In this section, you can find more detailed information about security advisories in the {% data variables.product.prodname_advisory_database %}, such as:
* Advisory IDs and what format these identifiers use.
* The CVSS levels we used to assign severity levels.

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

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. For more information, see the "[National Vulnerability Database](https://nvd.nist.gov/)" from the National Institute of Standards and Technology.

The severity level is one of four possible levels defined in the "[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)."
* Low
* Medium/Moderate
* High
* Critical

The {% data variables.product.prodname_advisory_database %} uses the CVSS levels described above. If {% data variables.product.company_short %} obtains a CVE, the {% data variables.product.prodname_advisory_database %} uses CVSS version 3.1. If the CVE is imported, the {% data variables.product.prodname_advisory_database %} supports both CVSS versions 3.0 and 3.1.

{% data reusables.repositories.github-security-lab %}

## Further reading

* "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
* The CVE Program's [definition of "vulnerability"](https://www.cve.org/ResourcesSupport/Glossary#glossaryVulnerability)
