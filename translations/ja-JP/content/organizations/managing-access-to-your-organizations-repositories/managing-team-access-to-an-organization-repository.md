---
title: Organization のリポジトリに対するチームのアクセスを管理する
intro: リポジトリへのチームアクセスを付与、リポジトリへのチームアクセスを削除、またはリポジトリへのチームの権限レベルを変更することができます。
redirect_from:
- /articles/managing-team-access-to-an-organization-repository-early-access-program
- /articles/managing-team-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878608"
---
リポジトリに対して管理者権限がある人は、リポジトリへのチームアクセスを管理できます。 チームのメンテナーは、チームがリポジトリに直接アクセスできる場合に、チームのリポジトリへのアクセス権を削除できます。 チームのリポジトリへのアクセス権が親チームから継承されている場合、メンテナーは、親チームのアクセス許可に一致するように現在のアクセス許可をリセットできます。

{% warning %}

**警告:**
- チームがリポジトリに直接アクセスできる場合は、チームの権限レベルを変更できます。 リポジトリへのチームのアクセスが親チームから継承される場合は、リポジトリへの親チームのアクセスを変更する必要があります。
- 親チームのリポジトリへのアクセスを追加または削除すると、その親の子チームそれぞれでも、同じリポジトリへのアクセスが追加または削除されます。 詳細については、「[Team について](/articles/about-teams)」を参照してください。

{% endwarning %}

## リポジトリへのアクセスをチームに付与する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} リポジトリへのアクセス権の Team への付与や、リポジトリへの Team のアクセス レベルの変更をリポジトリ設定で行えます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)」を参照してください。 {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. リポジトリのリストの上にある **[リポジトリの追加]** をクリックします。
  ![リポジトリの追加ボタン](/assets/images/help/organizations/add-repositories-button.png)
6. リポジトリの名前を入力し、 **[Team にリポジトリを追加]** をクリックします。
  ![リポジトリ検索フィールド](/assets/images/help/organizations/team-repositories-add.png)
7. オプションで、リポジトリ名の右にあるドロップダウンメニューを使って、チームの権限レベルを変更することもできます
  ![リポジトリのアクセス レベルのドロップダウン](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## リポジトリへのチームのアクセスを削除する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} リポジトリ設定で、Organization リポジトリへの Team のアクセス権を削除できます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)」を参照してください。

Teamがリポジトリへの直接のアクセス権を持っている場合、そのTeamのリポジトリへのアクセス権を削除できます。 リポジトリへのチームのアクセスが親チームから継承される場合、子チームからリポジトリを削除するには親チームからリポジトリを削除する必要があります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

チームがリポジトリに直接アクセスできる場合は、リポジトリへのチームのアクセスを削除できます。 リポジトリへのチームのアクセスが親チームから継承される場合、子チームからリポジトリを削除するには親チームからリポジトリを削除する必要があります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. チームから削除するリポジトリ (複数選択も可) を選択します。
  ![いくつかのリポジトリのチェックボックスが選択された Team リポジトリのリスト](/assets/images/help/teams/select-team-repositories-bulk.png)
6. リポジトリ リストの上にあるドロップダウン メニューで、 **[Team から削除]** をクリックします。
  ![Team からリポジトリを削除するオプションのあるドロップダウン メニュー](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Team から削除されるリポジトリをレビューし、 **[リポジトリの削除]** をクリックします。
  ![Team がアクセスできなくなったリポジトリのリストがあるモーダル ボックス](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## 参考資料

- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
