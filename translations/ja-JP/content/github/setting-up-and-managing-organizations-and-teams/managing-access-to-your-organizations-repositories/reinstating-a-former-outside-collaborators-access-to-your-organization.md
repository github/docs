---
title: 以前の外部のコラボレータの Organization へのアクセスを復帰させる
intro: 'You can reinstate a former outside collaborator''s access permissions for organization repositories, forks, and settings.'
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
When an outside collaborator's access to your organization's private repositories is removed, the user's access privileges and settings are saved for three months. そのタイムフレーム内にユーザを Organization へ再度{% if currentVersion == "free-pro-team@latest" %}招待{% else %}追加{% endif %}した場合、そのユーザの権限をリストアできます。

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
 - 外部コラボレーターの Organization へのアクセスを復帰させることができるのは、Organization のオーナーだけです。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。
 - {% data variables.product.product_location %} のメンバー復帰フローでは、外部コラボレーターの復帰を説明するために「メンバー」という用語を使用することがありますが、この個人を復帰させて以前の権限を保持しても、付与されるのはその[外部コラボレーターの以前の権限](/articles/permission-levels-for-an-organization/#outside-collaborators)のみです。{% if currentVersion == "free-pro-team@latest" %}
 - Organization がユーザ単位の有料プランである場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、そのためのライセンスが用意されている必要があります。 詳しい情報については、「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. [**Invite and reinstate**] をクリックして外部コラボレーターの Organization での以前の権限をリストアすることを選択するか、[**Invite and start fresh**] をクリックして以前の権限をクリアして新たにアクセス権を設定することを選択します。

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
{% if currentVersion == "free-pro-team@latest" %}
7. 以前の外部コラボレーターの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Send invitation**] をクリックします。 ![ロールとTeamオプションと招待の送信ボタン](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. 以前の外部コラボレーターの以前の権限をクリアした場合は、そのユーザのロールを選択し、オプションでいくつかのチームに追加してから、[**Add member**] をクリックします。 ![ロールと Team のオプションと [add member] ボタン](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
8. 招待された人物は、Organizationへの招待メールを受け取ります。 Organization で 外部コラボレーターになるには、招待を受諾する必要があります。 {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### 参考リンク

- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
