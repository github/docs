---
title: 页面
intro: The GitHub Pages API allows you to interact with GitHub Pages sites and build information.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data variables.product.prodname_pages %} API 可检索关于您的 {% data variables.product.prodname_pages %} 配置以及构建状态的信息。 只有经过验证的所有者才能访问有关网站和构建的信息{% ifversion not ghae %}，即使网站是公开的也一样{% endif %}。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)”。

在其响应中包含 `status` 键的 {% data variables.product.prodname_pages %} API 端点中，其值可能是以下值之一：
* `null`：站点尚未构建。
* `queued`：已请求构建，但尚未开始。
* `building`：正在构建中。
* `built`：站点已构建。
* `errored`：表示构建过程中发生错误。

在返回 GitHub Pages 站点信息的 {% data variables.product.prodname_pages %} API 端点中，JSON 响应包括以下字段：
* `html_url`：所渲染的 Pages 站点的绝对 URL（包括模式）。 例如，`https://username.github.io`。
* `source`：包含所渲染 Pages 站点的源分支和目录的对象。 这包括：
   - `branch`：用于发布[站点源文件](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)的仓库分支。 例如，_main_ 或 _gh-pages_。
   - `path`：提供站点发布内容的仓库目录。 可能是 `/` 或 `/docs`。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
