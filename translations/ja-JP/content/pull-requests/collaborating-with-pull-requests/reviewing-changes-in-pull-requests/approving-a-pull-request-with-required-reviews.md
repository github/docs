---
title: 必須レビューでのプルリクエストの承認
intro: リポジトリでレビューが必須になっている場合、pull request をマージするには、リポジトリに _書き込み_ または _管理者_ 権限を持つユーザーからの指定数の承認レビューが必要です。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139572'
---
必要なレビューの詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」を参照してください。

プルリクエストにコメントしたり、変更を承認したり、承認に先立って改善をリクエストしたりできます。 詳細については、「[pull request で提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

{% data reusables.search.requested_reviews_search %}

{% tip %}

**ヒント**: 承認した pull request が大幅に変更された場合は、レビューを無視できます。 そのプルリクエストは、マージする前に新しいレビューが必要になります。 詳細については、「[プル リクエスト レビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)」を参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. pull request の変更をレビューし、必要に応じて[特定の行にコメントを付けます](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review)。
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. **[承認]** を選択して、pull request で提案された変更のマージを承認します。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 参考資料

- 「[Reviewing proposed changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」 (pull request で提案された変更をレビューする)
- 「[プル リクエストへコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」
