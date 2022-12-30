---
title: Résolution des problèmes de demande d’autorisation
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Troubleshoot authorization
ms.openlocfilehash: 8706453423298277ed27ac5f950c562db8a42a09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086394'
---
## Application suspendue

Si l’application OAuth que vous avez configurée a été suspendue (à cause du signalement d’un abus, d’un courrier indésirable ou d’une mauvaise utilisation de l’API), GitHub redirige vers l’URL de rappel inscrite à l’aide des paramètres suivants pour résumer l’erreur :

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Pour résoudre les problèmes liés aux applications suspendues, contactez {% data variables.contact.contact_support %}.

## Incohérence de l’URI de redirection

Si vous fournissez un `redirect_uri` qui ne correspond pas à ce que vous avez inscrit dans votre application, GitHub redirige vers l’URL de rappel inscrite avec les paramètres suivants résumant l’erreur :

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Pour corriger cette erreur, fournissez un `redirect_uri` qui correspond à ce que vous avez inscrit ou laissez ce paramètre utiliser la valeur par défaut inscrite dans votre application.

### Accès refusé

Si l’utilisateur refuse l’accès à votre application, GitHub redirige vers l’URL de rappel inscrite avec les paramètres suivants résumant l’erreur :

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

Vous ne pouvez rien faire de plus ici car les utilisateurs sont libres de choisir de ne pas utiliser votre application. Le plus souvent, les utilisateurs ferment simplement la fenêtre ou cliquent sur Précédent dans leur navigateur. Ainsi, vous n’allez probablement jamais voir cette erreur.
