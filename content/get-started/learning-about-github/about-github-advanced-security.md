---
title: About GitHub Advanced Security
intro: >
  {% data variables.product.github %} offers advanced security features to help protect your code. These features are available to customers 
  {% ifversion ghas-products %}
    who purchase {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %}
  {% else %}
    with a {% data variables.product.prodname_GHAS %} license
  {% endif %}. 
  {% ifversion fpt or ghec %}
    Some features are enabled by default for public repositories.
  {% endif %}
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
---

## About {% data variables.product.prodname_GHAS %} {% ifversion ghas-products %}products{% endif %}

{% data variables.product.github %} provides many features that help you improve and maintain the quality and security of your code. Some of these features are included in all plans, such as the dependency graph and {% data variables.product.prodname_dependabot_alerts %}.

{% ifversion ghas-products %}

Other advanced security features require purchasing one of {% data variables.product.github %}'s {% data variables.product.prodname_AS %} products:

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

{% ifversion fpt or ghec %}
Some features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, are enabled by default for public repositories. To use these features on private or internal repositories, you must purchase the relevant {% data variables.product.prodname_GHAS %} product.
{% endif %}

You must be on a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan to purchase {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %}. For more information, see [GitHub Plans](/get-started/learning-about-github/githubs-plans) and [Billing for GitHub Advanced Security](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% else %}

Other advanced security features require a {% data variables.product.prodname_GHAS %} (GHAS) license. For information about purchasing a license, see [Billing for GitHub Advanced Security](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% endif %}

{% ifversion ghas-products %}

## {% data variables.product.prodname_GH_code_security %}

With {% data variables.product.prodname_GH_code_security %}, you get the following features:

* **{% data variables.product.prodname_code_scanning_caps %}**: Automatically scan your code for potential security vulnerabilities and coding errors using {% data variables.product.prodname_codeql %}, GitHub's semantic code analysis engine, or third-party tools. [Learn more about CodeQL](https://codeql.github.com/).

* **{% data variables.product.prodname_codeql_cli %}**: Run {% data variables.product.prodname_codeql %} processes locally on your projects or generate {% data variables.product.prodname_code_scanning %} results to upload to {% data variables.product.github %}.{% ifversion code-scanning-autofix %}

* **{% data variables.copilot.copilot_autofix_short %}**: Get automatically generated fixes for {% data variables.product.prodname_code_scanning %} alerts.{% endif %}{% ifversion security-campaigns %}

* **Security campaigns**: Reduce security debt at scale by managing and tracking security improvements across your repositories.{% endif %}

* **{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot %}**: Automate management of {% data variables.product.prodname_dependabot_alerts %} by ignoring, snoozing, or triggering security updates.

* **Dependency review**: Understand the full impact of dependency changes and identify vulnerable versions before merging pull requests.

* **Security overview**: Gain insights into the distribution of security risks across your organization.

{% ifversion fpt or ghec %}

The table below summarizes the availability of {% data variables.product.prodname_GH_code_security %} features for public and private repositories:

| Feature | Public repository <br>without {% data variables.product.prodname_GH_code_security %} | Private repository <br>without {% data variables.product.prodname_GH_code_security %} | Public or private repository <br>with {% data variables.product.prodname_GH_code_security %} |
| --- | :---: | :---: | :---: |
| {% data variables.product.prodname_code_scanning_caps %} | ✅ | ❌ | ✅ |
| {% data variables.product.prodname_codeql %} CLI | ❌ | ❌ | ✅ |
| {% data variables.copilot.copilot_autofix_short %} | ❌ | ❌ | ✅ |
| Security campaigns | ❌ | ❌ | ✅ |
| {% data variables.dependabot.custom_rules_caps %} | ❌ | ❌ | ✅ |
| Dependency review | ✅ | ❌ | ✅ |
| Security overview | ✅ | ❌ | ✅ |

*Legend: ✅ Feature available, ❌ Feature not available*

{% endif %}

{% endif %}
