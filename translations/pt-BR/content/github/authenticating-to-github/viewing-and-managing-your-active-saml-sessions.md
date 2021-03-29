---
title: Exibir e gerenciar sessões SAML ativas
intro: É possível exibir e revogar sessões SAML ativas nas configurações de segurança.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
versions:
  free-pro-team: '*'
topics:
  - sso
---

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Em "Sessões", você pode ver suas sessões ativas do SAML. ![Lista de sessões SAML ativas](/assets/images/help/settings/saml-active-sessions.png)
4. Para ver as informações da sessão, clique em **Ver mais**. ![Botão para abrir as informações da sessão do SAML](/assets/images/help/settings/saml-expand-session-details.png)
5. Para revogar uma sessão, clique em **Revogar SAML**. ![Botão para revogar uma sessão SAML](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Observação:** quando você revoga uma sessão, remove a autenticação SAML para essa organização. Para acessar a organização novamente, você precisa fazer logon único por meio do provedor de identidade. Para obter mais informações, consulte "[Sobre a autenticação com SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

### Leia mais

- "[Sobre a autenticação com SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
