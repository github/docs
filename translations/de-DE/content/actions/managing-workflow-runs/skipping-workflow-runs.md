---
title: Überspringen von Workflowausführungen
intro: 'Du kannst Workflowausführungen, die durch die Ereignisse `push` und `pull_request` ausgelöst werden, überspringen, indem du einen Befehl in deine Commitnachricht einfügst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199970'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Hinweis:** Wenn ein Workflow aufgrund von [Pfadfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [Branchfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) oder einer Commitnachricht (siehe unten) übersprungen wird, verbleiben diesem Workflow zugeordnete Überprüfungen im Status „Ausstehend“. Ein Pull Request, bei dem diese Prüfungen erfolgreich sein müssen, wird vom Mergen ausgeschlossen.

{% endnote %}

Workflows, die andernfalls mit `on: push` oder `on: pull_request` ausgelöst würden, werden nicht ausgelöst, wenn du eine der folgenden Zeichenfolgen an die Commitnachricht in einem Push oder an den HEAD-Commit eines Pull Requests anfügst:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Alternativ kannst du die Commitnachricht auch mit zwei leeren Zeilen beenden, gefolgt von einem dieser beiden Elemente:
- `skip-checks:true`
- `skip-checks: true`

Du kannst den Pull Request nicht mergen, wenn dein Repository so konfiguriert ist, dass zuerst bestimmte Prüfungen bestanden werden müssen. Um das Mergen des Pull Requests zuzulassen, kannst du einen neuen Commit an den Pull Request pushen, der keine skip-Anweisung in der Commitnachricht enthält.

{% note %}

**Hinweis:** Die skip-Anweisungen gelten nur für die Ereignisse `push` und `pull_request`. Wenn du zum Beispiel einer Commitnachricht `[skip ci]` hinzufügst, wird dadurch nicht die Ausführung eines Workflows beendet, der mit `on: pull_request_target` ausgelöst wird.

{% endnote %}

skip-Anweisungen gelten nur für Workflowausführungen, die durch den Commit ausgelöst würden, der die skip-Anweisungen enthält. Du kannst die Ausführung eines Workflows auch deaktivieren. Weitere Informationen findest du unter [Deaktivieren und Aktivieren eines Workflows](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow).
