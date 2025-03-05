---
title: Configuring default setup for code scanning
shortTitle: Configure code scanning
intro: 'You can quickly secure code in your repository with default setup for {% data variables.product.prodname_code_scanning %}.'
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
permissions: '{% data reusables.permissions.security-repo-enable %}'
product: '{% data reusables.gated-features.code-scanning %}'
type: how_to
topics:
  - Code Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About default setup

Default setup for {% data variables.product.prodname_code_scanning %} is the quickest, easiest, most low-maintenance way to enable {% data variables.product.prodname_code_scanning %} for your repository. Based on the code in your repository, default setup will automatically create a custom {% data variables.product.prodname_code_scanning %} configuration. After enabling default setup, the code written in {% data variables.product.prodname_codeql %}-supported languages in your repository will be scanned:
* On each push to the repository's default branch, or any protected branch. For more information on protected branches, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
* When creating or committing to a pull request based against the repository's default branch, or any protected branch, excluding pull requests from forks.
* On a weekly schedule.

{% ifversion code-scanning-default-setup-exclude-dormant-repos %}

> [!NOTE]
> If no pushes and pull requests have occurred in a repository with default setup enabled for 6 months, the weekly schedule will be disabled to save your {% data variables.product.prodname_actions %} minutes.

{% endif %}

You can also enable default setup for multiple or all repositories in an organization at the same time. For information on bulk enablement, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale).

If you need more granular control over your {% data variables.product.prodname_code_scanning %} configuration, you should instead configure advanced setup. For more information, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning).

### Requirements for using default setup

Your repository is eligible for default setup for {% data variables.product.prodname_code_scanning %} if:{% ifversion default-setup-pre-enablement %}
<!-- No restrictions on languages. Can be set up before CodeQL supported languages are added. -->
{% else %}
* It includes at least one {% data variables.product.prodname_codeql %}-supported language.{% endif %}
{% data reusables.code-scanning.require-actions-ghcs %}

{% ifversion default-setup-pre-enablement %}
{% data reusables.code-scanning.default-setup-pre-enablement-explanation %}
{% else %}
If your repository includes at least one {% data variables.product.prodname_codeql %}-supported language, you can use default setup even if your repository also includes languages that aren't supported by {% data variables.product.prodname_codeql %}, such as R. Unsupported languages will not be scanned by default setup. For more information on {% data variables.product.prodname_codeql %}-supported languages, see [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql).
{% endif %}

