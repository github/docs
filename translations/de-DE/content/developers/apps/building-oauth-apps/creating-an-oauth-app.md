---
title: Erstellen einer OAuth-App
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180343'
---
{% ifversion fpt or ghec %} {% note %}

  **Hinweis:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. Klicke auf **Neue OAuth-App**.
![Schaltfläche zum Erstellen einer neuen OAuth-App](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Hinweis**: Wenn du zuvor noch keine App erstellt hast, zeigt diese Schaltfläche den Text **Neue Anwendung registrieren**.

  {% endnote %}
6. Gib unter „Anwendungsname“ den Namen deiner App ein.
![Feld für den Namen deiner App](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Warnung**: Verwende nur Informationen in deiner OAuth-App, die du als öffentlich betrachtest. Vermeide beim Erstellen einer OAuth-App vertrauliche Daten, z. B. interne URLs.

  {% endwarning %}

7. Gib unter „Homepage-URL“ die vollständige URL der Website deiner App ein.
![Feld für die Homepage-URL deiner App](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Gib optional unter „Anwendungsbeschreibung“ eine Beschreibung deiner App ein, die Benutzer*innen angezeigt wird.
![Feld für eine Beschreibung deiner App](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Gib unter „Autorisierungsrückruf-URL“ die Rückruf-URL deiner App ein.
![Feld für die Autorisierungsrückruf-URL deiner App](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **Hinweis**: OAuth-Apps können nicht über mehrere Rückruf-URLs verfügen, im Gegensatz zu {% data variables.product.prodname_github_apps %}.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. Wenn deine OAuth-App Benutzer*innen über den Geräteflow identifizieren und autorisieren wird, klicke auf **Geräteflow aktivieren**. Weitere Informationen zum Geräteflow findest du unter [Autorisieren von OAuth-Apps](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
  ![Screenshot: Feld zum Aktivieren des Geräteflows](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  Klicke auf **Anwendung registrieren**.
![Schaltfläche zum Registrieren einer Anwendung](/assets/images/oauth-apps/oauth_apps_register_application.png)
