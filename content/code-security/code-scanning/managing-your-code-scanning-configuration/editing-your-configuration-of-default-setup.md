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
- Which languages default setup will analyze.
- {% endif %} The query suite run during analysis. For more information on the available query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites)."{% ifversion codeql-threat-models-java %}
- The threat models (beta) to use for analysis. Your choice of threat model determines which sources of tainted data are treated as a risk to your application. During the beta, threat models are supported only by Java analysis. For more information about threat models, see "[Including local sources of tainted data in default setup](#including-local-sources-of-tainted-data-in-default-setup)."
{% endif %}

{% ifversion codeql-model-packs-java %}

If your codebase depends on a library or framework that is not recognized by the standard libraries included with {% data variables.product.prodname_codeql %}, you can also extend the {% data variables.product.prodname_codeql %} coverage in default setup using {% data variables.product.prodname_codeql %} model packs. For more information, see "[Extending CodeQL coverage with CodeQL model packs in default setup](#extending-codeql-coverage-with-codeql-model-packs-in-default-setup)."

{% endif %}

If you need to change any other aspects of your {% data variables.product.prodname_code_scanning %} configuration, consider configuring advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

{% ifversion code-scanning-without-workflow-310 %}

## Customizing your existing configuration of default setup

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_codeql %} analysis" row of the "{% data variables.product.prodname_code_scanning_caps %}" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click {% octicon "gear" aria-hidden="true" %} **View {% data variables.product.prodname_codeql %} configuration**.
1. In the "{% data variables.product.prodname_codeql %} default configuration" window, click {% octicon "pencil" aria-hidden="true" %} **Edit**.
1. Optionally, in the "Languages" section, select or deselect languages for analysis.
1. Optionally, in the "Query suite" row of the "Scan settings" section, select a different query suite to run against your code.{% ifversion codeql-threat-models-java %}
1. (Beta) Optionally, in the "Threat model" row of the "Scan settings" section, select **Remote and local sources**.
{% endif %}
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

## Defining the alert severities that cause a check failure for a pull request

{% data reusables.code-scanning.pull-request-checks %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghec %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", in the "Protection rules" section, use the drop-down menu to define which alerts should cause a check failure. Choose one level for alerts of type "Security" and one level for all other alerts.{% else %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}", to the right of "Check Failure", use the drop-down menu to select the level of severity you would like to cause a pull request check failure.{% endif %}

{% ifversion codeql-threat-models-java %}

## Including local sources of tainted data in default setup

{% data reusables.code-scanning.beta-threat-models %}

If your codebase only considers remote network requests to be potential sources of tainted data, then we recommend using the default threat model. If your codebase considers sources other than network requests to potentially contain tainted data, then you can use threat models to add these additional sources to your {% data variables.product.prodname_codeql %} analysis. During the beta, you can add local sources (for example: command-line arguments, environment variables, file systems, and databases) that your codebase may consider to be additional sources of tainted data.

You can edit the threat model used in a default setup configuration. For more information, see "[Customizing your existing configuration of default setup](#customizing-your-existing-configuration-of-default-setup)."

{% endif %}

{% ifversion codeql-model-packs-java %}

## Extending {% data variables.product.prodname_codeql %} coverage with {% data variables.product.prodname_codeql %} model packs in default setup

{% data reusables.code-scanning.beta-model-packs %}

If you use frameworks and libraries that are not recognized by the standard libraries included with {% data variables.product.prodname_codeql %}, you can model your dependencies and extend {% data variables.product.prodname_code_scanning %} analysis. For more information, see [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/) in the documentation for {% data variables.product.prodname_codeql %}.

For default setup, you need to define the models of your additional dependencies in a {% data variables.product.prodname_codeql %} model pack in your repository. For more information about {% data variables.product.prodname_codeql %} model packs and writing your own, see [Using the {% data variables.product.prodname_codeql %} model editor](https://codeql.github.com/docs/codeql-for-visual-studio-code/using-the-codeql-model-editor) in the {% data variables.product.prodname_codeql %} documentation.

To use {% data variables.product.prodname_codeql %} model packs with default setup, place them in the `.github/codeql/extensions` directory. They will be automatically detected and used in your {% data variables.product.prodname_code_scanning %} analysis. If you later change your configuration to use advanced setup, any data extensions in the `.github/codeql/extensions` directory will still be recognized and used.

{% endif %}
