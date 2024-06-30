---
title: Evaluating default setup for code scanning
shortTitle: Evaluate code scanning
intro: 'Learn how to assess how code scanning is working for you, and how you can customize your setup to best meet your code security needs.'
product: '{% data reusables.gated-features.code-scanning %}'
type: how_to
topics:
  - Advanced Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

When you first start using {% data variables.product.prodname_code_scanning %}, you'll likely use default setup. This guide describes how to evaluate how default setup for {% data variables.product.prodname_code_scanning %} is working for you, and what steps to take if something isn't working as you expect. This guide also describes how you can customize {% data variables.product.prodname_code_scanning %} if you find that you have a specific use case that your new configuration doesn't fit.

## Customizing {% data variables.product.prodname_code_scanning %}

When you first configure default setup, or after an initial analysis of your code, you can edit{% ifversion code-scanning-without-workflow-310 %} which languages default setup will analyze and{% endif %} the query suite run during analysis. The `default` query suite contains a set of queries that are carefully designed to look for the most relevant security issues, while minimizing false positive results. However, you can use the `security-extended` suite to run additional queries, which have slightly lower precision. For more information on the available query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites)."

For more information about customizing default setup, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup)."

### Using advanced setup

If you've found that you still need more granular control over {% data variables.product.prodname_code_scanning %}, you can use advanced setup. Advanced setup requires significantly more effort to configure, customize, and maintain, so we recommend enabling default setup first. For more information about advanced setup, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

## Evaluating {% data variables.product.prodname_code_scanning %} with the {% data variables.code-scanning.tool_status_page %}

The {% data variables.code-scanning.tool_status_page %} shows useful information about all of your {% data variables.product.prodname_code_scanning %} tools. You can use it to investigate whether individual tools are working for a repository, when files in the repository were first scanned and most recently scanned, and when upcoming scans are scheduled. It's also a useful starting point for debugging issues.

Using the {% data variables.code-scanning.tool_status_page %}, you can download the list of rules that {% data variables.product.prodname_code_scanning %} is checking against, in CSV format. For integrated tools like {% data variables.product.prodname_codeql %}, you can also see more detailed information, including a percentage of files scanned and specific error messages.

If you find that default setup doesn't scan all your files, you may need to customize {% data variables.product.prodname_code_scanning %}. For more information, see "[Customizing code scanning](#customizing-code-scanning)" in this article. Alternatively, or if something else isn't working as you expect, you may find our dedicated troubleshooting documentation useful. For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)".

For more detailed information about the {% data variables.code-scanning.tool_status_page %}, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page#viewing-the-tool-status-page-for-a-repository)."
