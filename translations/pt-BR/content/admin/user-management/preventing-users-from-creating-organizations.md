---
title: Impedir os usuários de criarem organizações
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: Você pode impedir que usuários criem organizações na sua empresa.
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. No menu suspenso em "Users can create organizations" (Usuários podem criar organizações), clique em **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![Menu suspenso Users can create organizations (Usuários podem criar organizações)](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
