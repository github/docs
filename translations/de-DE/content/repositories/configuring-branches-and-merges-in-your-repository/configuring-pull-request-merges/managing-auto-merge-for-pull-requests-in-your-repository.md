---
title: Verwalten der automatischen Zusammenführung für Pull Requests in deinem Repository
intro: Du kannst die automatische Zusammenführung für Pull Requests in deinem Repository zulassen oder nicht zulassen.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883441'
---
## Informationen zum automatischen Zusammenführen

Wenn du die automatische Zusammenführung für Pull Requests in deinem Repository zulässt, können Personen mit Schreibberechtigungen einzelne Pull Requests im Repository konfigurieren, um automatisch zusammenzuführen, wenn alle Anforderungen an das Zusammenführen erfüllt sind. Wenn eine Person ohne Schreibberechtigungen Änderungen an ein Pull Request pusht, bei dem die automatische Zusammenführung aktiviert ist, wird die automatische Zusammenführung für diesen Pull Request deaktiviert. Weitere Informationen findest du unter [Automatisches Zusammenführen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request).

## Verwalten der automatischen Zusammenführung

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle unter {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}„Pull Requests“{% else %}„Schaltfläche Zusammenführen“{% endif %} die Option **Automatisches Zusammenführen zulassen** aus oder hebe die Auswahl auf.
  ![Kontrollkästchen zum Zulassen oder Deaktivieren der automatischen Zusammenführung](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
