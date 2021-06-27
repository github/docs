---
title: 排查服务挂钩问题
intro: 如果没有交付有效负载，请检查这些常见问题。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### 获取有关交付的信息

您可以在任意仓库中找到有关所有服务挂钩交付的最后响应的信息。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航侧栏中的 **Hooks** 链接。 ![挂钩侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的 **Latest Delivery** 链接。 ![挂钩详情](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. 在 **Remote Calls** 下，您将看到发布到远程服务器时使用的标头以及远程服务器发送回安装的响应。

### 查看有效负载

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航侧栏中的 **Hooks** 链接。 ![挂钩侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的 **Latest Delivery** 链接。
5. 单击 **Delivery（交付）**。 ![查看有效负载](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

### 查看过去的交付

交付存储 15 天。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航侧栏中的 **Hooks** 链接。 ![挂钩侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的 **Latest Delivery** 链接。
5. 要查看针对该特定挂钩的其他交付，请单击 **More for this Hook ID**： ![查看更多交付](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
