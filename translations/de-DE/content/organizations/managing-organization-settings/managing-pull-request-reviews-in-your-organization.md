---
title: Verwalten von Pull Request-Reviews in deiner Organisation
intro: 'Du kannst einschränken, welche Benutzer in deiner Organisation Änderungen an einem Pull Request genehmigen oder anfordern können.'
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125721'
---
## Informationen zu Grenzwerten für Code Reviews

Standardmäßig können Benutzer in öffentlichen Repositorys Reviews übermitteln, die einen Pull Review genehmigen oder Änderungen anfordern.

Du kannst einschränken, wer Änderungen an Pull Requests in öffentlichen Repositorys deiner Organisation genehmigen oder anfordern kann. Wenn du Grenzwerte für Code Reviews aktivierst, können alle Personen Pull Requests in deinem öffentlichen Repository kommentieren, aber nur Personen, die über expliziten Zugriff auf ein Repository verfügen, können Pull Requests genehmigen oder Änderungen anfordern.

Du kannst Grenzwerte für Code Reviews auch für einzelne Repositorys aktivieren. Wenn du Grenzwerte für deine Organisation aktivierst, setzt du damit alle Grenzwerte für einzelne Repositorys außer Kraft, die der Organisation gehören. Weitere Informationen findest du unter [Verwalten von Pull Request-Reviews in deinem Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository).

## Aktivieren von Grenzwerten für Code Reviews

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Zugriff“ auf der Randleiste auf **{% octicon "report" aria-label="The report icon" %} Moderation**.
1. Klicke unter „{% octicon "report" aria-label="The report icon" %} Moderation“ auf **Grenzwerte für Code Reviews**.
![Screenshot des Randleistenelements für Grenzwerte für Code Reviews in Organisationen](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Überprüfe die Informationen auf dem Bildschirm. Klicke auf **Reviews für alle Repositorys einschränken**, um Reviews auf Personen mit expliziten Zugriff zu beschränken, oder klicke auf **Grenzwerte für Reviews aus allen Repositorys entfernen**, um die Grenzwerte aus allen öffentlichen Repositorys in deiner Organisation zu entfernen.
![Screenshot der Einstellungen für Grenzwerte für Code Reviews in Organisationen](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
