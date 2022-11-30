---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145085431"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` | `string` | Die durchgeführte Aktion. Hierbei kann es sich um `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch` oder `reopened` handeln.
`alert` | `object` | Die Codeüberprüfungswarnung im Zusammenhang mit dem Ereignis.
`ref` | `string` | Der Git-Verweis auf die Codeüberprüfungswarnung. Wenn die Aktion `reopened_by_user` oder `closed_by_user` lautet, wurde das Ereignis durch den `sender` ausgelöst, und dieser Wert ist leer.
`commit_oid` | `string` | Commit-SHA der Codeüberprüfungswarnung. Wenn die Aktion `reopened_by_user` oder `closed_by_user` lautet, wurde das Ereignis durch den `sender` ausgelöst, und dieser Wert ist leer.
