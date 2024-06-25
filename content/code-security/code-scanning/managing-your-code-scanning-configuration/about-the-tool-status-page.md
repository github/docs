---
title: About the tool status page for code scanning
shortTitle: Code scanning tool status
allowTitleToDifferFromFilename: true
intro: The {% data variables.code-scanning.tool_status_page %} shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the {% data variables.code-scanning.tool_status_page %} is a good starting point for debugging problems.
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-the-tool-status-page
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About the {% data variables.code-scanning.tool_status_page %}

The {% data variables.code-scanning.tool_status_page %} shows useful information about all of your {% data variables.product.prodname_code_scanning %} tools. If {% data variables.product.prodname_code_scanning %} is not working as you'd expect, the {% data variables.code-scanning.tool_status_page %} is a good starting point for debugging problems.

Using the {% data variables.code-scanning.tool_status_page %}, you can see how well code scanning tools are working for a repository, when files in the repository were first scanned and most recently scanned, and when scans are scheduled. For integrated tools like {% data variables.product.prodname_codeql %}, you can also see more detailed information, including a percentage of files scanned and specific error messages.

You can also see the rules your code was checked against by each configuration of a {% data variables.product.prodname_code_scanning %} tool and download a summary of the results.

{% note %}

**Note:** The {% data variables.code-scanning.tool_status_page %} shows how tools are working at the repository level, not the organization level. The tool status is only shown for the default branch of the repository for which that tool is configured.

{% endnote %}

## Viewing the {% data variables.code-scanning.tool_status_page %} for a repository

The code scanning alerts page for each repository includes a tools banner with a summary of the health of your code scanning analysis, and access to the {% data variables.code-scanning.tool_status_page %} to explore your setup.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Click **Tool status** in the tools banner.
   ![Screenshot showing how to access the tool status page from a repository. The "Tool status" button is highlighted in a dark orange outline.](/assets/images/help/repository/code-scanning-tool-status-page-access.png)

## Using the {% data variables.code-scanning.tool_status_page %}

In the {% data variables.code-scanning.tool_status_page %}, you'll see a summary for one tool, highlighted in the sidebar. You can use the sidebar to view summaries for different tools.

![Screenshot showing the tool status page, with the CodeQL tool selected.](/assets/images/help/repository/code-scanning-tool-status-page.png)

For integrated tools such as {% data variables.product.prodname_codeql %}, you can see a percentage total of all the files most recently scanned in your repository, organized by programming language. For information about what files are considered to have been scanned by {% data variables.product.prodname_codeql %}, see "[How {% data variables.product.prodname_codeql %} defines scanned files](#how-codeql-defines-scanned-files)." You can also download detailed language reports in CSV format. For more information, see "[Downloading details of the files analyzed](#downloading-details-of-the-files-analyzed)."

The three possible tool statuses are: all configurations are working, some configurations need attention, and some configurations are not working.

### Accessing detailed information about tools

When you want to see more detailed information for the currently displayed tool, you can select a specific setup under "Setup types".

Under "Configurations" on the left of the screen, you can see information for each analysis run by this setup type, and any relevant error messages. To see detailed information about the most recent analysis run, select a configuration in the sidebar. You can download details of exactly which rules were run in that scan of the code and how many alerts were found by each rule. For more information, see "[Downloading lists of rules used](#downloading-lists-of-rules-used)."

![Screenshot showing detailed information about CodeQL in the tool status page.](/assets/images/help/repository/code-scanning-tool-status-page-detailed.png)

This view will also show error messages. For more information, see "[Debugging using the tool status page](#debugging-using-the-tool-status-page)."

### How {% data variables.product.prodname_codeql %} defines scanned files

A file is reported as scanned by {% data variables.product.prodname_codeql %} if some of the lines of code in that file were processed. If you're using a standard configuration of the {% data variables.product.prodname_codeql %} action, the scanned files shown in the {% data variables.code-scanning.tool_status_page %} will include source code files for all languages that {% data variables.product.prodname_codeql %} can analyze. If you use advanced setup, you can optionally define which files for interpreted languages should be scanned using the `paths` and `paths-ignore` configuration properties. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

