---
title: 配置自动链接以引用外部资源
intro: 您可以将自动链接添加到 JIRA 议题和 Zendesk 事件单等外部资源，以帮助简化工作流程。
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 配置自动链接
---

## 关于自动链接

具有仓库管理员权限的任何人均可配置自动链接引用，将议题、拉取请求提交消息、和发行说明链接到外部第三方服务。

{% ifversion autolink-reference-alphanumeric %}
自动链接引用现在可以接受字母数字字符。 最初引入时，自定义自动链接仅限于使用数字标识符的外部资源。 自定义自动链接现在适用于字母数字标识符。 仅识别数字标识符的旧版自动链接引用将被弃用，并带有“旧版”标签。

您可以通过指定引用前缀和目标 URL 来定义自定义自动链接。
- 引用前缀不能具有重叠的名称。 例如，存储库不能有两个自定义自动链接，其前缀为 `TICKET` 和 `TICK`，因为这两个前缀都与 `TICKET123a` 字符串匹配。
- 目标 URL 包含一个支持以下字符的 `<num>` 变量： `a-z`（不区分大小写）、`0-9` 和 `-`。
{% endif %}

## 配置自动链接以引用外部资源

此过程演示如何配置自动链接以引用外部资源。 例如，如果您使用 Zendesk 跟踪用户报告的工单，则可以在打开的拉取请求中引用事件单编号以解决问题。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在边栏的“Integrations（集成）”部分中，单击 **{% octicon "cross-reference" aria-label="The cross-reference icon" %} 自动链接引用**。
{% else %}
1. 在左侧边栏中，单击 **Autolink references（自动链接引用）**。 ![左侧边栏中的自动链接引用选项卡](/assets/images/help/repository/autolink-references-tab.png)
{% endif %}
1. 单击 **Add autolink reference（添加自动链接引用）**。 ![填写自动链接引用信息的按钮](/assets/images/help/repository/add-autolink-reference-details.png)
5. 在“Reference prefix（引用前缀）”下，输入您希望协作者用来为外部资源生成自动链接的、简短有意义的前缀。
{% ifversion autolink-reference-alphanumeric %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. 在“Target URL（目标 URL）”中，输入您想要链接到的外部系统的链接。 确保将 `<num>` 保留为引用号的变量。
{% ifversion autolink-reference-alphanumeric %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Field to type URL to external system](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. 单击 **Add autolink reference（添加自动链接引用）**。
{% ifversion autolink-reference-alphanumeric %}{% else %}![Button to add autolink reference](/assets/images/help/repository/add-autolink-reference.png){% endif %}
