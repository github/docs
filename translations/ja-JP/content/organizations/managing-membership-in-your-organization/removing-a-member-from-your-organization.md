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
shortTitle: メンバーの削除
permissions: Organization owners can remove members from an organization.
---

{% ifversion fpt or ghec %}

{% warning %}

**警告:** Organization からメンバーを削除する際は次の点にご注意ください:
- 有料ライセンスのカウントは自動的にはダウングレードされません。 Organization からユーザを削除したあとに有料シートの数を減らすには、「[Organization の有料ライセンスをダウングレードする](/articles/downgrading-your-organization-s-paid-seats)」の手順に従ってください。
- 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 そのプライベートフォークは、そのユーザが Organization から削除されてから 3 か月以内に [Organization メンバーとして復帰した](/articles/reinstating-a-former-member-of-your-organization)場合、リストアできます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
- プライベートリポジトリが他のOrganizationにフォークされた場合、それらのOrganizationはフォークネットワークへのアクセスを制御できます。 これはすなわち、オリジナルのOrganizaitionへのアクセスをユーザが失っても、そのユーザは依然としてフォークへの明示的なアクセスを持ち続け、フォークへのアクセスは残されるかもしれないということです。
{%- ifversion ghec %}
-  削除されたメンバーは、同じEnterpriseアカウントが所有する他のOrganizationのメンバーではない場合、Organizationのインターナルリポジトリのプライベートフォークへのアクセスも失うことになります。 詳細は「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。
{%- endif %}
- 削除されたメンバーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなります。

{% endwarning %}

{% else %}

{% warning %}

**警告:** Organization からメンバーを削除する際は次の点にご注意ください:
 - 削除されたメンバーは Organization のプライベートリポジトリのプライベートフォークへのアクセスは失いますが、ローカルコピーを自分で持っておくことは可能です。 ただし、ローカルコピーを Organization のリポジトリと同期させることはできません。 そのプライベートフォークは、そのユーザが Organization から削除されてから 3 か月以内に [Organization メンバーとして復帰した](/articles/reinstating-a-former-member-of-your-organization)場合、リストアできます。 最終的に、リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。
- 削除されたメンバーは、Enterpriseの他のOrganizationのメンバーではない場合、Organizationのインターナルリポジトリのプライベートフォークへのアクセスも失うことになります。
 - 削除されたユーザーによって送信され、まだ受け取られていない Organization への招待がある場合はキャンセルされ、アクセスできなくなりすま。

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

Organization から削除する個人の移行と、その個人による機密情報や知的財産の削除ができるようにするため、Organization から離脱する際のベストプラクティスのチェックリストを共有するよう推奨します。 例については、「[退職のためのベストプラクティス](/articles/best-practices-for-leaving-your-company/)」を参照してください。

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## ユーザのメンバーシップを削除する

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Organization から削除するメンバーを選択します。 ![2 人のメンバーを選択した状態のメンバーリスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. メンバーのリストの上のドロップダウンメニューで、[**Remove from organization**] をクリックします。 ![メンバーを削除するオプションのあるドロップダウンメニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. Organization から削除されるメンバーをレビューしてから、[**Remove members**] をクリックします。 ![削除されるメンバーのリストおよび [Remove members] ボタン](/assets/images/help/teams/confirm-remove-members-bulk.png)

## 参考リンク

- 「[TeamからのOrganizationメンバーの削除](/articles/removing-organization-members-from-a-team)」{% if remove-enterprise-members %}
- 「[Enterpriseからのメンバーの削除](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)」{% endif %}
