---
title: Sobre o SCIM
intro: 'Com o Sistema para gerenciamento de identidades entre domínios (SCIM, System for Cross-domain Identity Management), os administradores podem automatizar a troca de informações de identidade do usuário entre sistemas.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Se você usa [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) em sua organização, é possível implementar o SCIM pra adicionar, gerenciar e remover o acesso dos integrantes da organização ao {% data variables.product.product_name %}. Por exemplo, um administrador pode desprovisionar um integrante da organização usando SCIM e remover automaticamente o integrante da organização.

Se o SAML SSO for usado sem implementação do SCIM, você não terá desprovisionamento automático. Quando as sessões dos integrantes da organização expiram depois que o acesso deles é removido do IdP, eles não podem ser removidos automaticamente da organização. Os tokens autorizados concedem acesso à organização mesmo depois que as respectivas sessões expiram. Para remover o acesso, os administradores da organização podem remover o token autorizado manualmente da organização ou automatizar a remoção com o SCIM.

Estes provedores de identidade são compatíveis com a API de SCIM de {% data variables.product.product_name %} para organizações. Para obter mais informações, consulte [SCIM](/rest/reference/scim) na documentação de API do {% data variables.product.product_name %}.
- Azure AD
- Okta
- OneLogin

{% data reusables.scim.enterprise-account-scim %} Para obter mais informações, consulte "[Sobre o provisionamento do usuário para organizações na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)".

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Conectar o provedor de identidade à sua organização](/articles/connecting-your-identity-provider-to-your-organization)"
- "[Habilitar e testar SAML de logon único para sua organização](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)"
- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
