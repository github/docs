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
  feature: code-scanning-without-workflow
---

## About default setup

Default setup for {% data variables.product.prodname_code_scanning %} is the quickest, easiest, most low-maintenance way to enable {% data variables.product.prodname_code_scanning %} for your repository. Based on the code in your repository, default setup will automatically create a custom {% data variables.product.prodname_code_scanning %} configuration. After enabling default setup, the code in your repository will be scanned:
- on each push to the repository's default branch, or any protected branch. For more information on protected branches, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."
- when creating or committing to a pull request based against the repository's default branch, or any protected branch.{% ifversion default-setup-scan-on-schedule %}
- on a weekly schedule.

{% note %}

**Note:** If no pushes and pull requests have occurred in a repository with default setup enabled for 6 months, the weekly schedule will be disabled to save your {% data variables.product.prodname_actions %} minutes.

{% endnote %}
{% endif %}

You can enable the automatically selected configuration of default setup to start scanning your code as soon as possible, or you can customize aspects of the configuration to better meet your {% data variables.product.prodname_code_scanning %} needs. If you choose to customize the configuration yourself, you can select:{% ifversion code-scanning-without-workflow-310 %}
- the languages default setup will analyze.{% endif %}
- the query suite default setup will run. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/built-in-codeql-query-suites)."

{% ifversion org-enable-code-scanning %}You can also enable default setup for multiple or all repositories in an organization at the same time. For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."{% endif %}

If you need more granular control over your {% data variables.product.prodname_code_scanning %} configuration, you should instead configure advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

### Requirements for using default setup

Your repository is eligible for default setup for {% data variables.product.prodname_code_scanning %} if:{% ifversion code-scanning-without-workflow-310 %}
- it includes at least one {% data variables.product.prodname_codeql %}-supported language{% ifversion codeql-swift-advanced-setup %} aside from Swift{% endif %}.{% else %}
- it includes only the following {% data variables.product.prodname_codeql %}-supported languages: {% ifversion code-scanning-default-setup-go %}Go, {% endif %}JavaScript/TypeScript, Python, or Ruby.{% endif %}
- {% data variables.product.prodname_actions %} are enabled.{% ifversion fpt %}
- it is publicly visible.{%- elsif ghec %}
- it is publicly visible, or {% data variables.product.prodname_GH_advanced_security %} is enabled.{%- elsif ghes or ghae %}
- {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}

{% ifversion ghae %}
For {% data variables.product.product_name %}, before configuring {% data variables.product.prodname_code_scanning %} for a repository, you must ensure that there is at least one self-hosted {% data variables.product.prodname_actions %} runner available to the repository.

Enterprise owners, organization and repository administrators can add self-hosted runners. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."
{% endif %}

You can use default setup if your repository includes languages that aren't supported by {% data variables.product.prodname_codeql %}, such as R. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql)."

{% ifversion code-scanning-without-workflow-310 %}

### About adding {% ifversion code-scanning-default-setup-automatic-311 %}non-compiled and {% endif %}compiled languages to your default setup

{% ifversion code-scanning-default-setup-automatic-311 %}
If the code in a repository changes to include {% ifversion code-scanning-default-setup-go %}Go, {% endif %}JavaScript/TypeScript, Python, or Ruby, {% data variables.product.prodname_dotcom %} will automatically update the {% data variables.product.prodname_code_scanning %} configuration to include the new language. If {% data variables.product.prodname_code_scanning %} fails with the new configuration, {% data variables.product.prodname_dotcom %} will resume the previous configuration automatically so the repository does not lose {% data variables.product.prodname_code_scanning %} coverage.
{% endif %}

Compiled languages are not automatically included in default setup configuration because they often require more advanced configuration, but you can manually select any {% data variables.product.prodname_codeql %}-supported compiled language{% ifversion codeql-swift-advanced-setup %} other than Swift{% endif %} for analysis.

{% endif %}

## Configuring default setup for a repository

{% data reusables.repositories.navigate-to-repo %}

   {% note %}

   **Note:** If you are configuring default setup on a fork, you must first enable {% data variables.product.prodname_actions %}. To enable {% data variables.product.prodname_actions %}, under your repository name, click {% octicon "play" aria-hidden="true" %} **Actions**, then click **I understand my workflows, go ahead and enable them**. Be aware that this will enable all existing workflows on your fork.

   {% endnote %}

{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" %}, then click **Default**.

   ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "Code security and analysis" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup.png)

   You will then see a "{% data variables.product.prodname_codeql %} default configuration" dialog summarizing the {% data variables.product.prodname_code_scanning %} configuration automatically created by default setup.

   {% ifversion code-scanning-without-workflow-310 %}
   {% note %}

   **Note:** If your repository contains _only_ compiled {% data variables.product.prodname_codeql %}-supported languages (for example, Java), you will be taken to the settings page to select the languages you want to add to your default setup configuration.

   {% endnote %}

1. Optionally, to customize your {% data variables.product.prodname_code_scanning %} setup, click {% octicon "pencil" aria-hidden="true" %} **Edit**.
   - To add or remove a language from the analysis performed by default setup, select or deselect that language in the "Languages" section. If you would like to analyze a {% data variables.product.prodname_codeql %}-supported compiled language with default setup, select that language here.
   - To specify the {% data variables.product.prodname_codeql %} query suite you would like to use, select your preferred query suite in the "Query suites" section.

{%- else -%}

1. Optionally, in the "Query suites" section of the "{% data variables.product.prodname_codeql %} default configuration" modal dialog, select the **Default** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the {% data variables.product.prodname_codeql %} query suite you would like to use.

   ![Screenshot of the modal for default setup. A button labeled "Default", with an arrow indicating a dropdown menu, is outlined in dark orange.](/assets/images/help/security/default-setup-query-suite-dropdown.png)

   If you choose the **Extended** query suite, your {% data variables.product.prodname_code_scanning %} configuration will run lower severity and precision queries in addition to the queries included in the **Default** query suite. For more information on the available query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/built-in-codeql-query-suites)."

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

After you configure default setup for {% data variables.product.prodname_code_scanning %}, and your configuration runs successfully at least once, you can start examining and resolving {% data variables.product.prodname_code_scanning %} alerts. For more information on {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

You can find detailed information about your {% data variables.product.prodname_code_scanning %} configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

When you configure default setup, you may encounter an error. For information on troubleshooting specific errors, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."
