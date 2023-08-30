---
title: Preventing users from creating organizations
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/managing-organizations-in-your-enterprise/preventing-users-from-creating-organizations
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
1. Under "Users can create organizations", use the drop-down menu and click **Enabled** or **Disabled**.
