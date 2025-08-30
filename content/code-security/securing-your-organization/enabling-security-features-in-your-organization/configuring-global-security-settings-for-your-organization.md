---
title: Configuring global security settings for your organization
shortTitle: Configure global settings
intro: 'Customize {% data variables.product.prodname_AS %} features to strengthen the security of your organization.'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
---

## About {% data variables.product.prodname_global_settings %}

Alongside {% data variables.product.prodname_security_configurations %}, which determine repository-level security settings, you should also configure {% data variables.product.prodname_global_settings %} for your organization. {% data variables.product.prodname_global_settings_caps %} apply to your entire organization, and can customize {% data variables.product.prodname_AS %} features based on your needs. {% ifversion ghes < 3.16 %}You can also create a team of security managers to monitor and maintain your organization's security.{% endif %}

## Accessing the {% data variables.product.prodname_global_settings %} page for your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, select the **{% data variables.product.UI_advanced_security %}** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.

## Configuring global {% data variables.product.prodname_dependabot %} settings

{% data reusables.dependabot.dependabot-overview %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_dependabot %}:

* [Creating and managing {% data variables.dependabot.auto_triage_rules %}](#creating-and-managing-dependabot-auto-triage-rules)
* [Grouping {% data variables.product.prodname_dependabot %} security updates](#grouping-dependabot-security-updates){% ifversion fpt or ghec %}
* [Enabling dependency updates on {% data variables.product.prodname_actions %} runners](#enabling-dependency-updates-on-github-actions-runners){% endif %}{% ifversion fpt %}
* [Granting {% data variables.product.prodname_dependabot %} access to private repositories](#granting-dependabot-access-to-private-repositories){% else %}
* [Granting {% data variables.product.prodname_dependabot %} access to private and internal repositories](#granting-dependabot-access-to-private-and-internal-repositories){% endif %}

### Creating and managing {% data variables.dependabot.auto_triage_rules %}

You can create and manage {% data variables.dependabot.auto_triage_rules %} to instruct {% data variables.product.prodname_dependabot %} to automatically dismiss or snooze {% data variables.product.prodname_dependabot_alerts %}, and even open pull requests to attempt to resolve them. To configure {% data variables.dependabot.auto_triage_rules %}, click {% octicon "gear" aria-label="Configure Dependabot rules" %}, then create or edit a rule:
  * You can create a new rule by clicking **New rule**, then entering the details for your rule and clicking **Create rule**.
  * You can edit an existing rule by clicking {% octicon "pencil" aria-label="Edit CURATED-OR-CUSTOM rule" %}, then making the desired changes and clicking **Save rule**.

For more information on {% data variables.dependabot.auto_triage_rules %}, see [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules) and [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/customizing-auto-triage-rules-to-prioritize-dependabot-alerts#adding-custom-auto-triage-rules-to-your-organization).

### Grouping {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot %} can group all automatically suggested security updates into a single pull request. To enable grouped security updates, select **Grouped security updates**. For more information about grouped updates and customization options, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#grouping-dependabot-security-updates-into-a-single-pull-request).

{% ifversion dependabot-on-actions-opt-in %}

### Enabling dependency updates on {% data variables.product.prodname_actions %} runners

If both {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_actions %} are enabled for existing repositories in your organization, {% data variables.product.company_short %} will automatically use {% data variables.product.company_short %}-hosted runners to run dependency updates for those repositories.

Otherwise, to allow {% data variables.product.prodname_dependabot %} to use {% data variables.product.prodname_actions %} runners to perform dependency updates for all existing repositories in the organization, select "{% data variables.product.prodname_dependabot %} on Actions runners".

For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners).

{% data reusables.dependabot.dependabot-on-actions-self-hosted-link %}

{% endif %}

### Granting {% data variables.product.prodname_dependabot %} access to private {% ifversion ghec or ghes %}and internal {% endif %}repositories

To update private dependencies of repositories in your organization, {% data variables.product.prodname_dependabot %} needs access to those repositories. To grant {% data variables.product.prodname_dependabot %} access to the desired private {% ifversion ghec or ghes %}or internal {% endif %}repository, scroll down to the "Grant {% data variables.product.prodname_dependabot %} access to private repositories" section, then use the search bar to find and select the desired repository. Be aware that granting {% data variables.product.prodname_dependabot %} access to a repository means all users in your organization will have access to the contents of that repository through {% data variables.product.prodname_dependabot_updates %}. For more information about the supported ecosystems for private repositories, see [AUTOTITLE](/code-security/dependabot/ecosystems-supported-by-dependabot/supported-ecosystems-and-repositories).

## Configuring global {% data variables.product.prodname_code_scanning %} settings

{% data reusables.code-scanning.about-code-scanning %}

{% ifversion ghes > 3.16 %}
<!-- There is only one bullet point in this section, so we don't display a list for GHES 3.17. -->
{% else %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_code_scanning %}:

{% ifversion code-scanning-autofix %}
* [Enabling {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_codeql %}](#enabling-copilot-autofix-for-codeql)
* [Enabling {% data variables.copilot.copilot_autofix_short %} for third-party {% data variables.product.prodname_code_scanning %} tools](#enabling-copilot-autofix-for-third-party-code-scanning-tools) {% endif %}
* [Recommending the extended query suite for default setup](#recommending-the-extended-query-suite-for-default-setup){% ifversion ghes < 3.17 %}
* [Setting a failure threshold for {% data variables.product.prodname_code_scanning %} checks in pull requests](#setting-a-failure-threshold-for-code-scanning-checks-in-pull-requests)

{% endif %}

### Recommending the extended query suite for default setup

{% data variables.product.prodname_code_scanning_caps %} offers specific groups of {% data variables.product.prodname_codeql %} queries, called {% data variables.product.prodname_codeql %} query suites, to run against your code. By default, the "Default" query suite is run. {% data variables.product.company_short %} also offers the "Extended" query suite, which contains all the queries in the "Default" query suite, plus additional queries with lower precision and severity. To suggest the "Extended" query suite across your organization, select **Recommend the extended query suite for repositories enabling default setup**. For more information on built-in query suites for {% data variables.product.prodname_codeql %} default setup, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites).

{% ifversion code-scanning-autofix %}

### Enabling {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_codeql %}

You can select **{% data variables.copilot.copilot_autofix_short %}** to enable {% data variables.copilot.copilot_autofix_short %} for all the repositories in your organization that use {% data variables.product.prodname_codeql %} default setup or {% data variables.product.prodname_codeql %} advanced setup. {% data variables.copilot.copilot_autofix_short %} is an expansion of {% data variables.product.prodname_code_scanning %} that suggests fixes for {% data variables.product.prodname_code_scanning %} alerts. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

### Enabling {% data variables.copilot.copilot_autofix_short %} for third-party {% data variables.product.prodname_code_scanning %} tools

>[!NOTE]
> Third-party {% data variables.product.prodname_code_scanning %} tool support is in {% data variables.release-phases.public_preview %}, and subject to change. Currently, the third-party tool ESLint is supported. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

You can select **{% data variables.copilot.copilot_autofix_short %} for third-party tools** to enable {% data variables.copilot.copilot_autofix_short %} for all the repositories in your organization that use third-party tools. {% data variables.copilot.copilot_autofix_short %} is an expansion of {% data variables.product.prodname_code_scanning %} that suggests fixes for {% data variables.product.prodname_code_scanning %} alerts.

{% endif %}

{% ifversion ghes < 3.17 %}

### Setting a failure threshold for {% data variables.product.prodname_code_scanning %} checks in pull requests

You can choose the severity levels at which {% data variables.product.prodname_code_scanning %} check runs on pull requests will fail. To choose a security severity level, select the **Security: SECURITY-SEVERITY-LEVEL** dropdown menu, then click a security severity level. To choose an alert severity level, select the **OTHER: ALERT-SEVERITY-LEVEL** dropdown menu, then click an alert severity level. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels).

{% endif %}

## Configuring global {% data variables.product.prodname_secret_scanning %} settings

{% data reusables.security-configurations.secret-scanning-security-configs-summary %}

You can customize several {% data variables.product.prodname_global_settings %} for {% data variables.product.prodname_secret_scanning %}:

* [Adding a resource link for blocked commits](#adding-a-resource-link-for-blocked-commits)
* [Defining custom patterns](#defining-custom-patterns){% endif %}{% ifversion push-protected-pattern-configuration %}
* [Specifying patterns to include in push protection](#specifying-patterns-to-include-in-push-protection){% endif %}

### Adding a resource link for blocked commits

To provide context for developers when {% data variables.product.prodname_secret_scanning %} blocks a commit, you can display a link with more information on why the commit was blocked. To include a link, select **Add a resource link in the CLI and the web UI when a commit is blocked**. In the text box, type the link to the desired resource, then click {% ifversion fpt or ghec or ghes > 3.15 %}**Save Link**{% else %}**Save**{% endif %}.

### Defining custom patterns

You can define custom patterns for {% data variables.product.prodname_secret_scanning %} with regular expressions. Custom patterns can identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. To create a custom pattern, click **New pattern**, then enter the details for your pattern and click **Save and dry run**. For more information on custom patterns, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

{% ifversion push-protected-pattern-configuration %}

### Specifying patterns to include in push protection

{% data reusables.secret-scanning.push-protected-pattern-configuration-org-enterprise-preview %}

You can customize which secret patterns are included in push protection, giving security teams greater control over what types of secrets are blocked in the repositories in your organization.

1. Under "Additional settings", in the "{% data variables.product.prodname_secret_scanning_caps %}" section and to the right of "Pattern configurations", click **{% octicon "gear" aria-label="The Gear icon" %}**.
1. In the page that gets displayed, make the desired changes in the "Organization setting" column.
{% data reusables.secret-scanning.pattern-enablement-org-enterprise %}

{% endif %}

## Creating security managers for your organization

The security manager role grants members of your organization the ability to manage security settings and alerts across your organization. Security managers can view data for all repositories in your organization through security overview.

To learn more about the security manager role, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

{% ifversion fpt or ghec or ghes > 3.15 %}

To assign the security manager role, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

{% else %}

To grant all members of a team the security manager role, in the "Search for teams" text box, type the name of the desired team. In the dropdown menu that appears, click the team, then click **I understand, grant security manager permissions**.

{% endif %}
