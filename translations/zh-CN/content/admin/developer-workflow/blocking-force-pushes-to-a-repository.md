---
title: 阻止对仓库进行强制推送
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
intro: 您可以阻止所有分支上的强制推送（“git push --force”）— 或者仅阻止仓库默认分支上的强制推送。
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. 在 **Push and Pull（推送和拉取）**下，选择 **Block（阻止）**或 **Block to the default branch（阻止到默认分支）**。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

变更立即生效。 如果您以后改变主意，可以轻松重新允许强制推送。

## 延伸阅读

- “[阻止对用户帐户或组织拥有的仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)”
- “[阻止设备上的强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)”
