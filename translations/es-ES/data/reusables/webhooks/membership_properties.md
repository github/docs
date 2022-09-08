---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091962"
---
Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. Puede ser `added` o `removed`.
`scope`  |`string` | El alcance de la membrecía. Actualmente, solo puede ser `team`.
`member` |`object` | [Usuario](/rest/reference/users) que se ha agregado o quitado.
`team`   |`object` | [Equipo](/rest/reference/teams) para la pertenencia.
