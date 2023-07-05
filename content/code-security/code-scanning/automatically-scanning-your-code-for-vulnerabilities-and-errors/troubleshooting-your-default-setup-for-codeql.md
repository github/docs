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

{% ifversion code-scanning-without-workflow-310 %}

## A particular language is causing the default setup to fail

When you enable the default setup, all languages selected for analysis must be successfully analyzed, or the configuration of the default setup will fail. To enable the default setup when a language previously failed, you must reconfigure the default setup, deselecting all failing languages for analysis.

1. If the default setup fails, navigate to the main page of your repository, then click {% octicon "gear" aria-hidden="true" %} **Settings**.
1. In the "Security" section of the sidebar, click {% octicon "codescan" aria-hidden="true" %} **Code security and analysis**.
1. Navigate to the "{% data variables.product.prodname_code_scanning_caps %}" section. Then, in the error message reading "{% data variables.product.prodname_codeql %} default configuration **failed**", click **failed**.
1. In the "Jobs" section of the workflow run summary for the default setup, identify any failing jobs associated with specific languages. These jobs will be labeled {% octicon "x-circle-fill" aria-label="failed" %} **Analyze (LANGUAGE)**.
1. Once you have determined which language-specific jobs are failing, configure the default setup once more and deselect the failing languages for analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically)."

  Alternatively, if you would like to analyze every language in your repository, you can create an advanced {% data variables.product.prodname_code_scanning %} setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."
{% endif %}

## A pre-existing {% data variables.product.prodname_codeql %} workflow is disabled

If you see two workflows named **{% data variables.product.prodname_codeql %}**, one workflow may be a pre-existing {% data variables.product.prodname_codeql %} workflow file which has been disabled by default setup. Default setup overrides existing {% data variables.product.prodname_codeql %} setups by disabling any existing {% data variables.product.prodname_codeql %} workflows, and blocking any {% data variables.product.prodname_codeql %} analysis API uploads. This behavior stops you using {% data variables.product.prodname_actions %} minutes to run workflows for {% data variables.product.prodname_codeql %} advanced setup when only the results from default setup will be used. For more information about switching between advanced and default setups, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#results-are-different-than-expected)."

Optionally, if you are certain you no longer need the pre-existing workflow file, you can delete the file from your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/deleting-files-in-a-repository)."

{% data reusables.code-scanning.troubleshooting-multiple-configurations %}

## Enabling the default setup takes too long

If enabling your default setup is taking too long, try canceling the workflow run and restarting the setup. To restart your setup, navigate to the main page of your repository, then click {% octicon "play" aria-hidden="true" %} **Actions**. Click the **{% data variables.product.prodname_codeql %}** workflow run that's in progress, then click **Cancel workflow**. Once {% octicon "stop" aria-label="cancelled" %} appears beside the workflow run name, navigate back to the **Code security and analysis** settings and re-enable the default setup. If the default setup continues to stall, please contact {% data variables.contact.contact_support %} or try enabling the advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."

## Unclear what triggered a workflow run

If you don't know what triggered an analysis, look at the log for the last scan. For more information on viewing your last scan's log, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#viewing-the-logging-output-from-code-scanning)."
