---
title: 'A particular language is causing default setup to fail'
shortTitle: 'Default setup fails with a language'
intro: 'When you enable default setup, all languages selected for analysis must be successfully analyzed, or the configuration of default setup will fail.'
allowTitleToDifferFromFilename: true
versions:
  feature: code-scanning-without-workflow-310
---

To enable default setup when a language previously failed, you must reconfigure default setup, deselecting all failing languages for analysis.

1. If default setup fails, navigate to the main page of your repository, then click {% octicon "gear" aria-hidden="true" %} **Settings**.
1. In the "Security" section of the sidebar, click {% octicon "codescan" aria-hidden="true" %} **Code security and analysis**.
1. Navigate to the "{% data variables.product.prodname_code_scanning_caps %}" section. Then, in the error message reading "{% data variables.product.prodname_codeql %} default configuration **failed**", click **failed**.
1. In the "Jobs" section of the workflow run summary for default setup, identify any failing jobs associated with specific languages. These jobs will be labeled {% octicon "x-circle-fill" aria-label="failed" %} **Analyze (LANGUAGE)**.
1. Once you have determined which language-specific jobs are failing, configure default setup once more and deselect the failing languages for analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)."

   Alternatively, if you would like to analyze every language in your repository, you can configure advanced setup for {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."
