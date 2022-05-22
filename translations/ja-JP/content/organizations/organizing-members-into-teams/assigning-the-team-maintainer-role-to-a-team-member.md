---
title: Assigning the team maintainer role to a team member
intro: You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program/
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
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

- [Teamの名前と説明の変更](/articles/renaming-a-team)
- [Teamの可視性の変更](/articles/changing-team-visibility)
- [子チームの追加リクエスト](/articles/requesting-to-add-a-child-team)
- [親チームの追加または変更リクエスト](/articles/requesting-to-add-or-change-a-parent-team)
- [Teamのプロフィール画像の設定](/articles/setting-your-team-s-profile-picture)
- [Teamディスカッションの編集](/articles/managing-disruptive-comments/#editing-a-comment)
- [Teamディスカッションの削除](/articles/managing-disruptive-comments/#deleting-a-comment)
- [OrganizationのメンバーのTeamへの追加](/articles/adding-organization-members-to-a-team)
- [OrganizationメンバーのTeamからの削除](/articles/removing-organization-members-from-a-team)
- リポジトリへのTeamのアクセスの削除{% ifversion fpt or ghes or ghae or ghec %}
- [Teamのためのコードレビューの割り当て管理](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% endif %}{% ifversion fpt or ghec %}
- [プルリクエストのスケジュールされたリマインダーの管理](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}


## Organization メンバーをチームメンテナに昇格させる

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. チームメンテナに昇格させる人 (一人または複数人) を選択します。 ![Organization メンバーの横のチェックボックス](/assets/images/help/teams/team-member-check-box.png)
5. Team のメンバー一覧の上にあるドロップダウンメニューを使用して、[**Change role...**] をクリックします。 ![ロールを変更するオプションのあるドロップダウンメニュー](/assets/images/help/teams/bulk-edit-drop-down.png)
6. 新しいロールを選択して、[**Change role**] をクリックします。 ![メンテナーまたはメンバーのロールのラジオボタン](/assets/images/help/teams/team-role-modal.png)
