---
title: Preparar para exigir o logon único SAML na organização
intro: 'Antes de exigir o logon único SAML na organização, você deve verificar a associação da organização e configurar as definições de conexão para seu provedor de identidade.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Ao [exigir logon único SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) na sua organização, os integrantes que não tenham sido autenticados por meio de seu provedor de identidade (IdP) serão removidos da organização e receberão um e-mail notificando-os sobre a remoção.

Antes de exigir o SAML SSO na organização, você deve:

- [Adicionar](/articles/inviting-users-to-join-your-organization) ou [remover](/articles/removing-a-member-from-your-organization) integrantes da organização, se necessário.
- Se ainda não o fez, conecte seu IdP à organização. Para obter mais informações, consulte "[Conectar o provedor de identidade à sua organização](/articles/connecting-your-identity-provider-to-your-organization)".
- Certifique-se de que os integrantes da organização registraram e vincularam suas contas ao IdP.

{% data reusables.saml.outside-collaborators-exemption %}

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
