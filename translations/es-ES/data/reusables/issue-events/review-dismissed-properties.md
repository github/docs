---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123505"
---
`dismissed_review` | `object` | Información de la revisión descartada.
`dismissed_review[state]` | `string` | Estado en el que se encontraba la solicitud de incorporación de cambios cuando se ha descartado. Puede ser de tipo `commented`, `approved` o `changes_requested`.
`dismissed_review[review_id]` | `string` | Identificador único de la revisión de la solicitud de incorporación de cambios.
`dismissed_review[dismissal_message]` | `string` | Mensaje que el usuario ha incluido al descartar la revisión.
`dismissed_review[dismissal_commit_id]` | `string` | Identificador único de la confirmación que ha descartado la revisión, si existe.
