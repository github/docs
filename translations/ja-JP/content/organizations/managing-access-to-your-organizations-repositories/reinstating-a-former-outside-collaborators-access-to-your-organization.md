---
title: 以前の外部のコラボレータの Organization へのアクセスを復帰させる
intro: Organization のリポジトリ、フォーク、設定に対する元外部のコラボレータのアクセス許可を元に戻すことができます。
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: コラボレータの復帰
---

Organization のプライベートリポジトリへの外部のコラボレータのアクセスが削除されると、ユーザのアクセス権限と設定は 3 か月間保存されます。 その期間内にユーザを Organization へ再度{% ifversion fpt or ghec %}招待{% else %}追加{% endif %}した場合、そのユーザの権限をリストアできます。

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

以前の外部コラボレーターを復帰させると、次のことがリストアできます:
 - ユーザの Organization リポジトリへの以前のアクセス
 - Organization が所有しているリポジトリのあらゆるプライベートフォーク
 - Organization のチームでのメンバーシップ
 - Organization のリポジトリへの以前のアクセスと権限
 - Organization リポジトリでの Star
 - Organization での Issue 割り当て
 - リポジトリプラン (リポジトリのアクティビティを Watch するか Watch しないか無視するかについての通知設定)

{% tip %}

**ヒント**:

 - Organizationのオーナーのみが、外部のコラボレータのOrganizationへのアクセスを復帰させることができます。{% if prevent-org-admin-add-outside-collaborator %}Entepriseのオーナーは、外部コラボレータのアクセスを復帰させる機能を、Enterpriseのオーナーのみに制限できます。{% endif %}詳しい情報については「[Organizationのロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。
 - {% data variables.product.product_location %} のメンバー復帰フローでは、外部コラボレーターの復帰を説明するために「メンバー」という用語を使用することがありますが、この個人を復帰させて以前の権限を保持しても、付与されるのはその[外部コラボレーターの以前の権限](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)のみです。{% ifversion fpt or ghec %}
 - Organization がユーザ単位の有料プランである場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、そのためのライセンスが用意されている必要があります。 詳しい情報については、「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。{% endif %}

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt or ghec %}
1. [**Invite and reinstate**] をクリックして外部コラボレーターの Organization での以前の権限をリストアすることを選択するか、[**Invite and start fresh**] をクリックして以前の権限をクリアして新たにアクセス権を設定することを選択します。

  {% warning %}

  **警告:** 外部コラボレーターを Organization のメンバーにアップグレードする場合は、[**Invite and start fresh**] を選択して、その個人の新しいロールを選択します。 ただし、[start fresh] を選択する場合、その個人のプライベートフォークは Organization のリポジトリから失われますので、注意が必要です。 以前の外部コラボレーターを Organization のメンバーにし、*かつ*そのコラボレーターのプライベートフォークを保持するには、代わりに [**Invite and reinstate**] を選択します。 その個人が招待を承認したら、[Organization にメンバーとして参加するよう招待する](/articles/converting-an-outside-collaborator-to-an-organization-member)ことにより、その個人を Organization メンバーに変換できます。

  {% endwarning %}

  ![設定をリストアするか否かの選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. [**Add and reinstate**] をクリックして外部のコラボレータの Organization での以前の権限をリストアすることを選択するか、[**Add and start fresh**] をクリックして以前の権限をクリアして新たにアクセス権を設定することを選択します。

  {% warning %}

  **警告:** 外部コラボレーターを Organization メンバーにアップグレードする場合は、[**Add and start fresh**] を選択して、その個人に新しいロールを選択してください。 ただし、[start fresh] を選択する場合、その個人のプライベートフォークは Organization のリポジトリから失われますので、注意が必要です。 以前の外部コラボレーターを Organization のメンバーにして、*かつ*そのプライベートフォークを保持するには、代わりに [**Add and reinstate**] を選択します。 それから、[Organization にメンバーとして追加する](/articles/converting-an-outside-collaborator-to-an-organization-member)ことにより、その個人を Organization メンバーに変換できます。

  {% endwarning %}

  ![設定をリストアするか否かの選択](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt or ghec %}
7. 以前の外部コラボレーターの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Send invitation**] をクリックします。 ![ロールとTeamオプションと招待の送信ボタン](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. 以前の外部コラボレーターの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Add member**] をクリックします。 ![ロールと Team のオプションと [add member] ボタン](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt or ghec %}
8. 招待された人物は、Organizationへの招待メールを受け取ります。 Organization で 外部コラボレーターになるには、招待を受諾する必要があります。 {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## 参考リンク

- 「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
