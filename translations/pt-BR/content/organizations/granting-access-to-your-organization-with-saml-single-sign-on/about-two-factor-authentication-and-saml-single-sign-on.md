---
title: Sobre a autenticação de dois fatores e o SAML de logon único
intro: Os administradores da organização podem habilitar o SAML de logon único e a autenticação de dois fatores para adicionar medidas extras de autenticação para os integrantes da organização.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

A autenticação de dois fatores (2FA, Two-Factor Authentication) fornece autenticação básica para integrantes da organização. Ao habilitar a 2FA, os administradores da organização limitam a probabilidade de que a conta do {% data variables.product.product_name %} de um integrante possa ser comprometida. Para obter mais informações sobre a 2FA, consulte "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)".

Para adicionar medidas extras de autenticação, os administradores da organização também podem [habilitar o SAML de logon único (SSO, Single Sign-On)](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) para que os integrantes da organização usem o logon único para acessar uma organização. Para obter mais informações sobre o SAML SSO, consulte "[Sobre o gerenciamento de identidade e acesso com SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)".

Se a 2FA e o SAML SSO forem habilitados, os integrantes da organização deverão fazer o seguinte:
- Usar a 2FA para entrar na conta do {% data variables.product.product_name %}
- Usar o logon único para acessar a organização
- Usar um token autorizado para acesso por API ou Git e usar logon único para autorizar o token

### Leia mais

- "[Aplicar SAML de logon único para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)"
