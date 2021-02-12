---
title: 关于电子邮件通知
intro: '启用电子邮件通知后，您在电子邮件客户端中将会收到参与和观看通知，您也可以使用电子邮件标头信息过滤电子邮件。'
versions:
  enterprise-server: <2.21
---

有关*参与*和*关注*通知之间差异的更多信息，请参阅“[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)”。

在启用电子邮件通知后，{% data variables.product.product_name %} 将以多部分电子邮件向您发送通知，其中包含内容的 HTML 和明文副本。 电子邮件通知内容包含出现在 {% data variables.product.product_name %} 上的原始内容中的任何 Markdown、@提及、表情符号、哈希链接等。 如果您只想查看电子邮件中的文本，可以配置电子邮件客户端只显示明文副本。 有关启用电子邮件通知的更多信息，请参阅“[选择通知的递送方式](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)”。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### 过滤电子邮件通知

{% data variables.product.product_name %} 发送的每封电子邮件通知都包含标头信息。 每封电子邮件的标头信息都是一致的，因此可用于电子邮件客户端中过滤或转发所有 {% data variables.product.product_name %} 通知，或特定类型的 {% data variables.product.product_name %} 通知。

来自 {% data variables.product.product_name %} 的电子邮件通知包含以下标头信息：

| 标头                                                        | 信息                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` 地址                                                 | 此地址始终是“站点管理员配置的无需回复电子邮件地址”。                                                                                                                                                                                                         |
| `To` 字段                                                   | 此字段直接连接到线程。 如果您回复电子邮件，将会为对话添加新评论。                                                                                                                                                                                                   |
| `Cc` 地址                                                   | 如果您订阅了对话，{% data variables.product.product_name %} 将会 `Cc` 给您。 第二个 `Cc` 电子邮件地址与通知原因匹配。 这些通知原因的后缀是 {% data variables.notifications.cc_address %}。 可能的通知原因包括： <ul><li>`assign`：您被分配到议题或拉取请求。</li><li>`author`：您创建了议题或拉取请求。</li><li>`comment`：您评论了议题或拉取请求。</li><li>`manual`：您手动订阅的议题或拉取请求有更新。</li><li>`mention`：您提及了议题或拉取请求。</li><li>`push`：有人提交了您订阅的拉取请求。</li><li>`review_requested`：您或您所在的团队已请求审查拉取请求。</li><li>`security_alert`：{% data variables.product.prodname_dotcom %} 检测到您要接收其漏洞警报的仓库中存在漏洞。</li><li>`state_change`：您订阅的议题或拉取请求已关闭或打开。</li><li>`subscribed`：您查看的仓库有更新。</li><li>`team_mention`：您所属的团队在议题或拉取请求中被提及。</li><li>`your_activity`：您打开、评论或关闭了议题或拉取请求。</li></ul>                                                |
| `mailing list` 字段                                         | 此字段识别仓库名称及其所有者。 此地址的格式始终是 `<仓库名称>.<仓库所有者>.{% data variables.command_line.backticks %}`。                                                                                                                                 |{% if currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity` 字段                                    | {% data reusables.repositories.security-alerts-x-github-severity %} 可能的严重程度等级包括：<ul><li>`低`</li><li>`中`</li><li>`高`</li><li>`严重`</li></ul>更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。 
{% endif %}

### 延伸阅读

- "[列出您关注的仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[关注和取消关注仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[订阅和退订通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[创建 gists](/articles/creating-gists)"
