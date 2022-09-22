---
title: コラボレーターのリポジトリから自分を削除する
intro: 他の人の個人リポジトリのコラボレーターを続けたくなくなった場合は、自分を削除できます。
redirect_from:
  - /leave-a-collaborative-repo
  - /leave-a-repo
  - /articles/removing-yourself-from-a-collaborator-s-repo
  - /articles/removing-yourself-from-a-collaborator-s-repository
  - /articles/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove yourself
ms.openlocfilehash: 3b760d7947d734d8fa6e1e366795ce698f9c0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164869'
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
