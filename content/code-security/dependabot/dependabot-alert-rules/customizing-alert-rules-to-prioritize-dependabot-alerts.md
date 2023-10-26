---
title: Customizing alert rules to prioritize Dependabot alerts
intro: 'You can create your own user-defined rules to auto-triage alerts.'
permissions: 'People with write permissions can view {% data variables.product.prodname_dependabot %} alert rules for the repository. People with admin permissions to a repository can enable or disable {% data variables.product.prodname_dependabot %} alert rules for the repository{% ifversion dependabot-alert-custom-rules-repo-level %}, as well as create custom alert rules{% endif %}.{% ifversion dependabot-alerts-custom-rules-updates %} Additionally, organization owners and security managers can set alert rules at the organization-level and optionally choose to enforce rules for repositories in the organization.{% endif %}'
product: '{% data reusables.gated-features.dependabot-alert-rules %}'
versions:
  feature: dependabot-alert-rules-auto-dismissal-npm-dev-dependencies
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Custom alert rules
---

{% data reusables.dependabot.github-alert-rules-beta %}

## About custom alert rules

You can create your own {% data variables.product.prodname_dependabot %} alert rules based on alert metadata. You can choose to auto-dismiss alerts indefinitely, or snooze alerts until a patch becomes available{% ifversion dependabot-alerts-custom-rules-updates %}, and you can specify which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for{% endif %}.

Since any rules that you create apply to both future and current alerts, you can also use alert rules to manage your {% data variables.product.prodname_dependabot_alerts %} in bulk.

You can create rules using the following criteria:

- Dependency scope (`devDependency` or `runtime`)
- Package name
- CWE
- Severity
- Patch availability
- Manifest path
- Ecosystem

Repository administrators can create alert rules for their {% ifversion fpt %}public{% elsif ghec or ghes %}public, private, and internal{% endif %} repositories.

{% ifversion dependabot-alerts-custom-rules-updates %}

Organization owners and security managers can set alert rules at the organization-level, and then choose if a rule is enforced or enabled across all public {% ifversion ghec %}and private {% endif %} repositories in the organization.

   - **Enforced**: If an organization-level alert rule is "enforced", repository administrators cannot edit, disable, or delete the rule.
   - **Enabled**: If an organization-level alert rule is "enabled", repository administrators can still disable the rule for their repository.

{% note %}

**Note:** In the event that an organization-level rule and a repository-level rule specify conflicting behaviors, the action set out by the organization-level rule takes precedence. Dismissal rules always act before rules which trigger {% data variables.product.prodname_dependabot %} pull requests.

{% endnote %}

### Understanding how custom alert rules and {% data variables.product.prodname_dependabot_security_updates %} interact

You can use alert rules to tailor which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for. However, for an "open a pull request" rule to take effect, you must ensure that {% data variables.product.prodname_dependabot_security_updates %} are **disabled** for the repository (or repositories) that the rule should apply to.

When {% data variables.product.prodname_dependabot_security_updates %} are enabled for a repository, {% data variables.product.prodname_dependabot %} will automatically try to open pull requests to resolve **every** open {% data variables.product.prodname_dependabot %} alert that has an available patch. If you prefer to customize this behavior using an alert rule, you must leave {% data variables.product.prodname_dependabot_security_updates %} disabled.

For more information about enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for a repository, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#managing-dependabot-security-updates-for-your-repositories)."

{% endif %}

## Adding a custom alert rule to your repository

{% note %}

**Note:** During the public beta, you can create up to 10 custom rules for a repository.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.dependabot.navigate-to-repo-level-dependabot-alert-rules %}
{% data reusables.dependabot.click-new-alert-rule %}
{% data reusables.dependabot.dependabot-alert-rule-set-name %}
1. Under "State", use the dropdown menu to select whether the rule should be enabled or disabled for the repository.
{% data reusables.dependabot.target-alerts-metadata %}
1. Under "Rules", select the action you want to take on alerts that match the metadata:
   - Select **Dismiss alerts** to auto-dismiss alerts that match the metadata. You can choose to dismiss alerts indefinitely or until a patch is available.{% ifversion dependabot-alerts-custom-rules-updates %}
   - Select **Open a pull request to resolve this alert** if you want {% data variables.product.prodname_dependabot %} to suggest changes to resolve alerts that match the targeted metadata. Note that this option is unavailable if you have already selected the option to dismiss alerts indefinitely, or if {% data variables.product.prodname_dependabot_security_updates %} are enabled in your repository settings.{% endif %}
{% data reusables.dependabot.dependabot-alert-rules-click-create-rule %}

{% ifversion dependabot-alerts-custom-rules-updates %}

## Adding a custom alert rule to your organization

{% note %}

**Note:** During the public beta, you can create up to 25 custom rules for your organization.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.dependabot.navigate-to-org-level-dependabot-alert-rules %}
{% data reusables.dependabot.click-new-alert-rule %}
{% data reusables.dependabot.dependabot-alert-rule-set-name %}
1. Under "State", use the dropdown menu to choose how you want to apply the rule.
   - Choose **Enforced** to prevent repository administrators from being able to edit, disable, or delete the rule in the repository's settings page.
   - Choose **Enabled** to set the rule on-by-default for all repositories, while also allowing repository administrators to disable the rule in the repository's settings page.
   - Alternatively, you can choose to set the rule as **Disabled**, which cannot be overridden at the repository level. Disabled rules are hidden for all repositories.
{% data reusables.dependabot.target-alerts-metadata %}
1. Under "Rules", select the action you want to take on alerts that match the metadata:
   - Select **Dismiss alerts** to auto-dismiss alerts that match the metadata. You can choose to dismiss alerts indefinitely, or until a patch is available.{% ifversion dependabot-alerts-custom-rules-updates %}
   - Select **Open a pull request to resolve this alert** if you want {% data variables.product.prodname_dependabot %} to suggest changes to resolve alerts that match the metadata. Note that this option is unavailable if you have selected the option to dismiss the alerts indefinitely.{% endif %}
{% data reusables.dependabot.dependabot-alert-rules-click-create-rule %}

## Editing or deleting a custom alert rule for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.dependabot.navigate-to-repo-level-dependabot-alert-rules %}
1. Under "Repository rules", to the right of the alert rule that you want to edit or delete, click {% octicon "pencil" aria-label="Edit custom rule" %}.
{% data reusables.dependabot.custom-alert-rules-edit-rule %}
{% data reusables.dependabot.custom-alert-rules-delete-rule %}

## Editing or deleting a custom alert rule for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.dependabot.navigate-to-org-level-dependabot-alert-rules %}
1. Under "Organization rules", to the right of the alert rule that you want to edit or delete, click {% octicon "pencil" aria-label="Edit custom rule" %}.
{% data reusables.dependabot.custom-alert-rules-edit-rule %}
{% data reusables.dependabot.custom-alert-rules-delete-rule %}

{% endif %}
