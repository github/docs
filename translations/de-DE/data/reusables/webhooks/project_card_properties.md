---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088955"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die Aktion, die auf der Projektkarte ausgeführt wird. Mögliche Werte: `created`, `edited`, `moved`, `converted` oder `deleted`.
`changes`|`object` | Die Änderungen an der Projektkarte, wenn die Aktion `edited` oder `converted` war.
`changes[note][from]` |`string` | Die vorherige Version des Hinweises, wenn die Aktion `edited` oder `converted` war.
`after_id`|`integer` | Die ID der Karte, der diese Karte nun folgt, wenn die Aktion „moved“ war. Ist `null`, wenn es sich um die erste Karte in einer Spalte handelt.
`project_card`|`object` | Die [Projektkarte](/rest/reference/projects#cards) selbst.
