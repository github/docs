---
title: Team及びOrganizationからのユーザの削除
intro: 'Organizationのメンバーが特定のリポジトリへのアクセスを必要としなくなったなら、そのメンバーをアクセスを許可しているTeamから削除できます。 OrganizationのメンバーがOrganizationの所有するすべてのリポジトリへのアクセスを必要としなくなったなら、そのメンバーをOrganizationから削除できます。'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

Organizationのメンバーを削除できるのは、オーナーもしくはTeamの管理者のみです。 ユーザがTeamもしくはOrganizationから削除されても、Organizationのリポジトリ内のそのユーザのIssue、プルリクエスト、コメントはそのまま残り、ユーザのもののままです。

{% warning %}

**警告**: ユーザを Organization から削除すると、そのユーザは Organization の**プライベートリポジトリ**に属するプライベートフォークへのアクセスを失います。 そのユーザは自分のフォークのローカルコピーを持ち続けているかもしれません。 しかし、それらをOrganizationのリポジトリと同期することはできなくなります。 リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。 Organizationから削除されたユーザがOrganizationのメンバーだったなら、そのユーザのOrganizationのリポジトリのプライベートフォークへのアクセスは、そのユーザがOrganizationから削除されてから3ヶ月以内に[Organizationのメンバーとして復帰](/articles/reinstating-a-former-member-of-your-organization)したなら回復されます。

{% endwarning %}

### Teamメンバーの削除

{% warning %}

**ノート：**{% data reusables.enterprise_management_console.badge_indicator %}

LDAPグループに同期しているTeamの既存メンバーを削除するには、LDAPの管理者に連絡してください。

{% endwarning %}

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. 削除する個人を選択します。 ![Organization メンバーの横のチェックボックス](/assets/images/help/teams/team-member-check-box.png)
5. Team メンバーのリストの上のドロップダウンメニューで、[**Remove from team**] をクリックします。 ![ロールを変更するオプションのあるドロップダウンメニュー](/assets/images/help/teams/bulk-edit-drop-down.png)

### Organizationからのユーザの削除

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Organization から削除したいユーザの名前の隣で、チェックボックをクリックします。 ![削除するユーザを選択する](/assets/images/help/organizations/Organization-remove-user.png)
5. ページの上部のOrganizationの名前の下で**Remove from organization（Organizationから削除）**をクリックしてください。 ![Organizationボタンからの削除](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
