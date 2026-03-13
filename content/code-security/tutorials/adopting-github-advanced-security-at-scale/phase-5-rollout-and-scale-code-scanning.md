---
title: 'Phase 5: Rollout and scale code scanning'
intro: You can {% ifversion security-configuration-enterprise-level %}use security configurations{% else %}leverage the available APIs{% endif %} to rollout {% data variables.product.prodname_code_scanning %} across your enterprise{% ifversion security-configurations %}{% else %} using the repository data you collected earlier{% endif %}.
versions:
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Secret Protection
shortTitle: 5. Rollout code scanning
redirect_from:
  - /code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning
contentType: tutorials
---

>[!TIP]
> This article is part of a series on adopting {% data variables.product.prodname_GHAS %} at scale. For the previous article in this series, see [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation).

{% ifversion security-configurations %}

{% data reusables.security-configurations.enable-security-features-with-gh-config %}

{% endif %}

## Enabling code scanning

After piloting {% data variables.product.prodname_code_scanning %} and creating internal documentation for best practices, you can enable {% data variables.product.prodname_code_scanning %} across your company. You can configure {% data variables.product.prodname_code_scanning %} default setup for all repositories in an organization from security overview. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale#configuring-default-setup-for-all-eligible-repositories-in-an-organization).

{% data reusables.advanced-security.enable-default-setup-first %}

## Building subject matter expertise

To successfully manage and use {% data variables.product.prodname_code_scanning %} across your company, you should build internal subject matter expertise. For default setup for {% data variables.product.prodname_code_scanning %}, one of the most important areas for subject matter experts (SMEs) to understand is interpreting and fixing {% data variables.product.prodname_code_scanning %} alerts. For more information about {% data variables.product.prodname_code_scanning %} alerts, see:

* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts)

You'll also need SMEs if you need to use advanced setup for {% data variables.product.prodname_code_scanning %}. These SMEs will need knowledge of {% data variables.product.prodname_code_scanning %} alerts, as well as topics like {% data variables.product.prodname_actions %} and customizing {% data variables.product.prodname_code_scanning %} workflows for particular frameworks. For custom configurations of advanced setup, consider running meetings on complicated topics to scale the knowledge of several SMEs at once.

{% ifversion security-overview-org-codeql-pr-alerts %}

For {% data variables.product.prodname_code_scanning %} alerts from {% data variables.product.prodname_codeql %} analysis, you can use security overview to see how {% data variables.product.prodname_codeql %} is performing in pull requests in repositories across your organization, and to identify repositories where you may need to take action. For more information, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-pull-request-alerts).

{% endif %}

{% ifversion copilot-chat-ghas-alerts %}

With a {% data variables.copilot.copilot_enterprise %} license, you can also ask {% data variables.copilot.copilot_chat %} for help to better understand {% data variables.product.prodname_code_scanning %} alerts in repositories in your organization. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

>[!TIP]
> For the next article in this series, see [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning).
