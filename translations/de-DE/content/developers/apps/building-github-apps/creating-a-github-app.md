---
title: Erstellen einer GitHub-App
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179087'
---
{% ifversion fpt or ghec %}Informationen zum Verwenden von GitHub-App-Manifesten, mit denen vorkonfigurierte GitHub-Apps erstellt werden können, findest du unter [Erstellen von GitHub Apps aus einem Manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/).{% endif %}

{% ifversion fpt or ghec %} {% note %}

  **Hinweis:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Klicke auf **Neue GitHub-App**.
![Schaltfläche zum Erstellen einer neuen GitHub-App](/assets/images/github-apps/github_apps_new.png)
1. Gib in „GitHub-App-Name“ den Namen deiner App ein.
![Feld für den Namen deiner GitHub-App](/assets/images/github-apps/github_apps_app_name.png)

  Gib deiner App einen klaren und kurzen Namen. Deine App kann nicht denselben Namen wie ein vorhandenes GitHub-Konto haben, es sei denn, es handelt sich um deinen eigenen Benutzer- oder Organisationsnamen. Eine Slugversion des Namens deiner App wird in der Benutzeroberfläche angezeigt, wenn deine Integration eine Aktion ausführt.

1. Gib optional in „Beschreibung“ eine Beschreibung deiner App ein, die Benutzern angezeigt wird.
![Feld für eine Beschreibung deiner GitHub-App](/assets/images/github-apps/github_apps_description.png)
1. Gib in „Homepage-URL“ die vollständige URL für die Website deiner App ein.
![Feld für die Homepage-URL deiner GitHub-App](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. Gib in „Rückruf-URL“ die vollständige URL ein, zu der umgeleitet werden soll, nachdem ein Benutzer die Installation autorisiert hat. Diese URL wird verwendet, wenn deine App Benutzer-zu-Server-Anforderungen identifizieren und autorisieren muss.

  Mit **Rückruf-URL hinzufügen** kannst du maximal 10 zusätzliche Rückruf-URLs bereitstellen.

  ![Schaltfläche für „Rückruf-URL hinzufügen“ und Feld für Rückruf-URL](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. Gib in „Rückruf-URL für Benutzerautorisierung“ die vollständige URL ein, zu der umgeleitet werden soll, nachdem ein Benutzer eine Installation autorisiert hat. Diese URL wird verwendet, wenn deine App Benutzer-zu-Server-Anforderungen identifizieren und autorisieren muss.
![Feld für die Rückruf-URL für Benutzerautorisierung deiner GitHub-App](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. Um die Sicherheit deiner App zu verbessern, verwendet deine App standardmäßig ablaufende Benutzerberechtigungstoken. Um die Verwendung ablaufender Benutzertoken zu deaktivieren, musst du „Benutzerautorisierungs-Token ablaufen lassen“ deaktivieren. Weitere Informationen zum Einrichten eines Aktualisierungstokenflows und der Vorteile des Ablaufs von Benutzertoken findest du unter [Aktualisieren von Benutzer-zu-Server-Zugriffstoken](/apps/building-github-apps/refreshing-user-to-server-access-tokens/).
  ![Option zum Anmelden zu ablaufenden Benutzertoken beim Einrichten von GitHub-Apps](/assets/images/github-apps/expire-user-tokens-selection.png)
1. Wenn deine App Benutzer mit dem OAuth-Flow autorisiert, kannst du **Während der Installation „Benutzerautorisierung anfordern (OAuth)“ auswählen** auswählen, damit die Benutzer die App autorisieren können, wenn sie sie installieren, und dabei einen Schritt sparen. Wenn du diese Option auswählst, ist die „Setup-URL“ nicht mehr verfügbar, und Benutzer werden nach der Installation der App zu deiner „Rückruf-URL für Benutzerautorisierung“ umgeleitet. Weitere Informationen findest du unter [Autorisieren von Benutzern während der Installation](/apps/installing-github-apps/#authorizing-users-during-installation).
![Anfordern der Benutzerautorisierung während der Installation](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. Wenn deine GitHub-App den Geräteflow verwendet, um Benutzer zu identifizieren und zu autorisieren, klicke auf **Geräteflow aktivieren**. Weitere Informationen zum Geräteflow findest du unter [Autorisieren von OAuth-Apps](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
  ![Screenshot: Feld zum Aktivieren des Geräteflows](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. Wenn nach der Installation zusätzliche Setups erforderlich sind, füge eine „Setup-URL“ hinzu, um Benutzer dorthin umzuleiten, nachdem sie deine App installiert haben.
![Feld für die Setup-URL deiner GitHub-App](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Hinweis:** Wenn du im vorherigen Schritt **Während der Installation „Benutzerautorisierung anfordern (OAuth)“ auswählen** ausgewählt hast, ist dieses Feld nicht mehr verfügbar, und die Benutzer werden nach der Installation der App zur „Rückruf-URL für Benutzerautorisierung“ umgeleitet.

  {% endnote %}

1. Gib in „Webhook-URL“ die URL ein, an die die Ereignisse GEPOSTET werden sollen. Jede App erhält einen eigenen Webhook, der dich jedes Mal benachrichtigt, wenn die App installiert oder geändert wird, sowie über alle anderen Ereignisse, die die App abonniert hat.
![Feld für die Webhook-URL deiner GitHub-App](/assets/images/github-apps/github_apps_webhook_url.png)

1. Gib optional in „Webhook-Geheimnis“ ein optionales geheimes Token ein, das zum Sichern deines Webhooks verwendet wird.
![Feld zum Hinzufügen eines geheimen Tokens für deinen Webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Hinweis:** Es wird dringend empfohlen, ein geheimes Token festzulegen. Weitere Informationen findest du unter [Sichern deiner Webhooks](/webhooks/securing/).

  {% endnote %}

1. Wähle in „Berechtigungen“ die Berechtigungen aus, die deine App anfordert. Verwende für jeden Berechtigungstyp das Dropdownmenü, und klicke auf **Schreibgeschützt**, **Lesen & schreiben** oder **Kein Zugriff**.
![Verschiedene Berechtigungen für deine GitHub-App](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. Wähle in „Ereignisse abonnieren“ die Ereignisse aus, die deine App empfangen soll.
1. Um auszuwählen, wo die App installiert werden kann, wähle entweder **Nur auf diesem Konto** oder **Beliebiges Konto** aus. Weitere Informationen zu Installationsoptionen findest du unter [Eine GitHub App öffentlich oder privat machen](/apps/managing-github-apps/making-a-github-app-public-or-private/).
![Installationsoptionen für deine GitHub-App](/assets/images/github-apps/github_apps_installation_options.png)
1. Klicke auf **GitHub-App erstellen**.
![Schaltfläche zum Erstellen deiner GitHub-App](/assets/images/github-apps/github_apps_create_github_app.png)
