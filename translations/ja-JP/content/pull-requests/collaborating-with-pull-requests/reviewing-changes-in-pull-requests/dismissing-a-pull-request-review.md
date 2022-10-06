---
title: プルリクエストレビューの却下
intro: リポジトリにレビューが必要な場合は、有効でなくなった、またはレビュー担当者による承認不可のプルリクエストレビューを却下できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878688'
---
{% data reusables.pull_requests.dismiss_review %} これにより、ステータスが「レビュー」から「レビューコメント」に変更されます。 レビューを却下する場合は、却下の理由を説明するコメントを追加する必要があります。 コメントはプルリクエストの会話に追加されます。

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. [Conversation]\(会話) タブで、却下したいレビューまでスクロールして、{% octicon "chevron-down" aria-label="The down button" %} をクリックします。 ![マージボックス中の V 字型アイコン](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[Dismiss review]\(レビューの却下)** をクリックします。
![マージ ボックス内の Kebab アイコン](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. レビューの却下理由を入力したら、 **[Dismiss review]\(レビューの却下)** をクリックします。
  ![[Dismiss review]\(レビューの却下) ボタン](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## 参考資料

- 「[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」 (pull request のレビューについて)
- 「[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」 (pull request で提案された変更をレビューする)
- 「[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」 (保護されたブランチについて)
