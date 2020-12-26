---
title: Aplicar logon único de SAML para sua organização
intro: Administradores e proprietários da organização podem aplicar logon único (SSO, Single Sign-On) de SAML para que todos os integrantes da organização precisem se autenticar por meio de um provedor de identidade.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
---

Se você aplicar SAML SSO na sua organização, todos os integrantes, inclusive administradores que não tenham sido autenticados pelo seu provedor de identidade (IdP, Identity Provider) de SAML, serão removidos da organização e receberão um e-mail notificando-os sobre a remoção. Bots e contas de serviço que não tenham identidades externas configuradas no IdP da organização também serão removidos. Para obter mais informações sobre bots e contas de serviço, consulte "[Gerenciar bots e contas de serviço com logon único de SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)". Você poderá restaurar integrantes da organização depois que eles tiverem concluído o logon único com êxito.

Se a organização pertence a uma conta corporativa, habilitar o SAML para a conta corporativa substituirá a configuração do SAML da organização. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)".

{% tip %}

**Dica:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. Habilite e teste o SAML SSO para sua organização. Para obter mais informações sobre esse processo, consulte "[Habilitar e testar logon único de SAML para sua organização](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
2. Depois que você selecionar **Require SAML SSO authentication for all members of the SAML SSO Org organization** (Exigir autenticação SAML SSO para todos os integrantes da organização SAML SSO Org), serão mostrados os integrantes da organização que não foram autenticados via IdP. Se você aplicar o SAML SSO, esses integrantes serão removidos da organização.
3. Clique em **Enforce SAML SSO** (Aplicar SAML SSO) e remova os integrantes da organização listados.

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
