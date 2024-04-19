---
title: Customizing auto-triage rules to prioritize Dependabot alerts
intro: 'You can create your own {% data variables.dependabot.auto_triage_rules_short %} to control which alerts are dismissed or snoozed, and which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for.'
permissions: 'People with write permissions can view {% data variables.dependabot.auto_triage_rules %} for the repository. People with admin permissions to a repository can enable or disable {% data variables.dependabot.auto_triage_rules_short %} for the repository, as well as create {% data variables.dependabot.custom_rules %}. Additionally, organization owners and security managers can set {% data variables.dependabot.auto_triage_rules_short %} at the organization-level and optionally choose to enforce rules for repositories in the organization.'
product: '{% data reusables.gated-features.dependabot-custom-auto-triage-rules %}'
versions:
  feature: dependabot-auto-triage-rules
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Custom auto-triage rules
redirect_from:
  - /code-security/dependabot/dependabot-alert-rules/customizing-alert-rules-to-prioritize-dependabot-alerts
---

{% data reusables.dependabot.dependabot-auto-triage-rules-beta %}

## About {% data variables.dependabot.custom_rules %}

You can create your own {% data variables.dependabot.auto_triage_rules %} based on alert metadata. You can choose to auto-dismiss alerts indefinitely, or snooze alerts until a patch becomes available, and you can specify which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for.

Since any rules that you create apply to both future and current alerts, you can also use {% data variables.dependabot.auto_triage_rules_short %} to manage your {% data variables.product.prodname_dependabot_alerts %} in bulk.

Repository administrators can create {% data variables.dependabot.custom_rules %} for their {% ifversion fpt %}public{% elsif ghec or ghes %}public, private, and internal{% endif %} repositories.

Organization owners and security managers can set {% data variables.dependabot.custom_rules %} at the organization-level, and then choose if a rule is enforced or enabled across all public {% ifversion ghec %}and private {% endif %} repositories in the organization.

   - **Enforced**: If an organization-level rule is "enforced", repository administrators cannot edit, disable, or delete the rule.
   - **Enabled**: If an organization-level rule is "enabled", repository administrators can still disable the rule for their repository.

{% note %}

**Note:** In the event that an organization-level rule and a repository-level rule specify conflicting behaviors, the action set out by the organization-level rule takes precedence. Dismissal rules always act before rules which trigger {% data variables.product.prodname_dependabot %} pull requests.

{% endnote %}

You can create rules to target alerts using the following metadata:

- CVE ID
- CWE
- Dependency scope (`devDependency` or `runtime`)
- Ecosystem
- GHSA ID
- Manifest path (for repository-level rules only)
- Package name
- Patch availability
- Severity

### Understanding how {% data variables.dependabot.custom_rules %} and {% data variables.product.prodname_dependabot_security_updates %} interact

You can use {% data variables.dependabot.custom_rules %} to tailor which alerts you want {% data variables.product.prodname_dependabot %} to open pull requests for. However, for an "open a pull request" rule to take effect, you must ensure that {% data variables.product.prodname_dependabot_security_updates %} are **disabled** for the repository (or repositories) that the rule should apply to.

When {% data variables.product.prodname_dependabot_security_updates %} are enabled for a repository, {% data variables.product.prodname_dependabot %} will automatically try to open pull requests to resolve **every** open {% data variables.product.prodname_dependabot %} alert that has an available patch. If you prefer to customize this behavior using a rule, you must leave {% data variables.product.prodname_dependabot_security_updates %} disabled.

For more information about enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for a repository, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#managing-dependabot-security-updates-for-your-repositories)."

## Adding {% data variables.dependabot.custom_rules %} to your repository

{% note %}

**Note:** During the public beta, you can create up to 10 {% data variables.dependabot.custom_rules %} for a repository.

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
   - Select **Dismiss alerts** to auto-dismiss alerts that match the metadata. You can choose to dismiss alerts indefinitely or until a patch is available.
   - Select **Open a pull request to resolve this alert** if you want {% data variables.product.prodname_dependabot %} to suggest changes to resolve alerts that match the targeted metadata. Note that this option is unavailable if you have already selected the option to dismiss alerts indefinitely, or if {% data variables.product.prodname_dependabot_security_updates %} are enabled in your repository settings.
{% data reusables.dependabot.dependabot-alert-rules-click-create-rule %}

## Adding {% data variables.dependabot.custom_rules %} to your organization

{% note %}

**Note:** During the public beta, you can create up to 25 {% data variables.dependabot.custom_rules %} for your organization.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For next steps on adding {% data variables.dependabot.auto_triage_rules %} to your organization with {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#creating-and-managing-dependabot-auto-triage-rules)."
{% endif %}

{% data reusables.dependabot.navigate-to-org-level-dependabot-alert-rules %}
{% data reusables.dependabot.click-new-alert-rule %}
{% data reusables.dependabot.dependabot-alert-rule-set-name %}
1. Under "State", use the dropdown menu to choose how you want to apply the rule.
   - Choose **Enforced** to prevent repository administrators from being able to edit, disable, or delete the rule in the repository's settings page.
   - Choose **Enabled** to set the rule on-by-default for all repositories, while also allowing repository administrators to disable the rule in the repository's settings page.
   - Alternatively, you can choose to set the rule as **Disabled**, which cannot be overridden at the repository level. Disabled rules are hidden for all repositories.
{% data reusables.dependabot.target-alerts-metadata %}
1. Under "Rules", select the action you want to take on alerts that match the metadata:
   - Select **Dismiss alerts** to auto-dismiss alerts that match the metadata. You can choose to dismiss alerts indefinitely, or until a patch is available.
   - Select **Open a pull request to resolve this alert** if you want {% data variables.product.prodname_dependabot %} to suggest changes to resolve alerts that match the metadata. Note that this option is unavailable if you have selected the option to dismiss the alerts indefinitely.
{% data reusables.dependabot.dependabot-alert-rules-click-create-rule %}

## Editing or deleting {% data variables.dependabot.custom_rules %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.dependabot.navigate-to-repo-level-dependabot-alert-rules %}
1. Under "Repository rules", to the right of the rule that you want to edit or delete, click {% octicon "pencil" aria-label="Edit custom rule" %}.
{% data reusables.dependabot.custom-alert-rules-edit-rule %}
{% data reusables.dependabot.custom-alert-rules-delete-rule %}

## Editing or deleting {% data variables.dependabot.custom_rules %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For next steps on editing or deleting {% data variables.dependabot.auto_triage_rules %} in your organization with {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#creating-and-managing-dependabot-auto-triage-rules)."
{% endif %}

{% data reusables.dependabot.navigate-to-org-level-dependabot-alert-rules %}
1. Under "Organization rules", to the right of the rule that you want to edit or delete, click {% octicon "pencil" aria-label="Edit custom rule" %}.
{% data reusables.dependabot.custom-alert-rules-edit-rule %}
{% data reusables.dependabot.custom-alert-rules-delete-rule %}
