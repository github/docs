---
title: アイデンティティプロバイダを Organization に接続する
intro: 'SAML シングルサインオンおよび SCIM を使うには、あなたのアイデンティティプロバイダ（IdP）を、{% data variables.product.product_name %}上のあなたのOrganizationに接続する必要があります。'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: IdPの接続
---

## IdPのOrganizationへの接続について

{% data variables.product.product_name %} OrganizationでSAML SSOを有効化すると、アイデンティティプロバイダ（IdP）をOrganizationに接続することになります。 詳細は「[Organization での SAML シングルサインオンの有効化とテスト](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.ghec-only %}

IdPのSAML及びSCIMの実装の詳細は、IdPのドキュメンテーションにあります。
- Active Directory フェデレーションサービス (AD FS): [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD): [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) および [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta: [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) および [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin: [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) および [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne: [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth: [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**メモ:** {% data variables.product.product_name %} がサポートする SCIM アイデンティティプロバイダは Azure AD、Okta、OneLogin です。 SCIMに関する詳しい情報については「[OrganizationのSCIMについて](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

{% data reusables.scim.enterprise-account-scim %}

{% endnote %}

## SAMLのメタデータ

OrganizationのSAMLメタデータに関する詳しい情報については「[SAML設定のリファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」を参照してください。
