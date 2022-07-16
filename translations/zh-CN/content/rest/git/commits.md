---
title: Git 提交
shortTitle: 提交
allowTitleToDifferFromFilename: true
intro: 'Git 提交 API 允许您对 {% data variables.product.product_name %} 上的 Git 数据库读取和写入提交对象。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于 Git 提交 API

Git 提交是 Git 仓库中层次结构（[Git 树](/rest/reference/git#trees)）和文件内容 ([Git blob](/rest/reference/git#blobs)) 的快照。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[提交对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)。
