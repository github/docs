---
title: Managing code scanning alerts for your repository
shortTitle: Manage alerts
intro: 'From the security view, {% ifversion delete-code-scanning-alerts %}you can view, fix, dismiss, or delete alerts {% else %}you can view, fix, or dismiss alerts{% endif %} for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
---

{% data reusables.code-scanning.beta %}

## Viewing the alerts for a repository

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} annotations on pull requests. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

You need write permission to view a summary of all the alerts for a repository on the **Security** tab.

By default, the code scanning alerts page is filtered to show alerts for the default branch of the repository only.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Optionally, use the free text search box or the drop-down menus to filter alerts. For example, you can filter by the tool that was used to identify alerts.
{% data reusables.code-scanning.explore-alert %}
   {% data reusables.code-scanning.alert-default-branch %}
1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used.
   ![Screenshot of a {% data variables.product.prodname_code_scanning %} alert. The "Show paths" link is highlighted with a dark orange outline. The "Show more" link, described in the next step, is also highlighted.](/assets/images/help/repository/code-scanning-alert-details.png)

1. Alerts from {% data variables.product.prodname_codeql %} analysis include a description of the problem. Click **Show more** for guidance on how to fix your code.

For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

{% note %}

{% ifversion code-scanning-tool-status-page %}

**Note:** You can see information about when {% data variables.product.prodname_code_scanning %} analysis last ran on the tool status page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

{% else %}

**Note:** For {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_codeql %}, you can see information about the latest run in a header at the top of the list of {% data variables.product.prodname_code_scanning %} alerts for the repository.

For example, you can see when the last scan ran, the number of lines of code analyzed compared to the total number of lines of code in your repository, and the total number of alerts that were generated.

{% endif %}

{% endnote %}

## Filtering {% data variables.product.prodname_code_scanning %} alerts

You can filter the alerts shown in the {% data variables.product.prodname_code_scanning %} alerts view. This is useful if there are many alerts as you can focus on a particular type of alert. There are some predefined filters and a range of keywords that you can use to refine the list of alerts displayed.

When you select a keyword from either a drop-down list, or as you enter a keyword in the search field, only values with results are shown. This makes it easier to avoid setting filters that find no results.

![Screenshot of the search field on the {% data variables.product.prodname_code_scanning %} alerts view. The user has typed "branch:dependabot" into the field. The names of all valid branches with a name including "dependabot" are shown in a drop-down menu.](/assets/images/help/repository/code-scanning-filter-keywords.png)

If you enter multiple filters, the view will show alerts matching _all_ these filters. For example, `is:closed severity:high branch:main` will only display closed high-severity alerts that are present on the `main` branch. The exception is filters relating to refs (`ref`, `branch` and `pr`): `is:open branch:main branch:next` will show you open alerts from both the `main` branch and the `next` branch.

{% data reusables.code-scanning.filter-non-default-branches %}

{% ifversion fpt or ghes or ghec %}

You can prefix the `tag` filter with `-` to exclude results with that tag. For example, `-tag:style` only shows alerts that do not have the `style` tag{% ifversion codeql-ml-queries %} and `-tag:experimental` will omit all experimental alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-experimental-alerts)."{% else %}.{% endif %}

{% endif %}

### Restricting results to application code only

You can use the "Only alerts in application code" filter or `autofilter:true` keyword and value to restrict results to alerts in application code. For more information about the types of code that are automatically labeled as not application code, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-labels-for-alerts-that-are-not-found-in-application-code)."

{% ifversion fpt or ghes or ghec %}

## Searching {% data variables.product.prodname_code_scanning %} alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. {% data variables.product.product_name %} performs the free text search across:
- The name of the alert
- The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

| Supported search | Syntax example | Results |
| ---- | ---- | ---- |
| Single word search | `injection` | Returns all the alerts containing the word `injection` |
| Multiple word search | `sql injection` | Returns all the alerts containing `sql` or `injection` |
| Exact match search</br>(use double quotes) |  `"sql injection"` | Returns all the alerts containing the exact phrase `sql injection` |
| OR search | `sql OR injection` | Returns all the alerts containing `sql` or `injection` |
| AND search | `sql AND injection` | Returns all the alerts containing both words `sql` and `injection` |

{% tip %}

**Tips:**
- The multiple word search is equivalent to an OR search.
- The AND search will return results where the search terms are found _anywhere_, in any order in the alert name or details.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box.
   ![Screenshot of the search field on the {% data variables.product.prodname_code_scanning %} alerts view. The field includes the pre-defined filters "is: open branch:main". The free text of "sql or injection" is outlined in dark orange.](/assets/images/help/repository/code-scanning-search-alerts.png)
1. Press <kbd>return</kbd>. The alert listing will contain the open {% data variables.product.prodname_code_scanning %} alerts matching your search criteria.

{% endif %}

{% ifversion code-scanning-task-lists %}

## Tracking {% data variables.product.prodname_code_scanning %} alerts in issues

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
{% data reusables.code-scanning.github-issues-integration %}
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

If you have write permission for a repository, you can view fixed alerts by viewing the summary of alerts and clicking **Closed**. For more information, see "[Viewing the alerts for a repository](#viewing-the-alerts-for-a-repository)." The "Closed" list shows fixed alerts and alerts that users have dismissed.

You can use the free text search or the filters to display a subset of alerts and then in turn mark all matching alerts as closed.

Alerts may be fixed in one branch but not in another. You can use the "Branch" filter, on the summary of alerts, to check whether an alert is fixed in a particular branch.

![Screenshot of the search field on the {% data variables.product.prodname_code_scanning %}, with the "Branch" dropdown menu expanded. The "Branch" button is outlined in dark orange.](/assets/images/help/repository/code-scanning-branch-filter.png)

