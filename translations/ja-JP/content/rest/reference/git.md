---
title: Git データベース
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

Git Database APIでは、{% data variables.product.product_name %}上のGitデータベースに対してRaw形式のGitオブジェクトを読み書きしたり、リファレンス (ブランチheadやタグ) をリストおよび更新したりすることができます。 Git Database API の使用方法の詳細については、「[Git データ API の概要](/rest/guides/getting-started-with-the-git-database-api)」を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Blob

Git blob (バイナリラージオブジェクト) は、各ファイルのコンテンツをリポジトリに保存する際に使用されるオブジェクトタイプです。 ファイルの SHA-1 ハッシュが計算され、blob オブジェクトに保存されます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [blob オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)の読み書きができます。 blob は[これらのカスタムメディアタイプ](#custom-media-types)を利用します。 API でのメディアタイプの使用について詳しくは、[こちら](/rest/overview/media-types)をご覧ください。

### Blob のカスタムメディアタイプ

これらは、blob でサポートされているメディアタイプです。

    application/json
    application/vnd.github.VERSION.raw

詳しい情報については、「[メディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コミット

Git コミットは、Git リポジトリ内の階層（[Git ツリー](/rest/reference/git#trees)）とファイルのコンテンツ（[Git blob](/rest/reference/git#blobs)）のスナップショットです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [コミットオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects)の読み書きができます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

## リファレンス

Git リファレンス（`git ref`）は、Git コミット SHA-1 ハッシュを含むファイルです。 Gitコミットを参照するときは、ハッシュではなく覚えやすい名前の Git リファレンスを使用できます。 Git リファレンスは、新しいコミットを指すように書き換えることができます。 ブランチは、新しい Git コミットハッシュを保存する Git リファレンスです。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [リファレンス](https://git-scm.com/book/en/v1/Git-Internals-Git-References)の読み書きができます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'refs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## タグ

Git タグは [Git リファレンス](/rest/reference/git#refs)に似ていますが、変更しないことを指す Git コミットです。 Git タグは、特定のリリースを指すときに役立ちます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [タグオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)の読み書きができます。 Git タグ API は、[アノテーションされたタグオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)のみをサポートし、軽量タグはサポートしません。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'tags' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ツリー

Git ツリーオブジェクトは、Git リポジトリ内のファイル間の階層を作成します。 Git ツリーオブジェクトを使用して、ディレクトリとそこに含まれるファイルの関係を作成できます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに対して [ツリーオブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)の読み書きができます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'trees' %}{% include rest_operation %}{% endif %}
{% endfor %}
