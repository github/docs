---
title: Assessing code scanning alerts for your repository
shortTitle: Assess alerts
intro: 'From the security view, you can explore and evaluate alerts for potential vulnerabilities or errors in your project''s code.'
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
---

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} annotations on pull requests. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests).

## Viewing the alerts for a repository

You need write permission to view a summary of all the alerts for a repository on the **Security** tab.

By default, the {% data variables.product.prodname_code_scanning %} alerts page is filtered to show alerts for the default branch of the repository only.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Optionally, use the free text search box or the dropdown menus to filter alerts. For example, you can filter by the tool that was used to identify alerts.

   ![Screenshot of {% data variables.product.prodname_code_scanning %} alerts page. The search box and filter dropdown menus are outlined in dark orange.](/assets/images/help/repository/filter-code-scanning-alerts.png)

{% data reusables.code-scanning.explore-alert %}
   {% data reusables.code-scanning.alert-default-branch %}
1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used.

   ![Screenshot of a {% data variables.product.prodname_code_scanning %} alert. The "Show paths" and "Show more" links are outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-details.png)

1. Alerts from {% data variables.product.prodname_codeql %} analysis include a description of the problem. Click **Show more** for guidance on how to fix your code.

For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts).

> [!NOTE]
> You can see information about when {% data variables.product.prodname_code_scanning %} analysis last ran on the tool status page. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page).

{% ifversion copilot-chat-ghas-alerts %}

## Asking {% data variables.product.prodname_copilot_chat %} about {% data variables.product.prodname_code_scanning %} alerts

With a {% data variables.product.prodname_copilot_enterprise %} license, you can ask {% data variables.product.prodname_copilot_chat_short %} for help to better understand security alerts, including {% data variables.product.prodname_code_scanning %} alerts, in repositories in your organization. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

{% ifversion security-overview-org-codeql-pr-alerts %}

## Viewing metrics for {% data variables.product.prodname_codeql %} pull request alerts for an organization

For {% data variables.product.prodname_code_scanning %} alerts from {% data variables.product.prodname_codeql %} analysis, you can use security overview to see how {% data variables.product.prodname_codeql %} is performing in pull requests in repositories where you have write access across your organization, and to identify repositories where you may need to take action. For more information, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-pull-request-alerts).

{% endif %}

## Filtering {% data variables.product.prodname_code_scanning %} alerts

You can filter the alerts shown in the {% data variables.product.prodname_code_scanning %} alerts view. This is useful if there are many alerts as you can focus on a particular type of alert. There are some predefined filters and a range of keywords that you can use to refine the list of alerts displayed.

When you select a keyword from either a drop-down list, or as you enter a keyword in the search field, only values with results are shown. This makes it easier to avoid setting filters that find no results.

![Screenshot of search field in alerts view. The field has "branch:dependabot" and all valid branches with a matching name are shown.](/assets/images/help/repository/code-scanning-filter-keywords.png)

If you enter multiple filters, the view will show alerts matching _all_ these filters. For example, `is:closed severity:high branch:main` will only display closed high-severity alerts that are present on the `main` branch. The exception is filters relating to refs (`ref`, `branch` and `pr`): `is:open branch:main branch:next` will show you open alerts from both the `main` branch and the `next` branch.

{% data reusables.code-scanning.filter-non-default-branches %}

You can prefix the `tag` filter with `-` to exclude results with that tag. For example, `-tag:style` only shows alerts that do not have the `style` tag.

### Restricting results to application code only

You can use the "Only alerts in application code" filter or `autofilter:true` keyword and value to restrict results to alerts in application code. For more information about the types of code that are automatically labeled as not application code, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-labels-for-alerts-that-are-not-found-in-application-code).

## Searching {% data variables.product.prodname_code_scanning %} alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. {% data variables.product.github %} performs the free text search across:
* The name of the alert
* The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

| Supported search | Syntax example | Results |
| ---- | ---- | ---- |
| Single word search | `injection` | Returns all the alerts containing the word `injection` |
| Multiple word search | `sql injection` | Returns all the alerts containing `sql` or `injection` |
| Exact match search</br>(use double quotes) |  `"sql injection"` | Returns all the alerts containing the exact phrase `sql injection` |
| OR search | `sql OR injection` | Returns all the alerts containing `sql` or `injection` |
| AND search | `sql AND injection` | Returns all the alerts containing both words `sql` and `injection` |

> [!TIP]
> * The multiple word search is equivalent to an OR search.
> * The AND search will return results where the search terms are found _anywhere_, in any order in the alert name or details.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box.
   ![Screenshot of search field in alerts view. The field has pre-defined filters "is: open branch:main" and free text of "sql or injection" highlighted.](/assets/images/help/repository/code-scanning-search-alerts.png)
1. Press <kbd>return</kbd>. The alert listing will contain the open {% data variables.product.prodname_code_scanning %} alerts matching your search criteria.

{% ifversion code-scanning-task-lists %}

## Tracking {% data variables.product.prodname_code_scanning %} alerts in issues

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

To quickly create an issue to track the status of a specific {% data variables.product.prodname_code_scanning %} alert, on the {% data variables.product.prodname_code_scanning %} alerts page, click the alert you would like to track. On the detailed page for that alert, click **Create issue**. Customize the autogenerated issue as desired, then click **Submit new issue**.

Alternatively, to track a {% data variables.product.prodname_code_scanning %} alert in an existing issue, add the URL for the alert as a task list item in the issue. For more information about task lists, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists).

{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Auditing responses to {% data variables.product.prodname_code_scanning %} alerts

{% data reusables.code-scanning.audit-code-scanning-events %}

## Further reading

* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)
* [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)
* [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/about-integration-with-code-scanning)
