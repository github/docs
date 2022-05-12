---
title: 部署
intro: 部署 API 允许您创建和删除部署和部署环境。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于部署 API

部署是部署特定引用（分支、SHA、标记）的请求。 GitHub 分发一个 [`deployment` 事件](/developers/webhooks-and-events/webhook-events-and-payloads#deployment)，使外部服务可以在创建新部署时侦听并采取行动。 部署使开发者和组织能够围绕部署构建松散耦合的工具，而不必担心交付不同类型的应用程序（例如 Web 和本地应用程序）的实现细节。

部署状态允许外部服务将部署标记为 `error`、`failure`、`pending`、`in_progress`、`queued` 或 `success` 状态，以供侦听 [`deployment_status` 事件](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status)的系统使用。

部署状态还可以包含可选的 `description` 和 `log_url`，强烈建议使用它们，因为它们使部署状态更有用。 `log_url` 是部署输出的完整 URL，`description` 是关于部署过程中所发生情况的高级摘要。

在创建新的部署和部署状态时，GitHub 将分发 `deployment` 和 `deployment_status` 事件。 这些事件允许第三方集成接收对部署请求的响应，并在取得进展时更新部署的状态。

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

请注意，`repo_deployment` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对部署和部署状态的定向访问权限，但**不**授予对仓库代码的访问权限，而 {% ifversion not ghae %}`public_repo` 和{% endif %}`repo` 作用域还授予对代码的权限。

### 非活动部署

当您将部署状态设置为 `success` 时，同一仓库中所有先前的非瞬态、非生产环境部署将变成 `inactive`。 为避免这种情况，您可以在创建部署状态时将 `auto_inactive` 设置为 `false`。

您可以通过将 `state` 设为 `inactive` 来表示某个瞬态环境不再存在。  将 `state` 设为 `inactive`，表示部署在 {% data variables.product.prodname_dotcom %} 中 `destroyed` 并删除对它的访问权限。
