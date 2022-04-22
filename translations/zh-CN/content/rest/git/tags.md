---
title: 标记
intro: 'A Git tag is similar to a [Git reference](/rest/reference/git#refs), but the Git commit that it points to never changes.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

当您想要指向特定发行版时，Git 标记非常有用。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)。 Git 标记 API 只支持[标注的标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)，而不支持轻量级标记。
