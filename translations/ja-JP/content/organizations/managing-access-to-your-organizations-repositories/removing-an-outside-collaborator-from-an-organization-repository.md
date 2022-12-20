---
title: 外部コラボレーターを Organization リポジトリから削除する
intro: オーナーあるいはリポジトリ管理者は、外部コラボレーターのリポジトリへのアクセスを削除できます。
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145130703"
---
{% ifversion fpt or ghec %}

{% warning %}

**警告:**
- 外部コラボレーターをプライベートリポジトリから削除しても、有料ライセンスのカウントは自動ではダウングレードしません。 Organization からユーザーを削除した後にライセンスの支払いを減らすには、「[Organization の有料シートをダウングレードする](/articles/downgrading-your-organization-s-paid-seats)」の手順に従います。

- リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。

{% endwarning %}

{% endif %}

コラボレーターが削除される一方でプライベートリポジトリのフォークが削除されると、その個人はリポジトリのローカルクローンをそのまま保持します。

## 外部コラボレーターを Organization のすべてのリポジトリから削除する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Organization から削除する外部コラボレーターを 1 人以上選択します。
![2 人の外部コラボレーターが選択された外部コラボレーターのリスト](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. 外部コラボレーターのリストの上のドロップダウンメニューで **[すべてのリポジトリから削除]** をクリックします。
![外部コラボレーターを削除するオプションのあるドロップダウン メニュー](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Organization から削除される外部コラボレーターをレビューしてから、 **[外部コラボレーターの削除]** をクリックします。
  ![削除される外部コラボレーターのリストと [外部コラボレーターの削除] ボタン](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## 外部コラボレーターを Organization の特定のリポジトリから削除する

外部コラボレーターを Organization の特定のリポジトリからのみ削除する場合、特定のリポジトリごとにアクセスを削除していきます。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. 削除する個人のユーザー名の右側にある {% octicon "gear" aria-label="The Settings gear" %} ドロップダウン メニューで、 **[管理]** をクリックします。
  ![[アクセスの管理] ボタン](/assets/images/help/organizations/member-manage-access.png)
6. 外部コラボレーターを削除するリポジトリの右側で **[アクセスの管理]** をクリックします。
![外部コラボレーターがアクセス権を持っているリポジトリの横にある [アクセスの管理] ボタンを選択](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. 外部コラボレーターのリポジトリへのアクセス権を完全に削除するには、右上隅の **[このリポジトリへのアクセスを削除]** をクリックします。
![[このリポジトリへのアクセスを削除] ボタン](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. 確認するには、 **[アクセス権の削除]** をクリックします。
![リポジトリから削除する外部コラボレーターの確定](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} リポジトリ設定のアクセスの概要で、リポジトリから外部コラボレーターを削除することもできます。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)」を参照してください。
{% endif %}
## 参考資料

- 「[外部のコラボレーターを Organization のリポジトリに追加する](/articles/adding-outside-collaborators-to-repositories-in-your-organization)」
- 「[Organization メンバーを外部コラボレーターに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)」
