---
title: Actualisation des jetons d’accès utilisateur à serveur
intro: 'Pour appliquer une rotation régulière des jetons et réduire l’impact d’un jeton compromis, vous pouvez configurer votre {% data variables.product.prodname_github_app %} afin d’utiliser des jetons d’accès utilisateur ayant un délai d’expiration.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064409'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## À propos des jetons d’accès utilisateur ayant un délai d’expiration

Pour appliquer une rotation régulière des jetons et réduire l’impact d’un jeton compromis, vous pouvez configurer votre {% data variables.product.prodname_github_app %} afin d’utiliser des jetons d’accès utilisateur ayant un délai d’expiration. Pour plus d’informations sur l’envoi de requêtes utilisateur à serveur, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

Les jetons utilisateur ayant un délai d’expiration expirent au bout de 8 heures. Quand vous recevez un nouveau jeton d’accès utilisateur à serveur, la réponse contient également un jeton d’actualisation, qui peut être échangé contre un nouveau jeton utilisateur et un jeton d’actualisation. Les jetons d’actualisation sont valides pendant 6 mois. 

## Renouvellement d’un jeton d’utilisateur avec un jeton d’actualisation

Pour renouveler un jeton d’accès utilisateur à serveur ayant un délai d’expiration, vous pouvez échanger `refresh_token` contre un nouveau jeton d’accès et `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

Cette demande de rappel vous envoie un nouveau jeton d’accès et un nouveau jeton d’actualisation.  Cette demande de rappel est similaire à la requête OAuth que vous utilisez pour échanger un `code` temporaire contre un jeton d’accès. Pour plus d’informations, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github) » et « [Informations de base sur l’authentification](/rest/guides/basics-of-authentication#providing-a-callback) ».

### Paramètres

Nom | Type | Description
-----|------|------------
`refresh_token` | `string` | **Obligatoire.** Jeton généré quand le propriétaire de l’{% data variables.product.prodname_github_app %} active les jetons ayant un délai d’expiration et émet un nouveau jeton d’accès utilisateur.
`grant_type` | `string` | **Obligatoire.** La valeur doit être `refresh_token` (imposée par la spécification OAuth).
`client_id` | `string` | **Obligatoire.** ID client de votre {% data variables.product.prodname_github_app %}.
`client_secret` | `string`   | **Obligatoire.** Secret client de votre {% data variables.product.prodname_github_app %}.

### response

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## Configuration de jetons utilisateur ayant un délai d’expiration pour une application GitHub existante

Vous pouvez activer ou désactiver les jetons d’autorisation utilisateur à serveur ayant un délai d’expiration à partir des paramètres de votre {% data variables.product.prodname_github_app %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Cliquez sur **Modifier** à côté de l’{% data variables.product.prodname_github_app %} de votre choix.
  ![Paramètres de modification d’une application GitHub](/assets/images/github-apps/edit-test-app.png)
5. Dans la barre latérale gauche, cliquez sur **Fonctionnalités facultatives**.
   ![Onglet Fonctionnalités facultatives](/assets/images/github-apps/optional-features-option.png) 
6. À côté de « Expiration du jeton utilisateur à serveur », cliquez sur **Accepter** ou **Refuser**. L’application de ce paramètre peut prendre quelques secondes.

## Refus des jetons ayant un délai d’expiration pour les nouvelles applications GitHub

Quand vous créez une {% data variables.product.prodname_github_app %}, votre application utilise par défaut des jetons d’accès utilisateur à serveur ayant un délai d’expiration.

Si vous souhaitez que votre application utilise des jetons d’accès utilisateur à serveur n’ayant pas de délai d’expiration, désélectionnez « Faire expirer les jetons d’autorisation utilisateur » dans la page des paramètres de l’application.

![Option permettant d’accepter les jetons utilisateur ayant un délai d’expiration durant la configuration des applications GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)

Les {% data variables.product.prodname_github_apps %} qui utilisent des jetons d’autorisation utilisateur à serveur sont uniquement affectées par ce nouveau flux quand le propriétaire de l’application active les jetons utilisateur ayant un délai d’expiration pour son application.

L’activation des jetons utilisateur ayant un délai d’expiration pour les {% data variables.product.prodname_github_apps %} nécessite le passage des utilisateurs par le flux OAuth afin de permettre la réémission de nouveaux jetons utilisateur expirant après un délai de 8 heures. Il est également nécessaire d’envoyer une requête avec le jeton d’actualisation pour obtenir un nouveau jeton d’accès et un nouveau jeton d’actualisation. Pour plus d’informations, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

## Pour aller plus loin

- « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats) »

