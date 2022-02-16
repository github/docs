---
title: Autorizar un token de acceso personal para usar con un inicio de sesión único de SAML
intro: 'Para usar un token de acceso personal con una organización que usa el inicio de sesión único de SAML (SSO), primer debes autorizar el token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT con SAML
---

Puedes autorizar un token de acceso personal existente, o [crear un nuevo token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token) y luego autorizarlo.

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Configure SSO**. ![Screenshot of the dropdown menu to configure SSO for a personal access token](/assets/images/help/settings/sso-allowlist-button.png)
4. To the right of the organization you'd like to authorize the token for, click **Authorize**. ![Botón para autorizar el token](/assets/images/help/settings/token-authorize-button.png)

## Leer más

- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Acerca de la autenticación con inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
