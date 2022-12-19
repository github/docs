---
title: Organization からメンバーを削除する
intro: Organization のメンバーが、Organization が所有するリポジトリへのアクセスを必要としなくなった場合、そのメンバーを Organization から削除することができます。
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064699'
---
{% ifversion fpt or ghec %}

{% warning %}

**警告:** Organization からメンバーを削除する場合:
- 有料ライセンスのカウントは自動的にはダウングレードされません。 Organization からユーザーを削除した後にライセンスの支払いを減らすには、「[Organization の有料シートをダウングレードする](/articles/downgrading-your-organization-s-paid-seats)」の手順に従います。
- 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 ユーザーが Organization から削除されてから 3 か月以内に [Organization のメンバーとして復帰](/articles/reinstating-a-former-member-of-your-organization)した場合は、そのプライベート フォークを復元できます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
- プライベート リポジトリが他の組織にフォークされると、それらの組織はフォーク ネットワークへのアクセスを制御できます。 つまり、ユーザーはフォーク経由で明示的なアクセス権を持っているため、元の組織にアクセスできなくなった後でもフォークへのアクセスを保持できます。 {%- ifversion ghec %}
-  削除されたメンバーは、同じEnterpriseアカウントが所有する他のOrganizationのメンバーではない場合、Organizationのインターナルリポジトリのプライベートフォークへのアクセスも失うことになります。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。
{%- endif %}
- 削除されたメンバーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなります。

{% endwarning %}

{% else %}

{% warning %}

**警告:** Organization からメンバーを削除する場合:
 - 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 ユーザーが Organization から削除されてから 3 か月以内に [Organization のメンバーとして復帰](/articles/reinstating-a-former-member-of-your-organization)した場合は、そのプライベート フォークを復元できます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
- 削除されたメンバーは、Enterpriseの他のOrganizationのメンバーではない場合、Organizationのインターナルリポジトリのプライベートフォークへのアクセスも失うことになります。
 - 削除されたユーザーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなりすま。

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

Organization から削除する個人の移行と、その個人による機密情報や知的財産の削除ができるようにするため、Organization から離脱する際のベストプラクティスのチェックリストを共有するよう推奨します。 例については、「[退職のためのベストプラクティス](/articles/best-practices-for-leaving-your-company/)」を参照してください。

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## ユーザのメンバーシップを削除する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Organization から削除するメンバーを選択します。
  ![2 人のメンバーが選択されたメンバー リスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. メンバーのリストの上のドロップダウン メニューで、 **[Organization から削除]** をクリックします。
  ![メンバーを削除するオプションのあるドロップダウン メニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. Organization から削除されるメンバーをレビューしてから、 **[メンバーの削除]** をクリックします。
  ![削除されるメンバーのリストと [メンバーの削除] ボタン](/assets/images/help/teams/confirm-remove-members-bulk.png)

## 参考資料

- 「[チームから組織メンバーを削除する](/articles/removing-organization-members-from-a-team)」{% ifversion remove-enterprise-members %}
- 「[エンタープライズからのメンバーの削除](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)」{% endif %}
