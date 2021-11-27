---
title: Enterprise へのユーザの SAML アクセスの表示および管理
intro: Enterprise メンバーのリンクされたアイデンティティ、アクティブなセッション、認可されたクレデンシャルの表示と取り消しが可能です。
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
---

## Enterprise アカウントへの SAML アクセスについて

Enterprise アカウントに対する SAML シングルサインオンを有効にすると、各 Enterprise メンバーは ID プロバイダ (IdP) での外部アイデンティティを、既存の {% data variables.product.product_name %} アカウントにリンクできます。 {% data reusables.saml.about-saml-access-enterprise-account %}

If your enterprise is uses {% data variables.product.prodname_emus %}, your members will use accounts provisioned through your IdP. {% data variables.product.prodname_managed_users_caps %} will not use their existing user account on {% data variables.product.product_name %}. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

## リンクされているアイデンティティの表示と取り消し

{% data reusables.saml.about-linked-identities %}

If your enterprise uses {% data variables.product.prodname_emus %}, you will not be able to deprovision or remove user accounts from the enterprise on {% data variables.product.product_name %}. Any changes you need to make to your enterprise's {% data variables.product.prodname_managed_users %} should be made through your IdP.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## アクティブな SAML セッションの表示と取り消し

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## 認可されたクレデンシャルの表示と取り消し

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## 参考リンク

- [組織へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
