---
title: Pulls
intro: Pulls APIを使うと、Pull Requestのリスト、表示、編集、作成、さらにはマージまでも行えます。
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
| `statuses`        | Pull Requestの[コミットステータス](/rest/reference/commits#commit-statuses)、すなわち`head` ブランチのステータスの API ロケーション。              |
