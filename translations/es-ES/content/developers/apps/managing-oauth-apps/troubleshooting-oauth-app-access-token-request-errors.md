---
title: Solucionar problemas para los errores de solicitud en los tokens de acceso a Apps de OAuth
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

{% note %}

**Nota:** Estos ejemplos solo muestran respuestas de JSON.

{% endnote %}

### Credenciales de cliente incorrectas

Si la client\_id y/o el client\_secret que pasas son incorrectos, recibirás este error como respuesta.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Para resolver este error, asegúrate de que tienes las credenciales correctas para tu {% data variables.product.prodname_oauth_app %}. Revisa dos veces la `client_id` y el `client_secret` para asegurarte de que sean correctos y de que se pasen correctamente en {% data variables.product.product_name %}.

### Redirigir una discordancia de URI

Si proporcionas una `redirect_uri` que no empate con lo que registraste con tu {% data variables.product.prodname_oauth_app %}, recibirás este mensaje de error:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Para corregir este error, puedes ya sea proporcionar una `redirect_uri` que coincida con lo que registraste o dejar este parámetro para utilizar aquél predeterminado que se registró con tu aplicación.

### Código de verificación incorrecto

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Si el código de verificación que pasaste es incorrecto, está caduco, o no coincide con lo que recibiste en la primera solicitud de autorización, recibirás este error.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Para resolver este error, inicia el [proceso de autorización de OAuth nuevamente](/apps/building-oauth-apps/authorizing-oauth-apps/) y obtén un código nuevo.
