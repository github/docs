---
title: Git trees
shortTitle: 树
allowTitleToDifferFromFilename: true
intro: 'The Git trees API lets you read and write tree objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git trees API

Git 树对象在 Git 仓库中的文件之间创建层次结构。 您可以使用 Git 树对象创建目录与其包含的文件之间的关系。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[树对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)。
