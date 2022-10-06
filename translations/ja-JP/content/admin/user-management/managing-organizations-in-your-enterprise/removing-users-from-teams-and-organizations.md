---
title: Team及びOrganizationからのユーザの削除
intro: Organizationのメンバーが特定のリポジトリへのアクセスを必要としなくなったなら、そのメンバーをアクセスを許可しているTeamから削除できます。 OrganizationのメンバーがOrganizationの所有するすべてのリポジトリへのアクセスを必要としなくなったなら、そのメンバーをOrganizationから削除できます。
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116294'
---
Organizationのメンバーを削除できるのは、オーナーもしくはTeamの管理者のみです。 ユーザがTeamもしくはOrganizationから削除されても、Organizationのリポジトリ内のそのユーザのIssue、プルリクエスト、コメントはそのまま残り、ユーザのもののままです。

{% warning %}

**警告**: ユーザーを Organization から削除すると、そのユーザーは Organization の **プライベート リポジトリ** に所有していたプライベート フォークへのアクセスを失います。 そのユーザは自分のフォークのローカルコピーを持ち続けているかもしれません。 しかし、それらをOrganizationのリポジトリと同期することはできなくなります。 リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。 Organization から削除されたユーザーが Organization のメンバーであった場合、Organization から削除されてから 3 か月以内にそのユーザーが [Organization のメンバーとして復帰した](/articles/reinstating-a-former-member-of-your-organization)場合、Organization リポジトリのプライベート フォークへのアクセスを復元できます。

{% endwarning %}

## Teamメンバーの削除

{% ifversion ghes %}

{% warning %}

**注:** {% data reusables.enterprise_management_console.badge_indicator %}

LDAPグループに同期しているTeamの既存メンバーを削除するには、LDAPの管理者に連絡してください。

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. 削除する個人を選択します。
![Organization メンバーの横のチェックボックス](/assets/images/help/teams/team-member-check-box.png)
5. Team メンバーのリストの上のドロップダウン メニューを使用して、 **[Organization から削除]** をクリックします。
![ロールを変更するオプションのあるドロップダウン メニュー](/assets/images/help/teams/bulk-edit-drop-down.png)

## Organizationからのユーザの削除

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Organization から削除したいユーザの名前の隣で、チェックボックをクリックします。
![削除するユーザーのチェックボックス](/assets/images/help/organizations/Organization-remove-user.png)
5. ページの上部の Organization 名の下で **[Organization から削除]** をクリックします。
![[Organization から削除] ボタン](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
