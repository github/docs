---
title: Enterprise のアイデンティティおよびアクセス管理について
shortTitle: アイデンティティとアクセス管理について
intro: '{% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} のビルトイン認証を使用するか、CAS、LDAP、または SAML{% else %}SAML シングルサインオン (SSO) と System for Cross-domain Identity Management (SCIM){% endif %} のいずれかを選択して、{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} から {% data variables.product.product_location %} で Enterprise が所有する Organization へのアクセスを一元管理できます{% endif %}。'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
---
### Enterprise のアイデンティティおよびアクセス管理について

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

IdP で {% data variables.product.product_name %} のアプリケーションを設定した後、IdP のユーザおよびグループにアプリケーションを割り当てることで、{% data variables.product.product_location %} へのアクセスを許可できます。 {% data variables.product.product_name %} の SAML SSO の詳細については、「[Enterprise 向けの SAML シングルサインオンを設定する](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.scim.after-you-configure-saml %}詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

自分の固有の IdP を使用して {% data variables.product.product_location %} の認証とユーザプロビジョニングの両方を設定する方法については、「[アイデンティティプロバイダを使用して認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)」を参照してください。

{% endif %}

### 参考リンク

- OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security)
- IETF Web サイトの [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644)
- [Enterprise へのネットワークトラフィックを制限する](/admin/configuration/restricting-network-traffic-to-your-enterprise)
