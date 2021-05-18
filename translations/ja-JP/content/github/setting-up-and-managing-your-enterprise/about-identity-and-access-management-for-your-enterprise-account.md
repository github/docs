---
title: Enterprise アカウントのアイデンティおよびアクセス管理について
intro: アイデンティティプロバイダ (IdP) を使用して、Enterprise のリソース、Organization のメンバーシップ、および Team のメンバーシップへのアクセスを一元管理できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Enterprise アカウントのアイデンティおよびアクセス管理について

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} 詳しい情報については、「[Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)」を参照してください。

SAML SSO を有効にした後、使用する IdP によっては、追加のアイデンティおよびアクセス管理機能を有効にできる場合があります。

{% data reusables.saml.about-user-provisioning-enterprise-account %} 詳しい情報については、「[Enterprise アカウント内の Organization のユーザプロビジョニングについて](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)」を参照してください。

IdP として Azure AD を使用している場合は、Team 同期を使用して、各 Organization 内の Team メンバーシップを管理できます。 {% data reusables.identity-and-permissions.about-team-sync %} 詳しい情報については、「[Enterprise アカウントで Organization の Team 同期を管理する](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)」を参照してください。

### サポートされている IdP

以下の IdP はテスト済みで公式にサポートされています。 SAML SSO の場合、SAML 2.0 標準を実装するすべてのアイデンティティプロバイダに対して限定的なサポートが提供されています。 詳しい情報については、OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

| IdP                                   |                              SAML                              |                                                                                              ユーザプロビジョニング                                                                                              |                           Team の同期                            |
| ------------------------------------- |:--------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory フェデレーションサービス (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                                                                                                                                                                       |                                                               |
| Azure Active Directory (Azure AD)     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                  | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label= "The check icon" %} [<sup>ベータ</sup>](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account) |                                                               |
| OneLogin                              | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |
| PingOne                               | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |
| Shibboleth                            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |

