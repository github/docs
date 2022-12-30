---
title: Solucionar problemas para los errores de solicitud en los tokens de acceso a Apps de OAuth
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Troubleshoot token request
ms.openlocfilehash: 7764d0e1f23a3d2dac841412ea0120487c8f6560
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092163'
---
{% note %}

**Nota:** Estos ejemplos solo muestran respuestas JSON.

{% endnote %}

## Credenciales de cliente incorrectas

Si los valores de client\__id y/o client\_secret que pasas son incorrectos, recibirás este error como respuesta.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Para resolver este error, asegúrate de que tienes las credenciales correctas para tu {% data variables.product.prodname_oauth_app %}. Comprueba `client_id` y `client_secret` para asegurarte de que son correctos y que se pasan correctamente a {% data variables.product.product_name %}.

## Redirigir una discordancia de URI

Si proporcionas un elemento `redirect_uri` que no coincida con lo que registraste con tu {% data variables.product.prodname_oauth_app %}, recibirás este mensaje de error:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Para corregir este error, puedes proporcionar un valor `redirect_uri` que coincida con lo que hayas registrado, o bien excluir este parámetro y usar el predeterminado que hayas registrado con la aplicación.

## Código de verificación incorrecto

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Si el código de verificación que pasaste no es correcto, ha expirado, o no coincide con lo que recibiste en la primera solicitud de autorización, recibirás este error.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Para resolver este error, vuelve a iniciar el [proceso de autorización de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/) y obtén un nuevo código.
