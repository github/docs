---
title: Use the tool status page for code scanning
shortTitle: Use tool status page
intro: 'View real-time tool status, identify configuration problems, and download reports to keep your {% data variables.product.prodname_code_scanning %} analysis running smoothly.'
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
product: '{% data reusables.gated-features.code-scanning %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-the-tool-status-page
  - /code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page
  - /code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/about-the-tool-status-page
topics:
  - Code Security
  - Code scanning
  - CodeQL
contentType: how-tos
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

The {% data variables.code-scanning.tool_status_page %} shows information about all of your code scanning tools and is a good starting point for debugging problems. For more information about what the tool is and the information it provides, see [AUTOTITLE](/code-security/concepts/code-scanning/tool-status-page).

## Viewing the {% data variables.code-scanning.tool_status_page %} for a repository

The {% data variables.product.prodname_code_scanning %} alerts page for each repository includes a tools banner with a summary of the health of your code scanning analysis, and access to the {% data variables.code-scanning.tool_status_page %} to explore your setup.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Click **Tool status** in the tools banner.
   ![Screenshot showing how to access the tool status page from a repository. The "Tool status" button is highlighted in a dark orange outline.](/assets/images/help/repository/code-scanning-tool-status-page-access.png)

## Using the {% data variables.code-scanning.tool_status_page %}

In the {% data variables.code-scanning.tool_status_page %}, you'll see a summary for one tool, highlighted in the sidebar. You can use the sidebar to view summaries for different tools.

![Screenshot showing the tool status page, with the {% data variables.product.prodname_codeql %} tool selected.](/assets/images/help/repository/code-scanning-tool-status-page.png)

For integrated tools such as {% data variables.product.prodname_codeql %}, you can see a percentage total of all the files most recently scanned in your repository, organized by programming language. You can also download detailed language reports in CSV format. See [Downloading details of the files analyzed](#downloading-details-of-the-files-analyzed).

## Accessing detailed information about tools

When you want to see more detailed information for the currently displayed tool, you can select a specific setup under "Setup types".

Under "Configurations" on the left of the screen, you can see information for each analysis run by this setup type, and any relevant error messages. To see detailed information about the most recent analysis run, select a configuration in the sidebar. You can download details of exactly which rules were run in that scan of the code and how many alerts were found by each rule. For more information, see [Downloading lists of rules used](#downloading-lists-of-rules-used).

![Screenshot showing detailed information about {% data variables.product.prodname_codeql %} in the tool status page.](/assets/images/help/repository/code-scanning-tool-status-page-detailed.png)

This view will also show error messages. For more information, see [Debugging using the tool status page](#debugging-using-the-tool-status-page).

### Downloading details of the files analyzed

For integrated tools such as {% data variables.product.prodname_codeql %}, you can download detailed reports from the {% data variables.code-scanning.tool_status_page %} in CSV format. This will show:

* Which configuration was used to scan each file
* The file path
* The programming language of the file
* Whether the file was successfully extracted

To download a report, select a tool you're interested in. Then on the top right of the page, click the **{% octicon "download" aria-label="Download language CSV report" %}** button.

### Downloading lists of rules used

You can download the list of rules that {% data variables.product.prodname_code_scanning %} is checking against, in CSV format. This will show:

* The configuration used
* The rule source
* The SARIF identifier
* How many alerts were found

To download a report, select a configuration you're interested in. Then click **{% octicon "kebab-horizontal" aria-label="Configuration menu" %}** on the top right of the page, and select **{% octicon "download" aria-hidden="true" aria-label="download" %} Download list of rules used**.

### Removing configurations

You can remove stale, duplicate, or unwanted configurations for the default branch of your repository.

To remove a configuration, select the configuration you want to delete. Then click **{% octicon "kebab-horizontal" aria-label="Configuration menu" %}** on the top right of the page, and select **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete configuration**. Once you have read the warning about alerts, to confirm the deletion, click the **Delete** button.

> [!NOTE]
> You can only use the {% data variables.code-scanning.tool_status_page %} to remove configurations for the default branch of a repository. For information about removing configurations from non-default branches, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolving-code-scanning-alerts#removing-stale-configurations-and-alerts-from-a-branch).

## Debugging using the tool status page

If you see that there is a problem with your analysis from the {% data variables.product.prodname_code_scanning %} alerts page, you can use the {% data variables.code-scanning.tool_status_page %} to identify the problem. For integrated tools, you can see specific error messages in the detailed information section, related to specific {% data variables.product.prodname_code_scanning %} tools. These error messages contain information about why the tool may not be performing as expected, and actions you can take. For more information about how to access this section of the {% data variables.code-scanning.tool_status_page %}, see [Accessing detailed information about tools](#accessing-detailed-information-about-tools).

For integrated tools such as {% data variables.product.prodname_codeql %}, you can also use file coverage information to improve your analysis. For more information about interpreting file coverage percentages, see [AUTOTITLE](/code-security/concepts/code-scanning/tool-status-page).

For more information, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/troubleshooting) and [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/troubleshooting/troubleshooting-sarif-uploads).
