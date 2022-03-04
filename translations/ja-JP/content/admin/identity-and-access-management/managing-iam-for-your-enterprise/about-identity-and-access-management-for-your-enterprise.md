---
title: Enterprise のアイデンティティおよびアクセス管理について
shortTitle: アイデンティティとアクセス管理について
intro: 'You can use SAML single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghae %}to {% data variables.product.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
---

## Enterprise のアイデンティティおよびアクセス管理について

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

SAML SSO を有効にした後、使用する IdP によっては、追加のアイデンティおよびアクセス管理機能を有効にできる場合があります。 {% data reusables.scim.enterprise-account-scim %}

IdP として Azure AD を使用している場合は、Team 同期を使用して、各 Organization 内の Team メンバーシップを管理できます。 {% data reusables.identity-and-permissions.about-team-sync %} 詳しい情報については、「[Enterprise アカウントで Organization の Team 同期を管理する](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」を参照してください。

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## {% data variables.product.prodname_emus %}について

{% data reusables.enterprise-accounts.emu-short-summary %}

Configuring {% data variables.product.prodname_emus %} for SAML single-sign on and user provisioning involves following a different process than you would for an enterprise that isn't using {% data variables.product.prodname_managed_users %}. If your enterprise uses {% data variables.product.prodname_emus %}, see "[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## サポートされている IdP

以下の IdP はテスト済みで公式にサポートされています。 SAML SSO の場合、SAML 2.0 標準を実装するすべてのアイデンティティプロバイダに対して限定的なサポートが提供されています。 詳しい情報については、OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

| IdP                                   |                              SAML                              |                           Team の同期                            |
| ------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory フェデレーションサービス (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)     | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                  | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| OneLogin                              | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                               | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

After you configure the application for {% data variables.product.product_name %} on your identity provider (IdP), you can provision access to {% data variables.product.product_location %} by assigning the application to users and groups on your IdP. {% data variables.product.product_name %} の SAML SSO の詳細については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.scim.after-you-configure-saml %}詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

自分の固有の IdP を使用して {% data variables.product.product_location %} の認証とユーザプロビジョニングの両方を設定する方法については、「[アイデンティティプロバイダを使用して認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)」を参照してください。

## サポートされている IdP

The following IdPs are officially supported for integration with {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

## Mapping {% data variables.product.prodname_ghe_managed %} teams to Okta groups

If you use Okta as your IdP, you can map your Okta groups to teams on {% data variables.product.prodname_ghe_managed %}. For more information, see "[Mapping Okta groups to teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."

{% endif %}

## 参考リンク

- OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security)
- [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website{% ifversion ghae %}
- [Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
