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
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with admin permissions to a repository, or the security manager role for the repository, can configure {% data variables.product.prodname_code_scanning %} for that repository.'
type: how_to
topics:
  - Advanced Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About default setup

Default setup for {% data variables.product.prodname_code_scanning %} is the quickest, easiest, most low-maintenance way to enable {% data variables.product.prodname_code_scanning %} for your repository. Based on the code in your repository, default setup will automatically create a custom {% data variables.product.prodname_code_scanning %} configuration. After enabling default setup, the code written in {% data variables.product.prodname_codeql %}-supported languages in your repository will be scanned:
* On each push to the repository's default branch, or any protected branch. For more information on protected branches, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."
* When creating or committing to a pull request based against the repository's default branch, or any protected branch, excluding pull requests from forks.{% ifversion default-setup-scan-on-schedule %}
* On a weekly schedule.

{% ifversion code-scanning-default-setup-exclude-dormant-repos %}
{% note %}

**Note:** If no pushes and pull requests have occurred in a repository with default setup enabled for 6 months, the weekly schedule will be disabled to save your {% data variables.product.prodname_actions %} minutes.

{% endnote %}
{% endif %}
{% endif %}

You can also enable default setup for multiple or all repositories in an organization at the same time. For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."

If you need more granular control over your {% data variables.product.prodname_code_scanning %} configuration, you should instead configure advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

### Requirements for using default setup

Your repository is eligible for default setup for {% data variables.product.prodname_code_scanning %} if:{% ifversion default-setup-pre-enablement %}{% else %}{% ifversion code-scanning-without-workflow-310 %}
* It includes at least one {% data variables.product.prodname_codeql %}-supported language{% ifversion codeql-swift-advanced-setup %} aside from Swift{% endif %}.{% else %}
* It includes only the following {% data variables.product.prodname_codeql %}-supported languages: {% ifversion code-scanning-default-setup-go %}Go, {% endif %}JavaScript/TypeScript, Python, or Ruby.{% endif %}{% endif %}
* {% data variables.product.prodname_actions %} are enabled.{% ifversion fpt %}
* It is publicly visible.{%- elsif ghec %}
* It is publicly visible, or {% data variables.product.prodname_GH_advanced_security %} is enabled.{%- elsif ghes %}
* {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}

{% ifversion default-setup-pre-enablement %}
{% data reusables.code-scanning.default-setup-pre-enablement-explanation %}
{% else %}
If your repository includes at least one {% data variables.product.prodname_codeql %}-supported language, you can use default setup even if your repository also includes languages that aren't supported by {% data variables.product.prodname_codeql %}, such as R. Unsupported languages will not be scanned by default setup. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."
{% endif %}

{% ifversion code-scanning-default-setup-self-hosted-310 or default-setup-self-hosted-runners-GHEC %}
You can use default setup with self-hosted runners for all {% data variables.product.prodname_codeql %}-supported languages{% ifversion codeql-swift-advanced-setup %} except Swift{% endif %}. {% ifversion codeql-no-build %}Default setup uses the `none` build mode for {% data variables.code-scanning.no_build_support %} and uses the `autobuild` build mode for other compiled languages. You should configure your self-hosted runners to make sure they can run all the necessary commands for C/C++, C#, and Swift analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.{% else %}Default setup runs the `autobuild` action, so you should configure your self-hosted runners to make sure they can run all the necessary commands for {% data variables.code-scanning.compiled_languages %} analysis. Analysis of JavaScript/TypeScript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.{% endif %}
{% endif %}

### Customizing default setup

We recommend that you start using {% data variables.product.prodname_code_scanning %} with default setup. After you've initially configured default setup, you can evaluate {% data variables.product.prodname_code_scanning %} to see how it's working for you. If you find that something isn't working as you expect, you can customize default setup to better meet your code security needs. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning)."

{% ifversion code-scanning-default-setup-recommended-languages and code-scanning-without-workflow-310 %}

### About adding {% ifversion code-scanning-default-setup-automatic-311 %}non-compiled and {% endif %}compiled languages to your default setup

{% ifversion code-scanning-default-setup-automatic-311 %}
If the code in a repository changes to include {% ifversion code-scanning-default-setup-go %}Go, {% endif %}JavaScript/TypeScript, Python, or Ruby, {% data variables.product.prodname_dotcom %} will automatically update the {% data variables.product.prodname_code_scanning %} configuration to include the new language. If {% data variables.product.prodname_code_scanning %} fails with the new configuration, {% data variables.product.prodname_dotcom %} will resume the previous configuration automatically so the repository does not lose {% data variables.product.prodname_code_scanning %} coverage.
{% endif %}

Compiled languages are not automatically included in default setup configuration because they often require more advanced configuration, but you can manually select any {% data variables.product.prodname_codeql %}-supported compiled language{% ifversion codeql-swift-advanced-setup %} other than Swift{% endif %} for analysis.

