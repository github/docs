---
title: Troubleshooting your default setup for CodeQL
shortTitle: Troubleshoot default setup
intro: 'If you''re having problems with the default {% data variables.product.prodname_code_scanning %} setup, you can troubleshoot by using these tips for resolving issues.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-without-workflow
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Troubleshooting
---

## Disabling a pre-existing {% data variables.product.prodname_codeql %} workflow

If you see two workflows named **{% data variables.product.prodname_codeql %}**, you need to disable the workflow triggered by your pre-existing {% data variables.product.prodname_codeql %} workflow file. Navigate to the main page of your repository, then click {% octicon "play" aria-label="The play icon" %} **Actions**. In the sidebar, find the two workflows named **{% data variables.product.prodname_codeql %}**, then open both workflows. Following the workflow title, look for a link to the workflow file. This file will likely be named `codeql.yml` or `codeql-analysis.yml`. Once you have found the {% data variables.product.prodname_codeql %} workflow with an associated workflow file, select {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} on the workflow summary page, then click **Disable workflow**. For more information about disabling workflows, see "[AUTOTITLE](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#disabling-a-workflow)."

## Using more {% data variables.product.prodname_actions %} minutes than expected

If a repository uses more {% data variables.product.prodname_actions %} minutes than expected, and you previously scanned the repository using the advanced setup for {% data variables.product.prodname_codeql %}, your pre-existing workflow file may be running in addition to the default {% data variables.product.prodname_codeql %} setup. For more information on disabling your pre-existing workflow file, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-your-default-setup-for-codeql#disabling-a-pre-existing-codeql-workflow)."

Optionally, if you are certain you no longer need the pre-existing workflow file, you can instead delete the file from your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/deleting-files-in-a-repository)."

## Enabling the default setup takes too long

If enabling your default setup is taking too long, try canceling the workflow run and restarting the setup. To restart your setup, navigate to the main page of your repository, then click {% octicon "play" aria-label="The play icon" %} **Actions**. Click the **{% data variables.product.prodname_codeql %}** workflow run that's in progress, then click **Cancel workflow**. Once {% octicon "stop" aria-label="The stop icon" %} appears beside the workflow run name, navigate back to the **Code security and analysis** settings and re-enable the default setup. If the default setup continues to stall, please contact {% data variables.contact.contact_support %} or try enabling the advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."

## Unclear what triggered a workflow run

If you don't know what triggered an analysis, look at the log for the last scan. For more information on viewing your last scan's log, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#viewing-the-logging-output-from-code-scanning)."
