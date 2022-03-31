---
title: 模拟用户
intro: 您可以出于故障排除、取消阻止和其他合法原因而模拟用户并代表用户执行操作。
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '>3.2'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: 模拟用户
---

## 关于用户模拟

如果需要临时接管用户帐户（例如，在解决用户问题时），或者在用户不可用且需要采取紧急操作时，可以启动模拟会话以代表他们执行操作。

对于每个模拟会话，您需要提供模拟的原因。 会话限制为一小时，您将拥有与被模拟用户相同的访问权限。

在模拟会话期间执行的操作将记录为企业审核日志以及模拟用户的安全日志中的事件。 当模拟会话开始时，被模拟的人员将收到电子邮件通知。 更多信息请参阅“[已审核的操作](/admin/user-management/monitoring-activity-in-your-enterprise/audited-actions)”和“[查看安全日志](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)”。

## 模拟用户

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
4. 在页面的左上角，单击 **User info（用户信息）**。

   ![用户信息](/assets/images/enterprise/stafftools/user-info.png)
5. 在“Danger Zone（危险区域）”下，单击 **登录到 GitHub as @username**

   ![模拟用户](/assets/images/enterprise/stafftools/impersonate.png)
6. 从下拉列表中选择一个原因。 如果选择 **Other（其他）**，则需要在 **Notes（注释）**部分提供其他上下文。 单击 **Begin impersonation（开始模拟）**以开始会话。

   ![模拟的原因](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. 当您准备好结束模拟会话时，请单击页面顶部的 **Return to your mundane life as username（以用户名返回平凡生活）**横幅。

   ![结束模拟](/assets/images/enterprise/stafftools/end-impersonation.png)
