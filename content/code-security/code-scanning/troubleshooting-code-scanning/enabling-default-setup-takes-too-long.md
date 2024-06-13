---
title: 'Enabling default setup takes too long'
intro: 'If you think that enabling default setup has stalled, you can restart the process.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---


When you enable default setup, a workflow is triggered with the automatically generated configuration. This run is used to test whether default setup works for all {% data variables.product.prodname_codeql %}-supported languages in the repository.

You can check on the progress of the test run for default setup on the **Actions** tab. If the run is taking too long, try canceling the workflow run and restarting the configuration process.

To restart your configuration, navigate to the main page of your repository, then click {% octicon "play" aria-hidden="true" %} **Actions**. Click the **{% data variables.product.prodname_codeql %}** workflow run that's in progress, then click **Cancel workflow**. Once {% octicon "stop" aria-label="cancelled" %} appears beside the workflow run name, navigate back to the **Code security and analysis** settings and re-enable default setup. If default setup continues to stall, please contact {% data variables.contact.contact_support %} or try enabling advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."
