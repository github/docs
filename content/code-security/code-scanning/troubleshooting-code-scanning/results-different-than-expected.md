---
title: Results are different than expected
shortTitle: Results different than expected
intro: 'If your {% data variables.product.prodname_code_scanning %} results are different than you expected, you can check which configurations are active.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/results-are-different-than-expected
---

If your {% data variables.product.prodname_code_scanning %} results are different than you expected, you may have both default and advanced setup configured for your repository. When you enable default setup, this disables the existing {% data variables.product.prodname_codeql %} workflow file and blocks any {% data variables.product.prodname_codeql %} API analysis from uploading results.

To check if default setup is enabled, navigate to the main page of the repository, then click {% octicon "gear" aria-hidden="true" %} **Settings**. In the "Security" section of the sidebar, click {% octicon "codescan" aria-hidden="true" %} **Code security and analysis**. In the "{% data variables.product.prodname_code_scanning_caps %}" section of the page, next to "{% data variables.product.prodname_codeql %} analysis", click {% octicon "kebab-horizontal" aria-label="Menu" %}. If there is a {% octicon "workflow" aria-hidden="true" %} **Switch to advanced** option, you are currently using default setup.

If you want to return to using advanced setup and get {% data variables.product.prodname_code_scanning %} results from your custom workflow file, click {% octicon "stop" aria-hidden="true" %} **Disable {% data variables.product.prodname_codeql %}** to disable default setup. Then you should re-enable your pre-existing workflows to start triggering and uploading results from advanced setup. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

{% ifversion remove-code-scanning-configurations %}
{% data reusables.code-scanning.troubleshooting-multiple-configurations %}
{% endif %}
