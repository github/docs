---
title: Gitリファレンス
shortTitle: リファレンス
intro: 'Git references APIを使うと、{% data variables.product.product_name %}上のGitデータベースでの参照の読み書きができます。'
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

## Git references APIについて

Gitリファレンス（`git ref`）は、GitコミットのSHA-1ハッシュを含むファイルです。 Gitコミットを参照するときは、ハッシュではなく覚えやすい名前の Gitリファレンスを使用できます。 Gitリファレンスは、新しいコミットを指すように書き換えることができます。 ブランチは、新しいGitコミットハッシュを保存するGitリファレンスです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [リファレンス](https://git-scm.com/book/en/v1/Git-Internals-Git-References)の読み書きができます。
