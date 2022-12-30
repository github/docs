---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088995"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` |`string` | Die durchgeführte Aktion. Kann `added` oder `removed` sein.
`scope`  |`string` | Der Umfang der Mitgliedschaft. Derzeit ist nur `team` möglich.
`member` |`object` | Der hinzugefügte oder entfernte [Benutzer](/rest/reference/users).
`team`   |`object` | Das [Team](/rest/reference/teams) für die Mitgliedschaft.
