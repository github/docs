---
title: Problembehandlung bei OAuth App-Zugriffstoken-Anforderungsfehlern
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089796'
---
{% note %}

**Hinweis**: Diese Beispiele zeigen nur JSON-Antworten.

{% endnote %}

## Falsche Clientanmeldeinformationen

Wenn die client\_id und/oder das client\_secret, falsch sind, die du übergibst, erhältst du diese Fehlermeldung.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Um diesen Fehler zu beheben, stelle sicher, dass du über die richtigen Anmeldeinformationen für deine {% data variables.product.prodname_oauth_app %} verfügst. Überprüfe `client_id` und `client_secret` genau, um sicherzustellen, dass sie richtig sind und ordnungsgemäß an {% data variables.product.product_name %} übergeben werden.

## Konflikt des Umleitungs-URIs

Wenn du einen `redirect_uri` angibst, der nicht der Angabe übereinstimmt, die du bei der {% data variables.product.prodname_oauth_app %} registriert hast, erhältst du diese Fehlermeldung:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Um diesen Fehler zu beheben, gib entweder einen `redirect_uri` an, der mit dem URI übereinstimmt, den du registriert hast, oder lasse diesen Parameter aus, um die Standardangabe zu verwenden, die mit deiner Anwendung registriert wurde.

## Fehlerhafter Überprüfungscode

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Wenn der von dir übergebene Überprüfungscode falsch bzw. abgelaufen iat oder nicht mit dem übereinstimmt, was du in der ersten Anforderung zur Autorisierung erhalten hast, erhältst du diesen Fehler.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Um diesen Fehler zu beheben, starte den [OAuth-Autorisierungsprozess erneut](/apps/building-oauth-apps/authorizing-oauth-apps/), und rufe einen neuen Code ab.
