---
ms.openlocfilehash: ce614b2a117f04aa595dc1dd63e454a9efc70cc9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145070154"
---
Clave | Tipo | Descripción
----|------|------------
`action` | `string` | acción realizada. Puede ser `created` o `deleted`.
`starred_at` | `string` | La hora en la cual se creó un marcado con estrella. {% data reusables.shortdesc.iso_8601 %} Será `null` para la acción `deleted`.
