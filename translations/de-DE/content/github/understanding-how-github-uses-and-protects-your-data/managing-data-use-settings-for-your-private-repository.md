---
title: Managing data use settings for your private repository
intro: 'To help {% data variables.product.product_name %} connect you to relevant tools, people, projects, and information, you can configure data use for your private repository.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### About data use for your private repository

When you enable data use for your private repository, you'll be able to access the dependency graph, where you can track your repository's dependencies and receive {% data variables.product.prodname_dependabot_short %} alerts when {% data variables.product.product_name %} detects vulnerable dependencies. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#github-dependabot-alerts-for-vulnerable-dependencies)." |

### Enabling or disabling data use features

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**. !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Weiterführende Informationen

- „[Informationen zur Verwendung Ihrer Daten durch {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)“
- „[Angreifbare Abhängigkeiten in Ihrem Repository anzeigen und aktualisieren](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)“
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
