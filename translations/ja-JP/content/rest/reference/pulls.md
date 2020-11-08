---
title: Pulls
redirect_from:
  - /v3/pulls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Pull Request API を使用すると、プルリクエストを一覧表示、編集、作成、マージできます。 プルリクエストのコメントは、[Issue Comments API](/rest/reference/issues#comments) で管理できます。

すべてのプルリクエストは Issue ですが、すべての Issue がプルリクエストというわけではありません。 このため、アサインされた人、ラベル、マイルストーンなどの操作といった、両方の機能で共通するアクションは、[Issues API](/v3/issues) で提供されます。

### プルリクエストのカスタムメディアタイプ

以下がプルリクエストでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

<a id="diff-error">

diff が破損している場合は、{% data variables.contact.contact_support %} にお問い合わせください。 メッセージにはリポジトリ名とプルリクエスト ID を記載してください。

### リンク関係

プルリクエストには以下のリンク関係が含まれる可能性があります。

| 名前                | 説明                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `self`            | プルリクエストの API ロケーション。                                                                             |
| `html`            | プルリクエストの HTML ロケーション。                                                                            |
| `Issue`           | プルリクエストの [Issue](/v3/issues/) の API ロケーション。                                                      |
| `コメント`            | プルリクエストの [Issue コメント](/v3/issues/comments/) の API ロケーション。                                        |
| `review_comments` | プルリクエストの [レビューコメント](/v3/pulls/comments/) の API ロケーション。                                           |
| `review_comment`  | プルリクエストのリポジトリで、[レビューコメント](/v3/pulls/comments/)の API ロケーションを構築するための[URL テンプレート](/v3/#hypermedia)。 |
| `commits`         | プルリクエストの [コミット](#list-commits-on-a-pull-request) の API ロケーション。                                   |
| `ステータス`           | プルリクエストの[コミットステータス](/v3/repos/statuses/)、すなわち`head` ブランチのステータスの API ロケーション。                      |

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## レビュー

プルリクエストレビューは、プルリクエスト上のプルリクエストレビューコメントのグループで、状態とオプションの本文コメントでグループ化されています。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'reviews' %}{% include rest_operation %}{% endif %}
{% endfor %}

## レビューコメント

プルリクエストレビューコメントは、プルリクエストのレビュー中に unified 形式の diff の一部に付けられたコメントです。 コミットコメントおよび Issue コメントは、プルリクエストレビューコメントとは異なります。 コミットコメントはコミットに直接付けるもので、Issue コメントは、unified 形式の diff の一部を参照することなく付けるものです。 詳しい情報については、「[コミットコメントの作成](/rest/reference/git#create-a-commit)」および「[Issue コメントの作成](/rest/reference/issues#create-an-issue-comment)」を参照してください。

### プルリクエストレビューコメントのカスタムメディアタイプ

以下がプルリクエストレビューコメントでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## レビューリクエスト

プルリクエストの作者、リポジトリのオーナー、およびコラボレータは、リポジトリのんき書き込みアクセスを持つ人にプルリクエストレビューをリクエストできます。 リクエストされたレビュー担当者は、プルリクエストレビューをするようあなたが依頼したという通知を受け取ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'review-requests' %}{% include rest_operation %}{% endif %}
{% endfor %}
