---
title: Git 树
shortTitle: 树
allowTitleToDifferFromFilename: true
intro: 'Git 树 API 允许您对 {% data variables.product.product_name %} 上的 Git 数据库读取和写入树对象。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于 Git 树 API

Git 树对象在 Git 仓库中的文件之间创建层次结构。 您可以使用 Git 树对象创建目录与其包含的文件之间的关系。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[树对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)。
