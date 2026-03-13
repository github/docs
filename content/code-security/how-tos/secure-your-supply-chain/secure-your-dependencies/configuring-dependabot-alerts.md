---
title: Configuring Dependabot alerts
intro: Enable {% data variables.product.prodname_dependabot_alerts %} to be generated when a new vulnerable dependency is found in one of your repositories.
shortTitle: Configure Dependabot alerts
permissions: '{% data reusables.permissions.dependabot-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
redirect_from:
  - /code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts
  - /code-security/dependabot/dependabot-alerts
contentType: how-tos
---

When {% data variables.product.prodname_dependabot %} detects vulnerable dependencies in a repository, it generates alerts. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for:
* Your personal account
* Your repository
* Your organization{% ifversion dependabot-alerts-enterprise-enablement or ghes %}
* Your enterprise{% endif %}

{% ifversion ghes %}
> [!NOTE]
> An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can configure {% data variables.product.prodname_dependabot_alerts %}. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your personal account

{% ifversion fpt or ghec %}

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your personal account.

<a href="https://github.com/settings/security_analysis?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Go to your security settings</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for existing repositories

1. Under "{% data variables.product.UI_advanced_security %}", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, to enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you create, in the dialog box, select "Enable by default for new repositories".
1. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories you own.

When you enable {% data variables.product.prodname_dependabot_alerts %} for existing repositories, you will see any results displayed on GitHub within minutes.

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for new repositories

1. Under "{% data variables.product.UI_advanced_security %}", to the right of {% data variables.product.prodname_dependabot_alerts %}, select **Automatically enable for new repositories**.

{% else %}
{% data variables.product.prodname_dependabot_alerts %} for your repositories can be enabled or disabled by your enterprise owner. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your repository

You can manage {% data variables.product.prodname_dependabot_alerts %} for your public, private or internal repository.

By default, we notify people with write, maintain, or admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.github %} never publicly discloses insecure dependencies for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working on repositories that you own or have admin permissions for.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% ifversion ghes %}
An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can manage {% data variables.product.prodname_dependabot_alerts %} for your repository. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).{% endif %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.UI_advanced_security %}", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Enable** to enable alerts or **Disable** to disable alerts.

## Managing {% data variables.product.prodname_dependabot_alerts %} for your organization

{% ifversion security-configurations %} You can enable {% data variables.product.prodname_dependabot_alerts %} for all eligible repositories in your organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

{% else %}

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for some or all repositories owned by your organization. {% data reusables.security.note-securing-your-org %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for all existing repositories

You can use security overview to find a set of repositories and enable or disable {% data variables.product.prodname_dependabot_alerts %} for them all at the same time. For more information, see [AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories).

You can also use the organization settings page for "{% data variables.product.UI_advanced_security %}" to enable or disable {% data variables.product.prodname_dependabot_alerts %} for all existing repositories in an organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Under "{% data variables.product.UI_advanced_security %}", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, to enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories in your organization, in the dialog box, select "Enable by default for new repositories".
1. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories in your organization.

{% endif %}

{% ifversion ghec or ghes %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your enterprise

{% ifversion security-configuration-enterprise-level %}

{% data variables.product.prodname_security_configurations_caps %}, which are collections of security settings,  allow you to manage {% data variables.product.prodname_dependabot_alerts %} for your enterprise. {% ifversion ghec %}You can:

* Use the {% data variables.product.prodname_github_security_configuration %}. This configuration is maintained by {% data variables.product.github %} and is a set of industry best practices and features that provide a robust, baseline security posture for enterprises. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/applying-the-github-recommended-security-configuration-to-your-enterprise).
* Configure your own {% data variables.product.prodname_custom_security_configuration %} if you prefer the enablement settings to meet the specific security needs of your enterprise. {% endif %}See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

{% else %}

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all current and future repositories owned by organizations in your enterprise. Your changes affect all repositories.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. In the "{% data variables.product.prodname_dependabot %}" section, to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
1. Optionally, select **Automatically enable for new repositories** to enable {% data variables.product.prodname_dependabot_alerts %} by default for your organizations' new repositories.
{% endif %}

{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} at scale with rules

{% data reusables.dependabot.dependabot-alert-rules %}
