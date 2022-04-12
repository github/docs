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

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Junto al token que te gustaría autorizar, haz clic en **Configurar el SSO**. ![Captura de pantalla del menú desplegable para configurar el SSO par aun token de acceso personal](/assets/images/help/settings/sso-allowlist-button.png)
4. A la derecha de la organización para la cual te gustaría autorizar el token, haz clic en **Autorizar**. ![Botón para autorizar el token](/assets/images/help/settings/token-authorize-button.png)

## Leer más

- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[Acerca de la autenticación con inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
