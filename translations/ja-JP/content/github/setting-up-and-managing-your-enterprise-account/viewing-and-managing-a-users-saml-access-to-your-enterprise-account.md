---
title: Enterprise アカウントへのユーザの SAML アクセスの表示および管理
intro: Enterprise メンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。
permissions: Enterprise オーナーは、組織へのメンバーの SAML アクセスを表示したり管理したりすることもできます。
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
versions:
  free-pro-team: '*'
---

### Enterprise アカウントへの SAML アクセスについて

Enterprise アカウントに対する SAML シングルサインオンを有効にすると、各 Enterprise メンバーは ID プロバイダ (IdP) での外部アイデンティティを、既存の {{ site.data.variables.product.product_name }} アカウントにリンクできます。 {{ site.data.reusables.saml.about-saml-access-enterprise-account }}

### リンクされているアイデンティティの表示と取り消し

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### アクティブな SAML セッションの表示と取り消し

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### 認可されたクレデンシャルの表示と取り消し

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### 参考リンク

- [組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)
