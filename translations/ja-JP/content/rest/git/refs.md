---
title: Git references
shortTitle: リファレンス
intro: 'The Git references API lets you read and write references to your Git database on {% data variables.product.product_name %}'
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

## About the Git references API

A Git reference (`git ref`) is a file that contains a Git commit SHA-1 hash. Gitコミットを参照するときは、ハッシュではなく覚えやすい名前の Gitリファレンスを使用できます。 Gitリファレンスは、新しいコミットを指すように書き換えることができます。 A branch is a Git reference that stores the new Git commit hash. これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [リファレンス](https://git-scm.com/book/en/v1/Git-Internals-Git-References)の読み書きができます。
