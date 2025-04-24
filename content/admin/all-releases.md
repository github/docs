---
title: GitHub Enterprise Server releases
intro: "Review information for each version of {% data variables.product.prodname_ghe_server %}: {% data variables.release-phases.closing_down %} dates, links to documentation, and minimum recommended versions of supporting applications."
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
---

{% data reusables.enterprise.constantly-improving %} See [AUTOTITLE](/admin/overview/about-upgrades-to-new-releases).

## Releases of {% data variables.product.prodname_ghe_server %}

{% data variables.product.company_short %} supports the **four** most recent feature releases.

We provide documentation for both supported and unsupported versions of {% data variables.product.prodname_ghe_server %}. We do not maintain or update the documentation for unsupported versions.

For information about the latest release, see the [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) website.

| Version | Release | {% data variables.release-phases.closing_down_caps %} date | Supported | Release notes | Documentation |
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

### Developer documentation that is {% data variables.release-phases.closing_down %}

We hosted developer documentation for {% data variables.product.prodname_ghe_server %} on a separate site until the 2.17 release. We provide developer documentation for version 2.16 and earlier, but do not maintain or update the documentation.

| Version | Release | {% data variables.release-phases.closing_down_caps %} date | Developer documentation |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}

## Recommended {% data variables.product.prodname_codeql_cli %} versions for code scanning

For instances with a {% data variables.product.prodname_GHAS_or_code_security %} license and {% data variables.product.prodname_code_scanning %} enabled, the {% data variables.product.prodname_codeql %} action for {% data variables.product.prodname_code_scanning %} analysis uses a minimum recommended version of the {% data variables.product.prodname_codeql_cli %} by default.

If you run analysis in an external CI system, we recommend using the same version of the {% data variables.product.prodname_codeql_cli %}. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance).

| {% data variables.product.prodname_ghe_server %} version | Recommended {% data variables.product.prodname_codeql_cli %} version |
| ------------------------------------------------- | ---------------------- |
| 3.15 | 2.18.4 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.18.4/)) |
| 3.14 | 2.17.6 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.17.6/)) |
| 3.13 | 2.16.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.16.5/)) |
| 3.12 | 2.15.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.15.5/)) |
| 3.11 | 2.14.6 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.14.6/)) |
| 3.10 | 2.13.5 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.13.5/)) |
| 3.9  | 2.12.7 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.12.7/)) |

## Minimum {% data variables.product.prodname_actions %} Runner application versions

For instances with {% data variables.product.prodname_actions %} enabled, self-hosted {% data variables.product.prodname_actions %} runners must run a minimum required version of the {% data variables.product.prodname_actions %} Runner application.

* For most instances, the Runner application is updated automatically.
* If your instance uses ephemeral self-hosted runners and you've disabled automatic updates, you must upgrade your runners before upgrading {% data variables.product.prodname_ghe_server %}. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#requirements-for-self-hosted-runner-machines).

