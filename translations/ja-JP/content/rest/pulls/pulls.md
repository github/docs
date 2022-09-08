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
ms.openlocfilehash: 80e4a5a5257a8f2615b402567f91daa9e68a0077
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145124967'
---
## Pulls API について

Pull Request API を使用すると、Pull Requestを一覧表示、編集、作成、マージできます。 pull request のコメントは、[Issue Comments API](/rest/reference/issues#comments) を使用して管理できます。

すべてのPull Requestは Issue ですが、すべての Issue がPull Requestというわけではありません。 このため、アサインされた人、ラベル、マイルストーンなどの操作といった、両方の機能で "共通する" アクションは、[Issues API](/rest/reference/issues) で提供されます。

### Pull Requestのカスタムメディアタイプ

以下がPull Requestでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

詳細については、[カスタム メディア タイプ](/rest/overview/media-types)に関する説明を参照してください。

diff が破損している場合は、{% data variables.contact.contact_support %} にお問い合わせください。 メッセージにはリポジトリ名とPull Request ID を記載してください。

### リンク関係

Pull Requestには以下のリンク関係が含まれる可能性があります。

名前 | [説明]
-----|-----------|
`self`| Pull Requestの API ロケーション。
`html`| Pull Requestの HTML ロケーション。
`issue`| この Pull Request の [Issue](/rest/reference/issues) の API ロケーション。
`comments`| この Pull Request の [Issue のコメント](/rest/reference/issues#comments)の API ロケーション。
`review_comments`| この Pull Request の [Review のコメント](/rest/reference/pulls#comments)の API ロケーション。
`review_comment`| この Pull Request のリポジトリで [Review コメント](/rest#hypermedia)の API ロケーションを構築する [URL テンプレート](/rest/reference/pulls#comments)。
`commits`|この Pull Request の[コミット](#list-commits-on-a-pull-request)の API ロケーション。
`statuses`| この Pull Request の [コミット状態](/rest/reference/commits#commit-statuses) (その `head` ブランチの状態) の API ロケーション。
