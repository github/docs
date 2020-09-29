---
title: Impedir os usuários de criarem organizações
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: 'É possível impedir que os usuários criem organizações no seu appliance do {% data variables.product.prodname_ghe_server %}.'
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
4. No menu suspenso em "Users can create organizations" (Usuários podem criar organizações), clique em **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![Menu suspenso Users can create organizations (Usuários podem criar organizações)](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
