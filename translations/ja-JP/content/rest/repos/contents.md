---
title: コンテンツ
intro: これらの API エンドポイントを使用すると、リポジトリ内の Base64 でエンコードされたコンテンツを作成、変更、削除できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Raw 形式またはレンダリングされた HTML (サポートされている場合) をリクエストするには、リポジトリのコンテンツにカスタムメディアタイプを使用します。

### リポジトリコンテンツのカスタムメディアタイプ

[README](/rest/reference/repos#get-a-repository-readme)、[ファイル](/rest/reference/repos#get-repository-content)、[シンボリックリンク](/rest/reference/repos#get-repository-content)は以下のカスタムメディアタイプをサポートしています。

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

ファイルのコンテンツを取得するには、`.raw` メディアタイプを使ってください。

Markdown や AsciiDoc などのマークアップファイルでは、`.html` メディアタイプを使用して、レンダリングされた HTML を取得できます。 マークアップ言語は、オープンソースの[マークアップライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

[すべてのオブジェクト](/rest/reference/repos#get-repository-content)は、以下のカスタムメディアタイプをサポートしています。

    application/vnd.github.VERSION.object

コンテンツのタイプに関係なく、一貫したオブジェクトフォーマットを取得するには、`object` メディアタイプパラメータを使用します。 たとえば、レスポンスはディレクトリに対するオブジェクトの配列ではなく、オブジェクトの配列を含む `entries` 属性のオブジェクトになります。

API でのメディアタイプの使用について詳しくは、[こちら](/rest/overview/media-types)をご覧ください。
