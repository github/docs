---
title: リポジトリのデフォルトブランチ名を管理する
intro: You can set the default branch name for new repositories that you create on {% data variables.product.product_location %}.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
shortTitle: Manage default branch name
ms.openlocfilehash: 5bf934f246a2d0e447a99d0f63888b5b87ecc033
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088871"
---
## <a name="about-management-of-the-default-branch-name"></a>デフォルトブランチ名について

{% data variables.product.product_location %} に新しいリポジトリを作成すると、リポジトリにはデフォルトブランチである 1 つのブランチが含まれます。 作成する新しいリポジトリのデフォルトブランチに {% data variables.product.product_name %} が使用する名前を変更できます。 デフォルトのブランチの詳細については、[分岐](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)に関する説明を参照してください。

{% data reusables.branches.change-default-branch %}

## <a name="setting-the-default-branch-name"></a>デフォルトブランチ 名を設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. [リポジトリのデフォルトのブランチ] で、 **[デフォルトのブランチ名を今すぐ変更]** をクリックします。
    ![[オーバーライド] ボタン](/assets/images/help/settings/repo-default-name-button.png)
4. 新しいブランチに使用したいデフォルト名を入力します。
    ![既定の名前を入力するテキスト ボックス](/assets/images/help/settings/repo-default-name-text.png)
5. **[Update]** をクリックします。
    ![[更新] ボタン](/assets/images/help/settings/repo-default-name-update.png)

## <a name="further-reading"></a>参考資料

- "[Organization のリポジトリのデフォルトのブランチ名を管理する](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"
