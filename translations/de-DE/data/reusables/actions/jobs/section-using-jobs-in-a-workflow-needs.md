---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883577"
---
Verwende `jobs.<job_id>.needs`, um alle Aufträge zu identifizieren, die erfolgreich abgeschlossen sein müssen, bevor dieser Auftrag ausgeführt wird. Hier ist ein String oder ein Array mit Strings zulässig. Wenn ein Auftrag fehlschlägt, werden alle Aufträge übersprungen, die diesen Auftrag benötigen, außer die Aufträge umfassen einen bedingte Ausdruck, mit dem der Auftrag dennoch fortgesetzt wird. Wenn eine Ausführung eine Reihe von Aufträgen enthält, die voneinander abhängig sind, wird ein Fehler auf alle Aufträge in der Abhängigkeitskette ab dem Fehlerpunkt angewendet.

#### Beispiel: Erfordern erfolgreicher abhängiger Aufträge 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

In diesem Beispiel muss `job1` erfolgreich abgeschlossen sein, bevor `job2` beginnt, und `job3` wartet darauf, dass `job1` und `job2` angeschlossen werden.

Die Aufträge in diesem Beispiel werden sequenziell ausgeführt:

1. `job1`
2. `job2`
3. `job3`

#### Beispiel: Nicht Erfordern erfolgreicher abhängiger Aufträge

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

In diesem Beispiel verwendet `job3` den bedingten Ausdruck `always()`, sodass er immer nach Abschluss von `job1` und `job2` ausgeführt wird, unabhängig davon, ob sie erfolgreich waren. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions#status-check-functions).
