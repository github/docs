---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879011"
---
1. Um die Replikation der Datenspeicher zu starten, verwende den Befehl `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Warnung**: `ghe-repl-start` verursacht einen kurzen Ausfall des primären Servers. Währenddessen wird Benutzern möglicherweise ein interner Serverfehler angezeigt. Um eine benutzerfreundlichere Meldung bereitzustellen, führe `ghe-maintenance -s` auf dem primären Knoten aus, bevor du `ghe-repl-start` auf dem Replikatknoten ausführest, um die Appliance in den Wartungsmodus zu versetzen. Nachdem die Replikation gestartet wurde, deaktiviere den Wartungsmodus mit `ghe-maintenance -u`. Die Git-Replikation wird nicht fortgesetzt, während sich der primäre Knoten im Wartungsmodus befindet.

    {% endwarning %}
