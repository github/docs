---
title: Sobre o SCIM para organizações
intro: 'Com o Sistema para gerenciamento de identidades entre domínios (SCIM, System for Cross-domain Identity Management), os administradores podem automatizar a troca de informações de identidade do usuário entre sistemas.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## Sobre o SCIM para organizações

Se a sua organização usar o [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), você poderá implementar o SCIM para adicionar, gerenciar e remover o acesso dos integrantes da organização a {% data variables.product.product_name %}. Por exemplo, um administrador pode desprovisionar um integrante da organização usando SCIM e remover automaticamente o integrante da organização.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Se o SAML SSO for usado sem implementação do SCIM, você não terá desprovisionamento automático. Quando as sessões dos integrantes da organização expiram depois que o acesso deles é removido do IdP, eles não podem ser removidos automaticamente da organização. Os tokens autorizados concedem acesso à organização mesmo depois que as respectivas sessões expiram. Se o SCIM não for usado, para remover completamente o acesso de um integrante, o proprietário da organização deve remover o acesso do integrante no IdP e remover manualmente o integrante da organização em {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Provedores de identidade compatíveis

Esses provedores de identidade (IdPs) são compatíveis com a API do SCIM de {% data variables.product.product_name %} para organizações. Para obter mais informações, consulte [SCIM](/rest/scim) na documentação da API {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## Sobre a configuração do SCIM para organizações

{% data reusables.scim.dedicated-configuration-account %}

Antes de autorizar o {% data variables.product.prodname_oauth_app %}, você deve ter uma sessão do SAML ativa. Para obter mais informações, consulte "[Sobre a autenticação com logon único SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".

{% note %}

**Observação:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
