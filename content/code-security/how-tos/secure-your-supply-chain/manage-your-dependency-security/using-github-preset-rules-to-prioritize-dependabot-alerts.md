---
title: Using GitHub preset rules to prioritize Dependabot alerts
intro: Focus on alerts that matter by auto-dismissing low impact development alerts for npm dependencies.
permissions: '{% data reusables.permissions.dependabot-github-presets %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Prioritize with preset rules
redirect_from:
  - /code-security/dependabot/dependabot-alert-rules/using-github-curated-alert-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-auto-triage-rules/using-github-curated-default-rules-to-prioritize-dependabot-alerts
  - /code-security/dependabot/dependabot-auto-triage-rules/using-github-preset-rules-to-prioritize-dependabot-alerts
contentType: how-tos
category:
  - Secure your dependencies
---

## Prerequisites

Before you enable {% data variables.dependabot.github_presets %} for your repository, you should be familiar with their functionality and purpose. See [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependabot-auto-triage-rules).

## Enabling {% data variables.product.company_short %} preset rules

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.prodname_dependabot %}" section, to the right of "{% data variables.product.prodname_dependabot %} rules", click {% octicon "gear" aria-label="Configure Dependabot rules" %}.

   ![Screenshot of the "{% data variables.product.UI_advanced_security %}" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. In the "{% data variables.dependabot.github_presets %}" section, to the right of the rule you want to enable, click {% octicon "pencil" aria-label="Edit rule" %}.
1. In the "State" section, select the dropdown menu, then click **Enabled**.
1. Click **Save rule**.
