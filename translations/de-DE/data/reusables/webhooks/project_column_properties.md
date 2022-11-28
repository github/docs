---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088948"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die Aktion, die für die Projektspalte ausgeführt wurde. Mögliche Werte: `created`, `edited`, `moved` oder `deleted`.
`changes`|`object` | Die Änderungen an der Projektspalte, wenn die Aktion `edited` war.
`changes[name][from]` |`string` | Die vorherige Version des Namens, wenn die Aktion `edited` war.
`after_id`|`integer` | Die ID der Spalte, auf die diese Spalte jetzt folgt, wenn die Aktion „moved“ lautete. Dieser Wert ist `null`, wenn es sich um die erste Spalte in einem Projekt handelt.
`project_column`|`object` | Die [Projektspalte](/rest/reference/projects#columns) selbst.
