---
title: プルリクエストでのフィードバックを取り込む
intro: レビュー担当者がプルリクエストの変更を提案する場合、変更をプルリクエストに自動的に組み込むか、Issue をオープンしてスコープ外の提案を追跡できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139523'
---
## 提案された変更の適用

他の人はプルリクエストに特定の変更を提案することができます。 リポジトリに対する書き込みアクセスがある場合は、プルリクエストで提案されたこれらの変更を直接適用することができます。 プルリクエストがフォークから作成されたもので、作者がメンテナーによる編集を許可していれば、上流リポジトリへの書き込みアクセスがある場合でも、提案された変更を適用できます。 詳しい情報については、「[pull request へコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」と「[フォークから作成された pull request ブランチへの変更を許可する](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)」を参照してください。

提案された複数の変更を 1 つのコミットに取り込みたければ、提案された変更をバッチとして適用すると簡単です。 提案された変更を 1 つ、またはバッチとして適用すると、プルリクエストの比較ブランチで 1 つのコミットが作成されます。

コミットに含まれる変更を提案した各ユーザがそのコミットの共作者になり、 提案された変更を適用したユーザは、共作者兼そのコミットのコミッターになります。 Git の「コミッター」という用語の詳しい情報については、_Pro Git_ ブック サイトで、「[Git の基本 - コミット履歴を表示する](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)」を参照してください。

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、提案された変更を適用する対象のプルリクエストをクリックします。
3. 適用する最初の変更提案に移動します。
    - それ自体のコミットで変更を適用するには、 **[提案のコミット]** をクリックします。
  ![[提案のコミット] ボタン](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - 変更のバッチに提案を追加するには、 **[提案をバッチに追加する]** をクリックします。 これを繰り返して、1 つのコミットに取り込む変更を追加します。 提案された変更の追加が完了したら、 **[提案のコミット]** をクリックします。
  ![[提案をバッチに追加する] ボタン](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. コミットメッセージのフィールドに、ファイルに対する変更内容を説明する、短くわかりやすいコミットメッセージを入力します。
![Commit messageフィールド](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. **[変更のコミット]** をクリックします。
![[変更のコミット] ボタン](/assets/images/help/pull_requests/commit-changes-button.png)

## レビューを再リクエストする

{% data reusables.pull_requests.re-request-review %}

## スコープ外の提案に対する Issue のオープン

プルリクエストの変更が提案され、その変更がプルリクエストのスコープ外である場合、フィードバックを追跡するために新しい Issue をオープンすることができます。 詳細については、「[コメントから Issue を開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」を参照してください。

## 参考資料

- 「[About pull request reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)」 (pull request のレビューについて)
- 「[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」 (pull request で提案された変更をレビューする)
- 「[プル リクエストへコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」
- 「[Pull Request レビューをリクエストする](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)」
- 「[コメントから issue をオープンする](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」
