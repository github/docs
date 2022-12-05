---
title: Résolution des problèmes de demande de jeton d’accès pour application OAuth
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086393'
---
{% note %}

**Remarque :** ces exemples montrent uniquement des réponses JSON.

{% endnote %}

## Informations d’identification du client incorrectes

Si le client\_id ou le client\_secret que vous transmettez sont incorrects, vous recevrez cette réponse d’erreur.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Pour résoudre cette erreur, assurez-vous de disposer des informations d’identification appropriées pour votre {% data variables.product.prodname_oauth_app %}. Vérifiez soigneusement le `client_id` et le `client_secret` pour vous assurer qu’ils sont corrects et transmis correctement à {% data variables.product.product_name %}.

## Incohérence d’URI de redirection

Si vous fournissez un `redirect_uri` erreur ne correspondant pas à ce que vous avez inscrit auprès de {% data variables.product.prodname_oauth_app %}, vous recevrez ce message d’erreur :

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Pour corriger cette erreur, fournissez un `redirect_uri` correspondant à ce que vous avez inscrit ou laissez ce paramètre pour utiliser la valeur par défaut inscrite avec votre application.

## Code de vérification erroné

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Si le code de vérification que vous transmettez est incorrect, expiré ou ne correspond pas à ce que vous avez reçu dans la première demande d’autorisation, vous recevrez l’erreur suivante.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Pour la résoudre, démarrez à nouveau le [processus d’autorisation OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/) pour obtenir un nouveau code.
