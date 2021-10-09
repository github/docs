---
title: Visualizar e gerenciar o acesso SAML de um usuário à sua empresa
intro: 'Você pode visualizar e revogar a identidade vinculada de um integrante da empresa, as sessões ativas e as credenciais autorizadas.'
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
shortTitle: Visualizar & gerenciar acesso SAML
---

## Sobre o acesso de SAML à sua conta corporativa

Ao ativar o logon único do SAML para a sua conta corporativa, cada integrante da empresa pode vincular sua identidade externa no seu provedor de identidade (IdP) à sua conta de {% data variables.product.product_name %} existente. {% data reusables.saml.about-saml-access-enterprise-account %}

Se sua empresa usar {% data variables.product.prodname_emus %}, seus integrantes usarão contas fornecidas por meio de seu IdP. {% data variables.product.prodname_managed_users_caps %} não usará a sua conta de usuário existente em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

## Visualizar e revogar uma identidade vinculada

{% data reusables.saml.about-linked-identities %}

Se o a sua empresa usar {% data variables.product.prodname_emus %}, você não poderá cancelar o provisionamento ou remover contas de usuário da empresa em {% data variables.product.product_name %}. Todas as alterações necessárias a fazer no {% data variables.product.prodname_managed_users %} da sua empresa devem ser feitas por meio do seu IdP.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Visualizar e revogar uma sessão ativa de SAML

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Visualizar e revogar credenciais autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
