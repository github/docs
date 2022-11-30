---
title: プルリクエスト中のブランチの削除と復元
intro: リポジトリでの書き込みアクセスがある場合、クローズまたはマージされたプルリクエストに関連付けられているブランチを削除できます。 オープンなプルリクエストに関連付けられているブランチは削除できません。
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132367'
---
## プルリクエストに使用されるブランチを削除する

プルリクエストがマージまたはクローズされていて、ブランチを参照している他のオープンなプルリクエストがない場合は、プルリクエストに関連付けられているブランチを削除できます。 pull request に関連付けられていないブランチをクローズする方法については、「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. プルリクエストのリストで、削除対象のブランチに関連付けられているプルリクエストをクリックします。
5. その pull request の下部周辺で、 **[ブランチの削除]** をクリックします。
   ![[ブランチの削除]](/assets/images/help/pull_requests/delete_branch_button.png) ボタン

   現時点でこのブランチにオープンなプルリクエストがある場合、このボタンは表示されません。

## 削除したブランチの復元

クローズされたプルリクエストの head ブランチを復元できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. プルリクエストのリストで、復元対象のブランチに関連付けられているプルリクエストをクリックします。
5. その pull request の下部周辺で、 **[ブランチを復元]** をクリックします。
   ![削除されたブランチの復元ボタン](/assets/images/help/branches/branches-restore-deleted.png)

## 参考資料

- 「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)」
- 「[ブランチの自動的削除を管理する](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)」
