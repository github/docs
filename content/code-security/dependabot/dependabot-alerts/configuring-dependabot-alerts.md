---
title: Configuring Dependabot alerts
intro: 'Enable {% data variables.product.prodname_dependabot_alerts %} to be notified when a new vulnerability is found in one of your dependencies.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## About Dependabot alerts for vulnerable dependencies

{% data reusables.repositories.a-vulnerability-is %} For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

## Managing Dependabot alerts for your personal account
You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your personal account.

### Enabling or disabling Dependabot alerts for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Screenshot of "Configure security and analysis" features with "Enable all" or "Disable all" buttons emphasized](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png){% endif %}
4. Optionally, enable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Screenshot of "Enable Dependabot alerts" with "Enable by default for new private repositories" checkbox emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png){% endif %}
5. Click **Disable {% data variables.product.prodname_dependabot_alerts %}** or **Enable {% data variables.product.prodname_dependabot_alerts %}** to disable or enable {% data variables.product.prodname_dependabot_alerts %} for all the repositories you own.
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Screenshot of "Enable Dependabot alerts" with "Enable  Dependabot alerts" button emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png){% endif %}

{% data reusables.security.displayed-information %}

### Enabling or disabling Dependabot alerts for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, enable or disable {% data variables.product.prodname_dependabot_alerts %} by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Screenshot of "Configure security and analysis" with "Enable  for all new private repositories" check emphasized](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png){% endif %}{% ifversion fpt or ghec %}

## Managing Dependabot alerts for your repository

By default, we notify people with admin permissions in the affected repositories about new {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. You can also make {% data variables.product.prodname_dependabot_alerts %} visible to additional people or teams working repositories that you own or have admin permissions for.{% endif %}

### Enabling or disabling Dependabot alerts for public repositories

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for public repositories. Other features are permanently enabled, including dependency graph and secret scanning.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable** or **Enable**.{% ifversion fpt %}
  ![Screenshot of Dependabot alerts in a public repository with "Enable" button emphasized](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt-public-repositories.png){% elsif ghec %}
  !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-public.png){% endif %}
{% endif %}

### Enabling or disabling Dependabot alerts{% ifversion fpt or ghec %} for private repositories{% endif %}

You can manage {% data variables.product.prodname_dependabot_alerts %} for your {% ifversion fpt or ghec %}private or internal {% endif %}repository.{% ifversion ghes or ghec %} If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} have extra options available. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% ifversion fpt or ghes or ghec %}
4. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable** or **Enable**. {% ifversion not fpt %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% endif %}{% ifversion fpt %}
  ![Screenshot of "Configure security and analysis" features with the "Disable" button emphasized for Dependabot alerts](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt-private.png){% elsif ghec %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.2 %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% else %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %}
  {% note %}

  **Note:** If you disable {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}dependency review, {% endif %}{% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} are disabled. Any workflows, SARIF uploads, or API calls for {% data variables.product.prodname_code_scanning %} will fail.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghes = 3.0 %}
5. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**.
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% ifversion ghae %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**. Before you can enable "{% data variables.product.prodname_secret_scanning %}" for your repository, you may need to enable {% data variables.product.prodname_GH_advanced_security %}.
   ![Enable or disable {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

## Managing Dependabot alerts for your organization
You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your organization.

### Enabling or disabling Dependabot alerts for all existing repositories

You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories.
{% ifversion fpt or ghec %}Your changes affect all repositories.{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**. {% ifversion ghes > 3.0 or ghec %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available seats in your {% data variables.product.prodname_GH_advanced_security %} license.{% endif %}
   {% ifversion fpt %}
   ![Screenshot of "Configure security and analysis" features with the "Enable all" or "Disable all" button emphasized for Dependabot alerts](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghec %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png)
   {% endif %}
   {% ifversion ghes > 3.2 %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% ifversion ghes = 3.1 or ghes = 3.2 %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
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
   {% endif %}
   
   {% endif %}
   {% ifversion ghae or ghes %}
5. Click **Enable/Disable all** or **Enable/Disable for eligible repositories** to confirm the change.
   ![Button to enable feature for all the eligible repositories in the organization](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}