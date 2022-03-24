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

## Managing Dependabot alerts for your personal account
You can enable or disable {% data variables.product.prodname_dependabot_alerts %} for all repositories owned by your personal account.

### Enabling or disabling Dependabot alerts for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Disable all** or **Enable all**.
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Screenshot of "Configure security and analysis" features with "Enable all" or "Disable all" buttons emphasized](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png){% endif %}
6. Optionally, enable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own.
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

### Enabling or disabling Dependabot alerts for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

  {% ifversion fpt or ghec %}

## Managing Dependabot alerts for your repository
You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.

### Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories. Other features are permanently enabled, including dependency graph and secret scanning.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**.{% ifversion fpt %}
  !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-public.png){% elsif ghec %}
  !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-public.png){% endif %}
{% endif %}

### Enabling or disabling security and analysis features{% ifversion fpt or ghec %} for private repositories{% endif %}

You can manage the security and analysis features for your {% ifversion fpt or ghec %}private or internal {% endif %}repository.{% ifversion ghes or ghec %} If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} have extra options available. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

## Managing Dependabot alerts for your organization
You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.

### Enabling or disabling Dependabot alerts for all existing repositories

You can enable or disable features for all repositories. 
{% ifversion fpt or ghec %}The impact of your changes on repositories in your organization is determined by their visibility:

- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **{% data variables.product.prodname_dependabot_alerts %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Your changes affect all repositories.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - Your changes affect only private repositories because {% data variables.product.prodname_GH_advanced_security %} and the related features are always enabled for public repositories.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Your changes affect repositories where {% data variables.product.prodname_GH_advanced_security %} is also enabled. This option controls whether or not {% data variables.product.prodname_secret_scanning_GHAS %} is enabled. {% data variables.product.prodname_secret_scanning_partner_caps %} always runs on all public repositories.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
2. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all**. {% ifversion ghes > 3.0 or ghec %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available seats in your {% data variables.product.prodname_GH_advanced_security %} license.{% endif %}
   {% ifversion fpt %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png)
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
3. Optionally, enable the feature by default for new repositories in your organization.
   {% ifversion fpt or ghec %}
   !["Enable by default" option for new repositories](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   
   {% endif %}
   {% ifversion fpt or ghec %}
4. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Button to disable or enable feature](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   
   {% endif %}
   {% ifversion ghae or ghes %}
3. Click **Enable/Disable all** or **Enable/Disable for eligible repositories** to confirm the change.
   ![Button to enable feature for all the eligible repositories in the organization](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}