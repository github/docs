---
title: Gitツリー
shortTitle: ツリー
allowTitleToDifferFromFilename: true
intro: 'Git trees APIを使うと、{% data variables.product.product_name %}上のGitデータベースでツリーオブジェクトの読み書きができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Git trees APIについて

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [ツリーオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)の読み書きができます。
