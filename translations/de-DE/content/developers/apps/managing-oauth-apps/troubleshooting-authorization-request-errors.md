---
title: Problembehandlung bei Autorisierungsanforderungsfehlern
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885324'
---
## Anwendung angehalten

Wenn die OAuth-App, die du eingerichtet hast, angehalten wurde (wegen gemeldetem Missbrauch, Spam oder einer Fehlverwendung der API), führt GitHub mit den folgenden Parametern zur Zusammenfassung des Fehlers eine Umleitung an die registrierte Rückruf-URL durch:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Um Probleme mit angehaltenen Anwendungen zu beheben, wende dich an {% data variables.contact.contact_support %}.

## Konflikt des Umleitungs-URIs

Wenn du einen `redirect_uri` angibst, der nicht mit dem mit deiner Anwendung registrierten übereinstimmt, führt GitHub mit den folgenden Parametern zur Zusammenfassung des Fehlers eine Umleitung an die registrierte Rückruf-URL durch:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Um diesen Fehler zu beheben, gib entweder einen `redirect_uri` an, der mit dem URI übereinstimmt, den du registriert hast, oder lass diesen Parameter aus, um die Standardangabe zu verwenden, die mit deiner Anwendung registriert wurde.

### Zugriff verweigert.

Wenn der Benutzer den Zugriff auf deine Anwendung abgelehnt hat, führt GitHub mit den folgenden Parametern zur Zusammenfassung des Fehlers eine Umleitung an die registrierte Rückruf-URL durch:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

Hier kannst du nichts tun, da es den Nutzern freisteht, deine Anwendung nicht zu verwenden. In den meisten Fällen schließen die Benutzer das Fenster einfach oder wählen im Browser „Zurück“ aus, sodass du diesen Fehler wahrscheinlich nie sehen wirst.
