---
title: 2 要素認証と SAML シングルサインオンについて
intro: Organization の管理者は、SAML シングルサインオンと 2 要素認証を共に有効化し、Organization のメンバーの認証方法を追加できます。
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA及びSAMLシングルサインオン
---

2 要素認証 (2FA) は、Organization のメンバーに基本的な認証を提供します。 By enabling 2FA, organization administrators limit the likelihood that a member's account on {% data variables.product.product_location %} could be compromised. 2FA に関する詳細は「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。

認証方法を追加するために、Organization の管理者は [SAML シングルサインオン (SSO) を有効化](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)し、Organization のメンバーが Organization へのアクセスにシングルサインオンを使わなければならないようにすることができます。 詳細は「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

2 要素認証と SAML SSO をどちらも有効化した場合、Organization のメンバーは以下のようにしなければなりません:
- Use 2FA to log in to their account on {% data variables.product.product_location %}
- Organization へのアクセスにはシングルサインオンを利用
- API あるいは Git のアクセスには認可されたトークンを使い、トークンの認可にはシングルサインオンを利用

## 参考リンク

- [Organization 用の SAML シングルサインオンの強制](/articles/enforcing-saml-single-sign-on-for-your-organization)
