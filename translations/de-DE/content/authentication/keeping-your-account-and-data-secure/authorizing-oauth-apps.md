---
title: Autorisieren von OAuth-Apps
intro: 'Du kannst deine {% data variables.product.product_name %}-Identität über OAuth mit Drittanbieteranwendungen verbinden. Wenn du eine {% data variables.product.prodname_oauth_app %} autorisierst, solltest du sicherstellen, dass die Anwendung vertrauenswürdig ist, und überprüfen, von wem sie entwickelt wurde und auf welche Daten sie zugreifen will.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184020'
---
Wenn eine {% data variables.product.prodname_oauth_app %} dich anhand deines Kontos bei {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} identifizieren möchte, wird eine Seite mit den Kontaktdaten des Anwendungsentwicklers und einer Liste der Daten angezeigt, die angefordert werden.

{% ifversion fpt or ghec %}

{% tip %}

**Tipp:** Du musst [deine E-Mail-Adresse überprüfen](/articles/verifying-your-email-address), bevor du eine {% data variables.product.prodname_oauth_app %} autorisieren kannst.

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %}-Zugriff

{% data variables.product.prodname_oauth_apps %} kann *Lese-* oder *Schreibzugriff* auf deine {% data variables.product.product_name %}-Daten haben.

- **Lesezugriff** ermöglicht einer App nur, deine Daten *anzuzeigen*.
- Bei **Schreibzugriff** kann eine App deine Daten *ändern*.

{% tip %}

**Tipp:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### Informationen zu OAuth-Scopes

*Bereiche* sind benannte Gruppen von Berechtigungen, die eine {% data variables.product.prodname_oauth_app %} anfordern kann, um auf öffentliche und nicht öffentliche Daten zuzugreifen.

