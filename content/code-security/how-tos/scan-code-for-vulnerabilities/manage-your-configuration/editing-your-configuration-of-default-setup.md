---
title: Editing your configuration of default setup
shortTitle: Edit default setup
intro: You can edit your existing configuration of default setup for {% data variables.product.prodname_code_scanning %} to better meet your needs.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup
contentType: how-tos
---

After running an initial analysis of your code with default setup, you can make changes to your configuration to better meet your needs. For more information on setup types and customization options, see [AUTOTITLE](/code-security/concepts/code-scanning/setup-types).

If you need to change any other aspects of your {% data variables.product.prodname_code_scanning %} configuration, consider configuring advanced setup. For more information, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning).

## Customizing your existing configuration of default setup

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.prodname_codeql %} analysis" row of the "{% data variables.product.UI_code_security_scanning %}" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} View {% data variables.product.prodname_codeql %} configuration**.
1. In the "{% data variables.product.prodname_codeql %} default configuration" window, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
1. Optionally, in the "Languages" section, select or deselect languages for analysis.
1. Optionally, in the "Query suite" row of the "Scan settings" section, select a different query suite to run against your code.

{% ifversion code-scanning-default-setup-customize-labels %}

1. Optionally, to use labeled runners, in the "Runner type" section of the "{% data variables.product.prodname_codeql %} default configuration" modal dialog, select **Standard {% data variables.product.company_short %} runner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} to open a dropdown menu, then select **Labeled runner**. Then, next to "Runner label," enter the label of an existing self-hosted or {% data variables.product.company_short %}-hosted runner. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#assigning-labels-to-runners).

{% endif %}

1. ({% data variables.release-phases.public_preview_caps %}) Optionally, in the "Threat model" row of the "Scan settings" section, select **Remote and local sources**. This option is only available for repositories with code in a supported language: {% data variables.code-scanning.code_scanning_threat_model_support %}.

1. To update your configuration, as well as run an initial analysis of your code with the new configuration, click **Save changes**. All future analyses will use your new configuration.

## Defining the alert severities that cause a check failure for a pull request

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection). For more general information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Including local sources of tainted data in default setup

{% data reusables.code-scanning.beta-threat-models %}

If your codebase only considers remote network requests to be potential sources of tainted data, then we recommend using the default threat model. If your codebase considers sources other than network requests to potentially contain tainted data, then you can use threat models to add these additional sources to your {% data variables.product.prodname_codeql %} analysis. During the {% data variables.release-phases.public_preview %}, you can add local sources (for example: command-line arguments, environment variables, file systems, and databases) that your codebase may consider to be additional sources of tainted data.

You can edit the threat model used in a default setup configuration. For more information, see [Customizing your existing configuration of default setup](#customizing-your-existing-configuration-of-default-setup).

## Extending {% data variables.product.prodname_codeql %} coverage with {% data variables.product.prodname_codeql %} model packs in default setup

{% data reusables.code-scanning.beta-model-packs %}

If {% ifversion ghec %}your enterprise is hosted on {% data variables.product.prodname_dotcom_the_website %} and {% endif %}you use frameworks and libraries that are not recognized by the standard libraries included with {% data variables.product.prodname_codeql %}, you can model your dependencies and extend {% data variables.product.prodname_code_scanning %} analysis. For more information, see [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/) in the documentation for {% data variables.product.prodname_codeql %}.

For default setup, you need to define the models of your additional dependencies in {% data variables.product.prodname_codeql %} model packs. You can extend coverage in default setup with {% data variables.product.prodname_codeql %} model packs for individual repositories, or at scale for all repositories in an organization.

For more information about {% data variables.product.prodname_codeql %} model packs and writing your own, see [AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/using-the-codeql-model-editor).

### Extending coverage for a repository

1. In the `.github/codeql/extensions` directory of the repository, copy the model pack directory which should include a `codeql-pack.yml` file and any `.yml` files containing additional models for the libraries or frameworks you wish to include in your analysis.
1. The model packs will be automatically detected and used in your {% data variables.product.prodname_code_scanning %} analysis.
1. If you later change your configuration to use advanced setup, any model packs in the `.github/codeql/extensions` directory will still be recognized and used.

### Extending coverage for all repositories in an organization

>[!NOTE]
> If you extend coverage with {% data variables.product.prodname_codeql %} model packs for all repositories in an organization, the model packs that you specify must be published to the {% ifversion ghes %}container registry associated with the {% data variables.product.prodname_ghe_server %} instance (`https://containers.HOSTNAME`){% else %}{% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}{% endif %} and be accessible to the repositories that run {% data variables.product.prodname_code_scanning %}. For more information, see [AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% ifversion security-configurations %}
{% data reusables.security-configurations.display-global-settings %}
{% else %}
1. Click **{% data variables.product.UI_advanced_security %}**.
{% endif %}
1. Find the "{% data variables.product.prodname_code_scanning_caps %}" section.
1. Next to "Expand {% data variables.product.prodname_codeql %} analysis," click **Configure**.
1. Enter references to the published model packs you want to use, one per line, then click **Save**.

    ![Screenshot of the "Expand CodeQL analysis" view" in the settings for an organization.](/assets/images/help/security/enable-codeql-org-model-packs.png)

1. The model packs will be automatically detected and used when {% data variables.product.prodname_code_scanning %} runs on any repository in the organization with default setup enabled.
