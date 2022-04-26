---
title: About SCIM for organizations
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

## About SCIM for organizations

If your organization uses [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. Por exemplo, um administrador pode desprovisionar um integrante da organização usando SCIM e remover automaticamente o integrante da organização.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

Se o SAML SSO for usado sem implementação do SCIM, você não terá desprovisionamento automático. Quando as sessões dos integrantes da organização expiram depois que o acesso deles é removido do IdP, eles não podem ser removidos automaticamente da organização. Os tokens autorizados concedem acesso à organização mesmo depois que as respectivas sessões expiram. If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Provedores de identidade compatíveis

These identity providers (IdPs) are compatible with the {% data variables.product.product_name %} SCIM API for organizations. Para obter mais informações, consulte [SCIM](/rest/scim) na documentação da API {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
- Azure AD
- Okta
- OneLogin

## About SCIM configuration for organizations

{% data reusables.scim.dedicated-configuration-account %}

Before you authorize the {% data variables.product.prodname_oauth_app %}, you must have an active SAML session. Para obter mais informações, consulte "[Sobre a autenticação com logon único SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".

{% note %}

**Observação:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %}

## Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
