---
title: GitHub Enterprise Server releases
intro: "Review information for each version of {% data variables.product.prodname_ghe_server %}: deprecation dates, links to documentation, and minimum recommended versions of supporting applications."
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
---

{% data reusables.enterprise.constantly-improving %} See "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)."

## Releases of {% data variables.product.product_name %}

{% data variables.product.company_short %} supports the **four** most recent feature releases.

We provide documentation for both supported and deprecated versions of {% data variables.product.product_name %}. We do not maintain or update the documentation for deprecated versions.

For information about the latest release, see the [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) website.

| Version | Release | Deprecation | Supported | Release notes | Documentation |
| :- | :- | :- | :-: | :- | :- |
{%- for version in enterpriseServerReleases.supported %}
{%- assign currentDate = 'now' | date: '%s' %}
{%- assign deprecationDate = enterpriseServerReleases.dates[version].deprecationDate | date: '%s' %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | {% if currentDate < deprecationDate %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Not supported" %}{% endif %} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) |
{%- endfor %}
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | {% octicon "x" aria-label="Not supported" %} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) |
{%- endfor %}
{%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | {% octicon "x" aria-label="Not supported" %} | [{{version}} release notes](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} documentation](/enterprise/{{version}}) |
{%- endfor %}

### Deprecated developer documentation

We hosted developer documentation for {% data variables.product.product_name %} on a separate site until the 2.17 release. We provide developer documentation for version 2.16 and earlier, but do not maintain or update the documentation.

| Version | Release | Deprecation | Developer documentation |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}

## Recommended {% data variables.product.prodname_codeql_cli %} versions for code scanning

For instances with a {% data variables.product.prodname_GH_advanced_security %} license and {% data variables.product.prodname_code_scanning %} enabled, the {% data variables.product.prodname_codeql %} action for {% data variables.product.prodname_code_scanning %} analysis uses a minimum recommended version of the {% data variables.product.prodname_codeql_cli %} by default.

If you run analysis in an external CI system, we recommend using the same version of the {% data variables.product.prodname_codeql_cli %}. See "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

| {% data variables.product.product_name %} version | Recommended {% data variables.product.prodname_codeql_cli %} version |
| ------------------------------------------------- | ---------------------- |
| 3.14 | 2.17.6 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.17.6/)) |
| 3.13 | 2.16.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.16.5/)) |
| 3.12 | 2.15.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.15.5/)) |
| 3.11 | 2.14.6 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.14.6/)) |
| 3.10 | 2.13.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.13.5/)) |
| 3.9  | 2.12.7 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.12.7/)) |

## Minimum {% data variables.product.prodname_actions %} Runner application versions

For instances with {% data variables.product.prodname_actions %} enabled, self-hosted {% data variables.product.prodname_actions %} runners must run a minimum required version of the {% data variables.product.prodname_actions %} Runner application.

* For most instances, the Runner application is updated automatically.
* If your instance uses ephemeral self-hosted runners and you've disabled automatic updates, you must upgrade your runners before upgrading {% data variables.product.prodname_ghe_server %}. See "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#requirements-for-self-hosted-runner-machines)."

| {% data variables.product.product_name %} version | Minimum Runner version |
| ------------------------------------------------- | ---------------------- |
| 3.14 | 2.317.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.317.0)) |
| 3.13 | 2.314.1 ([release notes](https://github.com/actions/runner/releases/tag/v2.314.1)) |
| 3.12 | 2.311.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.311.0)) |
| 3.11 | 2.309.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.309.0)) |
| 3.10 | 2.304.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.304.0)) |
| 3.9  | 2.303.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.303.0)) |
