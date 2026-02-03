---
title: Configuring default setup for code scanning
shortTitle: Configure code scanning
intro: Quickly set up {% data variables.product.prodname_code_scanning %} to find {% ifversion fpt or ghec %}and fix {% endif %}vulnerable code automatically.
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/configuring-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-default-setup-for-code-scanning
  - /code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
permissions: '{% data reusables.permissions.security-repo-enable %}'
product: '{% data reusables.gated-features.code-scanning %}'
topics:
  - Code Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
---

We recommend that you start using {% data variables.product.prodname_code_scanning %} with default setup. After you've initially configured default setup, you can evaluate {% data variables.product.prodname_code_scanning %} to see how it's working for you and customize it to better meet your needs. For more information, see [AUTOTITLE](/code-security/concepts/code-scanning/setup-types).

## Prerequisites

Your repository is eligible for default setup for {% data variables.product.prodname_code_scanning %} if:

{% data reusables.code-scanning.require-actions-ghcs %}

## Configuring default setup for a repository

> [!NOTE]
> If the analyses fail for all {% data variables.product.prodname_codeql %}-supported languages in a repository, default setup will still be enabled, but it will not run any scans or use any {% data variables.product.prodname_actions %} minutes until another {% data variables.product.prodname_codeql %}-supported language is added to the repository or default setup is manually reconfigured, and the analysis of a {% data variables.product.prodname_codeql %}-supported language succeeds.

{% data reusables.repositories.navigate-to-repo %}

   > [!NOTE]
   > If you are configuring default setup on a fork, you must first enable {% data variables.product.prodname_actions %}. To enable {% data variables.product.prodname_actions %}, under your repository name, click **{% octicon "play" aria-hidden="true" aria-label="play" %} Actions**, then click **I understand my workflows, go ahead and enable them**. Be aware that this will enable all existing workflows on your fork.

{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.code-scanning-enable %}

   {% ifversion ghas-products %}

   ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "{% data variables.product.UI_advanced_security %}" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup-ghas.png)

   {% else %}

   ![Screenshot of the "{% data variables.product.UI_code_security_scanning %}" section of "{% data variables.product.UI_advanced_security %}" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup.png)

   {% endif %}

   You will then see a "{% data variables.product.prodname_codeql %} default configuration" dialog summarizing the {% data variables.product.prodname_code_scanning %} configuration automatically created by default setup.


1. Optionally, to customize your {% data variables.product.prodname_code_scanning %} setup, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
   * To add or remove a language from the analysis performed by default setup, select or deselect that language in the "Languages" section.
   * To specify the {% data variables.product.prodname_codeql %} query suite you would like to use, select your preferred query suite in the "Query suites" section.

1. Review the settings for default setup on your repository, then click **Enable {% data variables.product.prodname_codeql %}**. This will trigger a workflow that tests the new, automatically generated configuration.

   > [!NOTE]
   > If you are switching to default setup from advanced setup, you will see a warning informing you that default setup will override existing {% data variables.product.prodname_code_scanning %} configurations. This warning means default setup will disable the existing workflow file and block any {% data variables.product.prodname_codeql %} analysis API uploads.

1. Optionally, to view your default setup configuration after enablement, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} View {% data variables.product.prodname_codeql %} configuration**.

> [!NOTE]
> If no pushes and pull requests have occurred in a repository with default setup enabled for 6 months, the weekly schedule will be disabled to save your {% data variables.product.prodname_actions %} minutes.

{% ifversion fpt or ghec %}

## Running default setup on self-hosted or {% data variables.actions.hosted_runners %}

You can use default setup for all {% data variables.product.prodname_codeql %}-supported languages on self-hosted runners or {% data variables.product.prodname_dotcom %}-hosted runners.

{% else %}

## Assigning runners for default setup

{% endif %}

>[!NOTE]{% data variables.product.prodname_code_scanning_caps %} sees assigned runners when default setup is enabled. If a runner is assigned to a repository that is already running default setup, you must disable and re-enable default setup to start using the runner. If you add a runner and want to start using it, you can change the configuration manually without needing to disable and re-enable default setup.

### Assigning labels to self-hosted runners

To assign a self-hosted runner for default setup, you can use {% ifversion code-scanning-default-setup-customize-labels %}the default `code-scanning` label, or you can optionally give them custom labels so that individual repositories can use different runners.{% else %}the `code-scanning` label.{% endif %} For information about assigning labels to self-hosted runners, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners).

Once you've assigned custom labels to self-hosted runners, your repositories can use those runners for {% data variables.product.prodname_code_scanning %} default setup.

{% ifversion security-configurations %}
You can also use {% data variables.product.prodname_security_configurations %} to assign labels to self-hosted runners for {% data variables.product.prodname_code_scanning %}. See [AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
{% endif %}

{% ifversion fpt or ghec %}

### Assigning {% data variables.actions.hosted_runners %}

To assign a {% data variables.actions.hosted_runner %}, name the runner `code-scanning`. This will automatically add the `code-scanning` label to the {% data variables.actions.hosted_runner %}. An organization can only have one {% data variables.actions.hosted_runner %} with the `code-scanning` label, and that runner will handle all {% data variables.product.prodname_code_scanning %} jobs from repositories within your organization with access to the runner's group. See [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/configuring-larger-runners-for-default-setup#provisioning-organization-level-larger-runners-for-default-setup).

{% endif %}

### Ensuring build support

Default setup uses the `none` build mode for {% data variables.code-scanning.no_build_support %} and uses the `autobuild` build mode for other compiled languages. You should configure your self-hosted runners to make sure they can run all the necessary commands for C/C++, C#, and Swift analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.

## Next steps

After your configuration runs successfully at least once, you can start examining and resolving {% data variables.product.prodname_code_scanning %} alerts. For more information on {% data variables.product.prodname_code_scanning %} alerts, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts) and [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository).

After you've configured default setup for {% data variables.product.prodname_code_scanning %}, you can read about evaluating how it's working for you and the next steps you can take to customize it. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning).

You can find detailed information about your {% data variables.product.prodname_code_scanning %} configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page).

When you configure default setup, you may encounter an error. For information on troubleshooting specific errors, see [AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning).
