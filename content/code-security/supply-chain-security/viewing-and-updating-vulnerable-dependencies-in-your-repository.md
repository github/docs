---
title: Viewing and updating vulnerable dependencies in your repository
intro: 'If {% data variables.product.product_name %} discovers vulnerable dependencies in your project, you can view them on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the vulnerability.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: Viewing and updating vulnerable dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---
Your repository's {% data variables.product.prodname_dependabot %} alerts tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %}{% if currentVersion == "free-pro-team@latest" %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. You can sort the list of alerts using the drop-down menu, and you can click into specific alerts for more details. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."

{% if currentVersion == "free-pro-team@latest" %}
You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% data reusables.repositories.dependency-review %}

### About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} generates {% data variables.product.prodname_dependabot_alerts %} when we detect that your codebase is using dependencies with known vulnerabilities. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency in the default branch, {% data variables.product.prodname_dependabot %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.
{% endif %}

### Viewing and updating vulnerable dependencies

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view.
  ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and, if available, the pull request containing the automated security update.
1. Optionally, if there isn't already a {% data variables.product.prodname_dependabot_security_updates %} update for the alert, to create a pull request to resolve the vulnerability, click **Create {% data variables.product.prodname_dependabot %} security update**.
  ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request. Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, use the "Dismiss" drop-down, and click a reason for dismissing the alert.
   ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view.
  ![Alert selected in list of alerts](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and determine whether or not you need to update the dependency.
1. When you merge a pull request that updates the manifest or lock file to a secure version of the dependency, this will resolve the alert. Alternatively, if you decide not to update the dependency, click the **Dismiss** drop-down, and select a reason for dismissing the alert.
   ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/enterprise/repository/dependabot-alert-dismiss-drop-down.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
1. Click the version number of the vulnerable dependency to display detailed information.
  ![Detailed information on the vulnerable dependency](/assets/images/enterprise/3.0/dependabot-alert-info.png)
1. Review the details of the vulnerability and determine whether or not you need to update the dependency. When you merge a pull request that updates the manifest or lock file to a secure version of the dependency, this will resolve the alert.
1. The banner at the top of the **Dependencies** tab is displayed until all the vulnerable dependencies are resolved or you dismiss it. Click **Dismiss** in the top right corner of the banner and select a reason for dismissing the alert.
  ![Dismiss security banner](/assets/images/enterprise/3.0/dependabot-alert-dismiss.png)
{% endif %}

### Further reading

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"{% endif %}
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% if currentVersion == "free-pro-team@latest" %}
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