You can use default setup for all {% data variables.product.prodname_codeql %}-supported languages for self-hosted runners or {% data variables.product.prodname_dotcom %}-hosted runners. See [Assigning labels to runners](#assigning-labels-to-runners), later in this article.

{% ifversion codeql-no-build %}Default setup uses the `none` build mode for {% data variables.code-scanning.no_build_support %} and uses the `autobuild` build mode for other compiled languages. You should configure your self-hosted runners to make sure they can run all the necessary commands for C/C++, C#, and Swift analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.{% else %}Default setup runs the `autobuild` action, so you should configure your self-hosted runners to make sure they can run all the necessary commands for {% data variables.code-scanning.compiled_languages %} analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.{% endif %}

### Customizing default setup

We recommend that you start using {% data variables.product.prodname_code_scanning %} with default setup. After you've initially configured default setup, you can evaluate {% data variables.product.prodname_code_scanning %} to see how it's working for you. If you find that something isn't working as you expect, you can customize default setup to better meet your code security needs. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning).

### About adding non-compiled and compiled languages to your default setup

If the code in a repository changes to include Go, JavaScript/TypeScript, Python, or Ruby, {% data variables.product.prodname_dotcom %} will automatically update the {% data variables.product.prodname_code_scanning %} configuration to include the new language. If {% data variables.product.prodname_code_scanning %} fails with the new configuration, {% data variables.product.prodname_dotcom %} will resume the previous configuration automatically so the repository does not lose {% data variables.product.prodname_code_scanning %} coverage.

Compiled languages are not automatically included in default setup configuration because they often require more advanced configuration, but you can manually select any {% data variables.product.prodname_codeql %}-supported compiled language for analysis.

## Configuring default setup for a repository

> [!NOTE]
{% ifversion default-setup-pre-enablement %}> If the analyses fail for all {% data variables.product.prodname_codeql %}-supported languages in a repository, default setup will still be enabled, but it will not run any scans or use any {% data variables.product.prodname_actions %} minutes until another {% data variables.product.prodname_codeql %}-supported language is added to the repository or default setup is manually reconfigured, and the analysis of a {% data variables.product.prodname_codeql %}-supported language succeeds.
{% else %}> At least one {% data variables.product.prodname_codeql %}-supported language's analysis in a repository must succeed, or else default setup will not be successfully enabled in that repository.
{% endif %}

{% data reusables.repositories.navigate-to-repo %}

   > [!NOTE]
   > If you are configuring default setup on a fork, you must first enable {% data variables.product.prodname_actions %}. To enable {% data variables.product.prodname_actions %}, under your repository name, click **{% octicon "play" aria-hidden="true" %} Actions**, then click **I understand my workflows, go ahead and enable them**. Be aware that this will enable all existing workflows on your fork.

{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" %}, then click **Default**.

   ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of {% ifversion code-security-wording-only %}"Code security"{% else %}"Code security and analysis"{% endif %} settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup.png)

   You will then see a "{% data variables.product.prodname_codeql %} default configuration" dialog summarizing the {% data variables.product.prodname_code_scanning %} configuration automatically created by default setup.

   > [!NOTE]
   > If your repository contains _only_ compiled {% data variables.product.prodname_codeql %}-supported languages (for example, Java), you will be taken to the settings page to select the languages you want to add to your default setup configuration.

1. Optionally, to customize your {% data variables.product.prodname_code_scanning %} setup, click **{% octicon "pencil" aria-hidden="true" %} Edit**.
   * To add or remove a language from the analysis performed by default setup, select or deselect that language in the "Languages" section. If you would like to analyze a {% data variables.product.prodname_codeql %}-supported compiled language with default setup, select that language here.
   * To specify the {% data variables.product.prodname_codeql %} query suite you would like to use, select your preferred query suite in the "Query suites" section.

1. Review the settings for default setup on your repository, then click **Enable {% data variables.product.prodname_codeql %}**. This will trigger a workflow that tests the new, automatically generated configuration.

   > [!NOTE]
   > If you are switching to default setup from advanced setup, you will see a warning informing you that default setup will override existing {% data variables.product.prodname_code_scanning %} configurations. This warning means default setup will disable the existing workflow file and block any {% data variables.product.prodname_codeql %} analysis API uploads.

1. Optionally, to view your default setup configuration after enablement, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click **{% octicon "gear" aria-hidden="true" %} View {% data variables.product.prodname_codeql %} configuration**.

## Assigning labels to runners

>[!NOTE]{% data variables.product.prodname_code_scanning_caps %} sees assigned runners when default setup is enabled. If a runner is assigned to a repository that is already running default setup, you must disable and re-enable default setup to start using the runner. If you add a runner and want to start using it, you can change the configuration manually without needing to disable and re-enable default setup.

You can also assign self-hosted runners{% ifversion code-scanning-default-setup-customize-labels %} with the default `code-scanning` label, or you can optionally give them custom labels so that individual repositories can use different runners.{% else %}with the `code-scanning` label.{% endif %} For information about assigning labels to self-hosted runners, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners).

{% ifversion code-scanning-default-setup-customize-labels %}

Specifying custom labels for self-hosted runners is optional. Unless you have a specific use case, we recommend that you only assign runners with the default `code-scanning` label. For example, you may want to:

* Assign more powerful self-hosted runners to critical repositories for faster {% data variables.product.prodname_code_scanning %} analysis.
* Run your {% data variables.product.prodname_code_scanning %} analyses on a particular platform (for example, macOS).
* Have granular control over the workload for your {% data variables.product.prodname_dotcom %}-hosted runners and self-hosted runners.

Once you've assigned custom labels to self-hosted runners, your repositories can use those runners for {% data variables.product.prodname_code_scanning %} default setup. For more information, see [Configuring default setup for a repository](#configuring-default-setup-for-a-repository), earlier in this article.

You can also use {% data variables.product.prodname_security_configurations %} to assign labels to self-hosted runners for {% data variables.product.prodname_code_scanning %}. See [AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration#creating-a-custom-security-configuration).

{% endif %}

{% ifversion fpt or ghec %}

### Assigning {% data variables.actions.hosted_runners %}

To assign a {% data variables.actions.hosted_runner %}, name the runner `code-scanning`. This will automatically add the `code-scanning` label to the {% data variables.actions.hosted_runner %}. An organization can only have one {% data variables.actions.hosted_runner %} with the `code-scanning` label, and that runner will handle all {% data variables.product.prodname_code_scanning %} jobs from repositories within your organization with access to the runner's group. See [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/configuring-larger-runners-for-default-setup#provisioning-organization-level-larger-runners-for-default-setup).

{% endif %}

## Next steps

After your configuration runs successfully at least once, you can start examining and resolving {% data variables.product.prodname_code_scanning %} alerts. For more information on {% data variables.product.prodname_code_scanning %} alerts, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts) and [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository).

After you've configured default setup for {% data variables.product.prodname_code_scanning %}, you can read about evaluating how it's working for you and the next steps you can take to customize it. For more information, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning).

You can find detailed information about your {% data variables.product.prodname_code_scanning %} configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page).

When you configure default setup, you may encounter an error. For information on troubleshooting specific errors, see [AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning).
