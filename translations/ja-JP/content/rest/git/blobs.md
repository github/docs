---
title: Git blob
shortTitle: Blob
allowTitleToDifferFromFilename: true
intro: Git blob APIを使うと、リポジトリ中でそれぞれのファイルの内容を保存するために使われるオブジェクトタイプであるGit blob（バイナリラージオブジェクト）の作成と取得ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Git blob APIについて

Git blob (バイナリラージオブジェクト) は、各ファイルのコンテンツをリポジトリに保存する際に使用されるオブジェクトタイプです。 ファイルの SHA-1 ハッシュが計算され、blob オブジェクトに保存されます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [blob オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)の読み書きができます。 blob は[これらのカスタムメディアタイプ](#custom-media-types-for-blobs)を利用します。 API でのメディアタイプの使用について詳しくは、[こちら](/rest/overview/media-types)をご覧ください。

### Blob のカスタムメディアタイプ

これらは、blob でサポートされているメディアタイプです。

    application/json
    application/vnd.github.VERSION.raw

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。
