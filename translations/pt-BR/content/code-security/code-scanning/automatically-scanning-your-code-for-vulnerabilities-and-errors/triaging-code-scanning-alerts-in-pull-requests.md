---
title: Triaging code scanning alerts in pull requests
shortTitle: Triage alerts in pull requests
intro: 'When {% data variables.product.prodname_code_scanning %} identifies a problem in a pull request, you can review the highlighted code and resolve the alert.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---


{% data reusables.code-scanning.beta %}

## About {% data variables.product.prodname_code_scanning %} results on pull requests

In repositories where {% data variables.product.prodname_code_scanning %} is configured as a pull request check, {% data variables.product.prodname_code_scanning %} checks the code in the pull request. By default, this is limited to pull requests that target the default branch, but you can change this configuration within {% data variables.product.prodname_actions %} or in a third-party CI/CD system. If merging the changes would introduce new {% data variables.product.prodname_code_scanning %} alerts to the target branch, the alerts are reported in multiple places.

- Check results in the pull request {% ifversion code-scanning-pr-conversations-tab %}
- The **Conversation** tab of the pull request, as part of a pull request review {% endif %} 
- The **Files changed** tab of the pull request

If you have write permission for the repository, you can see any existing {% data variables.product.prodname_code_scanning %} alerts on the **Security** tab. For information about repository alerts, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)."

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
In repositories where {% data variables.product.prodname_code_scanning %} is configured to scan each time code is pushed, {% data variables.product.prodname_code_scanning %} will also map the results to any open pull requests and add the alerts as annotations in the same places as other pull request checks. For more information, see "[Scanning on push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)."
{% endif %}

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_capc %} results" check must pass before you can merge the pull request. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)."

## About {% data variables.product.prodname_code_scanning %} as a pull request check

There are many options for configuring {% data variables.product.prodname_code_scanning %} as a pull request check, so the exact setup of each repository will vary and some will have more than one check. 

### {% data variables.product.prodname_code_scanning_capc %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_capc %} results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations. 

{% ifversion fpt or ghes > 3.2 or ghae or ghec %} To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. For more information, see "[Managing code scanning alerts for your repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)."

![{% data variables.product.prodname_code_scanning_capc %} results check on a pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`, `critical`, or `high`, the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![Failed {% data variables.product.prodname_code_scanning %} check on a pull request](/assets/images/help/repository/code-scanning-check-failure.png)

You can override the default behavior in your repository settings, by specifying the level of severities and security severities that will cause a pull request check failure. For more information, see "[Defining the severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis. 

For example, if the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. The analysis check may fail if there are configuration problems, or if the pull request breaks the build for a language that the analysis needs to compile (for example, C/C++, C#, or Java). 

As with other pull request checks, you can see full details of the check failure on the **Checks** tab. For more information about configuring and troubleshooting, see "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" or "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/code-security/secure-coding/troubleshooting-the-codeql-workflow)."

## Viewing an alert on your pull request

{% ifversion code-scanning-pr-conversations-tab %}
You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by viewing the **Conversation** tab. {% data variables.product.prodname_code_scanning_capc %} posts a pull request review that shows each alert as an annotation on the lines of code that triggered the alert. You can comment on the alerts, dismiss the alerts, and view paths for the alerts, directly from the annotations. You can view the full details of an alert by clicking the "Show more details" link, which will take you to the alert details page.

![Alert annotation within a pull request Conversations tab](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

You can also view all {% data variables.product.prodname_code_scanning %} alerts in the **Files changed** tab of the pull request. Existing {% data variables.product.prodname_code_scanning %} alerts on a file that are outside the diff of the changes introduced in the pull request will only appear in the **Files changed** tab.

{% else %} 
You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation. 

![Alert annotation within a pull request diff](/assets/images/help/repository/code-scanning-pr-annotation.png)
{% endif %}

If you have write permission for the repository, some annotations contain links with extra context for the alert. In the example above, from {% data variables.product.prodname_codeql %} analysis, you can click **user-provided value** to see where the untrusted data enters the data flow (this is referred to as the source). In this case you can also view the full path from the source to the code that uses the data (the sink) by clicking **Show paths**. This makes it easy to check whether the data is untrusted or if the analysis failed to recognize a data sanitization step between the source and the sink. For information about analyzing data flow using {% data variables.product.prodname_codeql %}, see "[About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)."

To see more information about an alert, users with write permission can click the **Show more details** link shown in the annotation. This allows you to see all of the context and metadata provided by the tool in an alert view. In the example below, you can see tags showing the severity, type, and relevant common weakness enumerations (CWEs) for the problem. The view also shows which commit introduced the problem.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
{% data reusables.code-scanning.alert-default-branch %}
{% endif %}

In the detailed view for an alert, some {% data variables.product.prodname_code_scanning %} tools, like {% data variables.product.prodname_codeql %} analysis, also include a description of the problem and a **Show more** link for guidance on how to fix your code.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
![Alert description and link to show more information](/assets/images/help/repository/code-scanning-pr-alert.png)
{% else %}
![Alert description and link to show more information](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png)
{% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Commenting on an alert in a pull request

You can comment on any {% data variables.product.prodname_code_scanning %} alert introduced by the changes in a pull request. Alerts appear as annotations in the **Conversation** tab of a pull request, as part of a  pull request review, and also are shown in the **Files changed** tab. You can only comment on alerts introduced by the changes in a pull request. Existing {% data variables.product.prodname_code_scanning %} alerts, on files that are outside the changes introduced in the pull request, will appear in the **Files changed** tab but cannot be commented on.

You can choose to require all conversations in a pull request, including those on {% data variables.product.prodname_code_scanning %} alerts, to be resolved before a pull request can be merged. For more information, see "[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging)."
{% endif %}
## Fixing an alert on your pull request

Anyone with push access to a pull request can fix a {% data variables.product.prodname_code_scanning %} alert that's identified on that pull request. If you commit changes to the pull request this triggers a new run of the pull request checks. If your changes fix the problem, the alert is closed and the annotation removed.

## Dismissing an alert on your pull request

An alternative way of closing an alert is to dismiss it. You can dismiss an alert if you don't think it needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} If you have write permission for the repository, the **Dismiss** button is available in code annotations and in the alerts summary. When you click **Dismiss** you will be prompted to choose a reason for closing the alert.
{% ifversion comment-dismissed-code-scanning-alert %}
![Screenshot of code scanning alert with dropdown to choose dismissal reason emphasized](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png)
{% else %}
![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)
{% endif %}
{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

For more information about dismissing alerts, see {% ifversion delete-code-scanning-alerts %}"[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)."{% else %} "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)."{% endif %}