{% endif %}

## Configuring default setup for a repository

{% ifversion code-scanning-default-setup-recommended-languages %}{% else %}
When you initially configure default setup for {% data variables.product.prodname_code_scanning %} for a repository, all {% data variables.product.prodname_codeql %}-supported languages in the repository will be analyzed automatically. The languages that are analyzed successfully will be retained in the new default setup configuration. Languages that are not analyzed successfully will be automatically deselected from the default setup configuration.
{% endif %}

{% note %}

**Note:** {% ifversion default-setup-pre-enablement %}If the analyses fail for all {% data variables.product.prodname_codeql %}-supported languages in a repository, default setup will still be enabled, but it will not run any scans or use any {% data variables.product.prodname_actions %} minutes until another {% data variables.product.prodname_codeql %}-supported language is added to the repository or default setup is manually reconfigured, and the analysis of a {% data variables.product.prodname_codeql %}-supported language succeeds.
{% else %}
At least one {% data variables.product.prodname_codeql %}-supported language's analysis in a repository must succeed, or else default setup will not be successfully enabled in that repository.
{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}

   {% note %}

   **Note:** If you are configuring default setup on a fork, you must first enable {% data variables.product.prodname_actions %}. To enable {% data variables.product.prodname_actions %}, under your repository name, click {% octicon "play" aria-hidden="true" %} **Actions**, then click **I understand my workflows, go ahead and enable them**. Be aware that this will enable all existing workflows on your fork.

   {% endnote %}

{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" %}, then click **Default**.

   ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "Code security and analysis" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup.png)

   You will then see a "{% data variables.product.prodname_codeql %} default configuration" dialog summarizing the {% data variables.product.prodname_code_scanning %} configuration automatically created by default setup.

   {% ifversion code-scanning-default-setup-recommended-languages %}
   {% ifversion code-scanning-without-workflow-310 %}
   {% note %}

   **Note:** If your repository contains _only_ compiled {% data variables.product.prodname_codeql %}-supported languages (for example, Java), you will be taken to the settings page to select the languages you want to add to your default setup configuration.

   {% endnote %}
   {% endif %}

1. Optionally, to customize your {% data variables.product.prodname_code_scanning %} setup, click {% octicon "pencil" aria-hidden="true" %} **Edit**.
   * To add or remove a language from the analysis performed by default setup, select or deselect that language in the "Languages" section. {% ifversion code-scanning-default-setup-recommended-languages %}If you would like to analyze a {% data variables.product.prodname_codeql %}-supported compiled language with default setup, select that language here.{% endif %}
   * To specify the {% data variables.product.prodname_codeql %} query suite you would like to use, select your preferred query suite in the "Query suites" section.

{%- else -%}

1. Optionally, in the "Query suites" section of the "{% data variables.product.prodname_codeql %} default configuration" modal dialog, select the **Default** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the {% data variables.product.prodname_codeql %} query suite you would like to use.

   ![Screenshot of the modal for default setup. A button labeled "Default", with an arrow indicating a dropdown menu, is outlined in dark orange.](/assets/images/help/security/default-setup-query-suite-dropdown.png)

   If you choose the **Extended** query suite, your {% data variables.product.prodname_code_scanning %} configuration will run lower severity and precision queries in addition to the queries included in the **Default** query suite. For more information on the available query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites)."

   {% note %}

   **Note:** If you configure {% data variables.product.prodname_code_scanning %} to use the **Extended** query suite, you may experience a higher rate of false positive alerts.

   {% endnote %}
{%- endif %}

1. Review the settings for default setup on your repository, then click **Enable {% data variables.product.prodname_codeql %}**. This will trigger a workflow that tests the new, automatically generated configuration.

   {% note %}

   **Note:** If you are switching to default setup from advanced setup, you will see a warning informing you that default setup will override existing {% data variables.product.prodname_code_scanning %} configurations. This warning means default setup will disable the existing workflow file and block any {% data variables.product.prodname_codeql %} analysis API uploads.

   {% endnote %}

1. Optionally, to view your default setup configuration after enablement, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click {% octicon "gear" aria-hidden="true" %} **View {% data variables.product.prodname_codeql %} configuration**.

## Next steps

After your configuration runs successfully at least once, you can start examining and resolving {% data variables.product.prodname_code_scanning %} alerts. For more information on {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

After you've configured default setup for {% data variables.product.prodname_code_scanning %}, you can read about evaluating how it's working for you and the next steps you can take to customize it. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/evaluating-default-setup-for-code-scanning)."

You can find detailed information about your {% data variables.product.prodname_code_scanning %} configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

When you configure default setup, you may encounter an error. For information on troubleshooting specific errors, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."
