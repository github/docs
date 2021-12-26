---
title: Organization での SAML シングルサインオンの強制を準備する
intro: Organization で SAML シングルサインオンを強制する前に、Organization のメンバーシップを検証し、アイデンティティプロバイダへの接続文字列を設定する必要があります。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---
Organization で [SAML シングルサインオンを強制](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)すると、アイデンティティプロバイダ (IdP) を介して認証していないメンバーは Organization から削除され、削除について知らせるメールが届きます。

Organization で SAML SSO を強制する前に、次の準備が必要です:

- 必要な場合は、Organization でメンバーを[追加](/articles/inviting-users-to-join-your-organization)または[削除](/articles/removing-a-member-from-your-organization)します。
- まだ接続していない場合は、IdP を Organization に接続します。 詳細は「[アイデンティティプロバイダを Organization に接続する](/articles/connecting-your-identity-provider-to-your-organization)」を参照してください。
- Organization のメンバーがサインインし、アカウントを IdP にリンクしていることを確認します。

{% data reusables.saml.outside-collaborators-exemption %}

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)
