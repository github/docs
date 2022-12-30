---
ms.openlocfilehash: de2ab71ca5c93229329c2887dc71685aa92e199d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883060"
---
Du kannst ein einzelnes Ereignis oder mehrere Ereignisse angeben. Beispielsweise wird ein Workflow mit dem folgenden `on`-Wert ausgeführt, wenn in einem beliebigen Branch im Repository des Workflows ein Push erfolgt oder wenn jemand ein Repository forkt:

```yaml
on: [push, fork]
```

Wenn du mehrere Ereignisse angibst, muss nur eines dieser Ereignisse auftreten, um deinen Workflow auszulösen. Treten gleichzeitig mehrere auslösende Ereignisaktivitätstypen für deinen Workflow auf, werden mehrere Workflow-Ausführungen ausgelöst.
