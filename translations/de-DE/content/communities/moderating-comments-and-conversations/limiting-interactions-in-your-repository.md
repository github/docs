---
title: Einschränken von Interaktionen in deinem Repository
intro: Du kannst für bestimmte Benutzer*innen vorübergehend beschränkte Aktivitäten in einem öffentlichen Repository erzwingen.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067250'
---
## Informationen zu temporären Interaktionseinschränkungen

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Nachdem die Dauer deiner Beschränkung überschritten wurde, können Benutzer normale Aktivitäten in deinem Repository fortsetzen.

{% data reusables.community.types-of-interaction-limits %}

Du kannst auch Aktivitätseinschränkungen für alle Repositorys im Besitz deines persönlichen Kontos oder einer Organisation aktivieren. Wenn eine benutzerweite oder organisationsweite Beschränkung aktiviert ist, kannst du die Aktivität für einzelne Repositorys, die im Besitz des Kontos sind, nicht beschränken. Weitere Informationen findest du unter „[Einschränken von Interaktionen für dein persönliches Konto](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)“ und „[Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)“.

## Einschränken von Interaktionen in deinem Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle in der Seitenleiste **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Moderationsoptionen** aus und klicke dann auf **Interaktionsbeschränkungen**.
{% data reusables.community.set-interaction-limit %} ![Optionen für temporäre Interaktionsbeschränkungen](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Weiterführende Themen
- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Verwalten des Zugriffs einer Person auf ein Repository einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Berechtigungsebenen für ein Repository eines persönlichen Kontos](/articles/permission-levels-for-a-user-account-repository)
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Verwalten von Moderatoren in deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
