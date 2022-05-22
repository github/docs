---
title: Enterprise アカウント内の Organization のユーザプロビジョニングについて
intro: Enterprise アカウントの Organization のメンバーシップを直接アイデンティティプロバイダ (IdP) から管理できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} オプションで、SAML プロビジョニングを有効にして、別々にデプロビジョニングすることもできます。

IdP で {% data variables.product.product_name %} アプリケーションの SCIM を設定すると、IdP でグループのメンバーシップに変更を加えるたびに IdP が {% data variables.product.prodname_dotcom %} に SCIM 呼び出しを行い、対応する Organization のメンバーシップを更新します。 SAML プロビジョニングを有効にすると、Enterprise アカウントの SAML 設定で保護されているリソースに Enterprise のメンバーがアクセスするたびに、その SAML アサーションによってプロビジョニングがトリガーされすま。

SCIM 呼び出しまたは SAML アサーションのたびに、{% data variables.product.product_name %} はユーザが所属する IdP グループをチェックし、以下の操作を実行します。

- ユーザが、Enterprise アカウントによって所有されている Organization に対応する IdP グループのメンバーであり、現在その Organization のメンバーでない場合は、そのユーザーを Organization に追加する (SAML アサーション) か、Organization に参加するよう招待メールを送信 (SCIM 呼び出し) します。
- Enterprise アカウントによって所有される Organization にそのユーザが参加する既存の招待がある場合は、キャンセルします。

SCIM 呼び出しのたびに、また SAML デプロビジョニングを有効にしている場合には SAML アサーションのたびに、 {% data variables.product.product_name %} は以下の操作も実行します。

- ユーザが、Enterprise アカウントによって所有されている Organization に対応する IdP グループのメンバーではなく、現在その Organization のメンバーである場合は、そのユーザーを Organization から削除します。

デプロビジョニングによって、最後に残ったオーナーが Organization から削除されると、その Organization はオーナーのいない状態になります。 Enterprise オーナーは、オーナーのいない Organization の所有権を取得できます。 詳しい情報については、「[Enterprise アカウントでオーナーのいない Organization を管理する](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)」参照してください。

Okta を使用して Enterprise アカウントのユーザプロビジョニングを有効にするには、「[Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)」を参照してください。
