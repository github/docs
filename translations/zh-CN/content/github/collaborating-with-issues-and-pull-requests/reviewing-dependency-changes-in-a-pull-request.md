---
title: 审查拉取请求中的依赖项更改
intro: '如果拉取请求包含对依赖项的更改，您可以查看已更改内容摘要以及任何依赖项中是否存在已知漏洞。'
versions:
  free-pro-team: '*'
topics:
  - 拉取请求
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% note %}

**注意：**依赖项审查目前处于测试阶段，可能会更改。

{% endnote %}

### 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

依赖关系审核允许您“左移”。 您可以使用所提供的预测信息在易受攻击的依赖项进入生产之前捕获它们。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。

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
