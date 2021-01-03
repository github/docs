---
title: Viewing and managing a user's SAML access to your enterprise
intro: 'Enterprise メンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。'
permissions: Enterprise オーナーは、組織へのメンバーの SAML アクセスを表示したり管理したりすることもできます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Enterprise アカウントへの SAML アクセスについて

Enterprise アカウントに対する SAML シングルサインオンを有効にすると、各 Enterprise メンバーは ID プロバイダ (IdP) での外部アイデンティティを、既存の {% data variables.product.product_name %} アカウントにリンクできます。 {% data reusables.saml.about-saml-access-enterprise-account %}

### リンクされているアイデンティティの表示と取り消し

{% data reusables.saml.about-linked-identities %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### アクティブな SAML セッションの表示と取り消し

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### 認可されたクレデンシャルの表示と取り消し

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### 参考リンク

- [組織へのメンバーの SAML アクセスの表示と管理](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)
