---
title: Enterprise を管理するようユーザを招待する
intro: 'You can {% ifversion fpt %}invite people to become enterprise owners or billing managers for{% elsif ghes %}add enterprise owners to{% endif %} your enterprise account. You can also remove enterprise owners {% ifversion fpt %}or billing managers {% endif %}who no longer need access to the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners can {% ifversion fpt %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
---

## About users who can manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

If you want to manage owners and billing managers for an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, see "[Inviting people to manage your enterprise](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

{% tip %}

**ヒント:** Enterprise アカウントが所有する Organization 内のユーザを管理する方法に関する詳しい情報については、「[Organization でメンバーシップを管理する](/articles/managing-membership-in-your-organization)」および「[Organization への人々のアクセスをロールで管理する](/articles/managing-peoples-access-to-your-organization-with-roles)」を参照してください。

{% endtip %}

## {% ifversion fpt %}Inviting{% elsif ghes %}Adding{% endif %} an enterprise administrator to your enterprise account

{% ifversion fpt %}After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. 左サイドバーで [**Administrators**] をクリックします。 ![左サイドバーの [Administrators] タブ](/assets/images/help/business-accounts/administrators-tab.png)
1. Above the list of administrators, click {% ifversion fpt %}**Invite admin**{% elsif ghes %}**Add owner**{% endif %}.
  {% ifversion fpt %}
  !["Invite admin" button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  !["Add owner" button above the list of enterprise owners](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Enterprise 管理者として招待する人のユーザ名、フルネーム、またはメール アドレスを入力して、表示された結果から適切な人を選びます。 ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. [**Owner**] または [**Billing Manager**] を選択します。 ![ロールの選択肢が表示されたモーダルボックス](/assets/images/help/business-accounts/invite-admins-roles.png)
1. [**Send Invitation**] をクリックします。 ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. [**Add**] をクリックします。 !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Enterprise アカウントから Enterprise 管理者を削除する

Enterprise アカウントから他の Enterprise 管理者を削除できるのは、Enterprise オーナーだけです。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
  {% ifversion fpt %}
  ![Enterprise 管理者を削除するためのメニュー オプション付きの設定「歯車」アイコン](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Enterprise 管理者を削除するためのメニュー オプション付きの設定「歯車」アイコン](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Read the confirmation, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
