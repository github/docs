---
title: 組織へのメンバーの SAML アクセスの表示と管理
intro: Organization のメンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。
permissions: Organization のオーナーは、組織へのメンバーの SAML アクセスを表示したり管理したりすることもできます。
product: '{{ site.data.reusables.gated-features.saml-sso }}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### Organization への SAML アクセスについて

Organization に対する SAML シングルサインオンを有効にすると、各 Organization メンバーは ID プロバイダ (IdP) での外部アイデンティティを、既存の {{ site.data.variables.product.product_name }} アカウントにリンクできます。 {{ site.data.variables.product.product_name }}上の Organizationのリソースにアクセスするには、メンバーはアクティブなSAMLセッションをブラウザーに持っていなければなりません。 OrganizationのリソースにAPIまたはGitを使ってアクセスするには、メンバーは、メンバーがOrganizationでの利用のために認可した個人アクセストークンもしくはSSHキーを使わなければなりません。

各メンバーのリンクされたアイデンティティ、アクティブなセッション、同じページで認可されたクレデンシャルの表示と取り消しが可能です。

### リンクされているアイデンティティの表示と取り消し

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### アクティブな SAML セッションの表示と取り消し

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### 認可されたクレデンシャルの表示と取り消し

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)
