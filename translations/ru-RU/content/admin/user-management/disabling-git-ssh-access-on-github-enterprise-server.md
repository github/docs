---
title: Disabling Git SSH access on GitHub Enterprise Server
redirect_from:
  - /enterprise/admin/hidden/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/articles/disabling-ssh-access-for-a-user-account/
  - /enterprise/admin/hidden/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/articles/disabling-ssh-access-for-your-appliance/
  - /enterprise/admin/hidden/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/articles/disabling-ssh-access-for-an-organization/
  - /enterprise/admin/hidden/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/articles/disabling-ssh-access-to-a-repository/
  - /enterprise/admin/guides/installation/disabling-git-ssh-access-on-github-enterprise/
  - /enterprise/admin/installation/disabling-git-ssh-access-on-github-enterprise-server
  - /enterprise/admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
  - /enterprise/admin/user-management/disabling-git-ssh-access-on-github-enterprise-server
intro: 'You can prevent people from using Git over SSH for certain or all repositories on {% data variables.product.product_location_enterprise %}.'
versions:
  enterprise-server: '*'
---

### Disabling Git SSH access to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
1. Under "Git SSH access", use the drop-down menu, and click **Disabled**. ![Git SSH access drop-down menu with disabled option selected](/assets/images/enterprise/site-admin-settings/git-ssh-access-repository-setting.png)

### Disabling Git SSH access to all repositories owned by a user or organization

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
7. Under "Git SSH access", use the drop-down menu, and click **Disabled**. Then, select **Enforce on all repositories**. ![Git SSH access drop-down menu with disabled option selected](/assets/images/enterprise/site-admin-settings/git-ssh-access-organization-setting.png)

### Disabling Git SSH access to all repositories on an appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
7. Under "Git SSH access", use the drop-down menu, and click **Disabled**. Then, select **Enforce on all repositories**. ![Git SSH access drop-down menu with disabled option selected](/assets/images/enterprise/site-admin-settings/git-ssh-access-appliance-setting.png)
