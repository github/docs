---
title: ユーザによるOrganizationの作成の禁止
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations/
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations/
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
intro: '{{ site.data.variables.product.prodname_ghe_server }} アプライアンス上でのユーザによる Organization の作成を禁止できます。'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{% else %}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{% endif %}
{{ site.data.reusables.enterprise-accounts.options-tab }}
4. [Users can create organizations（ユーザによるOrganizationの作成可能）] の下で、ドロップダウンメニューを使って [**Enabled（有効化）**] あるいは [**Disabled（無効化）**] を選択してください。 ![[Users can create organizations] ドロップダウン](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
