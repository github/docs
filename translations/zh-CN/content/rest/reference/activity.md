---
title: 活动
redirect_from:
  - /v3/activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 事件

事件 API 是 {% data variables.product.prodname_dotcom %} 事件的只读 API。 这些事件推动站点上的各种活动流。

事件 API 可以返回 {% data variables.product.product_name %} 上的活动触发的不同类型事件。 事件 API 可以返回 {% data variables.product.product_name %} 上的活动触发的不同类型事件。 有关可以从事件 API 接收的特定事件的更多信息，请参阅“[{{ site.data.variables.product.prodname_dotcom }} 事件类型](/developers/webhooks-and-events/github-event-types)”。 更多信息请参阅“[议题事件 API](/rest/reference/issues#events)”。

事件针对使用 "ETag" 标头的轮询进行了优化。 如果未触发任何新事件，您将会看到一个 "304 Not Modified" 响应，并且您的当前速率限制不受影响。 还有一个 "X-Poll-Interval" 标头，用于指定允许您轮询的间隔时间（以秒为单位）。 在服务器负载较高时，该时间可能会增加。 请遵循标头指示。

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/1.1 200 OK
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

事件支持分页，但不支持 `per_page` 选项。 固定页面大小为 30 个条目。 支持最多获取 10 页，总共 300 个事件。 更多信息请参阅“[使用分页遍历](/rest/guides/traversing-with-pagination)”。

时间表中只包含过去 90 天内创建的事件。 超过 90 天的活动将不包括在内（即使时间表中的活动总数不到 300 个）。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 馈送

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'feeds' %}{% include rest_operation %}{% endif %}
{% endfor %}

### 获取 Atom 馈送的示例

要获取 Atom 格式的馈送，您必须在 `Accept` 标头中指定 `application/atom+xml` 类型。 例如，要获取 GitHub 安全通告的 Atom 馈送：

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### 响应

```shell
Status: 200 OK
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via defaultsDeep, merge, and mergeWith functions, which allows a malicious user to modify the prototype of &quot;Object&quot; via &lt;strong&gt;proto&lt;/strong&gt;, causing the addition or modification of an existing property that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```

## 通知

用户将收到其关注的仓库中各种对话的通知，包括：

* 议题及其评论
* 拉取请求及其评论
* 对任何提交的评论

当用户涉及未关注仓库中的对话时也会发送通知，包括：

* **@提及**
* 议题分配
* 提交用户作者或提交
* 用户积极参与的任何讨论

所有通知 API 调用都需要 `notifications` 或 `repo` API 作用域。  这将赋予对某些议题和提交内容的只读权限。 您仍需要 `repo` 作用域才能从相应的端点访问议题和提交。

通知以“帖子”的形式返回。  帖子包含当前对议题、拉取请求或提交的讨论信息。

通知通过 `Last-Modified` 标头对轮询进行了优化。  如果没有新的通知，您将看到 `304 Not Modified` 响应，您的当前速率限制不受影响。  有一个 `X-Poll-Interval` 标头用于指定允许您轮询的间隔时间（以秒为单位）。  在服务器负载较高时，该时间可能会增加。  请遵循标头指示。

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/1.1 200 OK
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

### 通知原因

从通知 API 检索响应时，每个有效负载都有一个名为 `reason` 的键。 这些键对应于触发通知的事件。

以下是收到通知的可能 `reason` 列表：

| 原因名称               | 描述                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assign`           | 您被分配到议题。                                                                                                                                                     |
| `作者`               | 您创建了帖子。                                                                                                                                                      |
| `注释，评论`            | 您评论了帖子。                                                                                                                                                      |
| `邀请`               | 您接受了参与仓库的邀请。                                                                                                                                                 |
| `manual`           | 您订阅了帖子（通过议题或拉取请求）                                                                                                                                            |
| `提及`               | 您在内容中被特别 **@提及**。                                                                                                                                            |
| `review_requested` | 您或您所属的团队被请求审查拉取请求。{% if currentVersion == "free-pro-team@latest" %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} 在您的仓库中发现了[安全漏洞](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)。{% endif %}
| `state_change`     | 您更改了帖子主题（例如关闭议题或合并拉取请求）。                                                                                                                                     |
| `subscribed`       | 您在关注仓库。                                                                                                                                                      |
| `team_mention`     | 您所属的团队被提及。                                                                                                                                                   |

请注意，`reason` 根据每个帖子而修改，如果在以后的通知中，`reason` 不同，其值可能会变更。

例如，如果您是某个议题的作者，则有关该议题的后续通知中，其 `reason` 值为 `author`。 如果后来您在这个议题上被 **@提及**，则您此后收到的通知中，其 `reason` 值为 `mention`。 无论您此后是否被再次提及，`reason` 值将保持 `mention` 不变。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'notifications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 标星

仓库标星是允许用户为仓库添加书签的功能。 显示在仓库旁边的星标表示大致的兴趣程度。 星标对通知或活动馈送没有影响。

### 标星与 关注

2012 年 8 月，我们[更改了 {% data variables.product.prodname_dotcom %} 上的关注方式](https://github.com/blog/1204-notifications-stars)。 许多 API 客户端应用程序可能在使用原始的“关注者”端点来访问此数据。 现在，您可以开始使用“星标”端点了（如下所述）。 更多信息请参阅[关注者 API 更改帖子](https://developer.github.com/changes/2012-09-05-watcher-api/)和“[仓库关注 API](/rest/reference/activity#watching)”。

### 标星的自定义媒体类型

标星 REST API 有一个支持的自定义媒体类型。 使用此自定义媒体类型时，您将收到带有 `starred_at` 时间戳属性的响应，该属性指示星标创建的时间。 该响应还有第二个属性，该属性包括在不使用自定义媒体类型时返回的资源。 包含资源的属性为 `user` 或 `repo`。

    application/vnd.github.v3.star+json

有关媒体类型的更多信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'starring' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 关注

关注仓库会注册用户接收有关新讨论的通知以及用户活动馈送中的事件。 有关简单的仓库书签制作，请参阅“[仓库标星](/rest/reference/activity#starring)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'watching' %}{% include rest_operation %}{% endif %}
{% endfor %}
