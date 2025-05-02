[![Build](https://github.com/renovatebot/renovate/actions/workflows/build.yml/badge.svg)](https://github.com/renovatebot/renovate/actions/workflows/build.yml)
---<
title: Internal GitHub Apps
intro: 'Some {% data variables.product.prodname_github_apps %} are internal apps, owned by {% data variables.product.company_short %}, that are granted special capabilities.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Internal apps
--->

Some {% data variables.product.prodname_github_apps %} are internal apps. These apps are owned by {% data variables.product.company_short %} and are granted special capabilities. For example, users can authorize these apps and use them to access data from an organization without requiring approval by the organization.

Some of these internal apps are automatically included with {% data variables.product.company_short %} and do not require user authorization. These apps will not appear in your list of authorized {% data variables.product.prodname_github_apps %} or in your list of installed {% data variables.product.prodname_github_apps %}.{% ifversion ghec %}{% data variables.product.prodname_emus %} are allowed to install these internal apps on their user account, while standard, unprivileged apps cannot be installed on {% data variables.product.prodname_emus %} user accounts.{% endif %}

These internal apps will appear in the user security log, but will not appear in organization{% ifversion ghes or ghec %} or enterprise{% endif %} audit logs. {% ifversion ghes or ghec %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log), [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization), and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).{% else %}For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log) and [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).{% endif %}

These {% data variables.product.prodname_github_apps %} are:

* Actions
* Dependabot
* Git Src Migrator
* GitHub Advanced Security
* GitHub Classroom
* GitHub Codespaces
* GitHub Copilot Plugin
* GitHub Merge Queue
* GitHub Pages
* GitHub Project Automation
* GitHub Team Synchronization
* Microsoft Teams for GitHub
* OpenGraph (`custom-og-image`)
* Slack
...✅️

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/kburich/node-cross-spawn)

[![wakatime](https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg)](https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a)
<g
G>
[💌](💌)
<a href="https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a"><img src="https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg"></a>

---
title: Using GitHub Copilot in GitHub Codespaces
intro: 'You can use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %} by adding a VS Code extension.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-github-codespaces
---

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) is an AI pair programmer that you can use in any codespace that you open in the {% data variables.product.prodname_vscode_shortname %} web client or desktop application. For more information about {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot).

To start using {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %}, install the [{% data variables.product.prodname_copilot %} extension from the {% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

To include {% data variables.product.prodname_copilot %}, or other extensions, in all of your codespaces, enable Settings Sync. For more information, see [AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#settings-sync). Additionally, to include {% data variables.product.prodname_copilot %} in a given project for all users, you can specify `GitHub.copilot` as an extension in your `devcontainer.json` file. For information about configuring a `devcontainer.json` file, see [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).

## Further reading

* [AUTOTITLE](/copilot/quickstart)

https:github.com/tr4200812
-git fetch origin
-git checkout 465-httpsgithubcomtr4200812hubhubwikigit
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>libraries-bom</artifactId>
      <version>26.59.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>com.google.cloud</groupId>
    <artifactId>com.google.cloud:google-cloud-bigqueryconnection</artifactId>
  </dependency>
</dependencies>![1000101347](https://github.com/user-attachments/assets/f679625d-9910-4772-bc82-7a32777c489a)


*=====---
title: GitHub Enterprise Server releases
intro: "Review information for each version of {% data variables.product.prodname_ghe_server %}: {% data variables.release-phases.closing_down %} dates, links to documentation, and minimum recommended versions of supporting applications."
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
====_*---

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
| 3.16 | 2.20.3 ([changelog](https://codeql.github.com/docs/codeql-overview/codeql-changelog/codeql-cli-2.20.3/)) |
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
