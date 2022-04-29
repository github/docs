---
title: Git trees
shortTitle: ツリー
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

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [ツリーオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)の読み書きができます。
