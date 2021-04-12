---
title: 关于 web 挂钩
intro: 了解 Webhook 如何帮助您构建和设置集成的基础知识。
redirect_from:
  - /webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - web 挂钩
---


Web 挂钩允许您构建或设置集成，例如 [{% data variables.product.prodname_github_app %}](/apps/building-github-apps/) 或 [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/)，以订阅 GitHub.com 上的某些事件。 当触发其中某个事件时，我们将向 web 挂钩的配置 URL 发送 HTTP POST 有效负载。 Web 挂钩可用于更新外部议题跟踪器、触发 CI 构建、更新备份镜像，甚至部署到生产服务器。 您只受想象力的限制。

Web 挂钩可以安装在{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/)、{% endif %}[组织][org-hooks]、特定[仓库][repo-hooks]或 {% data variables.product.prodname_github_app %} 上。 安装后，每当发生一个或多个订阅事件时，都会发送 web 挂钩。

您可以为每个安装目标{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}（{% data variables.product.prodname_ghe_server %}实例、特定组织或特定仓库）{% else %}（特定组织或特定仓库）{% endif %}上的每个事件创建最多 {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}250{% else %}20{% endif %} 个 web 挂钩。

### 事件

{% data reusables.webhooks.webhooks_intro %}

每个事件对应于您的组织和/或仓库可能发生的一组特定操作。 例如，如果您订阅了 `issues`，则每当议题被打开、关闭、标记等操作时，您都会收到详细的有效负载。

要了解可用 web 挂钩事件及其有效负载的完整列表，请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads)”。

### Ping 事件

{% data reusables.webhooks.ping_short_desc %}

有关 `ping` 事件 web 挂钩有效负载的更多信息，请参阅 [`ping`](/webhooks/event-payloads/#ping) 事件。

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#hooks
