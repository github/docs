---
title: リポジトリへのアクセス権を持つ Team と人を管理する
intro: リポジトリへのアクセス権を持つすべての人を確認し、権限を調整できます。
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132115'
---
## リポジトリのアクセス管理について

{% data variables.product.prodname_dotcom %}で管理するリポジトリごとに、リポジトリへのアクセス権を持つすべての Team または人の概要を確認できます。 概要から、新しい Team または人を招待したり、リポジトリに対する各 Team または人のロールを変更したり、リポジトリへのアクセスを削除したりすることもできます。

この概要は、リポジトリ、オンボードまたはオフボードの独立契約者または従業員へのアクセスを監査し、セキュリティインシデントに効果的に対応するのに役立ちます。

{% data reusables.organizations.mixed-roles-warning %}

リポジトリ ロールの詳細については、「[Permission levels for a personal account repository (個人アカウント リポジトリのアクセス許可レベル)](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)」および「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png)

## Team と人のリストのフィルタリング

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. [Manage access] の検索フィールドで、検索する Team または人の名前を入力します。 必要に応じて、ドロップダウン メニューを使用して検索をフィルター処理します。 
  ![アクセスできる Team または人のリストをフィルタリングするための検索フィールド](/assets/images/help/repository/manage-access-filter.png)

## Team または人の権限を変更する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. [アクセスの管理] で、ロールを変更する Team または人を見つけて、[ロール] ドロップダウンを選択し、新しいロールをクリックします。
  ![[ロール] ドロップダウンを使用して、Team または人の新しい権限を選択します](/assets/images/help/repository/manage-access-role-drop-down.png)

## Team または人を招待する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. 検索フィールドで、招待する Team または人の名前を入力し、リストから一致する名前をクリックします。
  ![リポジトリに招待する Team または人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. [ロールの選択] で、Team または人に付与するリポジトリ ロールを選択し、 **[リポジトリに名前を追加]** をクリックします。
  ![Team または人のアクセス許可を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Team または人のアクセス権を削除する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. [アクセスの管理] で、アクセスを削除する Team または人を見つけて、{% octicon "trash" aria-label="The trash icon" %} をクリックします。
  ![アクセス削除用のゴミ箱アイコン](/assets/images/help/repository/manage-access-remove.png)

## 参考資料

- 「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」
- [Organization の基本レベルの権限の設定](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)
