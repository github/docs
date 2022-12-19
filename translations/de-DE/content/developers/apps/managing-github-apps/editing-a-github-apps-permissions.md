---
title: Bearbeiten der Berechtigungen einer GitHub-App
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089891'
---
{% note %}

**Hinweis:** Aktualisierte Berechtigungen einer Installation werden erst wirksam, wenn der Besitzer des Kontos oder der Organisation die Änderungen genehmigt. Du kannst den [InstallationEvent-Webhook](/webhooks/event-payloads/#installation) verwenden, um herauszufinden, wann Personen neue Berechtigungen für deine App akzeptieren. Eine Ausnahme sind [Berechtigungen auf Benutzerebene](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), für die der Kontobesitzer Berechtigungsänderungen nicht genehmigen muss.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Wähle die GitHub-App aus, deren Berechtigungen du ändern möchtest.
![App-Auswahl](/assets/images/github-apps/github_apps_select-app.png)
5. Klicke auf der linken Randleiste auf **Berechtigungen und Webhooks**.
![Berechtigungen und Webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Ändere die gewünschten Berechtigungen. Wähle für jeden Berechtigungstyp entweder „Schreibgeschützt“, „Lesen und schreiben“ oder „Kein Zugriff“ in der Dropdownliste aus.
![Auswahlmöglichkeiten für Berechtigungen für deine GitHub-App](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. Wähle in „Ereignisse abonnieren“ alle Ereignisse aus, die deine App abonnieren soll.
![Auswahlmöglichkeiten für Berechtigungen für das Abonnieren von Ereignissen durch deine GitHub-App](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Füge optional in „Hinweis an Benutzer*Innen hinzufügen“ einen Hinweis hinzu, der deinen Benutzer*innen mitteilt, warum du die Berechtigungen änderst, die deine GitHub-App anfordert.
![Eingabefeld zum Hinzufügen eines Hinweises für Benutzer*innen, der erklärt, warum die Berechtigungen deine GitHub-App geändert wurden](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Klicke auf **Änderungen speichern**.
![Schaltfläche zum Speichern von Berechtigungsänderungen](/assets/images/github-apps/github_apps_save_changes.png)
