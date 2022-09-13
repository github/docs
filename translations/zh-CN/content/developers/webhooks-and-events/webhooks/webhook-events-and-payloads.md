---
title: Webhook 事件和有效负载
intro: 对于每个 web 挂钩事件，您可以查看事件发生的时间、示例有效负载以及有关有效负载对象参数的说明。
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 38dfa09525a7c3cc914bc2cf130126ed9969e190
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541980'
---
{% data reusables.webhooks.webhooks_intro %}

您可以创建订阅此页所列事件的 web 挂钩。 每个 web 挂钩事件都包括 web 挂钩属性的说明和示例有效负载。 有关详细信息，请参阅“[创建 Webhook](/webhooks/creating/)”。

## Web 挂钩有效负载对象共有属性

每个 web 挂钩事件有效负载还包含特定于事件的属性。 您可以在各个事件类型部分中找到这些独特属性。

密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 大多数 Webhook 有效负载都包括 `action` 属性，其中包含触发事件的特定活动。
{% data reusables.webhooks.sender_desc %} 此属性包含在每个 web 挂钩有效负载中。
{% data reusables.webhooks.repo_desc %} 如果事件源自存储库中的活动，则 Webhook 有效负载包含 `repository` 属性。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} 有关详细信息，请参阅“[构建 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)”

