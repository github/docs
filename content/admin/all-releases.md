---
title: GitHub Enterprise Server releases
intro: '{% data variables.product.company_short %} releases new versions of {% data variables.product.product_name %} regularly. You can review supported versions, see deprecation dates, and browse documentation for the release you''ve deployed.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
---

## About releases of {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} supports the four most recent feature releases. For more information, see "[AUTOTITLE](/admin/overview/about-upgrades-to-new-releases)."

You can see what's new for each release in the [release notes](/admin/release-notes), and you can view administrator and user documentation for all releases here on {% data variables.product.prodname_docs %}. When you read the documentation, make sure to select the version that reflects your product. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-versions-of-github-docs)."

## Releases of {% data variables.product.product_name %}

{% data variables.product.company_short %} provides documentation for both supported and deprecated versions of {% data variables.product.product_name %}, but does not maintain or update the documentation for deprecated versions.

For more information about the latest release, see the [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) website.

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

{% data variables.product.company_short %} hosted developer documentation for {% data variables.product.product_name %} on a separate site until the 2.17 release. {% data variables.product.company_short %} continues to provide developer documentation for version 2.16 and earlier, but does not maintain or update the documentation.

| Version | Release | Deprecation | Developer documentation |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}

## Recommended {% data variables.product.prodname_codeql_cli %} versions for code scanning

For instances with a {% data variables.product.prodname_GH_advanced_security %} license and code scanning enabled, the {% data variables.product.prodname_codeql %} action for code scanning analysis uses a minimum recommended version of the {% data variables.product.prodname_codeql_cli %} by default. We recommend that you use the same version of the {% data variables.product.prodname_codeql_cli %} if you run analysis in an external CI system. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

| {% data variables.product.product_name %} version | Recommended {% data variables.product.prodname_codeql_cli %} version |
| ------------------------------------------------- | ---------------------- |
| 3.12 | 2.15.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.15.5/)) |
| 3.11 | 2.14.6 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.14.6/)) |
| 3.10 | 2.13.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.13.5/)) |
| 3.9  | 2.12.7 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.12.7/)) |

## Minimum {% data variables.product.prodname_actions %} Runner application versions

For instances with {% data variables.product.prodname_actions %} enabled, self-hosted {% data variables.product.prodname_actions %} runners must run a minimum required version of the {% data variables.product.prodname_actions %} Runner application.

For most instances, the Runner application is updated automatically. If your instance uses ephemeral self-hosted runners and you've disabled automatic updates, you must upgrade your runners to the required version of the Runner application before upgrading your instance to a new {% data variables.product.prodname_ghe_server %} release. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#requirements-for-self-hosted-runner-machines)."

| {% data variables.product.product_name %} version | Minimum Runner version |
| ------------------------------------------------- | ---------------------- |
| 3.12 | 2.311.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.311.0)) |
| 3.11 | 2.309.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.309.0)) |
| 3.10 | 2.304.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.304.0)) |
| 3.9  | 2.303.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.303.0)) |
