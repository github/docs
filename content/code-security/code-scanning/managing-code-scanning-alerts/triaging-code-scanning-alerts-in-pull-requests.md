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
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---


## About {% data variables.product.prodname_code_scanning %} results on pull requests

In repositories where {% data variables.product.prodname_code_scanning %} is configured as a pull request check, {% data variables.product.prodname_code_scanning %} checks the code in the pull request. By default, this is limited to pull requests that target the default branch, but you can change this configuration within {% data variables.product.prodname_actions %} or in a third-party CI/CD system.

{% ifversion code-scanning-alerts-in-pr-diff %}If the lines of code changed in the pull request generate {% data variables.product.prodname_code_scanning %} alerts, the alerts are reported in the following places on the pull request{% else %}If merging the changes would introduce new {% data variables.product.prodname_code_scanning %} alerts to the target branch, the alerts are reported in the following places{% endif %}.

* Check results in the pull request {% ifversion code-scanning-pr-conversations-tab %}
* The **Conversation** tab of the pull request, as part of a pull request review {% endif %}
* The **Files changed** tab of the pull request

{% ifversion code-scanning-alerts-in-pr-diff %}
{% note %}

**Note:** {% data variables.product.prodname_code_scanning_caps %} displays alerts in pull requests only when all the lines of code identified by the alert exist in the pull request diff. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#specifying-the-location-for-source-files)."

{% endnote %}
{% endif %}

{% ifversion code-scanning-autofix %}

{% data variables.product.prodname_copilot_autofix %} will suggest fixes for alerts from {% data variables.product.prodname_codeql %} analysis in private repositories. For more information on working with suggestions from {% data variables.product.prodname_copilot_autofix_short %} in pull requests, see "[Working with {% data variables.product.prodname_copilot_autofix_short %} suggestions for alerts on a pull request](#working-with-copilot-autofix-suggestions-for-alerts-on-a-pull-request)."

{% endif %}

If you have write permission for the repository, you can see any existing {% data variables.product.prodname_code_scanning %} alerts on the **Security** tab. For information about repository alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

In repositories where {% data variables.product.prodname_code_scanning %} is configured to scan each time code is pushed, {% data variables.product.prodname_code_scanning %} will also map the results to any open pull requests and add the alerts as annotations in the same places as other pull request checks. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#scanning-on-push)."

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_caps %} results" check must pass before you can merge the pull request. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)."

{% ifversion copilot-chat-ghas-alerts %}

With a {% data variables.product.prodname_copilot_enterprise %} license, you can also ask {% data variables.product.prodname_copilot_chat %} for help to better understand {% data variables.product.prodname_code_scanning %} alerts in repositories in your organization. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features)."

{% endif %}

## About {% data variables.product.prodname_code_scanning %} as a pull request check

There are many options for configuring {% data variables.product.prodname_code_scanning %} as a pull request check, so the exact configuration of each repository will vary and some will have more than one check.

### {% data variables.product.prodname_code_scanning_caps %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_caps %} results**. The results for each analysis tool used are shown separately. {% ifversion code-scanning-alerts-in-pr-diff %}Any new alerts on lines of code changed in the pull request are shown as annotations{% else %}Any new alerts caused by changes in the pull request are shown as annotations{% endif %}.

To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)."

![Screenshot of the {% data variables.product.prodname_code_scanning_caps %} results check on a pull request. The "View all branch alerts" link is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-results-check.png)

### {% data variables.product.prodname_code_scanning_caps %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`, `critical`, or `high`, the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![Screenshot of the merge box for a pull request. The "Code scanning results / CodeQL" check has "1 new alert including 1 high severity security v..."](/assets/images/help/repository/code-scanning-check-failure.png)

