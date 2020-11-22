---
title: 集成者最佳实践
intro: '构建能够与 {% data variables.product.prodname_dotcom %} API 进行可靠交互并为用户提供最佳体验的应用程序。'
redirect_from:
  - /guides/best-practices-for-integrators/
  - /v3/guides/best-practices-for-integrators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


有兴趣与 GitHub 平台集成吗？ [与您志趣相投的大有人在](https://github.com/integrations)。 本指南将帮助您构建能够为用户提供最佳体验*并*确保与 API 进行可靠交互的应用程序。

### 确保安全接收从 GitHub 交付的有效负载

确保安全接收[从 GitHub 发送的有效负载][event-types]非常重要。 虽然有效负载中不会传输个人信息，但泄露*任何*信息总是不好的。 有些信息可能比较敏感，包括提交者电子邮件地址或私有仓库的名称。

您可以采取以下几个步骤来确保安全接收由 GitHub 交付的工作负载：

1. 确保您的接收服务器在 HTTPS 连接上。 默认情况下，GitHub 在交付有效负载时会验证 SSL 证书。{% if currentVersion == "free-pro-team@latest" %}
1. 您可以将[我们在交付挂钩时使用的 IP 地址](/github/authenticating-to-github/about-githubs-ip-addresses)添加到服务器的允许列表中。 为确保始终检查 IP 地址是否正确，您可以[使用 `/meta` 端点](/v3/meta/#meta)查找我们使用的地址。{% endif %}
1. 提供[密钥令牌](/webhooks/securing/)以确保有效负载肯定来自 GitHub。 通过实施密钥令牌，您可以确保服务器接收的任何数据绝对来自 GitHub。 理想情况下，您应该为您服务的*每个用户*都提供一个不同的密钥令牌。 这样，即使某个令牌被泄露，也不至于影响其他用户。

### 支持异步工作而非同步工作

GitHub 要求在收到 web 挂钩有效负载后 {% if currentVersion == "free-pro-team@latest" %}10{% else %}30{% endif %} 秒内做出集成响应。 如果您的服务需要更长的时间才能完成，则 GitHub 将终止连接，并且有效负载将丢失。

由于无法预测您的服务完成速度，因此您应该在后台作业中执行所有“实际工作”。 [Resque](https://github.com/resque/resque/)（用于 Ruby）、[RQ](http://python-rq.org/)（用于 Python）或 [RabbitMQ](http://www.rabbitmq.com/)（用于 Java）是可以排队和处理后台作业的典型库。

请注意，即使在后台作业中执行工作，GitHub 仍要求您的服务器能够在{% if currentVersion == "free-pro-team@latest" %}十{% else %}三十{% endif %}秒内做出响应。 您的服务器需要通过发送某种响应来确认它收到了有效负载。 您的服务必须尽快对有效负载执行任何验证，以便您能够准确地报告您的服务器是否会继续处理请求。

### 响应 GitHub 时使用适当的 HTTP 状态代码

每个 web 挂钩都有自己的“最近交付”部分，其中列出了部署是否成功。

![最近交付视图](/assets/images/webhooks_recent_deliveries.png)

您应该使用适当的 HTTP 状态代码来通知用户。 您可以使用 `201` 或 `202` 等代码来确认收到了不会处理的有效负载（例如，非默认分支交付的有效负载）。 将 `500` 错误代码预留给灾难性故障。

### 向用户提供尽可能多的信息

用户可能会深入研究您发回 GitHub 的服务器响应。 请确保您的信息清晰明了。

![查看有效负载响应](/assets/images/payload_response_tab.png)

### 遵循 API 发送给您的任何重定向

GitHub 在资源发生移动时会通过提供重定向状态代码来明确告诉您。 您应该遵循这些重定向。 每个重定向响应都使用要转到的新 URI 来设置 `Location` 标头。 如果您收到了重定向，最好更新代码以遵循新的 URI，以防您请求我们可能已删除的无效路径。

我们提供了 [HTTP 状态代码列表](/v3/#http-redirects)，供您在设计应用程序时参考以便遵循重定向。

### 不要手动解析 URL

通常，API 响应包含 URL 形式的数据。 例如，当请求仓库时，我们会发送一个名为 `clone_url` 的键，其中包含可用来克隆仓库的 URL。

为了应用程序的稳定性，您不应该尝试解析此数据，或者尝试猜测并构造未来 URL 的格式。 否则，如果我们决定更改该 URL，您的应用程序可能会中断。

例如，在处理分页结果时， 往往很想构造 URL - 在末尾追加 `?page=<number>`。 要抑制这种冲动。 [我们的分页指南](/guides/traversing-with-pagination)提供了一些关于可靠跟踪分页结果的安全提示。

### 在处理事件之前检查事件类型和操作

有多种 [web 挂钩事件类型][event-types]，并且每个事件可以有多个操作。 随着 GitHub 功能集的增长，我们会不时添加新的事件类型或向现有事件类型添加新的操作。 请确保您的应用程序在进行任何 web 挂钩处理之前明确检查事件的类型和操作。 `X-GitHub-Event` 请求标头可用于了解收到了哪个事件，以便进行适当处理。 同样，有效负载具有顶层 `action` 键，可用于了解对相关对象采取了哪些操作。

例如，如果您已将 GitHub web 挂钩配置为“向我发送**所有内容**”，则在添加新的事件类型和操作时，您的应用程序就会开始接收它们。 因此，**不建议使用任何类型的 catch-all else 子句**。 以下面的代码为例：

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

在此代码实例中，如果收到 `repository` 或 `issues` 事件，将会正确调用 `process_repository` 和 `process_issues` 方法。 但是，任何其他事件类型都会导致调用 `process_pull_requests`。 当添加新的事件类型时，这将导致不正确的行为 - 将以处理 `pull_request` 事件的方式来处理新的事件类型。

因此，我们建议明确检查事件类型并采取相应行动。 在以下代码示例中，我们明确检查 `pull_request` 事件，而 `else` 子句仅记录我们已收到新事件类型：

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

由于每个事件也可以有多个操作，因此建议对操作进行类似的检查。 例如，[`IssuesEvent`](/webhooks/event-payloads/#issues) 可能有几个操作。 其中包括创建议题时的 `opened`、关闭议题时的 `closed`以及将议题分配给某人时的 `assigned`。

与添加事件类型一样，我们可以向现有事件添加新操作。 因此，再次强调，在检查事件的操作时**不要使用任何类型的 catch-all else 子句**。 相反，我们建议像检查事件类型一样明确检查事件操作。 下面的示例非常吻合我们在上文中针对事件类型的建议：

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

在此示例中，在调用 `process_closed` 方法之前会先检查 `closed` 操作。 任何未识别的操作都会被记录以供将来参考。

{% if currentVersion == "free-pro-team@latest" %}

### 处理速率限制

GitHub API [速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)旨在确保 API 快速供每个人使用。

如果您达到了速率限制，则应该停止发出请求，然后在允许的时候再试。 否则，可能会导致您的应用程序被禁用。

您可以随时[检查您的速率限制状态](/rest/reference/rate-limit)。 检查您的速率限制状态对您的速率限制不会产生任何影响。

### 处理滥用率限制

[滥用率限制](/rest/overview/resources-in-the-rest-api#abuse-rate-limits)是我们确保 API 可用性的另一种方式。 为了避免达到此限制，应确保您的应用程序遵循以下准则。

* 发出经过身份验证的请求，或使用应用程序的客户端 ID 和密钥。 未经身份验证的请求会受到更严格的滥用率限制。
* 依次为单个用户或客户端 ID 发出请求。 不要同时为单个用户或客户端 ID 发出多个请求。
* 如果您要为单个用户或客户端 ID 发出大量的 `POST`、`PATCH`、`PUT` 或 `DELETE` 请求，则每两个请求之间至少应间隔一秒钟。
* 当您受到限制时，请使用 `Retry-After` 响应标头来降低速率。 `Retry-After` 标头的值始终为整数，表示您在再次发出请求之前应等待的秒数。 例如，`Retry-After: 30` 表示您在发出更多请求之前应等待 30 秒。
* 会触发通知的内容创建请求，例如议题、评论和拉取请求，可能会受到进一步限制，并且在响应中不包含 `Retry-After` 标头。 请以合理的速率创建此类内容，以避免受到进一步限制。

我们保留根据需要更改这些准则以确保可用性的权利。

{% endif %}

### 处理 API 错误

尽管您的代码从未引入漏洞，但您可能会发现在尝试访问 API 时遇到连续错误。

您应该确保与 API 正确交互，而不是忽略重复的 `4xx` 和 `5xx` 状态代码。 例如，如果某个端点请求一个字符串，而您向其传递一个数值，则您将会收到 `5xx` 验证错误，并且您的调用不会成功。 同样，试图访问未经授权或不存在的端点会导致 `4xx` 错误。

故意忽略重复的验证错误可能会导致您的应用程序因滥用而被暂停。

[event-types]: /webhooks/event-payloads

[event-types]: /webhooks/event-payloads
