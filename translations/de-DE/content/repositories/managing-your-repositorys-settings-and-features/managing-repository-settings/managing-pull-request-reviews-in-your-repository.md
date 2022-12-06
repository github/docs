---
title: Verwalten von Pull-Anforderungsüberprüfungen in deinem Repository
intro: 'Du kannst einschränken, welche Benutzer*innen in einem öffentlichen Repository Änderungen an Pull Requests genehmigen oder anfordern können.'
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132130'
---
## Informationen zu Grenzwerten für Code Reviews

Standardmäßig können Benutzer in öffentlichen Repositorys Reviews übermitteln, die einen Pull Review genehmigen oder Änderungen anfordern.

Du kannst einschränken, welche Benutzer Überprüfungen übermitteln können, mit denen Änderungen an Pull Requests in deinem öffentlichen Repository genehmigt oder angefordert werden. Wenn du Codeüberprüfungsgrenzwerte aktivierst, können alle Personen Pull Requests in deinem öffentlichen Repository kommentieren, aber nur Personen, die mindestens über Lesezugriff verfügen, können Pull Requests oder Anforderungsänderungen genehmigen.

Darüber hinaus kannst du Codeüberprüfungsgrenzwerte für eine Organisation aktivieren. Wenn du Grenzwerte für eine Organisation aktivierst, überschreibst du alle Grenzwerte für einzelne Repositorys, die der Organisation gehören. Weitere Informationen findest du unter "[Verwalten von Pull REquest-Überprüfungen in deiner Organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)".

## Aktivieren von Codeüberprüfungsgrenzwerten

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Klicke unter **Access** (Zugriff) auf **Moderation options** (Moderationsoptionen).
![Repositoryeinstellungen für Moderationsoptionen](/assets/images/help/repository/access-settings-repositories.png)
1. Klicke unter **Moderation options** (Moderationsoptionen) auf **Code review limits** (Codeüberprüfungsgrenzwerte).
![Codeüberprüfungsgrenzwert-Repositorys](/assets/images/help/repository/code-review-limits-repositories.png)
1. Aktiviere oder deaktiviere **Limit to users explicitly granted read or higher access** (Grenzwerte für Benutzer, denen ausdrücklich mindestens Lesezugriff gewährt wurde).
![Einschränken der Überprüfung im Repository](/assets/images/help/repository/limit-reviews-in-repository.png)
