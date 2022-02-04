---
title: 仓库
intro: '仓库 API 允许创建、管理以及控制公共和私有 {% data variables.product.product_name %} 仓库的工作流程。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4742 %}
## 自动链接

为了帮助简化您的工作流程，您可以使用 API 向外部资源（如 JIRA 问题和 Zendesk 事件单）添加自动链接。 更多信息请参阅“[配置自动链接以引用外部资源](/github/administering-a-repository/configuring-autolinks-to-reference-external-resources)”。

{% data variables.product.prodname_github_apps %} 需要有读写权限的仓库管理权限才能使用 Autolinks API。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'autolinks' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}


## 内容

此 API 端点允许您在仓库中创建、修改和删除 Base64 编码的内容。 要请求原始格式或渲染的 HTML（如果支持），请对仓库内容使用自定义媒体类型。

### 仓库内容的自定义媒体类型

[自述文件](/rest/reference/repos#get-a-repository-readme)、[文件](/rest/reference/repos#get-repository-content)和[符号链接](/rest/reference/repos#get-repository-content)支持以下自定义媒体类型：

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

使用 `.raw` 媒体类型检索文件内容。

对于 Markdown 或 AsciiDoc 等标记文件，您可以使用 `.html` 媒体类型检索渲染的 HTML。 使用我们的开源[标记库](https://github.com/github/markup)将标记语言渲染为 HTML。

[所有对象](/rest/reference/repos#get-repository-content)都支持以下自定义媒体类型：

    application/vnd.github.VERSION.object

使用 `object` 媒体类型参数以一致的对象格式检索内容，而不考虑内容类型。 例如，响应将是包含对象数组的 `entries` 属性的对象，而不是目录的对象数组。

您可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 复刻

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}

## Git LFS

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'lfs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

