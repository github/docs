---
title: リファレンス
intro: Git リファレンス（`git ref`）は、Git コミット SHA-1 ハッシュを含むファイルです。
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

Gitコミットを参照するときは、ハッシュではなく覚えやすい名前の Gitリファレンスを使用できます。 Gitリファレンスは、新しいコミットを指すように書き換えることができます。 ブランチは、新しいGitコミットハッシュを保存する Git リファレンスです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [リファレンス](https://git-scm.com/book/en/v1/Git-Internals-Git-References)の読み書きができます。
