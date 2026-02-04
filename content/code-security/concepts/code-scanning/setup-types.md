---
title: About setup types for code scanning
shortTitle: Setup types
intro: Depending on your needs, {% data variables.product.github %} offers a default or advanced setup for {% data variables.product.prodname_code_scanning %}.
topics:
  - Code Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

## About default setup

Default setup for {% data variables.product.prodname_code_scanning %} is the quickest, easiest, most low-maintenance way to enable {% data variables.product.prodname_code_scanning %} for your repository. Based on the code in your repository, default setup will automatically create a custom {% data variables.product.prodname_code_scanning %} configuration. After enabling default setup, the code written in {% data variables.product.prodname_codeql %}-supported languages in your repository will be scanned using {% data variables.product.prodname_codeql %}:

* On each push to the repository's default branch, or any protected branch. For more information on protected branches, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
* When creating or committing to a pull request based against the repository's default branch, or any protected branch, excluding pull requests from forks.
* On a weekly schedule.

### Supported languages

{% data reusables.code-scanning.default-setup-pre-enablement-explanation %}

If the code in a repository changes to include any {% data variables.product.prodname_codeql %}-supported languages, {% data variables.product.prodname_dotcom %} will automatically update the {% data variables.product.prodname_code_scanning %} configuration to include the new language. If {% data variables.product.prodname_code_scanning %} fails with the new configuration, {% data variables.product.prodname_dotcom %} will resume the previous configuration automatically so the repository does not lose {% data variables.product.prodname_code_scanning %} coverage.

## Customization of default setup

After running an initial analysis of your code with default setup, you can make changes to your configuration to better meet your needs.

If you need more granular control over your {% data variables.product.prodname_code_scanning %} configuration, you should instead configure advanced setup.

### Configuration options

For existing configurations of default setup, you can edit:

* Which languages default setup will analyze.
* The query suite run during analysis. For more information on the available query suites, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites).
* The threat models ({% data variables.release-phases.public_preview %}) to use for analysis. Your choice of threat model determines which sources of tainted data are treated as a risk to your application. During the {% data variables.release-phases.public_preview %}, threat models are supported only for analysis of {% data variables.code-scanning.code_scanning_threat_model_support %}. For more information about threat models, see [Including local sources of tainted data in default setup](/code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/editing-your-configuration-of-default-setup#including-local-sources-of-tainted-data-in-default-setup).

If your codebase depends on a library or framework that is not recognized by the standard libraries included with {% data variables.product.prodname_codeql %}, you can also extend the {% data variables.product.prodname_codeql %} coverage in default setup using {% data variables.product.prodname_codeql %} model packs. For more information, see [Extending CodeQL coverage with CodeQL model packs in default setup](/code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/editing-your-configuration-of-default-setup#extending-codeql-coverage-with-codeql-model-packs-in-default-setup).

### Available runners

You can use default setup for all {% data variables.product.prodname_codeql %}-supported languages on self-hosted runners or {% data variables.product.prodname_dotcom %}-hosted runners.

You can assign self-hosted runners for default setup by giving the runners {% ifversion code-scanning-default-setup-customize-labels %}the default `code-scanning` label, or you can optionally give them custom labels so that individual repositories can use different runners.{% else %}the `code-scanning` label.{% endif %}

{% ifversion code-scanning-default-setup-customize-labels %}

Unless you have a specific use case, we recommend that you only assign runners with the default `code-scanning` label. However, you may want to use custom labels to:

* Assign more powerful self-hosted runners to critical repositories for faster {% data variables.product.prodname_code_scanning %} analysis.
* Run your {% data variables.product.prodname_code_scanning %} analyses on a particular platform (for example, macOS).
* Have granular control over the workload for your {% data variables.product.prodname_dotcom %}-hosted runners and self-hosted runners.

{% endif %}

## About advanced setup

Advanced setup for {% data variables.product.prodname_code_scanning %} is helpful when you need to customize your {% data variables.product.prodname_code_scanning %}. You can set up {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_actions %} or an external continuous integration or continuous delivery/deployment (CI/CD) system.

{% data reusables.code-scanning.about-multiple-configurations-link %}

### With {% data variables.product.prodname_actions %}

By creating and editing a {% data variables.product.prodname_actions %} workflow file, you can define how to build compiled languages, choose which queries to run, select the languages to scan, use a matrix build, and more. You also have access to all the options for controlling workflows, for example: changing the scan schedule, defining workflow triggers, specifying specialist runners to use.

{% ifversion ghes %}
Your site administrator can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions).
{% endif %}

### With a third-party CI/CD system

As an alternative to running {% data variables.product.prodname_code_scanning %} within {% data variables.product.github %} using {% data variables.product.prodname_actions %}, you can analyze code in an external CI/CD system, then upload the results to {% data variables.product.github %}.

The {% data variables.product.prodname_codeql_cli %} is a standalone, command-line tool that you can use to analyze code. You can add the {% data variables.product.prodname_codeql_cli %} to your third-party system, or use another third-party static analysis tool that can produce results as Static Analysis Results Interchange Format (SARIF) 2.1.0 data. For more information, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/about-the-codeql-cli) and [AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning).

Alerts for {% data variables.product.prodname_code_scanning %} that you generate externally are displayed in the same way as those for {% data variables.product.prodname_code_scanning %} that you generate within {% data variables.product.github %}.

## Next steps

You can enable default setup for a single repository, multiple repositories, or all repositories in an organization at the same time.

* For a single repository, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/configure-code-scanning/configuring-default-setup-for-code-scanning).
* For bulk enablement, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale).

To configure advanced setup instead, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning).
