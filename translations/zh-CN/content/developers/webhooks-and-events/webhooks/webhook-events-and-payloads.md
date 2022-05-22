---
title: Web 挂钩事件和有效负载
intro: 对于每个 web 挂钩事件，您可以查看事件发生的时间、示例有效负载以及有关有效负载对象参数的说明。
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks/
  - /v3/activity/events/types/
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---
{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

您可以创建订阅此页所列事件的 web 挂钩。 每个 web 挂钩事件都包括 web 挂钩属性的说明和示例有效负载。 更多信息请参阅“[创建 web 挂钩](/webhooks/creating/)”。

### Web 挂钩有效负载对象共有属性

每个 web 挂钩事件有效负载还包含特定于事件的属性。 您可以在各个事件类型部分中找到这些独特属性。

| 键        | 类型    | 描述                                           |
| -------- | ----- | -------------------------------------------- |
| `action` | `字符串` | 大多数 web 挂钩有效负载都包括 `action` 属性，其中包含触发事件的特定活动。 |
{% data reusables.webhooks.sender_desc %} 此属性包含在每个 web 挂钩有效负载中。
{% data reusables.webhooks.repo_desc %} 当事件发生源于仓库中的活动时，web 挂钩有效负载包含 `repository` 属性。
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} 更多信息请参阅“[构建 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)”。

Web 挂钩事件的独特属性与您使用[事件 API](/rest/reference/activity#events) 时在 `payload` 属性中发现的属性相同。 唯一的例外是 [`push` 事件](#push)。 `push` 事件 web 挂钩有效负载的独特属性与 Events API 中的 `payload` 属性不同。 Web 挂钩有效负载包含更详细的信息。

{% tip %}

**注：**有效负载的上限为 25 MB。 如果事件生成了更大的有效负载，web 挂钩将不会触发。 例如，如果同时推送多个分支或标记，这种情况可能会发生在 `create` 事件中。 我们建议监控有效负载的大小以确保成功递送。

{% endtip %}

#### 递送标头

递送到 web 挂钩已配置 URL 端点的 HTTP POST 有效负载将包含几个特殊标头：

| 标头                            | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | 触发递送的事件名称。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `X-GitHub-Delivery`           | 用于标识交付的 [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `X-GitHub-Enterprise-Version` | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的版本。                                                                                                                                                                                                                                                                                                                                                                                                                |
| `X-GitHub-Enterprise-Host`    | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% endif %}{% if currentVersion != "github-ae@latest" %}
| `X-Hub-Signature`             | 如果使用 [`secret`](/rest/reference/repos#create-hook-config-params) 配置了 web 挂钩，则发送此标头。 这是请求正文的 HMAC 十六进制摘要，它是使用 SHA-1 哈希函数和作为 HMAC `key` 的 `secret` 生成的。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} 提供 `X-Hub-Signature` 是为了兼容现有集成，我们建议您使用更安全的 `X-Hub-Signature-256`。{% endif %}{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `X-Hub-Signature-256`         | 如果使用 [`secret`](/rest/reference/repos#create-hook-config-params) 配置了 web 挂钩，则发送此标头。 这是请求正文的 HMAC 十六进制摘要，它是使用 SHA-256 哈希函数和作为 HMAC `key` 的 `secret` 生成的。{% endif %}

此外，请求的 `User-Agent` 将含有前缀 `GitHub-Hookshot/`。

#### 递送示例

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% if currentVersion != "github-ae@latest" %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c{% endif %}
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

### check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### 可用性

- 仓库 web 挂钩只接收仓库中 `created` 和 `completed` 事件类型的有效负载
- 组织 web 挂钩只接收仓库中 `created` 和 `completed` 事件类型的有效负载
- 具有 `checks:read` 权限的 {% data variables.product.prodname_github_app %} 接收应用程序所在仓库中发生的 `created` 和 `completed` 事件的有效负载。 应用程序必须具有 `checks:write` 权限才能接收 `rerequested` 和 `requested_action` 事件类型。 `rerequested` 和 `requested_action` 事件类型有效负载仅发送到被请求的 {% data variables.product.prodname_github_app %}。 具有 `checks:write` 权限的 {% data variables.product.prodname_github_app %} 会自动订阅此 web 挂钩事件。

#### Web 挂钩有效负载对象

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.check_run.created }}