Webhook 事件的独特属性与你在使用[ API](/rest/reference/activity#events) 时在 `payload` 属性中发现的属性相同。 [`push` 事件](#push) 是一个例外。 `push` 事件 Webhook 有效负载的独特属性和事件 API 中的 `payload` 属性不同。 Web 挂钩有效负载包含更详细的信息。

{% tip %}

注意：有效负载上限为 25 MB。 如果事件生成了更大的有效负载，web 挂钩将不会触发。 例如，如果同时推送多个分支或标记，这种情况可能会发生在 `create` 事件中。 我们建议监控有效负载的大小以确保成功递送。

{% endtip %}

### 递送标头

递送到 web 挂钩已配置 URL 端点的 HTTP POST 有效负载将包含几个特殊标头：

标头 | 说明
-------|-------------|
`X-GitHub-Event`| 触发递送的事件名称。
`X-GitHub-Delivery`| 用于标识交付的 [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的版本。
`X-GitHub-Enterprise-Host` | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| 如果 Webhook 配置了 [`secret`](/rest/reference/repos#create-hook-config-params)，则会发送此标头。 这是请求正文的 HMAC 十六进制摘要，是使用 SHA-1 哈希函数和作为 HMAC `key` 的 `secret` 生成的。{% ifversion fpt or ghes or ghec %} 提供了 `X-Hub-Signature`，以便与现有集成兼容，建议你改用更安全的 `X-Hub-Signature-256`。{% endif %}{% endif %}
`X-Hub-Signature-256`| 如果 Webhook 配置了 [`secret`](/rest/reference/repos#create-hook-config-params)，则会发送此标头。 这是请求正文的 HMAC 十六进制摘要，是使用 SHA-256 哈希函数和作为 HMAC `key` 的 `secret` 生成的。

此外，请求的 `User-Agent` 将含有前缀 `GitHub-Hookshot/`。

### 递送示例

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
## branch_protection_rule

与分支保护规则相关的活动。 有关详细信息，请参阅“[关于分支保护规则](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)”。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 对存储库管理至少拥有 `read-only` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以是 `created`、`edited` 或 `deleted`。
`rule` | `object` | 分支保护规则。 包括 `name` 和应用于与名称匹配的分支的所有[分支保护设置](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings)。 二进制设置是布尔值。 多级配置是 `off`、`non_admins` 或 `everyone` 之一。 执行者和构建列表是字符串数组。
`changes` | `object` | 对规则的更改（如果操作为 `edited`）。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }} {% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

Git 引用已成功同步到缓存副本。 有关详细信息，请参阅“[关于存储库缓存](/admin/enterprise-management/caching-repositories/about-repository-caching)”。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`cache_location` |`string` | 已更新的缓存服务器的位置。
`ref` | `string` | 已更新的引用。
`before` | `string` | 缓存副本在更新之前引用的 OID。
`after` | `string` | 更新后缓存副本上引用的 OID。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }} {% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 可用性

- 存储库 Webhook 仅接收存储库中 `created` 和 `completed` 事件类型的有效负载
- 组织 Webhook 仅接收存储库中 `created` 和 `completed` 事件类型的有效负载
- 具有 `checks:read` 权限的 {% data variables.product.prodname_github_apps %} 接收安装应用的存储库中发生的 `created` 和 `completed` 事件的有效负载。 应用必须具有 `checks:write` 权限才能接收 `rerequested` 和 `requested_action` 事件类型。 `rerequested` 和 `requested_action` 事件类型有效负载仅发送到正在请求的 {% data variables.product.prodname_github_app %}。 具有 `checks:write` 的 {% data variables.product.prodname_github_apps %} 会自动订阅此 Webhook 事件。

### Web 挂钩有效负载对象

{% data reusables.webhooks.check_run_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 可用性

- 存储库 Webhook 仅接收存储库中 `completed` 事件类型的有效负载
- 组织 Webhook 仅接收存储库中 `completed` 事件类型的有效负载
- 具有 `checks:read` 权限的 {% data variables.product.prodname_github_apps %} 接收安装应用的存储库中发生的 `created` 和 `completed` 事件的有效负载。 应用必须具有 `checks:write` 权限才能接收 `requested` 和 `rerequested` 事件类型。 `requested` 和 `rerequested` 事件类型有效负载仅发送到正在请求的 {% data variables.product.prodname_github_app %}。 具有 `checks:write` 的 {% data variables.product.prodname_github_apps %} 会自动订阅此 Webhook 事件。

### Web 挂钩有效负载对象

{% data reusables.webhooks.check_suite_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `security_events :read` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.code_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | 如果 `action` 为 `reopened_by_user` 或 `closed_by_user`，则 `sender` 对象将是触发事件的用户。 对于所有其他操作，`sender` 对象为 {% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}空{% endif %}。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.commit_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Web 挂钩事件是基于您注册的域的特异性而触发的。 例如，如果你注册了一个子域 (`https://subdomain.example.com`)，则只有该子域的 URL 才会触发此事件。 如果你注册了一个域 (`https://example.com`)，则该域及所有子域的 URL 都会触发此事件。 请参阅“[创建内容附件](/rest/reference/apps#create-a-content-attachment)”以创建新的内容附件。

### 可用性

- 具有 `content_references:write` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

注意：如果一次创建三个以上的标记，将不会收到此事件的 Webhook。

{% endnote %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.create_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.create }}

## delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

注意：如果一次删除三个以上的标记，将不会收到此事件的 Webhook。

{% endnote %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.delete_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.deploy_key_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## 部署

{% data reusables.webhooks.deployment_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `deployments` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以为 `created`。
`deployment` |`object` | [部署](/rest/reference/deployments#list-deployments)。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deployment }}

## deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `deployments` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以为 `created`。
`deployment_status` |`object` | [部署状态](/rest/reference/deployments#list-deployment-statuses)。
`deployment_status["state"]` |`string` | 新状态。 可以是 `pending`、`success`、`failure` 或 `error`。
`deployment_status["target_url"]` |`string` | 添加到状态的可选链接。
`deployment_status["description"]`|`string` | 添加到状态的可选人类可读说明。
`deployment` |`object` | 与此状态关联的[部署](/rest/reference/deployments#list-deployments)。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## 讨论

{% data reusables.webhooks.discussions-webhooks-beta %}

与讨论有关的活动。 有关详细信息，请参阅“[使用 GraphQL API 进行讨论](/graphql/guides/using-the-graphql-api-for-discussions)”。
### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `discussions` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以是 `created`、`edited`、`deleted`、`pinned`、`unpinned`、`locked`、`unlocked`、`transferred`、`category_changed`、`answered`、`unanswered`、`labeled` 或 `unlabeled`。
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

与讨论中的评论相关的活动。 有关详细信息，请参阅“[使用 GraphQL API 进行讨论](/graphql/guides/using-the-graphql-api-for-discussions)”。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `discussions` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以是 `created`、`edited` 或 `deleted`。
`comment` | `object` | [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment) 资源。
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }} {% endif %}

{% ifversion ghes or ghae %}

## 企业

{% data reusables.webhooks.enterprise_short_desc %}

### 可用性

- GitHub Enterprise web 挂钩。 有关详细信息，请参阅“[全局 Webhook](/rest/reference/enterprise-admin#global-webhooks/)”。

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以是 `anonymous_access_enabled` 或 `anonymous_access_disabled`。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## 分支

{% data reusables.webhooks.fork_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.fork_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

当有人撤销对 {% data variables.product.prodname_github_app %} 的授权时，将发生此事件。 {% data variables.product.prodname_github_app %} 默认情况下会接收此 web 挂钩，并且无法取消订阅此事件。

{% data reusables.webhooks.authorization_event %} 有关用户到服务器请求（需要 {% data variables.product.prodname_github_app %} 授权）的详细信息，请参阅“[识别和授权 {% data variables.product.prodname_github_apps %} 用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

### 可用性

- {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以为 `revoked`。
{% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.gollum_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.gollum }}

## 安装

{% data reusables.webhooks.installation_short_desc %}

### 可用性

- {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.installation_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### 可用性

- {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.installation_repositories_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `issues` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## issues

{% data reusables.webhooks.issues_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `issues` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.issue_webhook_properties %} {% data reusables.webhooks.issue_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### 有人编辑议题时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## label

{% data reusables.webhooks.label_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 可以是 `created`、`edited` 或 `deleted`。
`label`|`object` | 添加的标签。
`changes`|`object`| 对标签的更改（如果操作为 `edited`）。
`changes[name][from]`|`string` | 先前版本的名称（如果操作为 `edited`）。
`changes[color][from]`|`string` | 先前版本的颜色（如果操作为 `edited`）。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

与 GitHub Marketplace 购买相关的活动。 {% data reusables.webhooks.action_type_desc %} 有关详细信息，请参阅“[GitHub 市场](/marketplace/)”。

### 可用性

- {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 为 [GitHub 市场](https://github.com/marketplace)计划执行的操作。 可以是以下选项之一：<ul><li>`purchased` - 有人购买了 GitHub 市场计划。 更改应立即对帐户生效。</li><li>`pending_change` - 当有人降级或取消了 GitHub 市场计划以指示帐户上将发生更改时，你将收到 `pending_change` 事件。 新的计划或取消将在结算周期结束时生效。  当计费周期结束并且取消或新计划应生效时，将发送 `cancelled` 或 `changed` 事件类型。</li><li>`pending_change_cancelled` - 有人取消了挂起的更改。 待处理更改包括将在结算周期结束时生效的计划取消和降级。 </li><li>`changed` - 有人升级或降级了 GitHub 市场计划，并且该更改应立即对帐户生效。</li><li>`cancelled` - 有人取消了 GitHub 市场计划并且最后一个计费周期已结束。 更改应立即对帐户生效。</li></ul>

有关此有效负载和每种类型 `action` 的有效负载的详细说明，请参阅 [{% data variables.product.prodname_marketplace %} Webhook 事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)。

### 有人购买计划时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## member

{% data reusables.webhooks.member_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.member_webhook_properties %} {% data reusables.webhooks.member_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.member.added }}

## Membership — 成员资格

{% data reusables.webhooks.membership_short_desc %}

### 可用性

- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.membership_properties %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.membership.removed }}

{% ifversion fpt or ghec %}

## merge_group

{% data reusables.pull_requests.merge-queue-beta %}

与合并队列中的合并组相关的活动。 活动类型在有效负载对象的操作属性中指定。


### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `merge_queues` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 目前只能是 `checks_requested`。
`merge_group`|`object` | 合并组。
`merge_group[head_sha]`|`string` | 合并组的 SHA。
`merge_group[head_ref]`|`string` | 合并组的完整引用。
`merge_group[base_ref]`|`string` | 合并组将合并到的分支的完整引用。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.merge_group.checks_requested }}

{% endif %}

## meta

配置此事件的 web 挂钩已被删除。 此事件将仅监听对安装此事件的特定挂钩的更改。 因此，必须为要接收元事件的每个挂钩选择它。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 已执行的操作。 可以为 `deleted`。
`hook_id`  |`integer` | 修改后的 web 挂钩的 ID。
`hook` |`object` | 修改后的 web 挂钩。 它将包含基于 web 挂钩类型的不同键：repository、organization、business、app 或 GitHub Marketplace。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## 里程碑

{% data reusables.webhooks.milestone_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.milestone_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## organization

{% data reusables.webhooks.organization_short_desc %}

### 可用性

{% ifversion ghes or ghae %}
- GitHub Enterprise Webhook 仅接收 `created` 和 `deleted` 事件。 有关详细信息，请参阅“[全局 Webhook](/rest/reference/enterprise-admin#global-webhooks/)”。{% endif %}
- 组织 Webhook 仅接收 `deleted`、`added`、`removed`、`renamed` 和 `invited` 事件。
- 具有 `members` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 可以是以下选项之一：{% ifversion ghes or ghae %} `created`、{% endif %} `deleted`、`renamed`、`member_added`、`member_removed` 或 `member_invited`。
`invitation` |`object` | 用户或电子邮件的邀请（如果操作为 `member_invited`）。
`membership`  |`object` | 用户和组织之间的成员资格。  不存在（如果操作为 `member_invited`）。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### 可用性

- 组织 web 挂钩
- 具有 `organization_administration` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|------------
`action` | `string` | 已执行的操作。 可以是 `blocked` 或 `unblocked`。
`blocked_user` | `object` | 有关被阻止或取消阻止的用户的信息。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## 包

与 {% data variables.product.prodname_registry %} 有关的活动。 {% data reusables.webhooks.action_type_desc %} 有关详细信息，请参阅“[使用 {% data variables.product.prodname_registry %} 管理包](/github/managing-packages-with-github-packages)”以详细了解 {% data variables.product.prodname_registry %}。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.package_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pages` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|------------
`id` | `integer` | 页面构建的唯一标识符。
`build` | `object` | [List GitHub Pages 构建](/rest/reference/pages#list-github-pages-builds)自身。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- {% data variables.product.prodname_github_apps %} 接收带有用于注册应用的 `app_id` 的 ping 事件。

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|------------
`zen` | `string` | GitHub zen 的随机字符串。
`hook_id` | `integer` | 触发 ping 的 web 挂钩的 ID。
`hook` | `object` | [Webhook 配置](/rest/reference/webhooks#get-a-repository-webhook)。
`hook[app_id]` | `integer` | 注册新的 {% data variables.product.prodname_github_app %} 后，{% data variables.product.product_name %} 会将 ping 事件发送到你在注册过程中指定的 Webhook URL。 该事件包含对应用进行[身份验证](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/)所需的 `app_id`。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

注意：此事件仅适用于 {% data variables.product.prodname_projects_v1 %}。

{% endnote %} {% endif %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.project_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

注意：此事件仅适用于 {% data variables.product.prodname_projects_v1 %}。

{% endnote %} {% endif %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.project_card_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

注意：此事件仅适用于 {% data variables.product.prodname_projects_v1 %}。

{% endnote %} {% endif %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.project_column_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

注意：{% data variables.projects.projects_v2 %} 的 Webhook 事件目前是 beta 版本，可能会有变动。 如果要与 {% data variables.product.product_name %} 分享有关 {% data variables.projects.projects_v2 %} Webhook 的反馈，请参阅[项目 Webhook 反馈讨论](https://github.com/orgs/community/discussions/17405)。

{% endnote %}

与 {% data variables.projects.project_v2 %} 中的项相关的活动。 {% data reusables.webhooks.action_type_desc %} 有关详细信息，请参阅“[关于 {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”。

### 可用性

- 组织 web 挂钩
- 具有 `organization_projects` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 在项目项上执行的操作。 可以是 `archived`、`converted`、`created`、`edited`、`restored`、`deleted` 或 `reordered` 之一。
`projects_v2_item`|`object` | 项目项本身。 若要了解有关项目项的详细信息，可以使用 `node_id`（项目项的节点 ID）和 `project_node_id`（项目的节点 ID）查询 GraphQL API 中的信息。 有关详细信息，请参阅“[使用 API 管理项目](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)”。
`changes`|`object` | 对项目项所做的更改。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## 公共

{% data reusables.webhooks.public_short_desc %}
### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.public }} {% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_webhook_properties %} {% data reusables.webhooks.pull_request_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

`review_requested` 和 `review_request_removed` 事件的交付将有一个名为 `requested_reviewer` 的附加字段。

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_review_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_thread_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## push

{% data reusables.webhooks.push_short_desc %}

{% note %}

注意：如果一次推送三个以上的标记，将不会收到此事件的 Webhook。

{% endnote %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`ref`|`string` | 推送的完整 [`git ref`](/rest/reference/git#refs)。 示例：`refs/heads/main` 或 `refs/tags/v3.14.1`。
`before`|`string` | 推送之前在 `ref` 上最近提交的 SHA。
`after`|`string` | 推送之后在 `ref` 上最近提交的 SHA。
`created`|`boolean` | 此推送是否创建了 `ref`。
`deleted`|`boolean` | 此推送是否删除了 `ref`。
`forced`|`boolean` | 此推送是否是 `ref` 的强制推送。
`head_commit`|`object` | 对于 `after` 是提交对象或指向提交对象的推送，为该提交的扩展表示。 对于 `after` 指示附注标签对象的推送，为附注标签指向的提交的扩展表示。
`compare`|`string` | 显示此 `ref` 更新中从 `before` 提交到 `after` 提交的更改的 URL。 对于新创建的直接基于默认分支的 `ref`，这是默认分支的头部与 `after` 提交之间的比较。 否则，这将显示 `after` 提交之前的所有提交。
`commits`|`array` | 描述所推送提交的提交对象数组。 （所推送提交是包含在 `before` 提交和 `after` 提交之间的 `compare` 中的所有提交。）
`commits[][id]`|`string` | 提交的 SHA。
`commits[][timestamp]`|`string` | 提交的 ISO 8601 时间戳。
`commits[][message]`|`string` | 提交消息。
`commits[][author]`|`object` | 提交的 Git 作者。
`commits[][author][name]`|`string` | Git 作者的名称。
`commits[][author][email]`|`string` | Git 作者的电子邮件地址。
`commits[][url]`|`url` | 指向提交 API 资源的 URL。
`commits[][distinct]`|`boolean` | 此提交是否与之前推送的任何提交不同。
`commits[][added]`|`array` | 在提交中添加的文件数组。 对于 {% data variables.product.product_name %} 无法及时计算此列表的极大型提交，即使添加了文件，也可能为空。
`commits[][modified]`|`array` | 由提交修改的文件数组。 对于 {% data variables.product.product_name %} 无法及时计算此列表的极大型提交，即使修改了文件，也可能为空。
`commits[][removed]`|`array` | 在提交中删除的文件数组。 对于 {% data variables.product.product_name %} 无法及时计算此列表的极大型提交，即使删除了文件，也可能为空。
`pusher` | `object` | 推送提交的用户。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.push }}

## 发布

{% data reusables.webhooks.release_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.release_webhook_properties %} {% data reusables.webhooks.release_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

当 {% data variables.product.prodname_github_app %} 将 `POST` 请求发送到“[创建存储库调度事件](/rest/reference/repos#create-a-repository-dispatch-event)”终结点时，会发生此事件。

### 可用性

- {% data variables.product.prodname_github_apps %} 必须具有 `contents` 权限才能接收此 Webhook。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## repository

{% data reusables.webhooks.repository_short_desc %}

### 可用性

- 存储库 Webhook 接收除 `deleted` 之外的所有事件类型
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_apps %} 接收除 `deleted` 之外的所有事件类型

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 这可以是下列其中一项：<ul><li>`created` - 已创建存储库。</li><li>`deleted` - 已删除存储库。</li><li>`archived` - 存储库已存档。</li><li>`unarchived` - 存储库未存档。</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled` - 存储库[已启用匿名 Git 访问](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)，`anonymous_access_disabled` - 存储库[已禁用匿名 Git 访问](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)</li>{% endif %}<li>`edited` - 已编辑存储库信息。</li><li>`renamed` - 已重命名存储库。</li><li>`transferred` - 存储库已转让。</li><li>`publicized` - 存储库已设为公共。</li><li> `privatized` - 存储库已设为专用。</li></ul>
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} 要在个人仓库中接收此事件，必须在导入之前创建一个空仓库。 可以使用 [GitHub 导入工具](/articles/importing-a-repository-with-github-importer/)或[源导入 API](/rest/reference/migrations#source-imports) 触发此事件。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.repository_import_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.repository_vulnerability_alert_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% ifversion ghes or ghec %}

## secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `secret_scanning_alerts:read` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.secret_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | 如果 `action` 为 `resolved` 或 `reopened`，则 `sender` 对象将是触发事件的用户。 对于所有其他操作，`sender` 对象为空。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }} {% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `secret_scanning_alerts:read` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }} {% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

与已由 {% data variables.product.company_short %} 审查的安全通告相关的活动。 经过 {% data variables.product.company_short %} 审查的安全通告提供了有关 {% data variables.product.prodname_dotcom %}上软件中安全相关漏洞的信息。

安全通告数据集还为 GitHub {% data variables.product.prodname_dependabot_alerts %} 提供支持。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)”。

### 可用性

- 具有 `security_events` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 对于所有新事件，操作可以是 `published`、`updated`、`performed` 或 `withdrawn` 之一。
`security_advisory` |`object` | 安全通告的详细信息，包括摘要、说明和严重程度。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

与为存储库或组织启用或禁用代码安全性和分析功能相关的活动。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 对存储库管理至少拥有 `read-only` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`changes`|`object` | 对代码安全性和分析功能所做的更改。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## sponsorship

{% data reusables.webhooks.sponsorship_short_desc %}

您只能在 {% data variables.product.prodname_dotcom %} 上创建赞助 web 挂钩。 有关详细信息，请参阅“[为赞助帐户中的事件配置 Webhook](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)”。

### 可用性

- 赞助帐户

### Web 挂钩有效负载对象

{% data reusables.webhooks.sponsorship_webhook_properties %} {% data reusables.webhooks.sponsorship_properties %} {% data reusables.webhooks.sender_desc %}

### 有人创建赞助时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

### 有人降级赞助时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

## 星号键

{% data reusables.webhooks.star_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.star_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.star.created }}

## status

{% data reusables.webhooks.status_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `statuses` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`id` | `integer` | 状态的唯一标识符。
`sha`|`string` | 提交 SHA。
`state`|`string` | 新状态。 可以是 `pending`、`success`、`failure` 或 `error`。
`description`|`string` | 添加到状态的可选人类可读说明。
`target_url`|`string` | 添加到状态的可选链接。
`branches`|`array` | 包含状态的 SHA 的分支对象数组。 每个分支都包含给定的 SHA，但 SHA 不一定是该分支的头部。 该数组最多包含 10 个分支。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.status }}

## 团队

{% data reusables.webhooks.team_short_desc %}

### 可用性

- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 可以是 `created`、`deleted`、`edited`、`added_to_repository` 或 `removed_from_repository` 之一。
`team`  |`object` | 团队本身。
`changes`|`object` | 对团队的更改（如果操作为 `edited`）。
`changes[description][from]` |`string` | 先前版本的说明（如果操作为 `edited`）。
`changes[name][from]` |`string` | 先前版本的名称（如果操作为 `edited`）。
`changes[privacy][from]` |`string` | 先前版本的团队隐私（如果操作为 `edited`）。
`changes[repository][permissions][from][admin]` | `boolean` | 团队成员对存储库的 `admin` 权限的先前版本（如果操作为 `edited`）。
`changes[repository][permissions][from][pull]` | `boolean` | 团队成员对存储库的 `pull` 权限的先前版本（如果操作为 `edited`）。
`changes[repository][permissions][from][push]` | `boolean` | 团队成员对存储库的 `push` 权限的先前版本（如果操作为 `edited`）。
`repository`|`object` | 从团队权限范围内添加或删除的存储库（如果操作为 `added_to_repository`、`removed_from_repository` 或 `edited`）。 对于 `edited` 操作，`repository` 还包含团队对存储库的新权限级别。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

密钥 | 类型 | 说明
----|------|-------------
`team`|`object` | 已修改的[团队](/rest/reference/teams)。  注意：较旧的事件可能不会在有效负载中包括此值。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## user

当用户为 `created` 或 `deleted`。

### 可用性
- GitHub Enterprise web 挂钩。 有关详细信息，请参阅“[全局 Webhook](/rest/reference/enterprise-admin#global-webhooks/)”。

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## 查看

{% data reusables.webhooks.watch_short_desc %}

事件的行动者是为存储库加星标的[用户](/rest/reference/users)，而事件的存储库是已加星标的[存储库](/rest/reference/repos)。

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_apps %}

### Web 挂钩有效负载对象

{% data reusables.webhooks.watch_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

当有人触发在 GitHub 上运行的工作流或将 `POST` 请求发送到“[创建工作流调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”终结点时，会发生此事件。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”。

### 可用性

- {% data variables.product.prodname_github_apps %} 必须具有 `contents` 权限才能接收此 Webhook。

### Web 挂钩有效负载对象

| 密钥 | 类型 | 说明 |
|-----|-----|-----|
| `inputs` | `object` | 工作流的输入。 每个键表示输入的名称，而该值表示该输入的值。 |
{% data reusables.webhooks.org_desc %} | `ref` | `string` | 运行工作流的分支引用。 | {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %} | `workflow` | `string` | 包含工作流的工作流文件的相对路径。 |

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }} {% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 企业 web 挂钩

### Web 挂钩有效负载对象

{% data reusables.webhooks.workflow_job_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %} {% ifversion fpt or ghes or ghec %}
## workflow_run

当 {% data variables.product.prodname_actions %} 工作流程运行被请求或完成时。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#workflow_run)”。

### 可用性

- 具有 `actions` 或 `contents` 权限的 {% data variables.product.prodname_github_apps %}。

### Web 挂钩有效负载对象

{% data reusables.webhooks.workflow_run_properties %} {% data reusables.webhooks.workflow_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %}

### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.workflow_run }} {% endif %}
