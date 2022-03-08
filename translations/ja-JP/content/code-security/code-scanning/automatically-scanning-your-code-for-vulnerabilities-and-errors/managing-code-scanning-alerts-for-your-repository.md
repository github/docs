---
title: Managing code scanning alerts for your repository
shortTitle: Manage alerts
intro: 'From the security view, you can view, fix, dismiss, or delete alerts for potential vulnerabilities or errors in your project''s code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
---

{% data reusables.code-scanning.beta %}

## Viewing the alerts for a repository

Anyone with read permission for a repository can see {% data variables.product.prodname_code_scanning %} annotations on pull requests. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."

You need write permission to view a summary of all the alerts for a repository on the **Security** tab.

By default, the code scanning alerts page is filtered to show alerts for the default branch of the repository only.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
1. Optionally, use the free text search box or the drop-down menus to filter alerts. For example, you can filter by the tool that was used to identify alerts.
   ![Filter by tool](/assets/images/help/repository/code-scanning-filter-by-tool.png){% endif %}
{% data reusables.code-scanning.explore-alert %}
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
   ![Summary of alerts](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
   ![List of alerts from {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Optionally, if the alert highlights a problem with data flow, click **Show paths** to display the path from the data source to the sink where it's used.
   ![The "Show paths" link on an alert](/assets/images/help/repository/code-scanning-show-paths.png)
1. Alerts from {% data variables.product.prodname_codeql %} analysis include a description of the problem. Click **Show more** for guidance on how to fix your code.
   ![Details for an alert](/assets/images/help/repository/code-scanning-alert-details.png)

For more information, see "[About {% data variables.product.prodname_code_scanning %} alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)."

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
{% note %}

**Note:** For {% data variables.product.prodname_code_scanning %} analysis with {% data variables.product.prodname_codeql %}, you can see information about the latest run in a header at the top of the list of {% data variables.product.prodname_code_scanning %} alerts for the repository. 

For example, you can see when the last scan ran, the number of lines of code analyzed compared to the total number of lines of code in your repository, and the total number of alerts that were generated.
  ![UI banner](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}
{% endif %}

## Filtering {% data variables.product.prodname_code_scanning %} alerts

You can filter the alerts shown in the {% data variables.product.prodname_code_scanning %} alerts view. This is useful if there are many alerts as you can focus on a particular type of alert. There are some predefined filters and a range of keywords that you can use to refine the list of alerts displayed. 

- To use a predefined filter, click **Filters**, or a filter shown in the header of the list of alerts, and choose a filter from the drop-down list.
  {% ifversion fpt or ghes or ghec %}![Predefined filters](/assets/images/help/repository/code-scanning-predefined-filters.png)
  {% else %}![Predefined filters](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- To use a keyword, either type directly in the filters text box, or:
  1. Click in the filters text box to show a list of all available filter keywords.
  2. Click the keyword you want to use and then choose a value from the drop-down list.
  ![Keyword filters list](/assets/images/help/repository/code-scanning-filter-keywords.png)

The benefit of using keyword filters is that only values with results are shown in the drop-down lists. This makes it easy to avoid setting filters that find no results.

If you enter multiple filters, the view will show alerts matching _all_ these filters. For example, `is:closed severity:high branch:main` will only display closed high-severity alerts that are present on the `main` branch. The exception is filters relating to refs (`ref`, `branch` and `pr`): `is:open branch:main branch:next` will show you open alerts from both the `main` branch and the `next` branch.

{% ifversion fpt or ghes > 3.3 or ghec %}

You can prefix the `tag` filter with `-` to exclude results with that tag. For example, `-tag:style` only shows alerts that do not have the `style` tag{% if codeql-ml-queries %} and `-tag:experimental` will omit all experimental alerts. For more information, see "[About {% data variables.product.prodname_code_scanning %} alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."{% else %}.{% endif %}

{% endif %}

### Restricting results to application code only

You can use the "Only alerts in application code" filter or `autofilter:true` keyword and value to restrict results to alerts in application code. See "[About labels for alerts not in application code](#about-labels-for-alerts-that-are-not-found-in-application-code)" above for more information about the types of code that are not application code.

{% ifversion fpt or ghes > 3.1 or ghec %}

## Searching {% data variables.product.prodname_code_scanning %} alerts

You can search the list of alerts. This is useful if there is a large number of alerts in your repository, or if you don't know the exact name for an alert for example. {% data variables.product.product_name %} performs the free text search across:
- The name of the alert
- The alert description
- The alert details (this also includes the information hidden from view by default in the **Show more** collapsible section)

 ![The alert information used in searches](/assets/images/help/repository/code-scanning-free-text-search-areas.png)

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
- The AND search will return results where the search terms are found _anywhere_, in any order in the alert name, description, or details.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. To the right of the **Filters** drop-down menus, type the keywords to search for in the free text search box.
  ![The free text search box](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Press <kbd>return</kbd>. The alert listing will contain the open {% data variables.product.prodname_code_scanning %} alerts matching your search criteria.

{% endif %}

{% if code-scanning-task-lists %}
## Tracking {% data variables.product.prodname_code_scanning %} alerts in issues

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
{% data reusables.code-scanning.github-issues-integration %}
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Fixing an alert

Anyone with write permission for a repository can fix an alert by committing a correction to the code. If the repository has {% data variables.product.prodname_code_scanning %} scheduled to run on pull requests, it's best to raise a pull request with your correction. This will trigger {% data variables.product.prodname_code_scanning %} analysis of the changes and test that your fix doesn't introduce any new problems. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" and "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."

If you have write permission for a repository, you can view fixed alerts by viewing the summary of alerts and clicking **Closed**. For more information, see "[Viewing the alerts for a repository](#viewing-the-alerts-for-a-repository)." The "Closed" list shows fixed alerts and alerts that users have dismissed.

You can use{% ifversion fpt or ghes > 3.1 or ghae or ghec %} the free text search or{% endif %} the filters to display a subset of alerts and then in turn mark all matching alerts as closed. 

Alerts may be fixed in one branch but not in another. You can use the "Branch" drop-down menu, on the summary of alerts, to check whether an alert is fixed in a particular branch.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
![Filtering alerts by branch](/assets/images/help/repository/code-scanning-branch-filter.png)
{% else %}
![Filtering alerts by branch](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-filter.png)
{% endif %}

## Dismissing or deleting alerts

There are two ways of closing an alert. You can fix the problem in the code, or you can dismiss the alert. Alternatively, if you have admin permissions for the repository, you can delete alerts. Deleting alerts is useful in situations where you have set up a {% data variables.product.prodname_code_scanning %} tool and then decided to remove it, or where you have configured {% data variables.product.prodname_codeql %} analysis with a larger set of queries than you want to continue using, and you've then removed some queries from the tool. In both cases, deleting alerts allows you to clean up your {% data variables.product.prodname_code_scanning %} results. You can delete alerts from the summary list within the **Security** tab.

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

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. If you have admin permissions for the repository, and you want to delete alerts for this {% data variables.product.prodname_code_scanning %} tool, select some or all of the check boxes and click **Delete**.

   ![Deleting alerts](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Optionally, you can use{% ifversion fpt or ghes > 3.1 or ghae or ghec %} the free text search or{% endif %} the filters to display a subset of alerts and then delete all matching alerts at once. For example, if you have removed a query from {% data variables.product.prodname_codeql %} analysis, you can use the "Rule" filter to list just the alerts for that query and then select and delete all of those alerts.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
  ![Filter alerts by rule](/assets/images/help/repository/code-scanning-filter-by-rule.png)
{% else %}
  ![Filter alerts by rule](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png)
{% endif %}

1. If you want to dismiss an alert, it's important to explore the alert first, so that you can choose the correct dismissal reason. Click the alert you'd like to explore.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
   ![Open an alert from the summary list](/assets/images/help/repository/code-scanning-click-alert.png)
{% else %}
  ![List of alerts from {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.1/help/repository/code-scanning-click-alert.png)
{% endif %}
1. Review the alert, then click **Dismiss** and choose a reason for closing the alert.
   ![Choosing a reason for dismissing an alert](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Dismissing multiple alerts at once

If a project has multiple alerts that you want to dismiss for the same reason, you can bulk dismiss them from the summary of alerts. Typically, you'll want to filter the list and then dismiss all of the matching alerts. For example, you might want to dismiss all of the current alerts in the project that have been tagged for a particular Common Weakness Enumeration (CWE) vulnerability.

## Further reading

- "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[About integration with {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning)"
