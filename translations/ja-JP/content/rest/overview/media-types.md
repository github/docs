---
title: メディアタイプ
intro: 使用するデータの形式を指定するためのメディアタイプについて学びます。
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---


API でカスタムメディアタイプを使用して、ユーザが受信するデータの形式を選択できるようにします。 これは、リクエストをするときに、`Accept` ヘッダに次のタイプから 1 つ以上を追加することによって行われます。 メディアタイプはリソースに固有であり、リソースを個別に変更し、他のリソースではサポートしていない形式をサポートすることができます。

{% data variables.product.product_name %} のすべてのメディアタイプは次のとおりです。

    application/vnd.github.param[+json]

API がサポートする最も基本的なメディアタイプは次のとおりです。

    application/vnd.github+json
    application/json

{% note %}

**ノート:** 以前は`Accept`ヘッダに`v3`を含めることをおすすめしていました。 これは必要ではなくなっており、APIリクエストに影響を及ぼしません。

{% endnote %}

プロパティ（以下で定義されているfull/raw/etcなど）を指定している場合、それは`github`のあとに置いてください:

    application/vnd.github.raw+json

## コメント本文のプロパティ

コメントの本文は、[GitHub Flavored Markdown][gfm]、[Issue](/rest/reference/issues)、[Issue コメント](/rest/reference/issues#comments)、[プルリクエストコメント](/rest/reference/pulls#comments)、および [gist コメント](/rest/reference/gists#comments) API で記述できます。これらの API はすべて、次の同じメディアタイプを受け入れます。

### Raw

    application/vnd.github.raw+json

Raw 形式の Markdown 本文を返します。 レスポンスには `body` が含まれます。 これは、特定のメディアタイプを渡さない場合のデフォルトです。

### Text

    application/vnd.github.text+json

Markdown 本文の表現のみのテキストを返します。 レスポンスには `body_text` が含まれます。

### HTML

    application/vnd.github.html+json

本文の Markdown からレンダリングされた HTML を返します。 レスポンスには `body_html` が含まれます。

### Full

    application/vnd.github.full+json

Raw 形式のテキストおよび HTML 表現を返します。 レスポンスには `body`、 `body_text`、および `body_html` が含まれます。

## Git blob プロパティ

[blob の取得](/rest/reference/git#get-a-blob)時に許可されるメディアタイプは次のとおりです。

### JSON

    application/vnd.github+json
    application/json

`content` を含む blob の JSON 表現を base64 でエンコードされた文字列型として返します。 これは、何も渡されていない場合のデフォルトです。

### Raw

    application/vnd.github.raw

Raw 形式の blob データを返します。

## コミット、コミット比較、プルリクエスト

[コミット API](/rest/reference/repos#commits) と[プルリクエスト API](/rest/reference/pulls) は、[diff][git-diff] および [patch][git-patch] 形式をサポートしています。

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## リポジトリコンテンツ

### Raw

    application/vnd.github.raw

ファイルの内容を Raw 形式で返します。 これは、特定のメディアタイプを渡さない場合のデフォルトです。

### HTML

    application/vnd.github.html

Markdown や AsciiDoc などのマークアップファイルでは、`.html` メディアタイプを使用して、レンダリングされた HTML を取得できます。 マークアップ言語は、オープンソースの[マークアップライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

## Gist

### Raw

    application/vnd.github.raw

Gist の内容を Raw 形式で返します。 これは、特定のメディアタイプを渡さない場合のデフォルトです。

### base64

    application/vnd.github.base64

Gist の内容は、送信前に base64 でエンコードされます。 これは、Gist に無効な UTF-8 シーケンスが含まれている場合に役立ちます。

[gfm]: http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
