---
title: 阻止对用户帐户或组织拥有的仓库进行强制推送
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
intro: 您可以阻止所有分支上的强制推送（“git push --force”）或仅阻止用户帐户或组织拥有的仓库的默认分支上的强制推送。
versions:
  enterprise-server: '*'
---

仓库从它们所属的用户帐户或组织继承强制推送设置。 反过来，用户帐户和组织从整个设备的强制推送设置继承其强制推送设置。

您可以通过配置用户帐户或组织的设置来覆盖默认的继承设置。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 在“Force pushes”部分的“Repository default settings”下，选择
    - **Block** 来阻止对所有分支进行强制推送。
    - **Block to the default branch** 来仅阻止对默认分支进行强制推送。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. 可以视情况选择 **Enforce on all repositories** 来覆盖仓库特定的设置。 注意，这**不**会覆盖设备范围的策略。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png) 变更立即生效。 如果您以后改变主意，可以重新允许强制推送。

### 延伸阅读

- “[阻止对仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)”
- “[阻止设备上的强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)”
