---
title: Using GitHub preset rules to prioritize Dependabot alerts
intro: Focus on alerts that matter by auto-dismissing low impact development alerts for npm dependencies.
permissions: '{% data reusables.permissions.dependabot-github-presets %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Prioritize with preset rules
redirect_from:
  - /code-security/dependabot/dependabot-alert-rules/using-github-curated-alert-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-auto-triage-rules/using-github-curated-default-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-auto-triage-rules/using-github-preset-rules-to-prioritize-dependabot-alerts
contentType: how-tos
---

{% data reusables.dependabot.dismiss-low-impact-rule %} For more information about the rule, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependabot-auto-triage-rules#about-github-presets).

This rule is enabled by default on public repositories and disabled for private repositories. Administrators of private repositories can opt in by enabling the rule for their repository.

## Enabling the `Dismiss low impact issues for development-scoped dependencies` rule for your private repository

{% ifversion fpt or ghec %}You first need to enable {% data variables.product.prodname_dependabot_alerts %} for the repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-repository).{% elsif ghes %}{% data variables.product.prodname_dependabot_alerts %} for your repository can be enabled or disabled by your enterprise owner. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_dependabot_alerts %}", click {% octicon "gear" aria-label="The Gear icon" %} close to "{% data variables.product.prodname_dependabot %} rules".

   ![Screenshot of the "{% data variables.product.UI_advanced_security %}" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. Under "{% data variables.product.company_short %} presets", to the right of "Dismiss low impact issues for development-scoped dependencies", click {% octicon "pencil" aria-label="Edit rule" %}.
1. Under "State", select the dropdown menu, then click "Enabled".
1. Click **Save rule**.