{% data reusables.code-scanning.filter-non-default-branches %}

{% note %}

**Note:**
{%- ifversion remove-code-scanning-configurations %}
If you run {% data variables.product.prodname_code_scanning %} using multiple configurations, the same alert will sometimes be generated by more than one configuration. Unless you run all configurations regularly, you may see alerts that are fixed in one configuration but not in another. These stale configurations and alerts can be removed from a branch. For more information, see "[Removing stale configurations and alerts from a branch](#removing-stale-configurations-and-alerts-from-a-branch)."
{% else %}
If you run {% data variables.product.prodname_code_scanning %} using multiple configurations, then sometimes an alert will have multiple analysis origins. Unless you run all configurations regularly, you may see alerts that are fixed in one analysis origin but not in another. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-analysis-origins)."
{% endif %}
{% endnote %}

## Dismissing {% ifversion delete-code-scanning-alerts %}or deleting{% endif %} alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert. {% ifversion delete-code-scanning-alerts %}Alternatively, if you have admin permissions for the repository, you can delete alerts. Deleting alerts is useful in situations where you have set up a {% data variables.product.prodname_code_scanning %} tool and then decided to remove it, or where you have configured {% data variables.product.prodname_codeql %} analysis with a larger set of queries than you want to continue using, and you've then removed some queries from the tool. In both cases, deleting alerts allows you to clean up your {% data variables.product.prodname_code_scanning %} results. You can delete alerts from the summary list within the **Security** tab.{% endif %}

Dismissing an alert is a way of closing an alert that you don't think needs to be fixed. {% data reusables.code-scanning.close-alert-examples %} You can dismiss alerts from {% data variables.product.prodname_code_scanning %} annotations in code, or from the summary list within the **Security** tab.

When you dismiss an alert:

- It's dismissed in all branches.
- The alert is removed from the number of current alerts for your project.
- The alert is moved to the "Closed" list in the summary of alerts, from where you can reopen it, if required.
- The reason why you closed the alert is recorded.{% ifversion comment-dismissed-code-scanning-alert %}
- Optionally, you can comment on a dismissal to record the context of an alert dismissal.{% endif %}
- Next time {% data variables.product.prodname_code_scanning %} runs, the same code won't generate an alert.

{% ifversion delete-code-scanning-alerts %}When you delete an alert:

- It's deleted in all branches.
- The alert is removed from the number of current alerts for your project.
- It is _not_ added to the "Closed" list in the summary of alerts.
- If the code that generated the alert stays the same, and the same {% data variables.product.prodname_code_scanning %} tool runs again without any configuration changes, the alert will be shown again in your analysis results.{% endif %}

To dismiss {% ifversion delete-code-scanning-alerts %}or delete{% endif %} alerts:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. If you have admin permissions for the repository, and you want to delete alerts for this {% data variables.product.prodname_code_scanning %} tool, select some or all of the check boxes and click **Delete**.

   Optionally, you can use the free text search or the filters to display a subset of alerts and then delete all matching alerts at once. For example, if you have removed a query from {% data variables.product.prodname_codeql %} analysis, you can use the "Rule" filter to list just the alerts for that query and then select and delete all of those alerts.
{% endif %}
1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.
{%- ifversion comment-dismissed-code-scanning-alert %}
1. Review the alert, then click **Dismiss alert** and choose, or type, a reason for closing the alert.
   ![Screenshot of the check failure for a code scanning alert in a pull request. The "Dismiss alert" button in the check failure is highlighted in dark orange. The "Dismiss alert" drop-down is displayed. ](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png)
{%- else %}
1. Review the alert, then click **Dismiss** and choose a reason for closing the alert.
   ![Choosing a reason for dismissing an alert.](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)
{%- endif %}
   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

{% ifversion remove-code-scanning-configurations %}

## Removing stale configurations and alerts from a branch

You may have multiple code scanning configurations on a single repository. When run, multiple configurations can generate the same alert. Additionally, if the configurations are run on different schedules, the alert statuses may become out-of-date for infrequent or stale configurations. For more information on alerts from multiple configurations, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alerts-from-multiple-configurations)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", click a {% data variables.product.prodname_code_scanning %} alert.
1. In the "Affected branches" section of the sidebar, click the desired branch.
1. In the "Configurations analyzing" dialog, review details of the configurations that reported this alert on the selected branch. To delete an unwanted configuration for the desired branch, click {% octicon "trash" aria-label="Delete configuration" %}.

   If you delete a configuration by mistake, click **Cancel** to avoid applying your changes.

   ![Screenshot of the "Configurations analyzing" modal. The "Delete configuration" icon is outlined in dark orange.](/assets/images/help/repository/code-scanning-remove-configuration.png)

1. Once you have removed any unwanted configurations and confirmed the expected configurations are displayed, click **Save changes**.

   If you save your changes after accidentally deleting a configuration, re-run the configuration to update the alert. For more information on re-running configurations that use {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)."

{% note %}

**Notes:**
- If you remove all {% data variables.product.prodname_code_scanning %} configurations for the default branch of your repository, the default branch will remain in the "Affected branches" sidebar, but it will not be analyzed by any configurations.
- If you remove all {% data variables.product.prodname_code_scanning %} configurations for any branch other than the default branch of your repository, that branch will be removed from the "Affected branches" sidebar.

{% endnote %}

{% endif %}

## Auditing responses to {% data variables.product.prodname_code_scanning %} alerts

{% data reusables.code-scanning.audit-code-scanning-events %}

## Further reading

- "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)"{% ifversion code-scanning-without-workflow %}
- "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)"{% else %}
- "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)"{% endif %}
- "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/about-integration-with-code-scanning)"
