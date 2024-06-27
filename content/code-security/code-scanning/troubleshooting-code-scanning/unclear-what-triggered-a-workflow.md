---
title: Unclear what triggered a workflow run
shortTitle: Unclear what triggered a workflow
intro: 'If you don''t know what triggered an analysis, investigate the {% data variables.code-scanning.tool_status_page %} or look at the log for the last scan.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/unclear-what-triggered-a-workflow-run
---

The {% data variables.code-scanning.tool_status_page %} shows you how well {% data variables.product.prodname_code_scanning %} tools are working for a repository, when files in the repository were first scanned and most recently scanned, and when scans are scheduled. For integrated tools like {% data variables.product.prodname_codeql %}, you can also see more detailed information, including a percentage of files scanned and specific error messages. For more information about the {% data variables.code-scanning.tool_status_page %}, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

You can also view the logging output from {% data variables.product.prodname_code_scanning %} runs using {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} or third-party). For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/viewing-code-scanning-logs#viewing-the-logging-output-from-code-scanning)."