### check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### 可用性

- 仓库 web 挂钩只接收仓库中 `completed` 事件类型的有效负载
- 组织 web 挂钩只接收仓库中 `completed` 事件类型的有效负载
- 具有 `checks:read` 权限的 {% data variables.product.prodname_github_app %} 接收应用程序所在仓库中发生的 `created` 和 `completed` 事件的有效负载。 应用程序必须具有 `checks:write` 权限才能接收 `requested` 和 `rerequested` 事件类型。 `requested` 和 `rerequested` 事件类型有效负载仅发送到被请求的 {% data variables.product.prodname_github_app %}。 具有 `checks:write` 权限的 {% data variables.product.prodname_github_app %} 会自动订阅此 web 挂钩事件。

#### Web 挂钩有效负载对象

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | 如果 `action` 是 `reopened_by_user` 或 `closed_by_user`，则 `sender` 对象将是触发事件的用户。 `sender` 对象
对所有其他操作为{% if currentVersion == "free-pro-team@latest" %}`github` {% elsif currentVersion ver_gt "enterprise-server@3.0" %}`github-enterprise` {% else %}空 {% endif %}。

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

### commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}
{% endif %}

### content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Web 挂钩事件是基于您注册的域的特异性而触发的。 例如，如果您注册了一个子域 (`https://subdomain.example.com`)，则只有该子域的 URL 才会触发此事件。 如果您注册了一个域 (`https://example.com`)，则该域及所有子域的 URL 都会触发此事件。 请参阅“[创建内容附件](/rest/reference/apps#create-a-content-attachment)”以创建新的内容附件。

#### 可用性

- 具有 `content_references:write` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

### create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**注：**同时推送三个以上的标记时不会收到此事件的 web 挂钩。

{% endnote %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.create }}

### delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**注：**同时删除三个以上的标记时不会收到此事件的 web 挂钩。

{% endnote %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.delete }}

### deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

### deployment

