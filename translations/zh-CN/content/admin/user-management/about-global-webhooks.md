---
title: 关于全局 web 挂钩
intro: 全局 web 挂钩会通知您实例级别的事件。
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
versions:
  enterprise-server: '*'
---

您可以使用全局 web 挂钩自动监视、响应或者为实例上的用户和组织管理强制执行规则。 例如，您可以将 web 挂钩配置为在以下情况下执行：
- 创建或删除用户帐户
- 创建或删除组织
- 向仓库添加协作者或从仓库中移除协作者
- 分叉仓库

![全局 web 挂钩列表](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

有关配置 web 挂钩的更多信息，请参阅“[管理全局 web 挂钩](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-global-webhooks)”。

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}
