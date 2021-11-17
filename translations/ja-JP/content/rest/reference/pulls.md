---
title: Pulls
intro: Pulls APIを使うと、Pull Requestのリスト、表示、編集、作成、さらにはマージまでも行えます。
redirect_from:
  - /v3/pulls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Pull Request API を使用すると、Pull Requestを一覧表示、編集、作成、マージできます。 Pull Requestのコメントは、[Issue Comments API](/rest/reference/issues#comments) で管理できます。

すべてのPull Requestは Issue ですが、すべての Issue がPull Requestというわけではありません。 このため、アサインされた人、ラベル、マイルストーンなどの操作といった、両方の機能で共通するアクションは、[Issues API](/rest/reference/issues) で提供されます。

### Pull Requestのカスタムメディアタイプ

以下がPull Requestでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

diff が破損している場合は、{% data variables.contact.contact_support %} にお問い合わせください。 メッセージにはリポジトリ名とPull Request ID を記載してください。

### リンク関係

Pull Requestには以下のリンク関係が含まれる可能性があります。

| 名前                | 説明                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| `self`            | Pull Requestの API ロケーション。                                                                                         |
| `html`            | Pull Requestの HTML ロケーション。                                                                                        |
| `Issue`           | Pull Requestの [Issue](/rest/reference/issues) の API ロケーション。                                                       |
| `コメント`            | Pull Requestの [Issue コメント](/rest/reference/issues#comments) の API ロケーション。                                         |
| `review_comments` | Pull Requestの [レビューコメント](/rest/reference/pulls#comments) の API ロケーション。                                            |
| `review_comment`  | Pull Requestのリポジトリで、[レビューコメント](/rest/reference/pulls#comments)の API ロケーションを構築するための[URL テンプレート](/rest#hypermedia)。 |
| `commits`         | Pull Requestの [コミット](#list-commits-on-a-pull-request) の API ロケーション。                                               |
| `statuses`        | Pull Requestの[コミットステータス](/rest/reference/repos#statuses)、すなわち`head` ブランチのステータスの API ロケーション。                       |

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## レビュー

Pull Requestレビューは、Pull Request上のPull Requestレビューコメントのグループで、状態とオプションの本文コメントでグループ化されています。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'reviews' %}{% include rest_operation %}{% endif %}
{% endfor %}

## レビューコメント

Pull Requestレビューコメントは、Pull Requestのレビュー中に unified 形式の diff の一部に付けられたコメントです。 コミットコメントおよび Issue コメントは、Pull Requestレビューコメントとは異なります。 コミットコメントはコミットに直接付けるもので、Issue コメントは、unified 形式の diff の一部を参照することなく付けるものです。 詳しい情報については、「[コミットコメントの作成](/rest/reference/repos#create-a-commit-comment)」および「[Issue コメントの作成](/rest/reference/issues#create-an-issue-comment)」を参照してください。

### Pull Requestレビューコメントのカスタムメディアタイプ

以下がPull Requestレビューコメントでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## レビューリクエスト

Pull Requestの作者、リポジトリのオーナー、およびコラボレータは、リポジトリの書き込みアクセスを持つ人にPull Requestレビューをリクエストできます。 リクエストされたレビュー担当者は、Pull Requestレビューをするようあなたが依頼したという通知を受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'review-requests' %}{% include rest_operation %}{% endif %}
{% endfor %}
