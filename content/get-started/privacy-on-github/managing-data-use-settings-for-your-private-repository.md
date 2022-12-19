---
title: Managing data use settings for your private repository
intro: 'To help {% data variables.product.product_name %} connect you to relevant tools, people, projects, and information, you can configure data use for your private repository.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
---

## About data use for your private repository


You can control data use for your private repository with the security and analysis features. 

- Enable the dependency graph to allow read-only data analysis on your repository. 
- Disable the dependency graph to block read-only data analysis of your repository. 

When you enable data use for your private repository, you'll be able to access the dependency graph, where you can track your repository's dependencies and receive {% data variables.product.prodname_dependabot_alerts %} when {% data variables.product.product_name %} detects vulnerable dependencies. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."


{% note %}

**Note:** If you disable the dependency graph, {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} are also disabled. For more information, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)." 

{% endnote %}

## Enabling or disabling data use through security and analysis features

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**.{% ifversion fpt %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Further reading

- "[About {% data variables.product.prodname_dotcom %}'s use of your data](/articles/about-github-s-use-of-your-data)"
- "[Viewing and updating {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
