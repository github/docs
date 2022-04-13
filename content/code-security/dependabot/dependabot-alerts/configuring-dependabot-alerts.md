---
title: Configuring Dependabot alerts
intro: 'Enable {% data variables.product.prodname_dependabot_alerts %} to be notified when a new vulnerability is found in one of your dependencies.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
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

## About {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies

{% data reusables.repositories.a-vulnerability-is %} 

Dependabot performs a scan to detect vulnerable dependencies and sends Dependabot alerts when a new vulnerability is added to the GitHub Advisory Database or the dependency graph for a repository changes. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for:
* Your personal account
* Your repository
* Your organization

## Managing {% data variables.product.prodname_dependabot_alerts %} for your personal account
You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your personal account.

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Screenshot of "Configure security and analysis" features with "Enable all" or "Disable all" buttons emphasized](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png){% endif %}
4. Optionally, enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Screenshot of "Enable Dependabot alerts" with "Enable by default for new private repositories" checkbox emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png){% endif %}
5. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories you own.
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Screenshot of "Enable Dependabot alerts" with "Enable  Dependabot alerts" button emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png){% endif %}

When you enable {% data variables.product.prodname_dependabot_alerts %} for existing repositories, you will see any results displayed on GitHub within minutes.

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, enable or disable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you create.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Screenshot of "Configure security and analysis" with "Enable  for all new private repositories" check emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png){% endif %} 

## Managing {% data variables.product.prodname_dependabot_alerts %} for your repository

{% ifversion fpt or ghec %}You can manage {% data variables.product.prodname_dependabot_alerts %} for your public, private or internal repository.
{% ifversion fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} have extra options available. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).{% endif %} 

By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working repositories that you own or have admin permissions for.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for public or private repositories

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable** or **Enable**. {% ifversion fpt or ghec %}
  ![Screenshot of "Configure security and analysis" features with the "Disable" button emphasized for Dependabot alerts](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt-private.png){% endif %}
 {% endif %}{% ifversion ghes or ghae %}

{% data variables.product.prodname_dependabot_alerts %} for your repository can be enabled or disabled by your enterprise owner. For more information, see "[About Dependabot for GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

## Managing {% data variables.product.prodname_dependabot_alerts %} for your organization
{% ifversion fpt or ghec %}You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your organization.
{% ifversion fpt or ghec %}Your changes affect all repositories.{% endif %}

### Enabling or disabling {% data variables.product.prodname_dependabot_alerts %} for all existing repositories

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**. 
   {% ifversion fpt or ghec %}
   ![Screenshot of "Configure security and analysis" features with the "Enable all" or "Disable all" button emphasized for Dependabot alerts](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghae %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. Optionally, enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Screenshot of "Enable by default" option for new repositories](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png)
   {% endif %}
   
   {% endif %}
   {% ifversion fpt or ghec %}
4. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Screenshot of "Enable Dependabot alerts" modal with button to disable or enable feature emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png)
   {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %}
{% data variables.product.prodname_dependabot_alerts %} for your organization can be enabled or disabled by your enterprise owner. For more information, see "[About Dependabot for GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}