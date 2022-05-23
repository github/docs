---
title: Visualizar e gerenciar o acesso SAML de um integrante à sua organização
intro: 'Você pode visualizar e revogar a identidade vinculada de um integrante da organização, as sessões ativas e as credenciais autorizadas.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar acesso SAML
---

## Sobre o acesso SAML à sua organização

Ao habilitar o logon único SAML para a sua organização, cada integrante da organização pode vincular sua identidade externa no seu provedor de identidade (IdP) à sua conta atual em {% data variables.product.product_location %}. Para acessar os recursos da sua organização no {% data variables.product.product_name %}, o integrante deverá ter uma sessão SAML ativa em seu navegador. Para acessar os recursos da sua organização usando a API ou o Git, o integrante deve usar um token de acesso pessoal ou chave SSH que o integrante autorizou a usar com a sua organização.

Você pode visualizar e revogar a identidade vinculada de cada integrante, as sessões ativas e as credenciais autorizadas na mesma página.

## Visualizar e revogar uma identidade vinculada

{% data reusables.saml.about-linked-identities %}

Quando disponível, a entrada incluirá dados de SCIM. Para obter mais informações, consulte "[Sobre SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% warning %}

**Aviso:** Para organizações que usam SCIM:
- A revogação de uma identidade de usuário vinculada em {% data variables.product.product_name %} também removerá os metadados SAML e SCIM. Como resultado, o provedor de identidade não poderá sincronizar ou desprovisionar a identidade do usuário vinculada.
- Um administrador deverá revogar uma identidade vinculada por meio do provedor de identidade.
- Para revogar uma identidade vinculada e vincular uma conta diferente por meio do provedor de identidade, um administrador pode remover e reatribuir o usuário ao aplicativo de {% data variables.product.product_name %}. Para obter mais informações, consulte a documentação do seu provedor de identidade.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Visualizar e revogar uma sessão ativa de SAML

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Visualizar e revogar credenciais autorizadas

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Leia mais

- "[Sobre a identidade e gerenciamento de acesso com o logon único SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"{% ifversion ghec %}
- "[Visualizando e gerenciando o acesso SAML de um usuário à sua conta corporativa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"{% endif %}
