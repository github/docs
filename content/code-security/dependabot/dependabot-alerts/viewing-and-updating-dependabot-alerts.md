---
title: Viewing and updating Dependabot alerts
intro: 'If {% data variables.product.product_name %} discovers vulnerable dependencies in your project, you can view them on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the vulnerability.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

Your repository's {% data variables.product.prodname_dependabot_alerts %} tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}{% endif %}. You can{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} filter alerts by package, ecosystem, or manifest. You can also{% endif %} sort the list of alerts, and you can click into specific alerts for more details. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."

{% ifversion fpt or ghec or ghes > 3.2 %}
You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."
{% endif %}

{% data reusables.repositories.dependency-review %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} generates {% data variables.product.prodname_dependabot_alerts %} when we detect that your codebase is using dependencies with known vulnerabilities. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency in the default branch, {% data variables.product.prodname_dependabot %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}You can sort and filter {% data variables.product.prodname_dependabot_alerts %} with the dropdown menus in the {% data variables.product.prodname_dependabot_alerts %} tab or by typing filters as `key:value` pairs into the search bar. The available filters are repository (for example, `repo:my-repository`), package (for example, `package:django`), ecosystem (for example, `ecosystem:npm`), manifest (for example, `manifest:webwolf/pom.xml`), state (for example, `is:open`), and whether an advisory has a patch (for example, `has: patch`).

Each {% data variables.product.prodname_dependabot %} alert has a unique numeric identifier and the {% data variables.product.prodname_dependabot_alerts %} tab lists an alert for every detected vulnerability. Legacy {% data variables.product.prodname_dependabot_alerts %} grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to a {% data variables.product.prodname_dependabot_alerts %} tab filtered for that package. {% endif %}
{% endif %}

## Viewing and updating vulnerable dependencies

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Optionally, to filter alerts, select the **Repository**, **Package**, **Ecosystem**, or **Manifest** dropdown menu then click the filter that you would like to apply. You can also type filters into the search bar. For example, `ecosystem:npm` or `has:patch`. To sort alerts, select the **Sort** dropdown menu then click the option that you would like to sort by.
  ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. Click the alert that you would like to view.
  ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)
1. Review the details of the vulnerability and, if available, the pull request containing the automated security update.
1. Optionally, if there isn't already a {% data variables.product.prodname_dependabot_security_updates %} update for the alert, to create a pull request to resolve the vulnerability, click **Create {% data variables.product.prodname_dependabot %} security update**.
  ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request. Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %}
   ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% elsif ghes = 3.3 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view.
  ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and, if available, the pull request containing the automated security update.
1. Optionally, if there isn't already a {% data variables.product.prodname_dependabot_security_updates %} update for the alert, to create a pull request to resolve the vulnerability, click **Create {% data variables.product.prodname_dependabot %} security update**.
  ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request. Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, select the "Dismiss" drop-down, and click a reason for dismissing the alert.
   ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

{% elsif ghes = 3.1 or ghes = 3.2 or ghae-issue-4864 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Click the alert you'd like to view.
  ![Alert selected in list of alerts](/assets/images/enterprise/graphs/click-alert-in-alerts-list.png)
1. Review the details of the vulnerability and determine whether or not you need to update the dependency.
1. When you merge a pull request that updates the manifest or lock file to a secure version of the dependency, this will resolve the alert. Alternatively, if you decide not to update the dependency, select the **Dismiss** drop-down, and click a reason for dismissing the alert.
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

{% if reopen-dependabot-alerts %}

## Viewing and updating closed alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**.
  ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png)
1. Click the alert that you would like to view or update.
  ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**.
  ![Screenshot showing the "Reopen" button](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

## Further reading

- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)"{% endif %}
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
