---
title: 個人リポジトリからコラボレーターを削除する
intro: コラボレータをプロジェクトから削除すると、そのコラボレータはリポジトリに対する読み取り/書き込みアクセスを失います。 リポジトリがプライベートであり、その個人がフォークを作成している場合、そのフォークも削除されます。
redirect_from:
  - /articles/how-do-i-remove-a-collaborator
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
  - /articles/removing-a-collaborator-from-a-private-repository
  - /articles/deleting-a-private-fork-of-a-private-user-repository
  - /articles/how-do-i-delete-a-fork-of-my-private-repository
  - /articles/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: 24b128b5858c695b0e559302fac05812d3218b8c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164882'
---
## プライベートリポジトリのフォークを削除する

コラボレーターが削除される一方でプライベートリポジトリのフォークが削除されると、その個人はリポジトリのローカルクローンをそのまま保持します。

## リポジトリへのコントリビューションがある個人からコラボレーター権限を削除する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. 削除するコラボレーターの右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
  ![コラボレーターを削除するボタン](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. 左側のサイドバーで、 **[コラボレーターと Team]** をクリックします。
  ![[コラボレーター] タブ](/assets/images/help/repository/repo-settings-collaborators.png)
4. 削除するコラボレーターの横にある **[X]** アイコンをクリックします。
  ![削除リンク](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## 参考資料

- 「[Team から Organization メンバーを削除する](/articles/removing-organization-members-from-a-team)」
- 「[外部コラボレーターを Organization リポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository)」
