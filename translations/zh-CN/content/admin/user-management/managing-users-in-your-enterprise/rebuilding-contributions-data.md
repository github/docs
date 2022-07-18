---
title: 重构贡献数据
intro: 您可以重构贡献数据，将现有提交链接到用户帐户。
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: 重建贡献
---

将提交推送到 {% data variables.product.prodname_enterprise %} 时，如果新提交和现有提交关联到同一个电子邮件地址，此提交会链接到用户帐户。 不过，在用户注册新电子邮件地址或创建新帐户时，*不会*追溯地链接现有提交。

1. 访问用户的个人资料页面。
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在页面的左侧，单击 **Admin**。 ![Admin 选项卡](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. 在 **Contributions data** 下，单击 **Rebuild**。 ![Rebuild 按钮](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} 现在会开始后台作业，将提交与用户帐户重新关联。
  ![已排队的重构作业](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
