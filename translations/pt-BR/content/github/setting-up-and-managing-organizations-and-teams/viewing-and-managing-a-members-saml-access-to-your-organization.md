---
title: Visualizar e gerenciar o acesso SAML de um integrante à sua organização
intro: 'Você pode visualizar e revogar a identidade vinculada de um integrante da organização, as sessões ativas e as credenciais autorizadas.'
permissions: Os proprietários da organização podem visualizar e gerenciar o acesso SAML de um integrante a uma organização.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### Sobre o acesso SAML à sua organização

Ao ativar o logon único SAML para sua organização, cada integrante da organização poderá vincular sua identidade externa ao seu provedor de identidade (IdP) à sua conta {% data variables.product.product_name %} existente. Para acessar os recursos da sua organização no {% data variables.product.product_name %}, o integrante deverá ter uma sessão SAML ativa em seu navegador. Para acessar os recursos da sua organização usando a API ou o Git, o integrante deve usar um token de acesso pessoal ou chave SSH que o integrante autorizou a usar com a sua organização.

Você pode visualizar e revogar a identidade vinculada de cada integrante, as sessões ativas e as credenciais autorizadas na mesma página.

### Visualizar e revogar uma identidade vinculada

{% data reusables.saml.about-linked-identities %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Visualizar e revogar uma sessão ativa de SAML

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Visualizar e revogar credenciais autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Visualizar e gerenciar acesso SAML de um usuário à conta corporativa](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"
