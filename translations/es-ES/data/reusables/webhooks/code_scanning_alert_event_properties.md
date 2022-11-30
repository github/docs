---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091518"
---
Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | La acción que se ha realizado. Puede ser `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch` o `reopened`.
`alert` | `object` | La alerta de escaneo de código involucrada en el evento.
`ref` | `string` | La referencia de Git de la alerta de escaneo de código. Cuando la acción es `reopened_by_user` o `closed_by_user`, el evento lo ha desencadenado `sender` y este valor estará vacío.
`commit_oid` | `string` | El SHA de la confirmación de la alerta del escaneo de código. Cuando la acción es `reopened_by_user` o `closed_by_user`, el evento lo ha desencadenado `sender` y este valor estará vacío.
