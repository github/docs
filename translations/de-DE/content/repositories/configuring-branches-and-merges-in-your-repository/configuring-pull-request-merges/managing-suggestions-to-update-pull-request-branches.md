---
title: "Verwalten von Vorschlägen zum Aktualisieren von Pull\_Request-Branches"
intro: 'Du kannst Benutzern die Möglichkeit geben, immer einen Pull Request-Branch zu aktualisieren, wenn er nicht mit dem Basisbranch auf dem neuesten Stand ist.'
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578610'
---
## Informationen zu Vorschlägen zum Aktualisieren eines Pull Request-Branchs

Wenn du die Einstellung aktivierst, dass in deinem Repository immer das Aktualisieren von Pull Request-Branches vorgeschlagen werden soll, haben Personen mit Schreibberechtigungen immer die Möglichkeit, auf der Pull Request-Seite den Hauptbranch eines Pull Requests zu aktualisieren, wenn er nicht auf dem gleichen Stand ist wie der Basisbranch. Andernfalls ist die Aktualisierung nur möglich, wenn Branches für den Basisbranch vor dem Zusammenführen auf dem neuesten Stand sein müssen und der Branch diese Anforderung nicht erfüllt. Weitere Informationen findest du unter [Synchronisieren eines Pull Requests mit dem Basisbranch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch).

{% data reusables.enterprise.3-5-missing-feature %}

## Verwalten von Vorschlägen zum Aktualisieren eines Pull Request-Branchs

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Aktiviere oder deaktiviere unter Pull Requests das Kontrollkästchen **Immer Aktualisierung von Pull Request-Branches vorschlagen**.
  ![Kontrollkästchen zum Aktivieren oder Deaktivieren von Branchaktualisierungsvorschlägen](/assets/images/help/repository/always-suggest-updating-branches.png)
