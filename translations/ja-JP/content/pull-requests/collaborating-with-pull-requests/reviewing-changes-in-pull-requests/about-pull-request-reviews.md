---
title: プルリクエストのレビューについて
intro: レビューを使うと、コラボレーターはプルリクエスト中で提案された変更に対してコメントしたり、変更を承認したり、プルリクエストがマージされる前にさらなる変更をリクエストしたりできます。 リポジトリ管理者は、すべてのプルリクエストをマージ前に承認することを必須にできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179408'
---
## プルリクエストのレビューについて

pull request を開いた後、*読み取り* アクセス権を持つすべてのユーザーは、提案された変更をレビューしてコメントできます。 また、作者がプルリクエストから直接適用できるコード行への特定の変更を提案することもできます。 詳細については、「[pull request で提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

リポジトリオーナーとコラボレーターは、特定の人物にプルリクエストのレビューをリクエストできます。 また、Organization メンバーは、リポジトリの読み取りアクセス権を持つ Team にプルリクエストのレビューをリクエストできます。 詳細については、「[Pull Request レビューをリクエストする](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)」を参照してください。 チーム メンバーのサブセットを指定して、チーム全体に代わって自動的に割り当てることができます。 詳細については、「[チームのコード レビュー設定の管理](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)」を参照してください。

レビューにより、提案された変更についての議論がなされ、その変更がリポジトリのコントリビューションのガイドラインやその他の品質標準を満たすことを保証しやすくなります。 コードの特定の種類や領域に対して、どの個人や Team をオーナーとするかを、CODEOWNERS ファイルで定義できます。 プルリクエストが、定義されたオーナーを持っているコードを変更するものである場合、オーナーである個人あるいはTeam がレビューを担当するよう、自動的にリクエストされます。 詳細については、「[コードオーナーについて](/articles/about-code-owners/)」を参照してください。

{% ifversion fpt or ghec %}レビューする必要がある pull request のアラームのリマインダーをスケジュールできます。 詳細については、「[pull request のスケジュールされたリマインダーの管理](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)」を参照してください。{% endif %}

![凝固メント付きの変更をリクエストするレビューのヘッダ](/assets/images/help/pull_requests/review-header-with-line-comment.png)

レビューには 3 つのステータスがあります:
- **コメント**: 変更を明示的に承認したり、追加の変更を要求したりせずに、一般的なフィードバックを送信します。
- **承認**: フィードバックを送信し、pull request で提案された変更のマージを承認します。
- **変更の要求**: pull request をマージする前に対処する必要があるフィードバックを送信します。

![レビューステータスの画像](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

プルリクエストが受けたすべてのレビューは、Conversationタイムラインで見ることができ、リポジトリオーナー及びコラボレーターによるレビューは、プルリクエストのマージボックスで見ることができます。

![マージボックス中のレビューの画像](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## レビューを再リクエストする

{% data reusables.pull_requests.re-request-review %}

## 必須のレビュー

{% data reusables.pull_requests.required-reviews-for-prs-summary %}詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」を参照してください。

{% tip %}

**ヒント**: 必要に応じて、リポジトリへの *管理者* または *書き込み* アクセス権を持つユーザーは、pull request レビューを無視できます。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。

{% endtip %}

## 参考資料

- 「[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」 (pull request で提案された変更をレビューする)
- 「[pull request レビューを表示する](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)」
- 「[リポジトリ共同作成者のガイドラインの設定](/articles/setting-guidelines-for-repository-contributors)」
