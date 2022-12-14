---
title: Organization のリポジトリへの個人のアクセスを管理する
intro: Organization が所有するリポジトリへの個人のアクセスを管理できます。
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130727"
---
## Organizationのリポジトリへのアクセスについて

Organization のリポジトリからコラボレーターを削除すると、そのコラボレータはリポジトリに対する読み取りおよび書き込みアクセスを失います。 リポジトリがプライベートで、コラボレータがリポジトリをフォークしている場合、そのそのフォークも削除されますが、リポジトリのローカルクローンは保持したままになります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Organization のリポジトリへの個人のアクセスを管理する
リポジトリへのアクセス権のユーザへの付与や、リポジトリへのユーザのアクセスレベルの変更をリポジトリ設定で行えます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」を参照してください。
{% else %}
## ユーザへのリポジトリへのアクセスの付与

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. 検索フィールドで、招待したい人の名前を入力し始め、マッチのリスト内の名前をクリックしてください。
  ![リポジトリに招待する Team または人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. [ロールの選択] で、ユーザーを割り当てるリポジトリ ロールを選択し、 **[リポジトリに名前を追加]** をクリックします。
  ![Team または人のアクセス許可を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Organization のリポジトリへの個人のアクセスを管理する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. **[メンバー]** または **[外部コラボレーター]** をクリックして、さまざまな種類のアクセス権を持つユーザーを管理します。 ![メンバーまたは外部コラボレーターを Organization に招待するボタン](/assets/images/help/organizations/select-outside-collaborators.png)
5. 管理する個人のユーザー名の右側にある {% octicon "gear" aria-label="The Settings gear" %} ドロップダウン メニューで、 **[管理]** をクリックします。
  ![[アクセスの管理] リンク](/assets/images/help/organizations/member-manage-access.png)
6. [アクセスの管理] ページで、リポジトリの横にある **[アクセスの管理]** をクリックします。
![リポジトリの [アクセスの管理] ボタン](/assets/images/help/organizations/repository-manage-access.png)
7. この個人がコラボレーターなのか、チーム メンバーとしてリポジトリにアクセスできるのかなど、特定のリポジトリに対するアクセスを確認します。
![ユーザーのリポジトリ アクセスのマトリクス](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## 参考資料

{% ifversion fpt or ghec %}- 「[リポジトリ内での操作を制限する](/articles/limiting-interactions-with-your-repository)」{% endif %}
- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
