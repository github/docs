---
title: Gerenciar bots e contas de serviço com logon único SAML
intro: Organizações que habilitaram logon único SAML podem manter o acesso para bots e contas de serviço.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Para manter o acesso para bots e contas de serviço, os administradores da organização podem [habilitar](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), mas **não** [executar](/articles/enforcing-saml-single-sign-on-for-your-organization) o logon único SAML na organização. Se você precisa executar logon único SAML na organização, é possível criar uma identidade externa para o bot ou conta de serviço com seu provedor de identidade (IdP).

{% warning %}

**Observação:** se você aplicar logon único SAML na sua organização e **não** tiver configurado identidades externas para bots e contas de serviço com o IdP, eles serão removidos da organização.

{% endwarning %}

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
