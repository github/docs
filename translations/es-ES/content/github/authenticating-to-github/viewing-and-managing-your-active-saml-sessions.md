---
title: Ver y administrar tus sesiones de SAML activas
intro: Puedes ver y revocar tus sesiones de SAML activas en tus parámetros de seguridad.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
versions:
  free-pro-team: '*'
---

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Debajo de "Sesiones" puedes ver tus sesiones activas de SAML. ![Lista de sesiones de SAML activas](/assets/images/help/settings/saml-active-sessions.png)
4. Para ver los detalles de la sesión, da clic en **Ver más**. ![Botón para abrir los detalles de la sesión de SAML](/assets/images/help/settings/saml-expand-session-details.png)
5. Para revocar una sesión, da clic en **Revocar SAML**. ![Botón para revocar una sesión de SAML](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Nota:** Cuando revocas una sesión, puedes eliminar tu autenticación de SAML para esa organización. Para volver a acceder a la organización, tendrás que hacer un inicio de sesión único a través de tu proveedor de identidad. Para obtener más información, consulta "[Acerca de la autenticación con SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}

### Further reading

- "[Acerca de la autenticación con SAML SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"