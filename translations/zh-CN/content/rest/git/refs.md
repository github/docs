---
title: Git 引用
shortTitle: 引用
intro: 'Git 引用 API 允许您在 {% data variables.product.product_name %} 上读取和写入对 Git 数据库的引用'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## 关于 Git 引用 API

Git 引用 （`git ref`）是一个包含 Git 提交 SHA-1 哈希的文件。 当引用 Git 提交时，您可以使用 Git 引用，这是一个易于记住的名称，而不是哈希。 可以重写 Git 引用指向新的提交。 分支是存储新 Git 提交哈希的 Git 引用。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入[引用](https://git-scm.com/book/en/v1/Git-Internals-Git-References)。
