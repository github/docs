---
title: コラボレーターのリポジトリから自分を削除する
intro: If you no longer want to be a collaborator on someone else's repository, you can remove yourself.
redirect_from:
- /leave-a-collaborative-repo
- /leave-a-repo
- /articles/removing-yourself-from-a-collaborator-s-repo
- /articles/removing-yourself-from-a-collaborator-s-repository
- /articles/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Remove yourself
ms.openlocfilehash: dc9739d84d1794e3111f3b61e0dfd9a7c4bec11b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090087"
---
{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
2. サイドバーの "コード、計画、自動化" セクションで、 **[{% octicon "repo" aria-label="The repo icon" %} リポジトリ]** をクリックします。
{% else %}
2. 左側のサイドバーで、 **[リポジトリ]** をクリックします。
  ![[リポジトリ] タブ](/assets/images/help/settings/settings-sidebar-repositories.png) {% endif %}
3. 離脱するリポジトリの横にある **[離脱]** をクリックします。
  ![[離脱] ボタン](/assets/images/help/repository/repo-leave.png)
4. 警告をよく読んでから [I understand, leave this repository.] をクリックします。
  ![本当に離脱してよいか確認を促すダイアログ ボックス](/assets/images/help/repository/repo-leave-confirmation.png)
