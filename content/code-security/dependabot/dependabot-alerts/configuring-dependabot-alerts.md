---
title: Configuring Dependabot alerts
intro: 'Enable {% data variables.product.prodname_dependabot_alerts %} to be generated when a new vulnerable dependency {% ifversion GH-advisory-db-supports-malware %}or malware {% endif %}is found in one of your repositories.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## About {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.prodname_dependabot %} scans code when a new advisory is added to the {% data variables.product.prodname_advisory_database %} or the dependency graph for a repository changes. When vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} are detected, {% data variables.product.prodname_dependabot_alerts %} are generated. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

{% data reusables.dependabot.dependabot-alert-create-PR %}

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for:
- Your personal account
- Your repository
- Your organization{% ifversion dependabot-alerts-enterprise-enablement or ghes > 3.8 %}
- Your enterprise{% endif %}

{% ifversion dependabot-alert-custom-rules-repo-level %}

{% data reusables.dependabot.dependabot-alert-rules %}

{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your personal account

{% ifversion fpt or ghec %}

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your personal account.

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, to enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you create, in the dialog box, select "Enable by default for new repositories".
1. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories you own.

When you enable {% data variables.product.prodname_dependabot_alerts %} for existing repositories, you will see any results displayed on GitHub within minutes.

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, select **Automatically enable for new repositories**.

{% else %}
{% data variables.product.prodname_dependabot_alerts %} for your repositories can be enabled or disabled by your enterprise owner. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your repository

{% ifversion fpt or ghec or ghes > 3.8 %}You can manage {% data variables.product.prodname_dependabot_alerts %} for your public, private or internal repository.{% endif %}

By default, we notify people with {% ifversion dependabot-alerts-permissions-write-maintain %}write, maintain, or {% endif %}admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.product_name %} never publicly discloses insecure dependencies for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working on repositories that you own or have admin permissions for.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% ifversion dependabot-alerts-ghes-enablement %}
An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can manage {% data variables.product.prodname_dependabot_alerts %} for your repository. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."{% endif %}

{% ifversion fpt or ghec or ghes > 3.8 %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Enable** to enable alerts or **Disable** to disable alerts.

{% endif %}
{% ifversion ghes < 3.9 or ghae %}

{% data variables.product.prodname_dependabot_alerts %} for your repository can be enabled or disabled by your enterprise owner. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your organization

{% ifversion fpt or ghec or ghes > 3.8 %}You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for some or all repositories owned by your organization. {% data reusables.security.note-securing-your-org %}

{% ifversion dependabot-alerts-ghes-enablement %}
An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can manage {% data variables.product.prodname_dependabot_alerts %} for your repository. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."{% endif %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for all existing repositories

{% ifversion code-security-multi-repo-enablement %}
You can use security overview to find a set of repositories and enable or disable {% data variables.product.prodname_dependabot_alerts %} for them all at the same time. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."

You can also use the organization settings page for "Code security and analysis" to enable or disable {% data variables.product.prodname_dependabot_alerts %} for all existing repositories in an organization.
{% else %}
You can use the organization settings page for "Code security and analysis" to enable {% data variables.product.prodname_dependabot_alerts %} for all existing repositories in an organization.
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, to enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories in your organization, in the dialog box, select "Enable by default for new repositories".
1. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories in your organization.
{% endif %}

{% ifversion ghes < 3.9 or ghae %}
{% data variables.product.prodname_dependabot_alerts %} for your organization can be enabled or disabled by your enterprise owner. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

{% ifversion dependabot-alerts-enterprise-enablement or ghes > 3.8 %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your enterprise

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all current and future repositories owned by organizations in your enterprise. Your changes affect all repositories.

{% endif %}

{% ifversion dependabot-alerts-enterprise-enablement %}
{% note %}

**Note:** When {% data variables.product.prodname_dependabot_alerts %} are enabled or disabled at the enterprise level, it overrides the organization and repository level settings for {% data variables.product.prodname_dependabot_alerts %}.

{% endnote%}
{% endif %}

{% ifversion dependabot-alerts-enterprise-enablement or ghes > 3.8 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security and analysis**.
1. In the "{% data variables.product.prodname_dependabot %}" section, to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, select **Automatically enable for new repositories** to enable {% data variables.product.prodname_dependabot_alerts %} by default for your organizations' new repositories.
{% endif %}
