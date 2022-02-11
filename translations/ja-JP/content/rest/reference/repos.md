---
title: リポジトリ
intro: 'The Repos API allows to create, manage and control the workflow of public and private {% data variables.product.product_name %} repositories.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4742 %}
## Autolinks

To help streamline your workflow, you can use the API to add autolinks to external resources like JIRA issues and Zendesk tickets. 詳しい情報については「[外部リソースを参照する自動リンクの設定](/github/administering-a-repository/configuring-autolinks-to-reference-external-resources)」を参照してください。

{% data variables.product.prodname_github_apps %} require repository administration permissions with read or write access to use the Autolinks API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'autolinks' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}


## コンテンツ

これらの API エンドポイントを使用すると、リポジトリ内の Base64 でエンコードされたコンテンツを作成、変更、削除できます。 Raw 形式またはレンダリングされた HTML (サポートされている場合) をリクエストするには、リポジトリのコンテンツにカスタムメディアタイプを使用します。

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

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## フォーク

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}

## Git LFS

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'lfs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

