---
title: 私の Organization に所属する人のためにアカウントを作成できますか?
intro: 自分が作成したOrganizationにユーザを追加することはできますが、他人に代わって個人アカウントを作成することはできません。
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

## 個人アカウントについて

Organizationへのアクセスは個人アカウントにログインすることによって行うので、それぞれのTeamメンバーは、自分の個人アカウントを作成しなければなりません。 Organizationに追加したい各人のユーザ名があれば、それらのユーザをTeamに追加できます。

{% ifversion fpt or ghec %}
{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}を使うOrganization{% else %}あなた{% endif %}は、SAMLシングルサインオンを使い、個人アカウントが持つアイデンティティプロバイダ（IdP）を通じたOrganizationのリソースに対するアクセスを集中管理できます。 詳しい情報については{% ifversion fpt %}、{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}、{% endif %}「[SAMLシングルサインオンを使うアイデンティティ及びアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)を参照してください。

{% data variables.product.prodname_emus %}を検討することもできます。 {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Organization へのユーザの追加

1. [個人アカウントを作成する](/articles/signing-up-for-a-new-github-account)よう各自に指示してください。
2. Organization のメンバーシップを与えたい人に、ユーザー名を尋ねます。
3. Organization に、作成された[新しい個人アカウントを招待](/articles/inviting-users-to-join-your-organization)してください。 各アカウントのアクセスを制限するには、[Organization ロール](/articles/permission-levels-for-an-organization)および[リポジトリの権限](/articles/repository-permission-levels-for-an-organization)を使用します。
