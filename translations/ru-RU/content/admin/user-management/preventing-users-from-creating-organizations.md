---
title: Preventing users from creating organizations
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: 'You can prevent users from creating organizations on your {% data variables.product.prodname_ghe_server %} appliance.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Under "Users can create organizations", use the drop-down menu and click **Enabled** or **Disabled**. ![Users can create organizations drop-down](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
