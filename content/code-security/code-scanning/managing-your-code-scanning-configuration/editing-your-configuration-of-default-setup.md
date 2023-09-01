---
title: Editing your configuration of default setup
shortTitle: Edit default setup
intro: 'You can edit your existing configuration of default setup for {% data variables.product.prodname_code_scanning %} to better meet your code security needs.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-without-workflow
type: how_to
topics:
  - Code scanning
  - CodeQL
---

## About editing your configuration of default setup

After running an initial analysis of your code with default setup, you may need to make changes to your configuration to better meet your code security needs. For existing configurations of default setup, you can edit{% ifversion code-scanning-without-workflow-310 %}:
- which languages default setup will analyze.
- {% endif %} the query suite run during analysis. For more information on the available query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/built-in-codeql-query-suites)."

If you need to change any other aspects of your {% data variables.product.prodname_code_scanning %} configuration, consider configuring advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

{% ifversion code-scanning-without-workflow-310 %}
## Customizing your existing configuration of default setup

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_codeql %} analysis" row of the "{% data variables.product.prodname_code_scanning_caps %}" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click {% octicon "gear" aria-hidden="true" %} **View {% data variables.product.prodname_codeql %} configuration**.
1. In the "{% data variables.product.prodname_codeql %} default configuration" window, click {% octicon "pencil" aria-hidden="true" %} **Edit**.
1. Optionally, in the "Languages" section, select or deselect languages for analysis.
1. Optionally, in the "Query suites" section, select a different query suite to run against your code.
1. To update your configuration, as well as run an initial analysis of your code with the new configuration, click **Save changes**. All future analyses will use your new configuration.

{% else %}
## Changing the selected query suite for your configuration of default setup

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_codeql %} analysis" row of the "{% data variables.product.prodname_code_scanning_caps %}" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click {% octicon "gear" aria-hidden="true" %} **View {% data variables.product.prodname_codeql %} configuration**.
1. In the "Query suites" row of the "{% data variables.product.prodname_codeql %} default configuration" window, select **QUERY SUITE** {% octicon "triangle-down" aria-hidden="true" %}, then click the new query suite for your {% data variables.product.prodname_code_scanning %} configuration to run.
1. To update your configuration of default setup, click **Enable {% data variables.product.prodname_codeql %}**.
{% endif %}
