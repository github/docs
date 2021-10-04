---
title: Benutzerbedingte Erstellung von Organisationen verhindern
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: You can prevent users from creating organizations in your enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Prevent organization creation
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Users can create organizations“ (Benutzer können Organisationen erstellen) das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert) oder **Disabled** (Deaktiviert). ![Dropdownmenü „Users can create organizations“ (Benutzer können Organisationen erstellen)](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
