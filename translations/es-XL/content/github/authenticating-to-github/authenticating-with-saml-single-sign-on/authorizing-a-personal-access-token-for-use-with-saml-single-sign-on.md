---
title: Autorizar un token de acceso personal para usar con un inicio de sesión único de SAML
intro: 'Para usar un token de acceso personal con una organización que usa el inicio de sesión único de SAML (SSO), primer debes autorizar el token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---
Puedes autorizar un token de acceso personal existente, o [crear un nuevo token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token) y luego autorizarlo.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Junto al token que deseas autorizar, haz clic en **Enable SSO** (Habilitar SSO) o **Disable SSO** (Deshabilitar SSO). ![Botón para autorizar el token SSO](/assets/images/help/settings/sso-allowlist-button.png)
4. Busca la organización para la que deseas autorizar el token de acceso.
4. Click **Authorize**. ![Botón para autorizar el token](/assets/images/help/settings/token-authorize-button.png)

### Leer más

- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Acerca de la autenticación con inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
