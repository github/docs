---
title: Viewing and updating vulnerable dependencies in your repository
intro: 'If {% data variables.product.product_name %} discovers vulnerable dependencies in your project, you can view them on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the vulnerability.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: Viewing and updating vulnerable dependencies
versions:
  free-pro-team: '*'
---

Your repository's {% data variables.product.prodname_dependabot %} alerts tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}. You can sort the list of alerts using the drop-down menu, and you can click into specific alerts for more details. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-github-dependabot-security-updates)."

### About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} sends {% data variables.product.prodname_dependabot_alerts %} when we detect vulnerabilities affecting your repository. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency {% data variables.product.prodname_dependabot_short %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

### Viewing and updating vulnerable dependencies

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view. ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and, if available, the pull request containing the automated security update.
1. Optionally, if there isn't already a {% data variables.product.prodname_dependabot_security_updates %} update for the alert, to create a pull request to resolve the vulnerability, click **Create {% data variables.product.prodname_dependabot_short %} security update**. ![Create {% data variables.product.prodname_dependabot_short %} security update button](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request. Each pull request raised by {% data variables.product.prodname_dependabot_short %} includes information on commands you can use to control {% data variables.product.prodname_dependabot_short %}. For more information, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-github-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, use the "Dismiss" drop-down, and click a reason for dismissing the alert. ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### 더 읽을거리

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors)"
