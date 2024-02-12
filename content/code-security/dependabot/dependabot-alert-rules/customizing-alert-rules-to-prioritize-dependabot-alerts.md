---
title: Customizing alert rules to prioritize Dependabot alerts
intro: 'You can create your own alert rules to auto-triage alerts.'
permissions: 'People with write permissions can view  {% data variables.product.prodname_dependabot %} alert rules for the repository. People with with admin permissions to a repository, or the security manager role for the repository, can enable or disable {% data variables.product.prodname_dependabot %} alert rules for the repository{% ifversion dependabot-alert-custom-rules-repo-level %}, as well as create custom alert rules{% endif %}'
product: '{% data reusables.gated-features.dependabot-alert-rules %}'
versions:
  feature: dependabot-alert-rules-auto-dismissal-npm-dev-dependencies
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Custom alert rules
---

{% data reusables.dependabot.github-alert-rules-beta %}

## About custom alert rules

You can create your own {% data variables.product.prodname_dependabot %} alert rules based on alert criteria. You can choose to auto-dismiss alerts indefinitely, or snooze alerts until a patch becomes available. Since any rules that you create apply to both future and current alerts, you can also use alert rules to manage your {% data variables.product.prodname_dependabot_alerts %} in bulk.

You can create rules using the following criteria:

- Dependency scope (`devDependency` or `runtime`)
- Package name
- CWE
- Severity
- Patch availability
- Manifest path
- Ecosystem

## Adding a custom rule to your repository

You can add a custom rule to your {% ifversion fpt %}public and private{% elsif ghec or ghes %}public, private, and internal{% endif %} repositories.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_dependabot_alerts %}", click {% octicon "gear" aria-label="The Gear icon" %} close to "{% data variables.product.prodname_dependabot %} rules".

   ![Screenshot of the "Code security and analysis" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. Click **New ruleset**.

   ![Screenshot of the "Code security and analysis" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-new-ruleset.png)

1. Under "Name", describe what this rule will do.
1. Under "Alert criteria", select the criteria you want to use to filter alerts.
1. Under "Rules", select the action you want to take on alerts that match the criteria.
1. Click **Create rule**.