{% data reusables.webhooks.deployment_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `deployments` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键            | 类型                                                                                                                                          | 描述                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `action`     | `字符串`                                                                                                                                       | 执行的操作。 可以是 `created`。{% endif %}
| `deployment` | `对象`                                                                                                                                        | [部署](/rest/reference/repos#list-deployments)。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deployment }}

### deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `deployments` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键                                  | 类型                                                                                                                                          | 描述                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `action`                           | `字符串`                                                                                                                                       | 执行的操作。 可以是 `created`。{% endif %}
| `deployment_status`                | `对象`                                                                                                                                        | [部署状态](/rest/reference/repos#list-deployment-statuses)。 |
| `deployment_status["state"]`       | `字符串`                                                                                                                                       | 新状态。 可以是 `pending`、`success`、`failure` 或 `error`。       |
| `deployment_status["target_url"]`  | `字符串`                                                                                                                                       | 添加到状态的可选链接。                                             |
| `deployment_status["description"]` | `字符串`                                                                                                                                       | 添加到状态的可选人类可读说明。                                         |
| `deployment`                       | `对象`                                                                                                                                        | 此状态关联的[部署](/rest/reference/repos#list-deployments)。     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% if currentVersion == "free-pro-team@latest" %}
### 讨论

{% data reusables.webhooks.discussions-webhooks-beta %}

与讨论有关的活动。 更多信息请参阅“[使用 GraphQL API 进行讨论](/graphql/guides/using-the-graphql-api-for-discussions)”。
#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `discussions` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                                                                                                                                          |
| -------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `action` | `字符串` | 执行的操作。 可以是 `created`、`edited`、`deleted`、`pinned`、`unpinned`、`locked`、`unlocked`、`transferred`、`category_changed`、`answered` 或 `unanswered`。 |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.discussion.created }}

### discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

与讨论中的评论相关的活动。 更多信息请参阅“[使用 GraphQL API 进行讨论](/graphql/guides/using-the-graphql-api-for-discussions)”。

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `discussions` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                                                                                                  |
| -------- | ----- | --------------------------------------------------------------------------------------------------- |
| `action` | `字符串` | 执行的操作。 可以是 `created`、`edited` 或 `deleted`。                                                          |
| `注释，评论`  | `对象`  | [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment) 资源。 |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### 企业

{% data reusables.webhooks.enterprise_short_desc %}

#### 可用性

- GitHub Enterprise web 挂钩。 更多信息请参阅“[全局 web 挂钩](/rest/reference/enterprise-admin#global-webhooks/)”。

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                                                                   |
| -------- | ----- | -------------------------------------------------------------------- |
| `action` | `字符串` | 执行的操作。 可以是 `anonymous_access_enabled` 或 `anonymous_access_disabled`。 |

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

### 复刻

{% data reusables.webhooks.fork_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.fork }}

### github_app_authorization

当有人撤销对 {% data variables.product.prodname_github_app %} 的授权时，将发生此事件。 {% data variables.product.prodname_github_app %} 默认情况下会接收此 web 挂钩，并且无法取消订阅此事件。

{% data reusables.webhooks.authorization_event %} 有关 user-to-server 请求（需要 {% data variables.product.prodname_github_app %} 授权）的详细信息，请参阅“[识别和授权 {% data variables.product.prodname_github_app %} 用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

#### 可用性

- {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                    |
| -------- | ----- | --------------------- |
| `action` | `字符串` | 执行的操作。 可以是 `revoked`。 |
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

### gollum

{% data reusables.webhooks.gollum_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.gollum }}

### 安装

{% data reusables.webhooks.installation_short_desc %}

{% note %}

**注：**此事件替换将被弃用的事件。 订阅此事件时，您还会收到已弃用事件 `integration_installation`，直到它被永久删除。

{% endnote %}

#### 可用性

- {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

### installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

{% note %}

**注：**此事件替换将被弃用的事件。 订阅此事件时，您还会收到已弃用事件 `integration_installation_repositories`，直到它被永久删除。

{% endnote %}

#### 可用性

- {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

### issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `issues` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

### 议题

{% data reusables.webhooks.issues_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `issues` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### 有人编辑议题时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.issues.edited }}

### 标签

{% data reusables.webhooks.label_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键                      | 类型    | 描述                                           |
| ---------------------- | ----- | -------------------------------------------- |
| `action`               | `字符串` | 执行的操作内容. 可以是 `created`、`edited` 或 `deleted`。 |
| `标签`                   | `对象`  | 添加的标签。                                       |
| `changes`              | `对象`  | 对标签的更改（如果操作为 `edited`）。                      |
| `changes[name][from]`  | `字符串` | 名称的先前版本（如果操作为 `edited`）。                     |
| `changes[color][from]` | `字符串` | 颜色的先前版本（如果操作为 `edited`）。                     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% if currentVersion == "free-pro-team@latest" %}
### marketplace_purchase

与 GitHub Marketplace 购买相关的活动。 {% data reusables.webhooks.action_type_desc %} 更多信息请参阅“[GitHub Marketplace](/marketplace/)”。

#### 可用性

- {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                                                                                                  |
| -------- | ----- | --------------------------------------------------------------------------------------------------- |
| `action` | `字符串` | 为 [GitHub Marketplace](https://github.com/marketplace) 计划执行的操作。 可以是以下选项之一：<ul><li>`purchased` - 有人购买了 GitHub Marketplace 计划。 更改应立即对帐户生效。</li><li>`pending_change` - 当有人降级或取消了 GitHub Marketplace 计划以指示帐户上将发生更改时，您将收到 `pending_change` 事件。 新的计划或取消将在结算周期结束时生效。  当结算周期结束并且取消或新计划应生效时，将发送 `cancelled` 或 `changed` 事件类型。</li><li>`pending_change_cancelled` - 有人取消了待处理更改。 待处理更改包括将在结算周期结束时生效的计划取消和降级。 </li><li>`changed` - 有人升级或降级了 GitHub Marketplace 计划，并且该更改应立即对帐户生效。</li><li>`cancelled` - 有人取消了 GitHub Marketplace 计划并且最后一个结算周期已结束。 更改应立即对帐户生效。</li></ul> |

有关此有效负载和每种 `action` 类型的有效负载的详细说明，请参阅 [{% data variables.product.prodname_marketplace %} web 挂钩事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)。

#### 有人购买计划时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

### 成员

{% data reusables.webhooks.member_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.member.added }}

### membership

{% data reusables.webhooks.membership_short_desc %}

#### 可用性

- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.membership.removed }}

### meta

配置此事件的 web 挂钩已被删除。 此事件将仅监听对安装此事件的特定挂钩的更改。 因此，必须为要接收元事件的每个挂钩选择它。

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

| 键         | 类型    | 描述                                                                                          |
| --------- | ----- | ------------------------------------------------------------------------------------------- |
| `action`  | `字符串` | 执行的操作。 可以是 `deleted`。                                                                       |
| `hook_id` | `整数`  | 修改后的 web 挂钩的 ID。                                                                            |
| `挂钩`      | `对象`  | 修改后的 web 挂钩。 它将包含基于 web 挂钩类型的不同键：repository、organization、business、app 或 GitHub Marketplace。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

### 里程碑

{% data reusables.webhooks.milestone_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.milestone.created }}

### 组织

{% data reusables.webhooks.organization_short_desc %}

#### 可用性

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- GitHub Enterprise web 挂钩只接收 `created` 和 `deleted` 事件。 更多信息请参阅“[全局 web 挂钩](/rest/reference/enterprise-admin#global-webhooks/)”。{% endif %}
- 组织 web 挂钩只接收 `deleted`、`added`、`removed`、`renamed` 和 `invited` 事件
- 具有 `members` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键            | 类型    | 描述                                                                                                                                                                                                                 |
| ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`     | `字符串` | 执行的操作内容. 可以是以下选项之一：{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} `created`、{% endif %} `deleted`、`renamed`、`member_added`、`member_removed` 或 `member_invited`。 |
| `邀请`         | `对象`  | 对用户的邀请或电子邮件邀请（如果操作为 `member_invited`）。                                                                                                                                                                             |
| `membership` | `对象`  | 用户和组织之间的成员资格。  当操作为 `member_invited` 时不存在。                                                                                                                                                                         |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% if currentVersion == "free-pro-team@latest" %}

### org_block

{% data reusables.webhooks.org_block_short_desc %}

#### 可用性

- 组织 web 挂钩
- 具有 `organization_administration` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键              | 类型    | 描述                                  |
| -------------- | ----- | ----------------------------------- |
| `action`       | `字符串` | 执行的操作。 可以是 `blocked` 或 `unblocked`。 |
| `blocked_user` | `对象`  | 有关被阻止或取消阻止的用户的信息。                   |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}

### package

与 {% data variables.product.prodname_registry %} 有关的活动。 {% data reusables.webhooks.action_type_desc %}更多信息请参阅“[使用 {% data variables.product.prodname_registry %} 管理包](/github/managing-packages-with-github-packages)”以详细了解 {% data variables.product.prodname_registry %}。

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.package.published }}
{% endif %}

### page_build

{% data reusables.webhooks.page_build_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pages` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键    | 类型   | 描述                                                                      |
| ---- | ---- | ----------------------------------------------------------------------- |
| `id` | `整数` | 页面构建的唯一标识符。                                                             |
| `构建` | `对象` | [列表 GitHub Pages 构建](/rest/reference/repos#list-github-pages-builds)本身。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.page_build }}

### ping

{% data reusables.webhooks.ping_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- {% data variables.product.prodname_github_app %} 接收带有用于注册应用程序的 `app_id` 的 ping 事件。

#### Web 挂钩有效负载对象

| 键              | 类型    | 描述                                                                                                                                                                                                                                                                                          |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zen`          | `字符串` | GitHub zen 的随机字符串。                                                                                                                                                                                                                                                                          |
| `hook_id`      | `整数`  | 触发 ping 的 web 挂钩的 ID。                                                                                                                                                                                                                                                                       |
| `挂钩`           | `对象`  | [web 挂钩配置](/rest/reference/repos#get-a-repository-webhook)。                                                                                                                                                                                                                                 |
| `hook[app_id]` | `整数`  | 注册新的 {% data variables.product.prodname_github_app %} 时，{% data variables.product.product_name %} 将 ping 事件发送到您在注册过程中指定的 **web 挂钩 URL**。 该事件包含 `app_id`，这是[验证](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/)应用程序的必需项。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.ping }}

### project_card

{% data reusables.webhooks.project_card_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project_card.created }}

### project_column

{% data reusables.webhooks.project_column_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project_column.created }}

### project

{% data reusables.webhooks.project_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `repository_projects` 或 `organization_projects` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.project.created }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### public

{% data reusables.webhooks.public_short_desc %}
#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键 | 类型 | 描述 |
| - | -- | -- |
|   |    |    |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
### pull_request

{% data reusables.webhooks.pull_request_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

`review_requested` 和 `review_request_removed` 事件的递送将含有一个额外的字段，称为 `requested_reviewer`。

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

### pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

### pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `pull_requests` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

### 推送

{% data reusables.webhooks.push_short_desc %}

{% note %}

**注：**同时推送三个以上的标记时不会收到此事件的 web 挂钩。

{% endnote %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键                          | 类型    | 描述                                                                                                                     |
| -------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------- |
| `ref`                      | `字符串` | 被推送的完整 [`git ref`](/rest/reference/git#refs)。 例如：`refs/heads/main`。                                                    |
| `before`                   | `字符串` | 推送之前在 `ref` 上最近提交的 SHA。                                                                                                |
| `after`                    | `字符串` | 推送之后在 `ref` 上最近提交的 SHA。                                                                                                |
| `commits`                  | `数组`  | 描述所推送提交的提交对象数组。 （该数组最多包含 20 个提交。 如有必要，可使用[提交 API](/rest/reference/repos#commits) 获取更多提交。 此限制仅适用于时间表事件，而不适用于 web 挂钩递送。） |
| `commits[][id]`            | `字符串` | 提交的 SHA。                                                                                                               |
| `commits[][timestamp]`     | `字符串` | 提交的 ISO 8601 时间戳。                                                                                                      |
| `commits[][message]`       | `字符串` | 提交消息.                                                                                                                  |
| `commits[][author]`        | `对象`  | 提交的 Git 作者。                                                                                                            |
| `commits[][author][name]`  | `字符串` | Git 作者的名称。                                                                                                             |
| `commits[][author][email]` | `字符串` | Git 作者的电子邮件地址。                                                                                                         |
| `commits[][url]`           | `url` | 指向提交 API 资源的 URL。                                                                                                      |
| `commits[][distinct]`      | `布尔值` | 此提交是否与之前推送的任何提交不同。                                                                                                     |
| `commits[][added]`         | `数组`  | 在提交中添加的文件数组。                                                                                                           |
| `commits[][modified]`      | `数组`  | 由提交修改的文件数组。                                                                                                            |
| `commits[][removed]`       | `数组`  | 在提交中删除的文件数组。                                                                                                           |
| `pusher`                   | `对象`  | 推送提交的用户。                                                                                                               |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.push }}

### 发行版

{% data reusables.webhooks.release_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `contents` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.release.published }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### repository_dispatch

当 {% data variables.product.prodname_github_app %} 将 `POST` 请求发送到“[创建仓库分发事件](/rest/reference/repos#create-a-repository-dispatch-event)”端点时，此事件发生。

#### 可用性

- {% data variables.product.prodname_github_app %} 必须具有 `contents` 权限才能接收此 web 挂钩。

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}
{% endif %}

### 仓库

{% data reusables.webhooks.repository_short_desc %}

#### 可用性

- 仓库 web 挂钩接收除 `deleted` 之外的所有事件类型
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_app %} 接收除 `deleted` 之外的所有事件类型

#### Web 挂钩有效负载对象

| 键        | 类型    | 描述                                           |
| -------- | ----- | -------------------------------------------- |
| `action` | `字符串` | 执行的操作内容. 可以是以下选项之一：<ul><li>`created` - 创建了仓库。</li><li>`deleted` - 仓库被删除。</li><li>`archived` - 仓库被存档。</li><li>`unarchived` - 仓库被取消存档。</li>{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}<li>`anonymous_access_enabled` - 仓库被[启用匿名 Git 访问](/rest/overview/api-previews#anonymous-git-access-to-repositories), `anonymous_access_disabled` - 仓库被[禁用匿名 Git 访问](/rest/overview/api-previews#anonymous-git-access-to-repositories)</li>{% endif %}<li>`edited` - 仓库的信息被编辑。</li><li>`renamed` - 仓库被重命名。</li><li>`transferred` - 仓库被转让。</li><li>`publicized` - 仓库被设为公共。</li><li> `privatized` - 仓库被设为私有。</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% if currentVersion == "free-pro-team@latest"%}
### repository_import

{% data reusables.webhooks.repository_import_short_desc %} 要在个人仓库中接收此事件，必须在导入之前创建一个空仓库。 此事件可使用 [GitHub 导入工具](/articles/importing-a-repository-with-github-importer/)或[来源导入 API](/rest/reference/migrations#source-imports) 触发。

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_import }}

### repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `secret_scanning_alerts:read` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | 如果 `action` 是 `resolved` 或 `reopened`，则 `sender` 对象将是触发事件的用户。 对于所有其他操作，`sender` 对象都为空。

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@1.19" %}
### security_advisory

与安全通告相关的活动。 安全通告提供有关 GitHub 软件中安全漏洞的信息。 安全通告数据集还支持 GitHub 安全警报，请参阅“[关于漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)”。
{% endif %}

#### 可用性

- 具有 `security_events` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键                   | 类型    | 描述                                                              |
| ------------------- | ----- | --------------------------------------------------------------- |
| `action`            | `字符串` | 执行的操作内容. 对于所有新事件，该操作可以是 `published`、`updated` 或 `performed` 之一。 |
| `security_advisory` | `对象`  | 安全通告的详细信息，包括摘要、说明和严重程度。                                         |

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% if currentVersion == "free-pro-team@latest" %}
### sponsorship

{% data reusables.webhooks.sponsorship_short_desc %}

您只能在 {% data variables.product.prodname_dotcom %} 上创建赞助 web 挂钩。 更多信息请参阅“[为赞助帐户中的事件配置 web 挂钩](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)”。

#### 可用性

- 赞助帐户

#### Web 挂钩有效负载对象

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

#### 有人创建赞助时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

#### 有人降级赞助时的 web 挂钩示例

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

### 星标

{% data reusables.webhooks.star_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩

#### Web 挂钩有效负载对象

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.star.created }}

### 状态

{% data reusables.webhooks.status_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `statuses` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键            | 类型    | 描述                                                                  |
| ------------ | ----- | ------------------------------------------------------------------- |
| `id`         | `整数`  | 状态的唯一标识符。                                                           |
| `sha`        | `字符串` | 提交 SHA。                                                             |
| `state`      | `字符串` | 新状态。 可以是 `pending`、`success`、`failure` 或 `error`。                   |
| `说明`         | `字符串` | 添加到状态的可选人类可读说明。                                                     |
| `target_url` | `字符串` | 添加到状态的可选链接。                                                         |
| `分支`         | `数组`  | 包含状态的 SHA 的分支对象数组。 每个分支都包含给定的 SHA，但 SHA 不一定是该分支的头部。 该数组最多包含 10 个分支。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.status }}

### 团队

{% data reusables.webhooks.team_short_desc %}

#### 可用性

- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键                                               | 类型    | 描述                                                                                                                              |
| ----------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                        | `字符串` | 执行的操作内容. 可以是 `created`、`deleted`、`edited`、`added_to_repository` 或 `removed_from_repository` 之一。                                 |
| `团队`                                            | `对象`  | 团队本身。                                                                                                                           |
| `changes`                                       | `对象`  | 对团队的更改（如果操作为 `edited`）。                                                                                                         |
| `changes[description][from]`                    | `字符串` | 说明的先前版本（如果操作为 `edited`）。                                                                                                        |
| `changes[name][from]`                           | `字符串` | 名称的先前版本（如果操作为 `edited`）。                                                                                                        |
| `changes[privacy][from]`                        | `字符串` | 团队隐私的先前版本（如果操作为 `edited`）。                                                                                                      |
| `changes[repository][permissions][from][admin]` | `布尔值` | 团队成员对仓库 `admin` 权限的先前版本（如果操作为 `edited`）。                                                                                        |
| `changes[repository][permissions][from][pull]`  | `布尔值` | 团队成员对仓库 `pull` 权限的先前版本（如果操作为 `edited`）。                                                                                         |
| `changes[repository][permissions][from][push]`  | `布尔值` | 团队成员对仓库 `push` 权限的先前版本（如果操作为 `edited`）。                                                                                         |
| `仓库`                                            | `对象`  | 在团队权限范围中添加或删除的仓库（如果操作为 `added_to_repository`、`removed_from_repository` 或 `edited`）。 对于 `edited` 操作，`repository` 还包含团队对仓库的新权限级别。 |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

### team_add

{% data reusables.webhooks.team_add_short_desc %}

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `members` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

| 键    | 类型   | 描述                                                           |
| ---- | ---- | ------------------------------------------------------------ |
| `团队` | `对象` | 被修改的[团队](/rest/reference/teams)。  **注：**较旧的事件可能不会在有效负载中包括此值。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.team_add }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### 用户

当用户被 `created` 或 `deleted` 时。

#### 可用性
- GitHub Enterprise web 挂钩。 更多信息请参阅“[全局 web 挂钩](/rest/reference/enterprise-admin#global-webhooks/)”。

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

### 查看

{% data reusables.webhooks.watch_short_desc %}

事件的执行者是标星仓库的[用户](/rest/reference/users)，并且事件的仓库是被标星的[仓库](/rest/reference/repos)。

#### 可用性

- 仓库 web 挂钩
- 组织 web 挂钩
- 具有 `metadata` 权限的 {% data variables.product.prodname_github_app %}

#### Web 挂钩有效负载对象

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### workflow_dispatch

当有人触发 GitHub 上的工作流程运行或将 `POST` 请求发送到“[创建工作流程分发事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”端点时，此事件发生。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”。

#### 可用性

- {% data variables.product.prodname_github_app %} 必须具有 `contents` 权限才能接收此 web 挂钩。

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### workflow_run

当 {% data variables.product.prodname_actions %} 工作流程运行被请求或完成时。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#workflow_run)”。

#### 可用性

- 具有 `actions` 或 `contents` 权限的 {% data variables.product.prodname_github_app %}。

#### Web 挂钩有效负载对象

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

#### Web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
