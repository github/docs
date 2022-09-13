---
title: ベース ブランチと pull request の同期の維持
intro: pull request を開くと、変更を含むヘッド ブランチを、ベース ブランチで行われた変更を使って更新できます。
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139596'
---
## pull request の同期を維持する方法について

pull request をマージする前に、他の変更がベース ブランチにマージされ、pull request のヘッド ブランチが同期されなくなっている可能性があります。pull request をベース ブランチからの最新の変更で更新すると、マージする前に問題をキャッチするのに役立ちます。

pull request のヘッド ブランチは、コマンド ラインまたは pull request ページから更新できます。 **[ブランチを更新]** ボタンは、これらすべてが当てはまる場合に表示されます。

* pull request ブランチとベース ブランチの間にマージの競合はありません。
* pull request ブランチがベース ブランチで最新ではありません。
* ベース ブランチでは、マージする前にブランチを最新の状態にする{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}か、更新ブランチが常に有効になっていることを設定で提案する{% endif %}必要があります。

詳細については、「[マージする前に状態チェックを要求する](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}」および「[pull request ブランチを更新するための提案の管理](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}」を参照してください。

pull request ブランチでマージの競合を引き起こすベース ブランチに変更がある場合、すべての競合が解決されるまでブランチを更新することはできません。 詳細については、「[マージコンフリクトについて](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} pull request ページから、従来のマージを使用するかリベースによって、pull request のブランチを更新できます。 従来のマージでは、マージ コミットが発生し、ベース ブランチが pull request のヘッド ブランチにマージされます。 リベースでは、_ご利用の_ ブランチからの変更がベース ブランチの最新バージョンに適用されます。 マージ コミットは作成されないので、結果は線形履歴を持つブランチになります。
{% else %}pull request ページからブランチを更新すると、従来のマージが実行されます。 結果のマージ コミットによって、ベース ブランチが pull request のヘッド ブランチにマージされます。
{% endif %}

## pull request ブランチの更新

{% data reusables.repositories.sidebar-pr %}

1. [Pull Requests] リストで、更新する pull request をクリックします。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. ページの下部付近にあるマージ セクションでは、次の操作を行うことができます。
   - **[ブランチを更新]** をクリックして、従来のマージを実行します。
   ![ブランチを更新するためのボタン](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - [ブランチを更新] ドロップダウン メニューをクリックして、 **[Update with rebase]\(リベースで更新\)** をクリックし、 **[Rebase branch]\(ブランチをリベースする\)** をクリックて、ベース ブランチをリベースして更新します。
   ![マージ オプションとリベース オプションを示すドロップダウン メニュー](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. ページの下部付近にあるマージ セクションで、 **[ブランチを更新]** をクリックして従来のマージを実行します。
  ![ブランチを更新するためのボタン](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## 参考資料

- "[プル リクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- 「[pull request のステージの変更](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)」
- 「[フォークから作成された pull request のブランチへの変更をコミットする](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)」
