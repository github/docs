---
title: 组织 web 挂钩
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066840'
---
## 关于组织 Webhook API

利用组织 Webhook 可在组织内发生特定事件时接收 HTTP `POST` 有效负载。 {% data reusables.webhooks.webhooks-rest-api-links %}

有关可以订阅的操作的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 事件类型](/developers/webhooks-and-events/github-event-types)”。

### 作用域和限制

对组织 web 挂钩的所有操作都需要经过身份验证的用户是所管理组织的管理员。 此外，OAuth 标记需要 `admin:org_hook` 作用域。 有关详细信息，请参阅“[OAuth 应用的作用域](/developers/apps/scopes-for-oauth-apps)”。

为了保护 web 挂钩配置中可能存在的敏感数据，我们还强制实施以下访问控制规则：

- OAuth 应用程序无法列出、查看或编辑不是它们创建的 web 挂钩。
- 用户无法列出、查看或编辑由 OAuth 应用程序创建的 web 挂钩。

### 接收 web 挂钩

为了让 {% data variables.product.product_name %} 发送 web 挂钩有效负载，您的服务器需要能够从 Internet 访问。 我们还强烈建议使用 SSL，以便我们可以通过 HTTPS 发送加密的有效负载。

有关更多最佳做法，请[参阅我们的指南](/guides/best-practices-for-integrators/)。

#### Web 挂钩标头

{% data variables.product.product_name %} 发送时将附带几个 HTTP 标头，以区分事件类型和有效负载标识符。 有关详细信息，请参阅 [Webhook标头](/webhooks/event-payloads/#delivery-headers)。
