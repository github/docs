---
title: Configuring global security settings for your organization
shortTitle: Configure global settings
intro: 'Customize {% data variables.product.prodname_GH_advanced_security %} features and create security managers to strengthen the security of your organization.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note-opt-out %}

## About {% data variables.product.prodname_global_settings %}

Alongside {% data variables.product.prodname_security_configurations %}, which determine repository-level security settings, you should also configure {% data variables.product.prodname_global_settings %} for your organization. {% data variables.product.prodname_global_settings_caps %} apply to your entire organization, and can customize {% data variables.product.prodname_GH_advanced_security %} features based on your needs. You can also create security managers on the {% data variables.product.prodname_global_settings %} page to monitor and maintain your organization's security.

## Accessing the {% data variables.product.prodname_global_settings %} page for your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, select the **Code security** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.

## Configuring global {% data variables.product.prodname_dependabot %} settings

{% data reusables.dependabot.dependabot-overview %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_dependabot %}:

- [Creating and managing {% data variables.dependabot.auto_triage_rules %}](#creating-and-managing-dependabot-auto-triage-rules)
- [Grouping {% data variables.product.prodname_dependabot %} security updates](#grouping-dependabot-security-updates){% ifversion fpt or ghec %}
- [Enabling dependency updates on {% data variables.product.prodname_actions %} runners](#enabling-dependency-updates-on-github-actions-runners){% endif %}{% ifversion fpt %}
- [Granting {% data variables.product.prodname_dependabot %} access to private repositories](#granting-dependabot-access-to-private-repositories){% else %}
- [Granting {% data variables.product.prodname_dependabot %} access to private and internal repositories](#granting-dependabot-access-to-private-and-internal-repositories){% endif %}

### Creating and managing {% data variables.dependabot.auto_triage_rules %}

You can create and manage {% data variables.dependabot.auto_triage_rules %} to instruct {% data variables.product.prodname_dependabot %} to automatically dismiss or snooze {% data variables.product.prodname_dependabot_alerts %}, and even open pull requests to attempt to resolve them. To configure {% data variables.dependabot.auto_triage_rules %}, click {% octicon "gear" aria-label="Configure {% data variables.product.prodname_dependabot %} rules" %}, then create or edit a rule:
  - You can create a new rule by clicking **New rule**, then entering the details for your rule and clicking **Create rule**.
  - You can edit an existing rule by clicking {% octicon "pencil" aria-label="Edit CURATED-OR-CUSTOM rule" %}, then making the desired changes and clicking **Save rule**.

For more information on {% data variables.dependabot.auto_triage_rules %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules)" and "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts#adding-custom-auto-triage-rules-to-your-organization)."

### Grouping {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot %} can group all automatically suggested security updates into a single pull request to reduce noise. To enable grouped security updates, select **Grouped security updates**. For more information about grouped updates and customization options, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#grouping-dependabot-security-updates-into-a-single-pull-request)."

{% ifversion fpt or ghec %}

### Enabling dependency updates on {% data variables.product.prodname_actions %} runners

You can allow {% data variables.product.prodname_dependabot %} to use {% data variables.product.prodname_actions %} runners and the {% data variables.product.prodname_dependabot %} action to perform dependency updates. To enable {% data variables.product.prodname_dependabot %} for {% data variables.product.company_short %}-hosted runners on all repositories in your organization, click **Enable all**. To automatically enable {% data variables.product.prodname_dependabot %} for {% data variables.product.company_short %}-hosted runners on new repositories in your organization, select **Automatically enable for new repositories**. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners)."

{% data reusables.dependabot.dependabot-on-actions-self-hosted-link %}

{% endif %}

### Granting {% data variables.product.prodname_dependabot %} access to private {% ifversion ghec or ghes %}and internal {% endif %}repositories

To update private dependencies of repositories in your organization, {% data variables.product.prodname_dependabot %} needs access to those repositories. To grant {% data variables.product.prodname_dependabot %} access to the desired private {% ifversion ghec or ghes %}or internal {% endif %}repository, scroll down to the "Grant {% data variables.product.prodname_dependabot %} access to private repositories" section, then use the search bar to find and select the desired repository. Be aware that granting {% data variables.product.prodname_dependabot %} access to a repository means all users in your organization will have access to the contents of that repository through {% data variables.product.prodname_dependabot_updates %}. For more information about the supported ecosystems for private repositories, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems)."

## Configuring global {% data variables.product.prodname_code_scanning %} settings

{% data reusables.code-scanning.about-code-scanning %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_code_scanning %}:

- [Recommending the extended query suite for default setup](#recommending-the-extended-query-suite-for-default-setup){% ifversion code-scanning-autofix %}
- [Enabling autofix for {% data variables.product.prodname_codeql %}](#enabling-autofix-for-codeql) {% endif %}
- [Setting a failure threshold for {% data variables.product.prodname_code_scanning %} checks in pull requests](#setting-a-failure-threshold-for-code-scanning-checks-in-pull-requests)

### Recommending the extended query suite for default setup

{% data variables.product.prodname_code_scanning_caps %} offers specific groups of {% data variables.product.prodname_codeql %} queries, called {% data variables.product.prodname_codeql %} query suites, to run against your code. By default, the "Default" query suite is run. {% data variables.product.company_short %} also offers the "Extended" query suite, which contains all the queries in the "Default" query suite, plus additional queries with lower precision and severity. To suggest the "Extended" query suite across your organization, select **Recommend the extended query suite for repositories enabling default setup**. For more information on built-in query suites for {% data variables.product.prodname_codeql %} default setup, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites)."

{% ifversion code-scanning-autofix %}

### Enabling autofix for {% data variables.product.prodname_codeql %}

You can select **Autofix for {% data variables.product.prodname_codeql %}** to enable autofix for all the repositories in your organization that use {% data variables.product.prodname_codeql %} default setup or {% data variables.product.prodname_codeql %} advanced setup. Autofix is a {% data variables.product.prodname_copilot %}-powered expansion of {% data variables.product.prodname_code_scanning %} that suggests fixes for {% data variables.product.prodname_code_scanning %} alerts in pull requests. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)."

{% endif %}

### Setting a failure threshold for {% data variables.product.prodname_code_scanning %} checks in pull requests

You can choose the severity levels at which {% data variables.product.prodname_code_scanning %} check runs on pull requests will fail. To choose a security severity level, select the **Security: SECURITY-SEVERITY-LEVEL** dropdown menu, then click a security severity level. To choose an alert severity level, select the **OTHER: ALERT-SEVERITY-LEVEL** dropdown menu, then click an alert severity level. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."

## Configuring global {% data variables.product.prodname_secret_scanning %} settings

{% data reusables.security-configurations.secret-scanning-security-configs-summary %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_secret_scanning %}:

{% ifversion secret-scanning-validity-check-partner-patterns %}
- [Verifying partner pattern secrets automatically](#verifying-partner-pattern-secrets-automatically){% endif %}{% ifversion secret-scanning-non-provider-patterns %}
- [Scanning for non-provider patterns](#scanning-for-non-provider-patterns){% endif %}
- [Adding a resource link for blocked commits](#adding-a-resource-link-for-blocked-commits){% ifversion ghec or ghes %}
- [Defining custom patterns](#defining-custom-patterns){% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

### Verifying partner pattern secrets automatically

To reduce the rate of false positive {% data variables.product.prodname_secret_scanning %} alerts, you can automatically verify the validity of some partner pattern secrets by sending each secret to the provider. To enable this automatic verification, select **Automatically verify if a secret is valid by sending it to the relevant partner**. For information on which partners support validity checks, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning#checking-a-secrets-validity)."

{% endif %}
{% ifversion secret-scanning-non-provider-patterns %}

### Scanning for non-provider patterns

You can choose to scan for non-provider patterns, such as private keys, to detect non-provider secrets before they are leaked. To enable these scans, select **Scan for non-provider patterns**. Be aware that non-provider tokens often have a higher rate of false positives. To learn more about non-provider patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#about-user-alerts)" and "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning#other-alerts-list)."

   {% data reusables.secret-scanning.non-provider-patterns-beta %}

{% endif %}

### Adding a resource link for blocked commits

To provide context for developers when {% data variables.product.prodname_secret_scanning %} blocks a commit, you can display a link with more information on why the commit was blocked. To include a link, select **Add a resource link in the CLI and the web UI when a commit is blocked**. In the text box, type the link to the desired resource, then click **Save**.
{% ifversion ghec or ghes %}

### Defining custom patterns

You can define custom patterns for {% data variables.product.prodname_secret_scanning %} with regular expressions. Custom patterns can identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. To create a custom pattern, click **New pattern**, then enter the details for your pattern and click **Save and dry run**. For more information on custom patterns, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

{% endif %}

## Creating security managers for your organization

The security manager role grants members of your organization the ability to manage security settings and alerts across your organization. To grant all members of a team the security manager role, in the "Search for teams" text box, type the name of the desired team. In the dropdown menu that appears, click the team, then click **I understand, grant security manager permissions**.

Security managers can view data for all repositories in your organization through security overview. To learn more about the security manager role, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
