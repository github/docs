---
title: Organization に参加するようユーザを招待する
intro: '{% data variables.product.product_location %}のためのユーザ名もしくはメールアドレスを使って、Organizationのメンバーになるよう誰でも招待できます。'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: ユーザに参加するよう招待
---

## Organizationの招待について

Organization がユーザ単位の有料プランである場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、そのためのライセンスが用意されている必要があります。 詳細は「[ユーザごとの価格付けについて](/articles/about-per-user-pricing)」を参照してください。

{% data reusables.organizations.org-invite-scim %}

Organization がメンバーに 2 要素認証を使うことを要求している場合、招待するユーザは招待を受ける前に 2 要素認証を有効化する必要があります。 詳細については、「[Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)」と「[2要素認証 (2FA) でアカウントをセキュアにする](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}を使用するOrganization{% else %}あなた{% endif %}はSCIMを実装して、アイデンティティプロバイダ（IdP）を通じて{% data variables.product.prodname_dotcom_the_website %}へのメンバーのアクセスを追加、管理、削除できます。 詳しい情報については{% ifversion fpt %}、{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}、{% endif %}「[OrganizatinのSCIMについて](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)を参照してください。

## Organizationに参加するようユーザを招待する

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## 参考リンク
- [Team へのOrganization メンバーの追加](/articles/adding-organization-members-to-a-team)
