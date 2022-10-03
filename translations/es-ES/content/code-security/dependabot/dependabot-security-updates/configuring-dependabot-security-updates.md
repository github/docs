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
  ghes: '>3.2'
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

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} at the repository level or for all repositories owned by your personal account or organization. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your personal account or organization.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for newly created repositories if your personal account or organization has enabled **Automatically enable for new repositories** for {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)." 

If you create a fork of a repository that has security updates enabled, {% data variables.product.prodname_dotcom %} will automatically disable {% data variables.product.prodname_dependabot_security_updates %} for the fork. You can then decide whether to enable {% data variables.product.prodname_dependabot_security_updates %} on the specific fork.

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all qualifying repositories owned by your personal account or organization. For more information, see "[Managing security and analysis settings for your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." 

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository.

### Enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** to enable the feature or **Disable** to disable it. {% ifversion fpt or ghec %}For public repositories, the button is disabled if the feature is always enabled.{% endif %}
  {% ifversion fpt or ghec %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Overriding the default behavior with a configuration file

You can override the default behavior of {% data variables.product.prodname_dependabot_security_updates %} by adding a dependabot.yml file to your repository. For more information, see "[Configuration options for the dependabot.yml file](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)." 

If you only require security updates and want to exclude version updates, you can set `open-pull-request-limit` to `0` in order to prevent version updates for a given `package-ecosystem`. For more information, see "[`open-pull-request-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)."

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

For more information about the configuration options available for security updates, see the table in "[Configuration options for the dependabot.yml file](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)."

## Further reading

- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configuring {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"{% ifversion fpt or ghec %}
- "[Managing data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
