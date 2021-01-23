---
title: Managing code scanning alerts for your repository
shortTitle: Managing alerts
intro: 'From the security view, you can view, fix, {% if currentVersion == "enterprise-server@2.22" %}or close{% else %}dismiss, or delete{% endif %} alerts for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
---

{% data reusables.code-scanning.beta %}

### About alerts from {% data variables.product.prodname_code_scanning %}

You can set up {% data variables.product.prodname_code_scanning %} to check the code in a repository using the default {% data variables.product.prodname_codeql %} analysis, a third-party analysis, or multiple types of analysis. When the analysis is complete, the resulting alerts are displayed alongside each other in the security view of the repository. Results from third-party tools or from custom queries may not include all of the properties that you see for alerts detected by {% data variables.product.company_short %}'s default {% data variables.product.prodname_codeql %} analysis. For more information, see "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)."

By default, {% data variables.product.prodname_code_scanning %} analyzes your code periodically on the default branch and during pull requests. For information about managing alerts on a pull request, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

### About alerts details

Each alert highlights a problem with the code and the name of the tool that identified it. You can see the line of code that triggered the alert, as well as properties of the alert, such as the severity and the nature of the problem. Alerts also tell you when the issue was first introduced. For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

![Example alert from {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

If you enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

When {% data variables.product.prodname_code_scanning %} reports data-flow alerts, {% data variables.product.prodname_dotcom %} shows you how data moves through the code. {% data variables.product.prodname_code_scanning_capc %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

### Viewing the alerts for a repository

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} annotations on pull requests. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."

You need write permission to view a summary of all the alerts for a repository on the **Security** tab. By default, alerts are shown for the default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Under "{% data variables.product.prodname_code_scanning_capc %}," click the alert you'd like to explore. ![Summary of alerts](/assets/images/help/repository/code-scanning-click-alert.png)
1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used. ![The "Show paths" link on an alert](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alerts from {% data variables.product.prodname_codeql %} analysis include a description of the problem. Click **Show more** for guidance on how to fix your code. ![Details for an alert](/assets/images/help/repository/code-scanning-alert-details.png)

### Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."

If you have write permission for a repository, you can view fixed alerts by viewing the summary of alerts and clicking **Closed**. For more information, see "[Viewing the alerts for a repository](#viewing-the-alerts-for-a-repository)." The "Closed" list shows fixed alerts and alerts that users have {% if currentVersion == "enterprise-server@2.22" %}closed{% else %}dismissed{% endif %}.

Alerts may be fixed in one branch but not in another. You can use the "Branch" drop-down menu, on the summary of alerts, to check whether an alert is fixed in a particular branch.

![Filtering alerts by branch](/assets/images/help/repository/code-scanning-branch-filter.png)

{% if currentVersion == "enterprise-server@2.22" %}

### Closing an alert

Closing an alert is a way to resolve an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %}

{% else %}

### Dismissing or deleting alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert. Alternatively, if you have admin permissions for the repository, you can delete alerts. Deleting alerts is useful in situations where you have enabled a {% data variables.product.prodname_code_scanning %} tool and then decided to remove it, or where you have enabled {% data variables.product.prodname_codeql %} analysis with a larger set of queries than you want to continue using, and you've then removed some queries from the tool. In both cases, deleting alerts allows you to clean up your {% data variables.product.prodname_code_scanning %} results. You can delete alerts from the summary list within the **Security** tab.

Dismissing an alert is a way of closing an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} You can dismiss alerts from {% data variables.product.prodname_code_scanning %} annotations in code, or from the summary list within the **Security** tab.

When you dismiss an alert:

- It's dismissed in all branches.
- The alert is removed from the number of current alerts for your project.
- The alert is moved to the "Closed" list in the summary of alerts, from where you can reopen it, if required.
- The reason why you closed the alert is recorded.
- Next time {% data variables.product.prodname_code_scanning %} runs, the same code won't generate an alert.

When you delete an alert:

- It's deleted in all branches.
- The alert is removed from the number of current alerts for your project.
- It is _not_ added to the "Closed" list in the summary of alerts.
- If the code that generated the alert stays the same, and the same {% data variables.product.prodname_code_scanning %} tool runs again without any configuration changes, the alert will be shown again in your analysis results.

To dismiss or delete alerts:

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "enterprise-server@2.22" %}
{% data reusables.code-scanning.click-alert-in-list %}
1. Select the **Close** drop-down menu and click a reason for closing the alert.    
   ![Choosing reason for closing the alert via the Close drop-down](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

1. If you have admin permissions for the repository, and you want to delete alerts for this {% data variables.product.prodname_code_scanning %} tool, select some or all of the check boxes and click **Delete**.

   ![Deleting alerts](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Optionally, you can use the filters to display a subset of alerts and then delete all matching alerts at once. For example, if you have removed a query from {% data variables.product.prodname_codeql %} analysis, you can use the "Rule" filter to list just the alerts for that query and then select and delete all of those alerts.

  ![Filter alerts by rule](/assets/images/help/repository/code-scanning-filter-by-rule.png)

1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.

   ![Open an alert from the summary list](/assets/images/help/repository/code-scanning-click-alert.png)

1. Review the alert, then click **Dismiss** and choose a reason for closing the alert. ![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

{% endif %}

### Дополнительная литература

- "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)"
- "[Enabling {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)"
- "[About integration with {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
