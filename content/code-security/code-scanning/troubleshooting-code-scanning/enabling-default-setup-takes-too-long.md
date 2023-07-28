---
title: 'Enabling default setup takes too long'
intro: 'If you think that enabling default setup has stalled, you can restart the process.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-without-workflow
---

{% data reusables.code-scanning.beta %}

If enabling your default setup is taking too long, try canceling the workflow run and restarting the configuration process.

To restart your configuration, navigate to the main page of your repository, then click {% octicon "play" aria-hidden="true" %} **Actions**. Click the **{% data variables.product.prodname_codeql %}** workflow run that's in progress, then click **Cancel workflow**. Once {% octicon "stop" aria-label="cancelled" %} appears beside the workflow run name, navigate back to the **Code security and analysis** settings and re-enable default setup. If default setup continues to stall, please contact {% data variables.contact.contact_support %} or try enabling advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning)."