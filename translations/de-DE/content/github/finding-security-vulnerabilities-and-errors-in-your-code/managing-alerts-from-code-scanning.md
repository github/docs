---
title: Managing alerts from code scanning
shortTitle: Warnungen verwalten
intro: 'You can view, fix, and close alerts for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can manage {% data variables.product.prodname_code_scanning %} alerts for the repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### About alerts from {% data variables.product.prodname_code_scanning %}

After you enable {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} displays {% data variables.product.prodname_code_scanning %} alerts in your repository. The default {% data variables.product.prodname_code_scanning %} workflow uses the `on.push` event to trigger a code scan on every push to any branch containing the workflow file.

Each alert highlights a problem with the code and the name of the tool that identified it. You can see the line of code that triggered the alert, as well as properties of the alert, such as the severity and the nature of the problem. Alerts also tell you when the issue was first introduced. For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

![Example alert from {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)

If you won't take the action that the alert recommends, you can close the alert manually. For example, you can close an alert for code that's used for testing, or if you believe the alert is a false positive. You might also want to close an alert if the effort of fixing the coding error is greater than the potential benefit of improving the code.

By default, {% data variables.product.prodname_dotcom %} displays alerts for the default branch and any protected branches. You can sort and filter the list of alerts to see only the alerts you're interested in.

You can see the alerts introduced in a pull request, and take immediate action. When {% data variables.product.prodname_code_scanning %} finds vulnerabilities or errors in a pull request, {% data variables.product.prodname_dotcom %} displays annotations in the timeline and the diff views of the pull request.

If you enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, this can also detect data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

When {% data variables.product.prodname_code_scanning %} reports data-flow alerts, {% data variables.product.prodname_dotcom %} shows you how data moves through the code. {% data variables.product.prodname_code_scanning_capc %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

{% data reusables.code-scanning.you-can-upload-third-party-analysis %} {% data reusables.code-scanning.get-started-uploading-third-party-data %}

If you scan your code using a third-party tool or scan your code with custom {% data variables.product.prodname_codeql %} queries, {% data variables.product.prodname_dotcom %} will only use the supported SARIF 2.1.0 properties to display alerts. Results from third-party tools or custom queries may not include all of the properties that you see when you scan your code using {% data variables.product.company_short %}'s default {% data variables.product.prodname_codeql %} queries. For more information, see "[SARIF support for {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)."

### Viewing an alert

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Optionally, if the alert highlights a problem with data flow, click **Show paths** to review the data's path. ![Example data-flow alert](/assets/images/help/repository/code-scanning-show-paths.png)

### Closing an alert

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.click-alert-in-list %}
5. Use the "Close" drop-down, and click a reason for closing the alert. ![Choosing reason for closing the alert via the "Close" drop-down](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

### Weiterführende Informationen

- "[{% data variables.product.prodname_code_scanning_capc %}](http://developer.github.com/v3/code-scanning)"
- "[{% data variables.product.prodname_code_scanning_capc %} API](/v3/code-scanning)"
