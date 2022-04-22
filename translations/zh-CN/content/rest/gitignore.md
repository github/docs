---
title: Gitignore
intro: Gitignore API 获取可用于忽略文件和目录的 `.gitignore` 模板。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
---

当您通过 API 在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上创建新仓库时，您可以指定一个 [.gitignore 模板](/github/getting-started-with-github/ignoring-files) 在创建时应用于仓库。 .gitignore 模板 API 可列出 {% data variables.product.product_name %} [.gitignore 仓库](https://github.com/github/gitignore)并从中获取模板。

### gitignore 的自定义媒体类型

获取 gitignore 模板时，您可以使用以下自定义媒体类型。

    application/vnd.github.VERSION.raw

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。