Wenn du eine {% data variables.product.prodname_oauth_app %} verwenden möchtest, die in {% data variables.product.product_name %} integriert ist, teilt die App dir mit, welche Art von Zugriff auf deine Daten benötigt wird. Wenn du der App Zugriff erteilst, kann sie Aktionen für dich ausführen, z. B. Daten lesen oder ändern. Wenn du beispielsweise eine App verwenden möchtest, mit der der Geltungsbereich `user:email` angefordert wird, hat die App schreibgeschützten Zugriff auf deine privaten E-Mail-Adressen. Weitere Informationen findest du unter „[Informationen zu Geltungsbereichen für {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)“.

{% tip %}

**Hinweis:** Derzeit kannst du Quellcode-Zugriff nicht in einen Lesezugriff ändern.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Arten der angeforderten Daten

{% data variables.product.prodname_oauth_apps %} kann mehrere Arten von Daten anfordern.

| Datentyp | BESCHREIBUNG |
| --- | --- |
| Commit-Status | Du kannst einer App Zugriff gewähren, um deinen Commit-Status zu melden. Mit dem Commit-Status-Zugriff können Apps anhand eines bestimmten Commits ermitteln, ob ein Build erfolgreich ist. Apps erhalten keinen Zugriff auf deinen Code, aber sie können Statusinformationen für einen bestimmten Commit lesen und bearbeiten. |
| Bereitstellungen | Mit dem Zugriff auf den Bereitstellungsstatus können Apps anhand eines bestimmten Commits für öffentliche und private Repositorys ermitteln, ob eine Bereitstellung erfolgreich ist. Apps können nicht auf deinen Code zugreifen. |
| Gists | [Gist](https://gist.github.com)-Zugriff ermöglicht Apps, sowohl öffentliche als auch geheime Gists zu lesen oder zu schreiben. |
| Hooks | [Webhooks](/webhooks)-Zugriff ermöglicht Apps das Lesen oder Schreiben von Hook-Konfigurationen in Repositorys, die du verwaltest. |
| Benachrichtigungen | Der Benachrichtigungszugriff erlaubt es Apps, deine {% data variables.product.product_name %}-Benachrichtigungen wie Kommentare zu Issues und Pull Requests zu lesen. Die Apps können jedoch auf keine Elemente in deinen Repositorys zugreifen. |
| Organisationen und Teams | Mit dem Organisations- und Teamzugriff können Apps auf Organisations- und Teammitglieder zugreifen und sie verwalten. |
| Persönliche Benutzerdaten | Zu Benutzerdaten gehören die Angaben in deinem Benutzerprofil, beispielsweise dein Name, deine E-Mail-Adresse und dein Standort. |
| Repositorys | Repositoryinformationen umfassen die Namen der Mitarbeiter, die von dir erstellten Branches und die effektiven Dateien in deinem Repository. Apps können den Zugriff für öffentliche oder private Repositorys auf benutzerweiter Ebene anfordern. |
| Repository-Löschung | Apps können das Löschen von Repositorys anfordern, die du verwaltest, aber sie haben keinen Zugriff auf deinen Code. |{% ifversion projects-oauth-scope %}
| Projekte | Zugriff auf Benutzer und Organisation {% data variables.projects.projects_v2 %}. Apps können entweder Lese-/Schreibzugriff oder schreibgeschützten Zugriff anfordern. |{% endif %}

## Aktualisierte Berechtigungen anfordern

Wenn {% data variables.product.prodname_oauth_apps %} neue Zugriffsrechte anfordern, informiere sie über die Unterschiede zwischen den aktuellen und den neuen Berechtigungen.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} und Organisationen

Wenn du eine {% data variables.product.prodname_oauth_app %} für dein persönliches Konto autorisierst, siehst du auch, wie sich die Autorisierung auf jede Organisation auswirkt, bei der du Mitglied bist.

- **Bei Organisationen *mit* {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen kannst du anfordern, dass Organisationsadministratoren die Anwendung für die Verwendung in dieser Organisation genehmigen.** Wenn die Organisation die Anwendung nicht genehmigt, kann sie nur auf die öffentlichen Ressourcen der Organisation zugreifen. Wenn du ein Organisationsadministrator bist, kannst du [die Anwendung selbst genehmigen](/articles/approving-oauth-apps-for-your-organization).

- **Bei Organisationen *ohne* {% data variables.product.prodname_oauth_app %}-Zugriffseinschränkungen wird die Anwendung automatisch für den Zugriff auf die Ressourcen dieser Organisation autorisiert.** Aus diesem Grund solltest du vorsichtig sein, für welche {% data variables.product.prodname_oauth_apps %} du den Zugriff auf deine persönlichen Kontoressourcen sowie alle Organisationsressourcen genehmigst.

Wenn du zu Organisationen gehörst, in denen das einmalige Anmelden (Single Sign-On, SSO) für SAML aktiviert ist, und du in der Vergangenheit durch Authentifizierung über SAML eine verknüpfte Identität für diese Organisation erstellt hast, benötigst du für jede Organisation eine aktive SAML-Sitzung, wenn du eine {% data variables.product.prodname_oauth_app %} autorisierst.

{% note %}

**Hinweis:** Wenn beim Zugriff auf eine durch SAML geschützte Organisation Probleme mit einer autorisierten {% data variables.product.prodname_oauth_app %} oder {% data variables.product.prodname_github_app %} auftreten, musst du die App möglicherweise von deiner Seite [Autorisierte {% data variables.product.prodname_github_apps %}](https://github.com/settings/applications) oder [Autorisierte {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/apps/authorizations) widerrufen, die Organisation besuchen, um dich zu authentifizieren und eine aktive SAML-Sitzung einzurichten, und dann versuchen, die App erneut zu autorisieren, indem du darauf zugreifst.

{% endnote %}

## Weiterführende Themen

- "[Informationen zu {% data variables.product.prodname_oauth_app %}Zugriffseinschränkungen](/articles/about-oauth-app-access-restrictions)"
- „[Autorisieren von GitHub-Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)“
- "[{% data variables.product.prodname_marketplace %}-Support](/articles/github-marketplace-support)"

{% endif %}
