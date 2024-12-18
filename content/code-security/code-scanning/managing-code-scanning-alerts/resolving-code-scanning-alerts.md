---
title: Resolving code scanning alerts
shortTitle: Resolve alerts
intro: 'From the security view, you can view, fix, or dismiss alerts for potential vulnerabilities or errors in your project''s code.'
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
  - /code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
---

{% ifversion copilot-chat-ghas-alerts %}

## Asking {% data variables.product.prodname_copilot_chat %} about {% data variables.product.prodname_code_scanning %} alerts

With a {% data variables.product.prodname_copilot_enterprise %} license, you can ask {% data variables.product.prodname_copilot_chat_short %} for help to better understand security alerts, including {% data variables.product.prodname_code_scanning %} alerts, in repositories in your organization. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

{% ifversion code-scanning-autofix %}

## Generating suggested fixes for {% data variables.product.prodname_code_scanning %} alerts

{% data variables.product.prodname_copilot_autofix %} can generate fixes for alerts identified by {% data variables.product.prodname_code_scanning %} analysis. Most {% data variables.product.prodname_codeql %} alert types are supported and also some alerts from third-party tools. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

{% data reusables.rai.code-scanning.copilot-autofix-note %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Click the name of an alert.
1. If {% data variables.product.prodname_copilot_autofix_short %} can suggest a fix, at the top of the page, click **{% octicon "shield-check" aria-hidden="true" %} Generate fix**.
1. Once the suggested fix has been generated, at the bottom of the page, you can click **Create PR with fix** to automatically generate a pull request with the suggested fix.
A new branch is created from the default branch, the generated fix is committed and a draft pull request is created. You can test and edit the suggested fix as you would with any other fix.

You can also use the Autofix API for historical alerts endpoints to generate, get, and commit suggested fixes.

* [Create an autofix for a code scanning alert](/rest/code-scanning/code-scanning#create-an-autofix-for-a-code-scanning-alert)
* [Get the status of an autofix for a code scanning alert](/rest/code-scanning/code-scanning#get-the-status-of-an-autofix-for-a-code-scanning-alert)
* [Commit an autofix for a code scanning alert](/rest/code-scanning/code-scanning#commit-an-autofix-for-a-code-scanning-alert)

For information about the limitations of automatically generated fixes, see [Limitations of suggestions](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning#limitations-of-suggestions).

{% endif %}

## Fixing an alert {% ifversion code-scanning-autofix %}manually{% endif %}

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests).

You can use the free text search or the filters to display a subset of alerts and then in turn mark all matching alerts as closed.

Alerts may be fixed in one branch but not in another. You can use the "Branch" filter, on the summary of alerts, to check whether an alert is fixed in a particular branch.

![Screenshot of alerts view with the "Branch" dropdown menu expanded. The "Branch" button is outlined in dark orange.](/assets/images/help/repository/code-scanning-branch-filter.png)

{% data reusables.code-scanning.filter-non-default-branches %}

> [!NOTE]
> If you run {% data variables.product.prodname_code_scanning %} using multiple configurations, the same alert will sometimes be generated by more than one configuration. Unless you run all configurations regularly, you may see alerts that are fixed in one configuration but not in another. These stale configurations and alerts can be removed from a branch. For more information, see [Removing stale configurations and alerts from a branch](#removing-stale-configurations-and-alerts-from-a-branch).

## Dismissing alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert.

Dismissing an alert is a way of closing an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} You can dismiss alerts from {% data variables.product.prodname_code_scanning %} annotations in code, or from the summary list within the **Security** tab.

When you dismiss an alert:

* It's dismissed in all branches.
* The alert is removed from the number of current alerts for your project.
* The alert is moved to the "Closed" list in the summary of alerts, from where you can reopen it, if required.
* The reason why you closed the alert is recorded.
* Optionally, you can comment on a dismissal to record the context of an alert dismissal.
* Next time {% data variables.product.prodname_code_scanning %} runs, the same code won't generate an alert.

To dismiss alerts:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.
1. Review the alert, then click **Dismiss alert** and choose, or type, a reason for closing the alert.
   ![Screenshot of an alert check failure. The "Dismiss alert" button is highlighted in dark orange and the dismiss drop-down displayed. ](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png)
   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

## Re-opening dismissed alerts

If you dismiss an alert but later realize that you need to fix the alert, you can re-open it and fix the problem with the code. Display the list of closed alerts, find the alert, display it, and reopen it. You can then fix the alert in the same way as any other alert.

## Removing stale configurations and alerts from a branch

You may have multiple code scanning configurations on a single repository. When run, multiple configurations can generate the same alert. Additionally, if the configurations are run on different schedules, the alert statuses may become out-of-date for infrequent or stale configurations. For more information on alerts from multiple configurations, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alerts-from-multiple-configurations).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", click a {% data variables.product.prodname_code_scanning %} alert.
1. In the "Affected branches" section of the sidebar, click the desired branch.
1. In the "Configurations analyzing" dialog, review details of the configurations that reported this alert on the selected branch. To delete an unwanted configuration for the desired branch, click {% octicon "trash" aria-label="Delete configuration" %}.

   If you delete a configuration by mistake, click **Cancel** to avoid applying your changes.

   ![Screenshot of the "Configurations analyzing" modal. The "Delete configuration" icon is outlined in dark orange.](/assets/images/help/repository/code-scanning-remove-configuration.png)

1. Once you have removed any unwanted configurations and confirmed the expected configurations are displayed, click **Save changes**.

   If you save your changes after accidentally deleting a configuration, re-run the configuration to update the alert. For more information on re-running configurations that use {% data variables.product.prodname_actions %}, see [AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow).

> [!NOTE]
> * If you remove all {% data variables.product.prodname_code_scanning %} configurations for the default branch of your repository, the default branch will remain in the "Affected branches" sidebar, but it will not be analyzed by any configurations.
> * If you remove all {% data variables.product.prodname_code_scanning %} configurations for any branch other than the default branch of your repository, that branch will be removed from the "Affected branches" sidebar.

## Further reading

* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)
* [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)
* [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/about-integration-with-code-scanning)
