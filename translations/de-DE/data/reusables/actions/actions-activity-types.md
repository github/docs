---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688933"
---
Einige Ereignisse verfügen über Aktivitätstypen, die dir mehr Kontrolle darüber geben, wann dein Workflow ausgeführt werden soll. Verwende `on.<event_name>.types`, um die Art der Ereignisaktivität zu definieren, durch die eine Workflowausführung ausgelöst werden soll.

Das Ereignis `issue_comment` verfügt beispielsweise über die Aktivitätstypen `created`, `edited` und `deleted`. Wenn dein Workflow durch ein Ereignis vom Typ `label` ausgelöst wird, wird es ausgeführt, wenn eine Bezeichnung erstellt, bearbeitet oder gelöscht wird. Wenn du den Aktivitätstyp `created` für das Ereignis `label` angibst, wird der Workflow ausgeführt, wenn eine Bezeichnung erstellt wird, aber nicht, wenn eine Bezeichnung bearbeitet oder gelöscht wird.

```yaml
on:
  label:
    types:
      - created
```

Bei Angabe mehrerer Aktivitätstypen wird dein Workflow ausgelöst, wenn einer dieser Ereignisaktivitätstypen auftritt. Treten gleichzeitig mehrere auslösende Ereignisaktivitätstypen für deinen Workflow auf, werden mehrere Workflowausführungen ausgelöst. Der folgende Workflow wird beispielsweise ausgelöst, wenn ein Issue erstellt oder beschriftet wird. Wenn ein Issue mit zwei Bezeichnungen erstellt wird, werden drei Workflowausführungen gestartet: eine für das Issue-Erstellungsereignis und zwei für die beiden Issue-Beschriftungsereignisse.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Weitere Informationen zu jedem Ereignis und den zugehörigen Aktivitätstypen findest du unter [Ereignisse zum Auslösen von Workflows](/actions/using-workflows/events-that-trigger-workflows).
