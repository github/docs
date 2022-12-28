---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877053"
---
Verwende `on.<event_name>.types` zum Definieren des Aktivitätstyps, der eine Workflowausführung auslöst. Die meisten GitHub-Ereignisse werden von mehreren Aktivitätstypen ausgelöst.  Beispielsweise wird `label` ausgelöst, wenn für eine Bezeichnung eine der folgenden Aktivitäten durchgeführt wird: `created`, `edited` oder `deleted`. Mit dem Schlüsselwort `types` kannst du die Aktivitäten eingrenzen, durch die die Ausführung des Workflows ausgelöst wird. Wenn nur ein Aktivitätstyp ein Webhookereignis auslöst, ist das Schlüsselwort `types` unnötig.

Du kannst ein Array von `types` für Ereignisse verwenden. Weitere Informationen zu jedem Ereignis und den zugehörigen Aktivitätstypen findest du unter [Ereignisse zum Auslösen von Workflows](/actions/using-workflows/events-that-trigger-workflows#available-events).

```yaml
on:
  label:
    types: [created, edited]
```
