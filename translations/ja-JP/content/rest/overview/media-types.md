---
title: メディアの種類
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
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681126'
---
API でカスタムメディアタイプを使用して、ユーザーが受信するデータの形式を選べるようにします。 これは、要求をするときに、`Accept` ヘッダーに次の種類から 1 つ以上を追加することによって行われます。 メディアの種類はリソースに固有であるため、個別に変更したり、他のリソースではサポートされていない形式をサポートしたりできます。

{% data variables.product.product_name %} のすべてのメディアタイプは次のとおりです。

    application/vnd.github.param[+json]

API がサポートする最も基本的なメディアタイプは次のとおりです。

    application/vnd.github+json
    application/json

{% note %}

**注:** 以前は `v3` を `Accept` ヘッダーに含めることを推奨しておりました。 それは不要になりました。API 要求には影響しません。

{% endnote %}

プロパティ (以下で定義されている full/raw/etc など) を指定する場合、`github` の後に置いてください。

    application/vnd.github.raw+json

## コメント本文のプロパティ

コメントの本文は [GitHub Flavored Markdown][gfm] で記述できます。[issues](/rest/reference/issues)、[issue comments](/rest/reference/issues#comments)、[pull request comments](/rest/reference/pulls#comments)、[gist comments](/rest/reference/gists#comments) の各 API では、以下の同じメディアタイプが受け取られます。

### Raw

    application/vnd.github.raw+json

Raw 形式の Markdown 本文を返します。 応答には `body` が含まれます。 これは、特定のメディアタイプを渡さない場合のデフォルトです。

### Text

    application/vnd.github.text+json

Markdown 本文の表現のみのテキストを返します。 応答には `body_text` が含まれます。

### HTML

    application/vnd.github.html+json

本文の Markdown からレンダリングされた HTML を返します。 応答には `body_html` が含まれます。

### [完全]

    application/vnd.github.full+json

Raw 形式のテキストおよび HTML 表現を返します。 応答には `body`、`body_text`、`body_html` が含まれます。

## Git blob プロパティ

次のメディアタイプは [BLOB の取得時](/rest/reference/git#get-a-blob)に許可されます。

### JSON

    application/vnd.github+json
    application/json

`content` を含む BLOB の JSON 表現を、base64 でエンコードされた文字列型として返します。 これは、何も渡されていない場合のデフォルトです。

### Raw

    application/vnd.github.raw

Raw 形式の blob データを返します。

## コミット、コミット比較、プルリクエスト

[commits API](/rest/reference/repos#commits) と [pull requests API](/rest/reference/pulls) では [diff][git-diff] 形式と [patch][git-patch] 形式がサポートされます。

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

Markdown や AsciiDoc などのマークアップファイルでは、レンダリングされた HTML を `.html` メディアタイプを使用して取得できます。 マークアップ言語は、オープンソースの[マークアップライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

## Gists

### Raw

    application/vnd.github.raw

Gist の内容を Raw 形式で返します。 これは、特定のメディアタイプを渡さない場合のデフォルトです。

### base64

    application/vnd.github.base64

gist の内容は、送信される前に base64 でエンコードされます。これは、gist に無効な UTF-8 シーケンスが含まれている場合に役立つことがあります。

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
