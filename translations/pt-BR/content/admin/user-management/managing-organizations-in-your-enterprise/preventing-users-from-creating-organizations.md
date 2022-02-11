---
title: Impedir os usuários de criarem organizações
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: Você pode impedir que usuários criem organizações na sua empresa.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Evitar a criação de organização
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. No menu suspenso em "Users can create organizations" (Usuários podem criar organizações), clique em **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![Menu suspenso Users can create organizations (Usuários podem criar organizações)](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
