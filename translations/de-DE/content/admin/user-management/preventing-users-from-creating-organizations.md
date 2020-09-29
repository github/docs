---
title: Benutzerbedingte Erstellung von Organisationen verhindern
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: 'Sie können Benutzer daran hindern, Organisationen auf Ihrer {% data variables.product.prodname_ghe_server %}-Appliance zu erstellen.'
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
4. Verwenden Sie unter „Users can create organizations“ (Benutzer können Organisationen erstellen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert) oder **Disabled** (Deaktiviert). ![Dropdownmenü „Users can create organizations“ (Benutzer können Organisationen erstellen)](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