For compiled languages, the {% data variables.code-scanning.tool_status_page %} reports files that were present before running autobuild or any manual build steps. This means that files generated during the build process are not shown in the {% data variables.code-scanning.tool_status_page %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-autobuild-for-codeql)."

The tool status page will calculate the percentage of files that were scanned by {% data variables.product.prodname_codeql %} for each language supported by {% data variables.product.prodname_codeql %}. This percentage respects any files excluded by the `paths` and `paths-ignore` configuration properties.

### Downloading details of the files analyzed

For integrated tools such as {% data variables.product.prodname_codeql %}, you can download detailed reports from the {% data variables.code-scanning.tool_status_page %} in CSV format. This will show:

* Which configuration was used to scan each file.
* The file path.
* The programming language of the file.
* Whether the file was successfully extracted.

To download a report, select a tool you're interested in. Then on the top right of the page, click the **{% octicon "download" aria-label="Download language CSV report" %}** button.

### Downloading lists of rules used

You can download the list of rules that {% data variables.product.prodname_code_scanning %} is checking against, in CSV format. This will show:

* The configuration used.
* The rule source.
* The SARIF identifier.
* How many alerts were found.

To download a report, select a configuration you're interested in. Then click **{% octicon "kebab-horizontal" aria-label="Configuration menu"  %}** on the top right of the page, and select **{% octicon "download" aria-hidden="true"  %} Download list of rules used**.

### Removing configurations

You can remove stale, duplicate, or unwanted configurations for the default branch of your repository.

To remove a configuration, select the configuration you want to delete. Then click **{% octicon "kebab-horizontal" aria-label="Configuration menu"  %}** on the top right of the page, and select **{% octicon "trash" aria-hidden="true"  %} Delete configuration**. Once you have read the warning about alerts, to confirm the deletion, click the **Delete** button.

{% note %}

**Note:** You can only use the {% data variables.code-scanning.tool_status_page %} to remove configurations for the default branch of a repository. For information about removing configurations from non-default branches, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#removing-stale-configurations-and-alerts-from-a-branch)."

{% endnote %}

## Debugging using the {% data variables.code-scanning.tool_status_page %}

If you see that there is a problem with your analysis from the {% data variables.product.prodname_code_scanning %} alerts page, you can use the {% data variables.code-scanning.tool_status_page %} to identify the problem. For integrated tools, you can see specific error messages in the detailed information section, related to specific {% data variables.product.prodname_code_scanning %} tools. These error messages contain information about why the tool may not be performing as expected, and actions you can take. For more information about how to access this section of the {% data variables.code-scanning.tool_status_page %}, see "[Accessing detailed information about tools](#accessing-detailed-information-about-tools)."

For integrated tools such as {% data variables.product.prodname_codeql %}, you can also use file coverage information to improve your analysis. For each language displayed on the {% data variables.code-scanning.tool_status_page %}:

* If the language has a high scanned percentage, this shows that code scanning is scanning that language as expected.
* If the language has a low scanned percentage, you may wish to investigate diagnostic output produced by {% data variables.product.prodname_codeql %} for that language: for more information see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/codeql-scanned-fewer-lines-than-expected)."
* If the language has a scanned percentage of zero, you may have source code in your repository written in languages supported by {% data variables.product.prodname_codeql %} but not currently being analyzed with {% data variables.product.prodname_codeql %}. In this case, you may wish to update your setup to start analyzing these additional languages. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed)."

{% note %}

**Note:** If you have set up {% data variables.product.prodname_codeql %} using advanced setup and then set up default setup on the same repository, the {% data variables.code-scanning.tool_status_page %} will only show default setup.

{% endnote %}

For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/troubleshooting-sarif-uploads)."
