---
title: Erstellen eines Branches zum Arbeiten an einem Problem
intro: Du kannst direkt auf der Issueseite einen Branch zum Arbeiten an dem Issue erstellen und sofort beginnen.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: '>= 3.5'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061137'
---
{% note %}

**Hinweis:** Die Möglichkeit, einen Branch für ein Problem zu erstellen, befindet sich derzeit in der öffentlichen Betaversion und kann geändert werden.

{% endnote %}

## Über Branches, die mit einem Problem verbunden sind
Branches, die mit einem Problem verbunden sind, werden im Abschnitt „Entwicklung“ in der Seitenleiste eines Problems angezeigt. Wenn du eine Pull Request für einen dieser Branches erstellst, wird er automatisch mit dem Problem verknüpft. Die Verbindung mit diesem Branch wird entfernt, und nur der Pull Request wird im Abschnitt „Entwicklung“ angezeigt. Weitere Informationen findest du unter [Verknüpfen eines Pull Requests mit einem Issue](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Erstellen eines Branches für ein Problem

Jeder, der die Schreibberechtigung für ein Repository besitzt, kann einen Branch für ein Problem erstellen. Du kannst mehrere Branches für ein Problem verknüpfen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Klicke in der Liste der Probleme auf das Problem, für das du einen Branch erstellen möchtest.
4. Klicke in der rechten Randleiste unter „Entwicklung“ auf **Branch erstellen**. Wenn das Problem bereits über einen verknüpften Branch oder einen Pull Request verfügt, klicke auf {% octicon "gear" aria-label="The Gear icon" %} und am unteren Rand des Dropdownmenüs auf **Branch erstellen**.
   ![Screenshot mit hervorgehobener Option „Branch erstellen“ in der Seitenleiste](/assets/images/help/issues/create-a-branch.png)
5. Standardmäßig wird der neue Branch im aktuellen Repository aus dem Standard-Branch erstellt. Bearbeite den Branchnamen und die Details nach Bedarf im Dialogfeld „Branch für dieses Problem erstellen“.
   ![Screenshot der Optionen im Dialogfeld „Branch erstellen“](/assets/images/help/issues/create-a-branch-options.png)
6. Wähle aus, ob du lokal am Branch arbeiten oder ihn in GitHub Desktop öffnen möchtest.
7. Wenn du bereit bist, den Branch zu erstellen, klicke auf **Branch erstellen**.
