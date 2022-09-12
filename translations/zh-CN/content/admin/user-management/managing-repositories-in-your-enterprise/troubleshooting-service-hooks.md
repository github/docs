---
title: 排查服务挂钩问题
intro: 如果没有交付有效负载，请检查这些常见问题。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098962'
---
## 获取有关交付的信息

您可以在任意仓库中找到有关所有服务挂钩交付的最后响应的信息。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航边栏中的“挂钩”链接。
  ![“挂钩”侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的“最新交付”链接。
  ![挂钩详细信息](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. 在“远程调用”下，可以看到发布到远程服务器时使用的标头以及远程服务器发送回安装的响应。

## 查看有效负载

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航边栏中的“挂钩”链接。
  ![“挂钩”侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的“最新交付”链接。
5. 单击“交付”。
  ![查看有效负载](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## 查看过去的交付

交付存储 15 天。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 浏览到您要调查的仓库。
3. 单击导航边栏中的“挂钩”链接。
  ![“挂钩”侧边栏](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 单击有问题的服务挂钩下的“最新交付”链接。
5. 要查看针对该特定挂钩的其他交付，请单击“加载此挂钩 ID 的更多内容”：![查看更多交付](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
