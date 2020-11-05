---
title: 合法保留用户或组织
intro: 'You can place a legal hold on a user or organization to ensure that repositories they own cannot be permanently removed from your enterprise.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
---

通常情况下，如果有人删除仓库，它将在磁盘上保留 90 天并且可以通过站点管理员仪表板进行恢复。 90 天后，仓库将被永久删除。 如果您合法保留用户或组织，可以随时恢复他们拥有的仓库。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 单击 **Place legal hold**。 ![Place legal hold 按钮](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
