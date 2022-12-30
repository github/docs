---
title: 全局 Webhook
intro: 全局 Webhook 安装在企业上。 您可以使用全局 web 挂钩来自动监视、响应或实施针对企业上的用户、组织、团队和仓库的规则。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067224'
---
全局 Webhook 可以订阅[组织](/developers/webhooks-and-events/webhook-events-and-payloads#organization)、[用户](/developers/webhooks-and-events/webhook-events-and-payloads#user)、[存储库](/developers/webhooks-and-events/webhook-events-and-payloads#repository)、[团队](/developers/webhooks-and-events/webhook-events-and-payloads#team)、[成员](/developers/webhooks-and-events/webhook-events-and-payloads#member)、[成员身份](/developers/webhooks-and-events/webhook-events-and-payloads#membership)、[分支](/developers/webhooks-and-events/webhook-events-and-payloads#fork)和 [ping](/developers/webhooks-and-events/about-webhooks#ping-event) 事件类型。

此 API 仅适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)网站管理员。 如果普通用户尝试访问它，他们将收到 `404` 响应。 若要了解如何配置全局 Webhook，请参阅[关于全局 Webhook](/enterprise/admin/user-management/about-global-webhooks)。
