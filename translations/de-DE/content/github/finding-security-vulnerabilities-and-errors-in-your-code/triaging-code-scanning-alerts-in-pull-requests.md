---
title: Triaging code scanning alerts in pull requests
shortTitle: Triaging alerts in pull requests
intro: 'When {% data variables.product.prodname_code_scanning %} identifies a problem in a pull request, you can review the highlighted code and resolve the alert.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - sicherheit
---

{% data reusables.code-scanning.beta %}

### About {% data variables.product.prodname_code_scanning %} results on pull requests

In repositories where {% data variables.product.prodname_code_scanning %} is configured as a pull request check, {% data variables.product.prodname_code_scanning %} checks the code in the pull request. By default, this is limited to pull requests that target the default branch, but you can change this configuration within {% data variables.product.prodname_actions %} or in a third-party CI/CD system. If merging the changes would introduce new {% data variables.product.prodname_code_scanning %} alerts to the target branch, these are reported as check results in the pull request. The alerts are also shown as annotations in the **Files changed** tab of the pull request. If you have write permission for the repository, you can see any existing {% data variables.product.prodname_code_scanning %} alerts on the **Security** tab. For information about repository alerts, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

If {% data variables.product.prodname_code_scanning %} has any results with a severity of `error`, the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notices and the check succeeds. If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then you must either fix or {% if currentVersion == "enterprise-server@2.22" %}close{% else %}dismiss{% endif %} all error alerts before the pull request can be merged. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).“

![Failed {% data variables.product.prodname_code_scanning %} check on a pull request](/assets/images/help/repository/code-scanning-check-failure.png)

### About {% data variables.product.prodname_code_scanning %} as a pull request check

There are many options for configuring {% data variables.product.prodname_code_scanning %} as a pull request check, so the exact setup of each repository will vary and some will have more than one check. The check that contains the results of {% data variables.product.prodname_code_scanning %} is: **Code scanning results**.

If the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. The analysis check may fail if there are configuration problems, or if the pull request breaks the build for a language that the analysis needs to compile (for example, C/C++, C#, or Java). As with other pull request checks, you can see full details of the check failure on the **Checks** tab. For more information about configuring and troubleshooting, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" or "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)."

### Triaging an alert on your pull request

When you look at the **Files changed** tab for a pull request, you see annotations for any lines of code that triggered the alert.

![Alert annotation within a pull request diff](/assets/images/help/repository/code-scanning-pr-annotation.png)

If you have write permission for the repository, some annotations contain links with extra context for the alert. In the example above, from {% data variables.product.prodname_codeql %} analysis, you can click **user-provided value** to see where the untrusted data enters the data flow (this is referred to as the source). In this case you can also view the full path from the source to the code that uses the data (the sink) by clicking **Show paths**. This makes it easy to check whether the data is untrusted or if the analysis failed to recognize a data sanitization step between the source and the sink. For information about analyzing data flow using {% data variables.product.prodname_codeql %}, see "[About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)."

To see more information about an alert, users with write permission can click the **Show more details** link shown in the annotation. This allows you to see all of the context and metadata provided by the tool in an alert view. In the example below, you can see tags showing the severity, type, and relevant common weakness enumerations (CWEs) for the problem. The view also shows which commit introduced the problem.

In the detailed view for an alert, some {% data variables.product.prodname_code_scanning %} tools, like {% data variables.product.prodname_codeql %} analysis, also include a description of the problem and a **Show more** link for guidance on how to fix your code.

![Alert description and link to show more information](/assets/images/help/repository/code-scanning-pr-alert.png)

### {% if currentVersion == "enterprise-server@2.22" %}Resolving{% else %}Fixing{% endif %} an alert on your pull request

Anyone with push access to a pull request can fix a {% data variables.product.prodname_code_scanning %} alert that's identified on that pull request. If you commit changes to the pull request this triggers a new run of the pull request checks. If your changes fix the problem, the alert is closed and the annotation removed.

{% if currentVersion == "enterprise-server@2.22" %}

If you don't think that an alert needs to be fixed, users with write permission can close the alert manually. {% data reusables.code-scanning.close-alert-examples %} The **Close** button is available in annotations and in the alerts view if you have write permission for the repository.

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

### Dismissing an alert on your pull request

An alternative way of closing an alert is to dismiss it. You can dismiss an alert if you don't think it needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} If you have write permission for the repository, the **Dismiss** button is available in code annotations and in the alerts summary. When you click **Dismiss** you will be prompted to choose a reason for closing the alert.

![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

For more information about dismissing alerts, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)."

{% endif %}
