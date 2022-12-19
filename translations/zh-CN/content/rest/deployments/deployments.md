---
title: 部署
intro: 部署 API 允许你创建和删除部署和部署环境。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a75c94b609bd166971e23516e8b2af318236a026
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/11/2022
ms.locfileid: '147067960'
---
## <a name="about-the-deployments-api"></a>关于部署 API

部署是部署特定引用（分支、SHA、标记）的请求。 GitHub 分派一个 [`deployment` 事件](/developers/webhooks-and-events/webhook-events-and-payloads#deployment)，外部服务可以在创建新部署时侦听该事件并采取行动。 部署使开发者和组织能够围绕部署构建松散耦合的工具，而不必担心交付不同类型的应用程序（例如 Web 和本地应用程序）的实现细节。

部署状态允许外部服务使用 `error`、`failure`、`pending`、`in_progress`、`queued` 或 `success` 状态来标记部署，以便系统侦听 [`deployment_status` 事件](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status)消耗。

部署状态还可以包括可选的 `description` 和 `log_url`，强烈建议使用它们，因为它们使部署状态更有用。 `log_url` 是部署输出的完整 URL，`description` 是部署所发生情况的高级摘要。

GitHub 在创建新部署和部署状态时调度 `deployment` 和 `deployment_status` 事件。 这些事件允许第三方集成接收对部署请求的响应，并在取得进展时更新部署的状态。

下面是一个说明这些交互的工作方式的简单序列图。

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

请记住，GitHub 从未真正访问过您的服务器。 与部署事件的交互取决于第三方集成。 多个系统可以侦听部署事件，由其中每个系统来决定它们是否负责将代码推送到服务器、构建本地代码等。

请注意，`repo_deployment` [OAuth 范围](/developers/apps/scopes-for-oauth-apps) 授予对部署和部署状态的目标访问权限而不授予对存储库代码的访问权限，而 {% ifversion not ghae %}`public_repo` 和{% endif %}`repo` 范围也授予对代码的权限。

### <a name="inactive-deployments"></a>非活动部署

当你将部署的状态设置为 `success` 时，同一存储库中具有相同环境名称的所有先前非瞬态、非生产环境部署将变为 `inactive`。 为避免这种情况，你可以在创建部署状态时将 `auto_inactive` 设置为 `false`。

可以通过将其 `state` 设置为 `inactive` 来传达瞬态环境不再存在。  将 `state` 设置为 `inactive` 会在 {% data variables.product.prodname_dotcom %} 中将部署显示为 `destroyed` 并删除对其的访问权限。
