---
title: Autorizar una clave SSH para usar con un inicio único de SAML
intro: 'Para usar una clave SSH con una organización que usa un inicio de sesión único (SSO) de SAML, primero debes autorizar la clave.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---

Puedes autorizar una clave SSH existente, o crear una nueva clave SSH, y luego autorizarla. Para más información sobre la creación de una nueva clave SSH, consulta "[Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% note %}

**Nota:** Si tu autorización de clave SSH es revocada por una organización, no podrás volver a autorizar la misma clave. Deberás crear una nueva clave SSH y autorizarla. Para más información sobre la creación de una nueva clave SSH, consulta "[Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Junto a la clave SSH que deseas autorizar, haz clic en **Enable SSO** (Habilitar SSO) o **Disable SSO** (Deshabilitar SSO). ![Botón para autorizar el token SSO](/assets/images/help/settings/ssh-sso-button.png)
4. Busca la organización para la que deseas autorizar la clave SSH.
5. Click **Authorize**. ![Botón para autorizar el token](/assets/images/help/settings/ssh-sso-authorize.png)

### Leer más

- "[Comprobar claves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Acerca de la autenticación con inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
