---
title: オーナー Team を改善された Organization の権限に移行する
intro: 2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 「オーナー」は、Organization の各メンバーに与えられる管理者ロールとなりました。 レガシーのオーナー Team のメンバーには、オーナー権限が自動的に与えられます。
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880381'
---
レガシーのオーナー Team を変換する方法はいくつかあります:

- Team に、メンバーが Organization 内で特別なステータスを持っていることを示す名前を付ける。
- すべてのメンバーが、Organization のリポジトリにアクセスできる必要な権限を持つ Team に追加されていることを確認してから、元の Team を削除する。

## オーナー Team に新しい名前を付ける

{% tip %}

   **注:** "admin" は、Organization 内の [特定のリポジトリに特定のアクセス権を](/articles/repository-permission-levels-for-an-organization) 持つ Organization メンバーの用語であるため、決定した Team 名ではその用語を避けることをお勧めします。

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Team 名のフィールドで、オーナー Team の新しい名前を選びます。 次に例を示します。
    - Organization において、オーナー Team のメンバーがとても少ない場合には、"Core" といったチーム名がいいかもしれません。
    - Organization のすべてのメンバーが所有者 Team のメンバーで、[Team に @mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) できる場合は、Team に "Employees" という名前を付けることができます。
  ![所有者 Team の名前が "Core" に変更された、Team 名のフィールド](/assets/images/help/teams/owners-team-new-name.png)
6. Team の説明の下にある **[保存して続行]** をクリックします。
![[保存して続行] ボタン](/assets/images/help/teams/owners-team-save-and-continue.png)
7. 必要に応じて、[Team を *公開*](/articles/changing-team-visibility) します。

## レガシーのオーナー Team の削除

{% warning %}

**警告:** 他のチームのメンバーではない所有者 Team のメンバーがいる場合、Team を削除するとそれらのメンバーが Organization から削除されます。 Team を削除する前に、メンバーを Organization の直接メンバーにするか、必要なリポジトリに対するコラボレーターアクセスを持たせてください。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. ページの下部にある警告を確認し、 **[所有者 Team の削除]** をクリックします。
  ![所有者 Team を削除するリンク](/assets/images/help/teams/owners-team-delete.png)
