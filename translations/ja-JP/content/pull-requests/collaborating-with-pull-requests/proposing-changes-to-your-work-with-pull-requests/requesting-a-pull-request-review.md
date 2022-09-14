---
title: Pull Request レビューをリクエストする
intro: Pull Request を作成したら、提案した変更を特定の人にレビューするように依頼できます。 あなたが Organization のメンバーである場合、特定の Team に変更をレビューするようリクエストすることもできます。
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139595'
---
リポジトリは、個人アカウント (1 人の個人所有者) または組織アカウント (多数のコラボレーターまたは保守担当者との共有アカウント) に属しています。 詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。 個人用アカウントが所有するリポジトリの所有者とコラボレーターは、pull request レビューを割り当てることができます。 トリアージ アクセス許可を持つ組織メンバーは、pull request のレビュー担当者を割り当てることもできます。 

レビュー担当者を pull request に割り当てるには、リポジトリへの書き込みアクセス権が必要です。 リポジトリ アクセスの詳細については、「[組織のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。 書き込みアクセス権がある場合は、リポジトリへの読み取りアクセス権を持つすべてのユーザーをレビュー担当者として割り当てることができます。

書き込みアクセス権を持つ組織のメンバーは、リポジトリへの読み取りアクセス権を持つ任意のユーザーまたはチームに pull request レビューを割り当てることもできます。 リクエストされたレビュー担当者または Team は、Pull Request レビューをするようあなたが依頼したという通知を受け取ります。 チームにレビューをリクエストし、コード レビューの割り当てが有効になっている場合、特定のメンバーがリクエストされ、Team はレビュー担当者として削除されます。 詳しい情報については、「[Team のコード レビュー設定の管理](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)」を参照してください。

{% note %}

**注:** pull request 作成者は、リポジトリの所有者またはリポジトリへの書き込みアクセス権を持つコラボレーターでない限り、レビューを要求できません。

{% endnote %}

推奨された人または特定の人のいずれかにレビューをリクエストできます。 推奨されるレビュー担当者は、[Git blame データ](/articles/tracking-changes-in-a-file/)に基づいています。 レビューをリクエストする場合、リポジトリへの読み取りアクセス権を所有しているならば誰でも Pull Request をレビューできます。 プルリクエストがレビューされ、必要な変更を加えたら、同じレビュー担当者のレビューを再リクエストできます。 要求されたレビュー担当者がレビューを送信せず、pull request がリポジトリの[マージ可能性の要件](/articles/defining-the-mergeability-of-pull-requests)を満たしている場合でも、pull request をマージできます。

{% data reusables.repositories.sidebar-pr %}
1. Pull Request のリストで、特定の人または Team にレビューを依頼したい Pull Request をクリックします。
2. 右側のサイドバーで **[レビュー担当者]** に移動します。  
3. **[レビュー担当者]** の下の提案されたユーザーにレビューを要求するには、ユーザー名の横にある **[要求]** をクリックします。
 ![右側のサイドバーのレビュー担当者の要求アイコン](/assets/images/help/pull_requests/request-suggested-review.png)
5. 必要に応じて、提案されたユーザー以外のユーザーにレビューを要求するには、 **[レビュー担当者]** をクリックし、ドロップダウン メニューで名前をクリックします。
  ![右側のサイドバーのレビュー担当者の歯車アイコン](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. 必要に応じて、レビューを依頼するユーザーまたはチームの名前がわかっている場合は、 **[レビュー担当者]** をクリックし、変更のレビューを依頼するユーザーのユーザー名またはチームの名前を入力します。 Team 名またはユーザー名をクリックしてレビューをリクエストします。
  ![レビュー担当者のユーザー名を入力するフィールドとレビュー担当者の名前が表示されたドロップダウン](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Pull Request がレビューされ、必要な変更を行ったら、レビュー担当者に Pull Request を再びレビューするように依頼できます。 右側のサイドバーで **[レビュー担当者]** に移動し、レビューを依頼するレビュー担当者の名前の横にある {% octicon "sync" aria-label="The sync icon" %} をクリックします。
  ![右側のサイドバーの再レビュー同期アイコン](/assets/images/help/pull_requests/request-re-review.png)

## 参考資料

- 「[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)」 (pull request のレビューについて)
