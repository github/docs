---
title: Teamメンバーへのチームメンテナロールの割り当て
intro: Teamメンバーにチームメンテナロールを割り当てることで、Teamのメンバーシップの管理や設定をしてもらえるようにできます。
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '145125534'
---
## チームメンテナについて

チームメンテナロールを持つ人は、Teamのメンバーシップと設定を管理できます。

- [Team の名前と説明の変更](/articles/renaming-a-team)
- [Team の可視性の変更](/articles/changing-team-visibility)
- [子 Team の追加要求](/articles/requesting-to-add-a-child-team)
- [親 Team の追加または変更の要求](/articles/requesting-to-add-or-change-a-parent-team)
- [Team プロファイル画像の設定](/articles/setting-your-team-s-profile-picture)
- [Team ディスカッションの編集](/articles/managing-disruptive-comments/#editing-a-comment)
- [Team ディスカッションの削除](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Organization メンバーの Team への追加](/articles/adding-organization-members-to-a-team)
- [Organization メンバーの Team からの削除](/articles/removing-organization-members-from-a-team)
- リポジトリへの Team のアクセス権を削除する
- [Team のコード レビュー割り当ての管理](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team) {% ifversion fpt or ghec %}
- [pull request 用のスケジュールされたリマインダーを管理する](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Organization メンバーをチームメンテナに昇格させる

Organizationメンバーをチームメンテナに昇格するには、そのメンバーはTeamのメンバーになっていなければなりません。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. チームメンテナに昇格させる人 (一人または複数人) を選択します。
![Organization メンバーの横のチェックボックス](/assets/images/help/teams/team-member-check-box.png)
5. Team メンバーのリストの上にあるドロップダウン メニューを使用して、 **[ロールの変更]** をクリックします。![ロールを変更するオプションを含むドロップダウン メニュー](/assets/images/help/teams/bulk-edit-drop-down.png)
6. 新しいロールを選択し、 **[ロールの変更]** をクリックします。
![メンテナまたはメンバーのロールのラジオ ボタン](/assets/images/help/teams/team-role-modal.png)
