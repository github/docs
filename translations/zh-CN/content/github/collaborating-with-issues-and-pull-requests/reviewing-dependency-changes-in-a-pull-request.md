---
title: 审查拉取请求中的依赖项更改
intro: '如果拉取请求包含对依赖项的更改，您可以查看已更改内容摘要以及任何依赖项中是否存在已知漏洞。'
versions:
  free-pro-team: '*'
---

{% note %}

**注意：**依赖项审查目前处于测试阶段，可能会更改。

{% endnote %}

### 关于依赖项审查

如果拉取请求针对仓库的默认分支并且包含对包清单或锁定文件的更改，您可以显示依赖项审查以查看更改的内容。 依赖项审查包括对锁定文件中间接依赖项的更改详情，并告诉您任何已添加或更新的依赖项是否包含已知漏洞。

依赖项审查适用于：

* 所有公共仓库。
* 由具有 {% data variables.product.prodname_advanced_security %} 许可的组织所拥有并且启用了依赖关系图的私有仓库。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 {% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的更多信息，请参阅“[关于有漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

### 审查拉取请求中的依赖项

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. 如果拉取请求包含许多文件，请使用 **File filter（文件过滤器）**下拉菜单折叠所有不记录依赖项的文件。 这将有助于您将审查的重点放在依赖项更改上。

   ![文件过滤器菜单](/assets/images/help/pull_requests/file-filter-menu-json.png)

1. 在清单或锁定文件标头的右侧，单击 **{% octicon "file" aria-label="The rich diff icon" %}** 多差异按钮以显示依赖项审查。

   ![多差异按钮](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

  {% note %}

   **注：**依赖项审查提供关于大型锁定文件中已更改内容的更清晰视图，源差异在默认情况下不会呈现。

   {% endnote %}

1. 检查依赖项审查中列出的依赖项。

   ![依赖项审查中的漏洞警告](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   任何已添加或更改的有漏洞依赖项先按严重程度排序，然后按依赖项名称排序。 这意味着严重程度最高的依赖项始终处于依赖项审查的顶部。 其他依赖项按其名称的字母顺序排列。

   每个依赖项旁边的图标指示该依赖项在此拉取请求中已添加 (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>)、更新 (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) 或删除 (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>)。

   其他信息包括：

   * 新、更新或删除的依赖项的版本或版本范围。
   * 对于依赖项的特定版本：
      * 依赖项的发布时间。
      * 依赖此软件的项目数量。 此信息取自依赖关系图。 检查依赖项的数量可以帮助您避免意外添加错误的依赖项。
      * 此依赖项使用的许可（如果此信息可用）。 如果要避免在项目中使用具有某些许可的代码，此选项非常有用。

   如果依赖项具有已知漏洞，则警告消息包括：

   * 漏洞的简要说明。
   * 通用漏洞披露 (CVE) 或 {% data variables.product.prodname_security_advisories %} (GHSA) 标识号。 您可以单击此 ID 以查找有关漏洞的更多信息。
   * 漏洞的严重程度。
   * 修复漏洞的依赖项版本。 审查某人的拉取请求时，您可以要求参与者将依赖项更新到修补版本或更新版本。

{% data reusables.repositories.return-to-source-diff %}
