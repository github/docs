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
  free-pro-team: '*'
topics:
  - Enterprise
---
### Sobre o acesso de SAML à sua conta corporativa

Ao ativar o logon único do SAML para a sua conta corporativa, cada integrante da empresa pode vincular sua identidade externa no seu provedor de identidade (IdP) à sua conta de {% data variables.product.product_name %} existente. {% data reusables.saml.about-saml-access-enterprise-account %}

### Visualizar e revogar uma identidade vinculada

{% data reusables.saml.about-linked-identities %}

{% warning %}

**Warning:** For organizations using SCIM:
- Revoking a linked user identity on {% data variables.product.product_name %} will also remove the SAML and SCIM metadata. As a result, the identity provider will not be able to synchronize or deprovision the linked user identity.
- An admin must revoke a linked identity through the identity provider.
- To revoke a linked identity and link a different account through the identity provider, an admin can remove and re-assign the user to the {% data variables.product.product_name %} application. For more information, see your identity provider's docs.

{% endwarning %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Visualizar e revogar uma sessão ativa de SAML

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Visualizar e revogar credenciais autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
