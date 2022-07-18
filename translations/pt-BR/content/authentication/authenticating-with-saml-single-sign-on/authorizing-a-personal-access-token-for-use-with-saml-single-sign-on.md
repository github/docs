---
title: Autorizar o uso de um token de acesso pessoal para uso com logon único SAML
intro: 'Para usar um token de acesso pessoal com uma organização que utiliza logon único SAML (SSO), primeiramente, você deve autorizar o token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT com SAML
---

Você pode autorizar um token de acesso pessoal existente ou [criar um](/github/authenticating-to-github/creating-a-personal-access-token) e autorizá-lo.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Ao lado do token que você gostaria de autorizar, clique em **Configurar SSO**. ![Captura de tela do menu suspenso para configurar o SSO para um token de acesso pessoal](/assets/images/help/settings/sso-allowlist-button.png)
4. À direita da organização para autorizar o token, clique em **Autorizar**. ![Botão de autorização do token](/assets/images/help/settings/token-authorize-button.png)

## Leia mais

- "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Sobre a autenticação com logon único SAML](/articles/about-authentication-with-saml-single-sign-on)"
