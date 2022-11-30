---
title: Enterprise を管理するようユーザを招待する
intro: Enterprise アカウントで Enterprise オーナーまたは支払いマネージャーになるように人を招待することができます。 Enterprise アカウントにアクセスする必要がなくなった Enterprise オーナーまたは支払いマネージャーを削除することもできます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---
### Enterprise アカウントを管理するようユーザを招待することについて

{% data reusables.enterprise-accounts.enterprise-administrators %}詳しい情報については、「[Enterprise のロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)」を参照してください。

{% tip %}

**ヒント:** Enterprise アカウントが所有する Organization 内のユーザを管理する方法に関する詳しい情報については、「[Organization でメンバーシップを管理する](/articles/managing-membership-in-your-organization)」および「[Organization への人々のアクセスをロールで管理する](/articles/managing-peoples-access-to-your-organization-with-roles)」を参照してください。

{% endtip %}

### Enterprise 管理者を Enterprise アカウントに招待する

Enterprise アカウントの管理者になるように他の人を招待できるのは、Enterprise オーナーだけです。

Enterprise アカウントに参加するようにある人を招待したら、その人はメールでの招待に応じるまで Enterprise アカウントにアクセスできません。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. 左サイドバーで [**Administrators**] をクリックします。 ![左サイドバーの [Administrators] タブ](/assets/images/help/business-accounts/administrators-tab.png)
4. 管理者のリストの上にある [**Invite admin**] をクリックします。 ![Enterprise オーナーのリストの上にある [Invite admin] ボタン](/assets/images/help/business-accounts/invite-admin-button.png)
5. Enterprise 管理者として招待する人のユーザ名、フルネーム、またはメール アドレスを入力して、表示された結果から適切な人を選びます。 ![人のユーザ名、フルネーム、またはメール アドレスを入力するためのフィールドと [Invite] ボタンを備えたモーダル ボックス](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. [**Owner**] または [**Billing Manager**] を選択します。 ![ロールの選択肢が表示されたモーダルボックス](/assets/images/help/business-accounts/invite-admins-roles.png)
7. [**Send Invitation**] をクリックします。 ![[Send invitation] ボタン](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

### Enterprise アカウントから Enterprise 管理者を削除する

Enterprise アカウントから他の Enterprise 管理者を削除できるのは、Enterprise オーナーだけです。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. 削除する人のユーザ名の横にある {% octicon "gear" aria-label="The Settings gear" %} をクリックし、続いて [**Remove owner**] または [**Remove billing manager**] をクリックします。 ![Enterprise 管理者を削除するためのメニュー オプション付きの設定「歯車」アイコン](/assets/images/help/business-accounts/remove-admin.png)
