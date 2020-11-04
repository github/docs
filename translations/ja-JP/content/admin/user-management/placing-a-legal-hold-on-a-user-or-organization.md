---
title: ユーザあるいはOrganizationへの訴訟ホールドの配置
intro: 'You can place a legal hold on a user or organization to ensure that repositories they own cannot be permanently removed from your enterprise.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
---

通常は、誰かがリポジトリを削除するとそのリポジトリは90日間はディスク上にあり、サイト管理ダッシュボード経由でリストアできます。 90日を過ぎると、そのリポジトリはパージされ、恒久的に削除されます。 ユーザあるいはOrganizationに訴訟ホールドを配置すると、所有しているリポジトリは無期限にリストアできるようになります。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. **Place legal hold（訴訟ホールドの配置）**をクリックしてください。 ![訴訟ホールドの配置ボタン](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
