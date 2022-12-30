---
title: Einschränken von Interaktionen in deiner Organisation
intro: 'Du kannst für bestimmte Benutzer*innen in allen öffentlichen Repositorys, die deiner Organisation gehören, einen Zeitraum mit eingeschränkter Aktivität erzwingen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066682'
---
## Informationen zu temporären Interaktionseinschränkungen

Das Einschränken von Interaktionen in deiner Organisation ermöglicht temporäre Interaktionseinschränkungen für alle öffentlichen Repositorys, die im Besitz der Organisation sind. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Nach Ablauf der Einschränkung können die Benutzer*innen ihre normalen Aktivitäten in den öffentlichen Repositorys deiner Organisation fortsetzen.

{% data reusables.community.types-of-interaction-limits %}

Mitglieder der Organisation sind von keiner der Limittypen betroffen.

Wenn du Einschränkungen für die gesamte Organisation aktivierst, kannst du keine Beschränkung der Interaktionen für einzelne Repositorys aktivieren oder deaktivieren. Weitere Informationen zur Einschränkung von Aktivitäten für ein einzelnes Repository findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).

Organisationsbesitzer können auch Benutzer für eine bestimmte Zeitdauer blockieren. Wenn die Sperre ausläuft, wird der Benutzer automatisch entsperrt. Weitere Informationen findest du unter [Sperren von Benutzer*innen für deine Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).

## Einschränken von Interaktionen in deiner Organisation


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Für Besitzer von Organisationen:_ Wähle im Abschnitt „Zugriff“ auf der Seitenleiste **{% octicon "report" aria-label="The report icon" %}-Moderation** aus, und klicke dann auf **Interaktionseinschränkungen**.

   _Für Organisationsmoderatoren:_ Klicke in der Seitenleiste auf **Interaktionseinschränkungen**.

{% data reusables.community.set-interaction-limit %} ![Optionen für temporäre Interaktionseinschränkungen](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Weiterführende Themen
- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Verwalten des Zugriffs einer Person auf ein Repository einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Berechtigungsebenen für ein Repository eines persönlichen Kontos](/articles/permission-levels-for-a-user-account-repository)
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Verwalten von Moderatoren in deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
