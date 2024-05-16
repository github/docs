---
title: Configuring Dependabot security updates
intro: 'You can use {% data variables.product.prodname_dependabot_security_updates %} or manual pull requests to easily update vulnerable dependencies.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository{% ifversion code-security-multi-repo-enablement %}, for a selection of repositories in an organization,{% endif %} or for all repositories owned by your personal account or organization. For more information about enabling security features in an organization, see "[AUTOTITLE](/code-security/getting-started/securing-your-organization)."

{% data reusables.dependabot.dependabot-security-updates-disable-for-alert-rules %}

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for newly created repositories if your personal account or organization has enabled **Automatically enable for new repositories** for {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)."

If you create a fork of a repository that has security updates enabled, {% data variables.product.prodname_dotcom %} will automatically disable {% data variables.product.prodname_dependabot_security_updates %} for the fork. You can then decide whether to enable {% data variables.product.prodname_dependabot_security_updates %} on the specific fork.

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all qualifying repositories owned by your personal account or organization. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository.

### Enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** to enable the feature or **Disable** to disable it. {% ifversion fpt or ghec %}For public repositories, the button is disabled if the feature is always enabled.{% endif %}

{% ifversion dependabot-grouped-security-updates-config %}

## Grouping {% data variables.product.prodname_dependabot_security_updates %} into a single pull request

To reduce the number of pull requests you may be seeing, you can enable grouped security updates for your repository or organization. When this is enabled, {% data variables.product.prodname_dependabot %} will group security updates into one pull request for each package ecosystem. In order to use grouped security updates, you must first enable the following features:

- **Dependency graph**. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."
- **{% data variables.product.prodname_dependabot_alerts %}**. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."
- **{% data variables.product.prodname_dependabot_security_updates %}**. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

{% note %}

**Note:** When grouped security updates are first enabled, {% data variables.product.prodname_dependabot %} will immediately try to create grouped pull requests. You may notice {% data variables.product.prodname_dependabot %} closing old pull requests and opening new ones.

{% endnote %}

{% data reusables.dependabot.dependabot-grouped-security-updates-how-enable %}
{% data reusables.dependabot.dependabot-grouped-security-updates-order %}

### Enabling or disabling grouped {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

Repository administrators can enable or disable grouped security updates for their repository. Changing the repository setting will override any default organization settings. {% data reusables.dependabot.dependabot-grouped-security-updates-yaml-override %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of "Grouped security updates", click **Enable** to enable the feature or **Disable** to disable it.

### Enabling or disabling grouped {% data variables.product.prodname_dependabot_security_updates %} for an organization

Organization owners can enable or disable grouped security updates for all repositories in their organization. However, repository administrators within the organization can update the settings for their repositories to override the default organization settings. {% data reusables.dependabot.dependabot-grouped-security-updates-yaml-override %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For next steps on enabling or disabling grouped {% data variables.product.prodname_dependabot_security_updates %} in your organization with {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#grouping-dependabot-security-updates)."
{% endif %}

1. Under "Code security and analysis", to the right of "Grouped security updates", click **Disable all** or **Enable all**.
1. Optionally, to enable grouped {% data variables.product.prodname_dependabot_security_updates %} for new repositories in your organization, select **Automatically enable for new repositories**.

{% endif %}

## Overriding the default behavior with a configuration file

You can override the default behavior of {% data variables.product.prodname_dependabot_security_updates %} by adding a `dependabot.yml` file to your repository. {% ifversion dependabot-grouped-security-updates-config %}With a `dependabot.yml` file, you can have more granular control of grouping, and override the default behavior of {% data variables.product.prodname_dependabot_security_updates %} settings.{% endif %}

{% ifversion dependabot-grouped-security-updates-config %}
Use the `groups` option with the `applies-to: security-updates` key to create sets of dependencies (per package manager), so that {% data variables.product.prodname_dependabot %} opens a single pull request to update multiple dependencies at the same time. You can define groups by package name (the `patterns` and `exclude-patterns` keys), dependency type (`dependency-type` key), and SemVer (the `update-types` key).

{% data reusables.dependabot.dependabot-version-updates-groups-match-first %}
{% endif %}

If you only require _security_ updates and want to exclude _version_ updates, you can set `open-pull-requests-limit` to `0` in order to prevent version updates for a given `package-ecosystem`.

For more information about the configuration options available for security updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."

```yaml
# Example configuration file that:
#  - Has a private registry
#  - Ignores lodash dependency
#  - Disables version-updates
{% ifversion dependabot-grouped-security-updates-config %}#  - Defines a group by package name, for security updates for golang dependencies{%- endif %}

version: 2
registries:
  example:
    type: npm-registry
    url: https://example.com
    token: {% raw %}${{secrets.NPM_TOKEN}}{% endraw %}
updates:
  - package-ecosystem: "npm"
    directory: "/src/npm-project"
    schedule:
      interval: "daily"
    # For Lodash, ignore all updates
    ignore:
      - dependency-name: "lodash"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
    registries:
      - example
  {%- ifversion dependabot-grouped-security-updates-config %}- package-ecosystem: "gomod"
    groups:
      golang:
        applies-to: security-updates
        patterns:
          - "golang.org*"{%- endif %}
```

{% note %}

**Note:** In order for {% data variables.product.prodname_dependabot %} to use this configuration for security updates,  the `directory` must be the path to the manifest files, and you should not specify a `target-branch`.

{% endnote %}

## Further reading

- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems)"
