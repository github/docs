---
title: Gitignore
redirect_from:
  - /v3/gitignore
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

通过 API 创建新的 {% data variables.product.product_name %} 仓库时，您可以指定一个要在创建后应用于仓库的 [.gitignore 模板](/github/using-git/ignoring-files)。 .gitignore 模板 API 可列出 {% data variables.product.product_name %} [.gitignore 仓库](https://github.com/github/gitignore)并从中获取模板。

### gitignore 的自定义媒体类型

获取 gitignore 模板时，您可以使用以下自定义媒体类型。

    application/vnd.github.VERSION.raw

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。

{% include rest_operations_at_current_path %}
