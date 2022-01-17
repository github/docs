---
title: 私の Organization に所属する人のためにアカウントを作成できますか?
intro: 作成した Organization にユーザを追加することはできますが、個人のアカウントを代理で作成することはできません。
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 人のアカウントの作成
---

## About user accounts

Because you access an organization by logging in to a user account, each of your team members needs to create their own user account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

{% ifversion fpt or ghec %}
{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %} can use SAML single sign-on to centrally manage the access that user accounts have to the organization's resources through an identity provider (IdP). For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

You can also consider {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Organization へのユーザの追加

1. Provide each person instructions to [create a user account](/articles/signing-up-for-a-new-github-account).
2. Organization のメンバーシップを与えたい人に、ユーザー名を尋ねます。
3. Organization に、作成された[新しい個人アカウントを招待](/articles/inviting-users-to-join-your-organization)してください。 各アカウントのアクセスを制限するには、[Organization ロール](/articles/permission-levels-for-an-organization)および[リポジトリの権限](/articles/repository-permission-levels-for-an-organization)を使用します。
