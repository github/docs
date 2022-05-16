---
title: Gitのコミット
shortTitle: コミット
allowTitleToDifferFromFilename: true
intro: 'Git commits APIを使うと、{% data variables.product.product_name %}上のGitデータベースでコミットオブジェクトの読み書きができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Git commits APIについて

Git コミットは、Git リポジトリ内の階層（[Git ツリー](/rest/reference/git#trees)）とファイルのコンテンツ（[Git blob](/rest/reference/git#blobs)）のスナップショットです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [コミットオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)の読み書きができます。
