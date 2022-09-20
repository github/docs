---
title: Solución de problemas para los errores de solicitud de autorización
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
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885328'
---
## Aplicación suspendida

Si la App de OAuth que configuraste se suspendió (debido a que reportaron abuso, spam, o mal uso de la API), GitHub te redirigirá a la URL de rellamado registrada utilizando los siguientes parámetros para resumir el error:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Para resolver los problemas de suspensión de aplicaciones, por favor contacta a {% data variables.contact.contact_support %}.

## Redirigir una discordancia de URI

Si proporciona un valor `redirect_uri` que no coincide con lo que ha registrado con la aplicación, GitHub le redirigirá a la URL de devolución de llamada registrada con los siguientes parámetros que resumen el error:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Para corregir este error, puede proporcionar un valor `redirect_uri` que coincida con lo que haya registrado, o bien excluir este parámetro y usar el predeterminado que haya registrado con la aplicación.

### Acceso denegado

Si el usuario rechaza el acceso a la aplicación, GitHub le redirigirá a la URL de devolución de llamada registrada con los siguientes parámetros que resumen el error:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

No puede hacer nada al respecto, ya que los usuarios tienen la libertad de elegir si no quieren utilizar la aplicación. Lo más común es que los usuarios simplemente cierren la ventana o presionen "Atrás" en el explorador, por lo que es probable que nunca vea este error.
