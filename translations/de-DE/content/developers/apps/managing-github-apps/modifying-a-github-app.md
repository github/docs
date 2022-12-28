---
title: Ändern einer GitHub-App
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885860'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Ändere in „Grundlegende Informationen“ die gewünschten GitHub-App-Informationen.
![Abschnitt „Grundlegende Informationen“ für deine GitHub-App](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Wenn deine GitHub-App den Geräteflow verwendet, um Benutzer*innen zu identifizieren und zu autorisieren, klicke auf **Geräteflow aktivieren**. Weitere Informationen zum Geräteflow findest du unter [Autorisieren von OAuth-Apps](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow).
  ![Screenshot: Feld zum Aktivieren des Geräteflows](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Klicke auf **Änderungen speichern**.
![Schaltfläche zum Speichern von Änderungen für deine GitHub-App](/assets/images/github-apps/github_apps_save_changes.png)
