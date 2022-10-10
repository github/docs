---
title: 关于 web 挂钩
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: Web 挂钩是一种通知方式，只要仓库或组织上发生特定操作，就会发送通知到外部 web 服务器。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880611'
---
{% tip %}

提示：{% data reusables.organizations.owners-and-admins-can %} 为组织管理 Webhook。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

只要在仓库或组织上执行特定的操作，就可触发 web 挂钩。 例如，您可以配置 web 挂钩在以下情况下执行：

* 推送到仓库
* 打开拉取请求
* 构建 {% data variables.product.prodname_pages %} 网站
* 团队新增成员

使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 可以让这些 web 挂钩更新外部议题跟踪器、触发 CI 构建、更新备份镜像，甚至部署到生产服务器。

要设置新的 web 挂钩，您需要访问外部服务器并熟悉所涉及的技术程序。 有关生成 Webhook 的帮助，包括可以与之关联的操作的完整列表，请参阅“[Webhook](/webhooks)”。
