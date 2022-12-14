---
title: Informationen zu OAuth App-Zugriffseinschränkungen
intro: Organisationen können wählen, welche {% data variables.product.prodname_oauth_apps %} Zugriff auf ihre Repositorys und andere Ressourcen haben, indem sie {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen aktivieren.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 43e12066ec9381a94fe45187d066300479aa495e
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145134414"
---
## Informationen zu OAuth App-Zugriffseinschränkungen

Wenn {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen aktiviert sind, können Organisationsmitglieder den {% data variables.product.prodname_oauth_app %}-Zugriff auf Organisationsressourcen nicht autorisieren. Organisationsmitglieder können die Genehmigung des Besitzers für {% data variables.product.prodname_oauth_apps %}s beantragen, die sie verwenden möchten, und Organisationsbesitzer erhalten eine Benachrichtigung über ausstehende Anfragen.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Tipp:** Wenn eine Organisation keine {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen eingerichtet hat, kann jede {% data variables.product.prodname_oauth_app %} mit Autorisierung eines Organisationsmitglieds auch auf die privaten Ressourcen der Organisation zugreifen.

{% endtip %}

{% ifversion fpt %} Um die Ressourcen deiner Organisation noch besser zu schützen, kannst du ein Upgrade auf {% data variables.product.prodname_ghe_cloud %} durchführen. Dies beinhaltet Sicherheitsfeatures wie SAML Single Sign-On. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichten

Wenn ein Organisationsinhaber zum ersten Mal {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen einrichtet, trifft Folgendes zu:

- **Anwendungen im Besitz der Organisation** erhalten automatisch Zugriff auf die Ressourcen der Organisation.
- **{% data variables.product.prodname_oauth_apps %}** verlieren sofort den Zugriff auf die Ressourcen der Organisation.
- **Vor Februar 2014 erstellte SSH-Schlüssel** verlieren sofort den Zugriff auf die Ressourcen der Organisation (dazu gehören Benutzer- und Bereitstellungsschlüssel).
- **Von {% data variables.product.prodname_oauth_apps %} im oder nach Februar 2014 erstellte SSH-Schlüssel** verlieren sofort den Zugriff auf die Ressourcen der Organisation.
- **Hook-Auslieferungen aus Repositorys privater Organisationen** werden nicht mehr an nicht genehmigte {% data variables.product.prodname_oauth_apps %} gesendet.
- **API-Zugriff** auf Ressourcen privater Organisationen ist für nicht genehmigte {% data variables.product.prodname_oauth_apps %} nicht verfügbar. Darüber hinaus gibt es keine privilegierten Aktionen zum Erstellen, Aktualisieren oder Löschen für öffentliche Ressourcen der Organisation.
- **Von Benutzern erstellte Hooks und vor Mai 2014 erstellte Hooks** sind davon nicht betroffen.
- **Private Forks von organisationseigenen Repositorys** unterliegen den Zugriffseinschränkungen der Organisation.

## SSH-Zugriffsfehler beheben

Wenn ein vor Februar 2014 erstellter SSH-Schlüssel den Zugriff auf eine Organisation mit aktivierten {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen verliert, schlagen nachfolgende SSH-Zugriffsversuche fehl. Benutzern wird eine Fehlermeldung mit einer URL angezeigt, über die sie den Schlüssel genehmigen oder stattdessen einen vertrauenswürdigen Schlüssel hochladen können.

## webhooks

Wenn einer {% data variables.product.prodname_oauth_app %} Zugriff auf die Organisation gewährt wird, nachdem die Einschränkungen aktiviert wurden, werden alle bereits vorhandenen Webhooks, die von dieser {% data variables.product.prodname_oauth_app %} erstellt wurden, weiter versendet.

Wenn eine Organisation den Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %} entfernt, werden alle bereits vorhandenen Webhooks, die von dieser Anwendung erstellt wurden, nicht mehr versendet (diese Hooks werden deaktiviert, aber nicht gelöscht).

## Zugriffsbeschränkungen wieder aktivieren

Wenn eine Organisation {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen deaktiviert und später wieder aktiviert, erhalten zuvor genehmigte {% data variables.product.prodname_oauth_app %}s automatisch Zugriff auf die Ressourcen der Organisation.

## Weitere Informationsquellen

- [Aktivieren von {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für deine Organisation](/articles/enabling-oauth-app-access-restrictions-for-your-organization)
- [Genehmigen von {% data variables.product.prodname_oauth_apps %} für deine Organisation](/articles/approving-oauth-apps-for-your-organization)
- [Installierte Integrationen deiner Organisation überprüfen](/articles/reviewing-your-organization-s-installed-integrations)
- [Verweigern des Zugriffs auf eine zuvor genehmigte {% data variables.product.prodname_oauth_app %} für deine Organisation](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)
- [Deaktivieren von {% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen für deine Organisation](/articles/disabling-oauth-app-access-restrictions-for-your-organization)
- [Von einer Organisation die Genehmigung für {% data variables.product.prodname_oauth_apps %} anfordern](/articles/requesting-organization-approval-for-oauth-apps)
- [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)