You can override the default behavior in your repository settings, by specifying the level of severities and security severities that will cause a pull request check failure. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the {% data variables.code-scanning.codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. The analysis check may fail if there are configuration problems, or if the pull request breaks the build for a language that the analysis compiles (for example, {% data variables.code-scanning.compiled_languages %}).

As with other pull request checks, you can see full details of the check failure on the **Checks** tab. For more information about configuring and troubleshooting, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" or "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."

## Viewing an alert on your pull request

{% ifversion code-scanning-pr-conversations-tab %}
You can see any {% data variables.product.prodname_code_scanning %} alerts {% ifversion code-scanning-alerts-in-pr-diff %}that are inside the diff of the changes{% endif %} introduced in a pull request by viewing the **Conversation** tab. {% data variables.product.prodname_code_scanning_caps %} posts a pull request review that shows each alert as an annotation on the lines of code that triggered the alert. You can comment on the alerts, dismiss the alerts, and view paths for the alerts, directly from the annotations. You can view the full details of an alert by clicking the "Show more details" link, which will take you to the alert details page.

![Screenshot of an alert annotation on the "Conversations" tab of a pull request. The "Show more details" link is outlined in dark orange.](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

You can also view all {% data variables.product.prodname_code_scanning %} alerts {% ifversion code-scanning-alerts-in-pr-diff %}that are inside the diff of the changes introduced in the pull request in the **Files changed** tab{% else %}in the **Files changed** tab of the pull request. Existing {% data variables.product.prodname_code_scanning %} alerts on a file that are outside the diff of the changes introduced in the pull request will only appear in the **Files changed** tab{% endif %}.

{% else %}
You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

![Screenshot showing an alert annotation within a pull request diff.](/assets/images/help/repository/code-scanning-pr-annotation.png)
{% endif %}

{% ifversion code-scanning-alerts-in-pr-diff %}If you add a new code scanning configuration in your pull request, you will see a comment on your pull request directing you to the **Security** tab of the repository so you can view all the alerts on the pull request branch. For more information about viewing the alerts for a repository, see  "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."{% endif %}

If you have write permission for the repository, some annotations contain links with extra context for the alert. In the example above, from {% data variables.product.prodname_codeql %} analysis, you can click **user-provided value** to see where the untrusted data enters the data flow (this is referred to as the source). In this case you can also view the full path from the source to the code that uses the data (the sink) by clicking **Show paths**. This makes it easy to check whether the data is untrusted or if the analysis failed to recognize a data sanitization step between the source and the sink. For information about analyzing data flow using {% data variables.product.prodname_codeql %}, see "[About data flow analysis](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)."

To see more information about an alert, users with write permission can click the **Show more details** link shown in the annotation. This allows you to see all of the context and metadata provided by the tool in an alert view. In the example below, you can see tags showing the severity, type, and relevant common weakness enumerations (CWEs) for the problem. The view also shows which commit introduced the problem.

{% data reusables.code-scanning.alert-default-branch %}

In the detailed view for an alert, some {% data variables.product.prodname_code_scanning %} tools, like {% data variables.product.prodname_codeql %} analysis, also include a description of the problem and a **Show more** link for guidance on how to fix your code.

![Screenshot showing the description for a {% data variables.product.prodname_code_scanning %} alert. A link labeled "Show more" is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-pr-alert.png)

{% ifversion code-scanning-pr-conversations-tab %}

## Commenting on an alert in a pull request

You can comment on any {% data variables.product.prodname_code_scanning %} alert {% ifversion code-scanning-alerts-in-pr-diff %}that appears in a pull request. Alerts appear as annotations in the **Conversation** tab of a pull request, as part of a  pull request review, and also are shown in the **Files changed** tab{% else %}introduced by the changes in a pull request. Alerts appear as annotations in the **Conversation** tab of a pull request, as part of a  pull request review, and also are shown in the **Files changed** tab. You can only comment on alerts introduced by the changes in a pull request. Existing {% data variables.product.prodname_code_scanning %} alerts, on files that are outside the changes introduced in the pull request, will appear in the **Files changed** tab but cannot be commented on{% endif %}.

You can choose to require all conversations in a pull request, including those on {% data variables.product.prodname_code_scanning %} alerts, to be resolved before a pull request can be merged. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-conversation-resolution-before-merging)."
{% endif %}

## Fixing an alert on your pull request

Anyone with push access to a pull request can fix a {% data variables.product.prodname_code_scanning %} alert that's identified on that pull request. If you commit changes to the pull request this triggers a new run of the pull request checks. If your changes fix the problem, the alert is closed and the annotation removed.

{% ifversion code-scanning-autofix %}

## Working with {% data variables.product.prodname_copilot_autofix_short %} suggestions for alerts on a pull request

{% data reusables.rai.code-scanning.autofix-note %}

{% data variables.product.prodname_copilot_autofix %} is an expansion of {% data variables.product.prodname_code_scanning %} that provides you with targeted recommendations to help you fix {% data variables.product.prodname_code_scanning %} alerts in pull requests. The potential fixes are generated automatically by large language models (LLMs) using data from the codebase, the pull request, and from {% data variables.product.prodname_codeql %} analysis.

![Screenshot of the check failure for a {% data variables.product.prodname_code_scanning %} alert in a pull request. Part of the "autofix" suggestion is outlined in dark orange.](/assets/images/help/code-scanning/alert+autofix.png)

### Generating {% data variables.product.prodname_copilot_autofix_short %} suggestions and publishing to a pull request

When {% data variables.product.prodname_copilot_autofix_short %} is enabled for a repository, alerts are displayed in pull requests as normal and information from any alerts found by {% data variables.product.prodname_codeql %} is automatically sent to the LLM for processing. When LLM analysis is complete, any results are published as comments on relevant alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

{% note %}

**Notes:**
* {% data variables.product.prodname_copilot_autofix_short %} supports a subset of {% data variables.product.prodname_codeql %} queries. For information about the availability of {% data variables.product.prodname_copilot_autofix_short %}, see the query tables linked from "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#query-lists-for-the-default-query-suites)."
* When analysis is complete, all relevant results are published to the pull request at once. If at least one alert in your pull request has an {% data variables.product.prodname_copilot_autofix_short %} suggestion, you should assume that the LLM has finished identifying potential fixes for your code.
* On alerts generated from queries that are not supported by {% data variables.product.prodname_copilot_autofix_short %}, you will see a note telling you that the query is not supported. If a suggestion for a supported query fails to generate, you will see a note on the alert prompting you to try pushing another commit or to contact support.

{% endnote %}

Usually, when you suggest changes to a pull request, your comment contains changes for a single file that is changed in the pull request. The following screenshot shows an {% data variables.product.prodname_copilot_autofix_short %} comment that suggests changes to the `index.js` file where the alert is displayed. Since the potential fix requires a new dependency on `escape-html`, the comment also suggests adding this dependency to the `package.json` file, even though the original pull request makes no changes to this file.

![Screenshot of the {% data variables.product.prodname_copilot_autofix_short %} suggestion with explanation and change in the current file. A suggested change in "package.json" is outlined in dark orange.](/assets/images/help/code-scanning/autofix-example.png)

### Assessing and committing an {% data variables.product.prodname_copilot_autofix_short %} suggestion

Each {% data variables.product.prodname_copilot_autofix_short %} suggestion demonstrates a potential solution for a {% data variables.product.prodname_code_scanning %} alert in your codebase. You must assess the suggested changes to determine whether they are a good solution for your codebase and to ensure that they maintain the intended behavior. For information about the limitations of {% data variables.product.prodname_copilot_autofix_short %} suggestions, see "[Limitations of suggestions](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning#limitations-of-suggestions)" and "[Mitigating the limitations of suggestions](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning#mitigating-the-limitations-of-suggestions)" in "About {% data variables.product.prodname_copilot_autofix_short %} for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}."

1. Click **Edit** to display the editing options and select your preferred method.
   * Under **Edit with {% data variables.product.prodname_cli %}**, follow the instructions for checking out the pull request locally and applying the suggested fix.
   * Select **Edit FILENAME** to edit the file directly on {% data variables.product.prodname_dotcom %} with the suggested fix applied.
1. Optionally, if you prefer to apply the fix on a local repository or branch, select the {% octicon "copy" aria-hidden="true" %} dropdown menu on the suggestion.
   * Select **View autofix patch** to display instructions for applying the suggested fix to any local repository or branch.
   * Select **Copy modified line LINE_NUMBER** to copy a specific line of the suggestion.
1. Test and modify the suggested fix as needed.
1. When you have finished testing your changes, commit the changes, and push them to your branch.
1. Pushing the changes to your branch will trigger all the usual tests for your pull request. Confirm that your unit tests still pass and that the {% data variables.product.prodname_code_scanning %} alert is now fixed.

### Dismissing a {% data variables.product.prodname_copilot_autofix_short %} suggestion

If you decide to reject a {% data variables.product.prodname_copilot_autofix_short %} suggestion, click **Dismiss suggestion** in the comment to dismiss the suggested fix.

{% endif %}

## Dismissing an alert on your pull request

An alternative way of closing an alert is to dismiss it. You can dismiss an alert if you don't think it needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} If you have write permission for the repository, a **Dismiss alert** button is available in code annotations and in the alerts summary. When you click **Dismiss alert** you will be prompted to choose a reason for closing the alert.
{% ifversion comment-dismissed-code-scanning-alert %}
![Screenshot of a check failure for code scanning. The "Dismiss alert" button is highlighted in dark orange. The "Dismiss alert" drop-down is shown.](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png)
{% else %}
![Choosing a reason for dismissing an alert.](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)
{% endif %}
{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

For more information about dismissing alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)."
