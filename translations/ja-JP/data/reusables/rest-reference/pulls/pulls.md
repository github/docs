---
ms.openlocfilehash: 055d03f47f14aa1ea92e6d2de1b68a7fcc53c194
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509372"
---
Pull Request API を使用すると、Pull Requestを一覧表示、編集、作成、マージできます。 pull request のコメントは、[Issue Comments API](/rest/reference/issues#comments) を使用して管理できます。

すべてのPull Requestは Issue ですが、すべての Issue がPull Requestというわけではありません。 このため、アサインされた人、ラベル、マイルストーンなどの操作といった、両方の機能で "共通する" アクションは、[Issues API](/rest/reference/issues) で提供されます。

### <a name="custom-media-types-for-pull-requests"></a>Pull Requestのカスタムメディアタイプ

以下がPull Requestでサポートされているメディアタイプです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

詳細については、[カスタム メディア タイプ](/rest/overview/media-types)に関する説明を参照してください。

diff が破損している場合は、{% data variables.contact.contact_support %} にお問い合わせください。 メッセージにはリポジトリ名とPull Request ID を記載してください。

### <a name="link-relations"></a>リンク関係

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
