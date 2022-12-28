---
title: デフォルトブランチを変更する
intro: リポジトリに複数のブランチがある場合、任意のブランチをデフォルトブランチとして設定できます。
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132391'
---
## デフォルトブランチの変更について

リポジトリのデフォルトブランチは選択できます。 デフォルトブランチは、プルリクエストやコードのコミットを行う基点となるブランチです。 既定のブランチの詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)」を参照してください。

{% ifversion not ghae %} {% note %}

**注**: Git-Subversion ブリッジを使用している場合、デフォルト ブランチを変更すると、`trunk` ブランチのコンテンツと、リモート リポジトリのリファレンスを一覧表示するときに表示される `HEAD` に影響を与えます。 詳細については、Git ドキュメントの「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients)」と「[git-ls-remote](https://git-scm.com/docs/git-ls-remote.html)」を参照してください。

{% endnote %} {% endif %}

デフォルトブランチの名前は変更することもできます。 詳細については、「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」を参照してください。

{% data reusables.branches.set-default-branch %}

## 前提条件

デフォルトブランチを変更するには、リポジトリに複数のブランチが存在する必要があります。 詳細については、「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)」を参照してください。

## デフォルトブランチを変更する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. [Default branch] の下にある、デフォルトブランチ名の右側の、{% octicon "arrow-switch" aria-label="The switch icon with two arrows" %} をクリックします。
   ![現在のデフォルト ブランチ名の右側にある、2 つの矢印がついた切り替えアイコン](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. ドロップダウンメニューで、ブランチ名をクリックします。
   ![新しいデフォルト ブランチを選択するドロップダウン](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. **[Update]** をクリックします。
   ![新しいデフォルト ブランチを選択後の [更新] ボタン](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. 警告を読んでから、 **[上記を理解したうえで、デフォルトのブランチを更新する]** をクリックします。
   ![[上記を理解したうえで、デフォルトのブランチを更新する] 更新を実行するボタン](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

