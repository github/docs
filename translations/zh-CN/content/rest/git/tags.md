---
title: Git 标签
shortTitle: 标记
allowTitleToDifferFromFilename: true
intro: 'Git 标签 API 允许您对 {% data variables.product.product_name %} 上的 Git 数据库读取和写入标签对象。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于 Git 标签 API

Git 标记类似于 [Git 引用](/rest/reference/git#refs)，但它指向的 Git 提交永远不变。 当您想要指向特定发行版时，Git 标记非常有用。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)。 Git 标记 API 只支持[标注的标记对象](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)，而不支持轻量级标记。