| {% data variables.product.prodname_ghe_server %} version | Minimum Runner version |
| ------------------------------------------------- | ---------------------- |
| 3.16 | 2.321.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.321.0)) |
| 3.15 | 2.319.1 ([release notes](https://github.com/actions/runner/releases/tag/v2.319.1)) |
| 3.14 | 2.317.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.317.0)) |
| 3.13 | 2.314.1 ([release notes](https://github.com/actions/runner/releases/tag/v2.314.1)) |
| 3.12 | 2.311.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.311.0)) |
| 3.11 | 2.309.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.309.0)) |
| 3.10 | 2.304.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.304.0)) |
| 3.9  | 2.303.0 ([release notes](https://github.com/actions/runner/releases/tag/v2.303.0)) |


Skip to main content
GitHub Docs
Search GitHub Docs
Search GitHub Docs
GitHub Actions/Use cases and examples/Build and test
Building and testing
You can automatically build and test your projects with GitHub Actions.

Building and testing Go
You can create a continuous integration (CI) workflow to build and test your Go project.

Building and testing Java with Ant
You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Ant.

Building and testing Java with Gradle
You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle.

Building and testing Java with Maven
You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Maven.

Building and testing .NET
You can create a continuous integration (CI) workflow to build and test your .NET project.

Building and testing Node.js
You can create a continuous integration (CI) workflow to build and test your Node.js project.

Building and testing PowerShell
You can create a continuous integration (CI) workflow to build and test your PowerShell project.

Building and testing Python
You can create a continuous integration (CI) workflow to build and test your Python project.

Building and testing Ruby
You can create a continuous integration (CI) workflow to build and test your Ruby project.

Building and testing Rust
You can create a continuous integration (CI) workflow to build and test your Rust project.

Building and testing Swift
You can create a continuous integration (CI) workflow to build and test your Swift project.

Building and testing Xamarin applications
You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Xamarin application.

Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Skip to main content
GitHub Docs
Search GitHub Docs
Search GitHub Docs
Enterprise administrators/Releases
GitHub Enterprise Server releases
Review information for each version of GitHub Enterprise Server: closing down dates, links to documentation, and minimum recommended versions of supporting applications.

In this article
Releases of GitHub Enterprise Server
Recommended CodeQL CLI versions for code scanning
Minimum GitHub Actions Runner application versions
GitHub Enterprise Server is constantly improving, with new functionality and bug fixes introduced through feature and patch releases. See About upgrades to new releases.

Releases of GitHub Enterprise Server
GitHub supports the four most recent feature releases.

We provide documentation for both supported and unsupported versions of GitHub Enterprise Server. We do not maintain or update the documentation for unsupported versions.

For information about the latest release, see the GitHub Enterprise website.

Version	Release	Closing down date	Supported	Release notes	Documentation
3.16	2025-02-25	2026-03-11		3.16 release notes	3.16 documentation
3.15	2024-11-12	2025-12-19		3.15 release notes	3.15 documentation
3.14	2024-08-06	2025-08-27		3.14 release notes	3.14 documentation
3.13	2024-05-16	2025-06-04		3.13 release notes	3.13 documentation
3.12	2024-02-13	2025-04-03		3.12 release notes	3.12 documentation
3.11	2023-11-14	2024-12-19		3.11 release notes	3.11 documentation
3.10	2023-08-08	2024-09-25		3.10 release notes	3.10 documentation
3.9	2023-06-08	2024-07-26		3.9 release notes	3.9 documentation
3.8	2023-02-07	2024-03-26		3.8 release notes	3.8 documentation
3.7	2022-10-25	2024-01-04		3.7 release notes	3.7 documentation
3.6	2022-07-26	2023-09-25		3.6 release notes	3.6 documentation
3.5	2022-05-10	2023-06-29		3.5 release notes	3.5 documentation
3.4	2022-02-15	2023-03-23		3.4 release notes	3.4 documentation
3.3	2021-11-09	2023-01-18		3.3 release notes	3.3 documentation
3.2	2021-09-09	2022-10-12		3.2 release notes	3.2 documentation
3.1	2021-05-06	2022-06-30		3.1 release notes	3.1 documentation
3.0	2021-01-12	2022-02-16		3.0 release notes	3.0 documentation
2.22	2020-08-26	2021-09-23		2.22 release notes	2.22 documentation
2.21	2020-05-12	2021-06-09		2.21 release notes	2.21 documentation
2.20	2020-01-14	2021-03-02		2.20 release notes	2.20 documentation
2.19	2019-10-15	2020-11-12		2.19 release notes	2.19 documentation
2.18	2019-07-23	2020-08-20		2.18 release notes	2.18 documentation
2.17	2019-04-25	2020-05-23		2.17 release notes	2.17 documentation
2.16	2018-12-25	2020-01-22		2.16 release notes	2.16 documentation
2.15	2018-09-18	2019-10-16		2.15 release notes	2.15 documentation
2.14	2018-06-14	2019-07-12		2.14 release notes	2.14 documentation
2.13	2018-02-27	2019-03-27		2.13 release notes	2.13 documentation
2.12	2017-11-14	2018-12-12		2.12 release notes	2.12 documentation
2.11	2017-08-16	2018-09-13		2.11 release notes	2.11 documentation
2.10	2017-05-08	2018-06-05		2.10 release notes	2.10 documentation
2.9	2017-02-01	2018-03-01		2.9 release notes	2.9 documentation
2.8	2016-10-12	2017-11-09		2.8 release notes	2.8 documentation
2.7	2016-07-06	2017-08-03		2.7 release notes	2.7 documentation
2.6	2016-03-29	2017-04-26		2.6 release notes	2.6 documentation
2.5	2016-01-12	2017-03-14		2.5 release notes	2.5 documentation
2.4	2015-09-15	2017-02-09		2.4 release notes	2.4 documentation
2.3	2015-07-06	2016-11-01		2.3 release notes	2.3 documentation
2.2	2015-04-01	2016-08-03		2.2 release notes	2.2 documentation
2.1	2014-12-23	2016-04-26		2.1 release notes	2.1 documentation
2.0	2014-10-14	2016-02-09		2.0 release notes	2.0 documentation
11.10.340				11.10.340 release notes	11.10.340 documentation
Developer documentation that is closing down
We hosted developer documentation for GitHub Enterprise Server on a separate site until the 2.17 release. We provide developer documentation for version 2.16 and earlier, but do not maintain or update the documentation.

Version	Release	Closing down date	Developer documentation
2.16	2018-12-25	2020-01-22	2.16 developer documentation
2.15	2018-09-18	2019-10-16	2.15 developer documentation
2.14	2018-06-14	2019-07-12	2.14 developer documentation
2.13	2018-02-27	2019-03-27	2.13 developer documentation
2.12	2017-11-14	2018-12-12	2.12 developer documentation
2.11	2017-08-16	2018-09-13	2.11 developer documentation
2.10	2017-05-08	2018-06-05	2.10 developer documentation
2.9	2017-02-01	2018-03-01	2.9 developer documentation
2.8	2016-10-12	2017-11-09	2.8 developer documentation
2.7	2016-07-06	2017-08-03	2.7 developer documentation
2.6	2016-03-29	2017-04-26	2.6 developer documentation
2.5	2016-01-12	2017-03-14	2.5 developer documentation
2.4	2015-09-15	2017-02-09	2.4 developer documentation
2.3	2015-07-06	2016-11-01	2.3 developer documentation
2.2	2015-04-01	2016-08-03	2.2 developer documentation
2.1	2014-12-23	2016-04-26	2.1 developer documentation
2.0	2014-10-14	2016-02-09	2.0 developer documentation
11.10.340			11.10.340 developer documentation
Recommended CodeQL CLI versions for code scanning
For instances with a GitHub Advanced Security license and code scanning enabled, the CodeQL action for code scanning analysis uses a minimum recommended version of the CodeQL CLI by default.

If you run analysis in an external CI system, we recommend using the same version of the CodeQL CLI. See Configuring code scanning for your appliance.

GitHub Enterprise Server version	Recommended CodeQL CLI version
3.15	2.18.4 (changelog)
3.14	2.17.6 (changelog)
3.13	2.16.5 (changelog)
3.12	2.15.5 (changelog)
3.11	2.14.6 (changelog)
3.10	2.13.5 (changelog)
3.9	2.12.7 (changelog)
Minimum GitHub Actions Runner application versions
For instances with GitHub Actions enabled, self-hosted GitHub Actions runners must run a minimum required version of the GitHub Actions Runner application.

For most instances, the Runner application is updated automatically.
If your instance uses ephemeral self-hosted runners and you've disabled automatic updates, you must upgrade your runners before upgrading GitHub Enterprise Server. See About self-hosted runners.
GitHub Enterprise Server version	Minimum Runner version
3.16	2.321.0 (release notes)
3.15	2.319.1 (release notes)
3.14	2.317.0 (release notes)
3.13	2.314.1 (release notes)
3.12	2.311.0 (release notes)
3.11	2.309.0 (release notes)
3.10	2.304.0 (release notes)
3.9	2.303.0 (release notes)
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community by tr4200812

GitHub Enterprise Server releases - GitHub Enterprise Server 3.16 Docs by tr4200812
