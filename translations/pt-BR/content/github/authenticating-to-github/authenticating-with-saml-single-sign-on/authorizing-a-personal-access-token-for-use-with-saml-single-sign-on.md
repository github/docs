---
title: Autorizar o uso de um token de acesso pessoal para uso com logon único SAML
intro: 'Para usar um token de acesso pessoal com uma organização que utiliza logon único SAML (SSO), primeiramente, você deve autorizar o token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---
Você pode autorizar um token de acesso pessoal existente ou [criar um](/github/authenticating-to-github/creating-a-personal-access-token) e autorizá-lo.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Ao lado do token que deseja autorizar, clique em **Enable SSO** (Habilitar SSO) ou **Disable SSO** (Desabilitar SSO). ![Botão de autorização do token SSO](/assets/images/help/settings/sso-allowlist-button.png)
4. Encontre a organização para a qual deseja autorizar o token de acesso.
4. Clique em **Autorizar**. ![Botão de autorização do token](/assets/images/help/settings/token-authorize-button.png)

### Leia mais

- "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Sobre a autenticação com logon único SAML](/articles/about-authentication-with-saml-single-sign-on)"
