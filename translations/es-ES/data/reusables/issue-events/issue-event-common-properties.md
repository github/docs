---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080980"
---
Nombre | Tipo | Descripción
-----|------|--------------
`id` | `integer` | Identificador único del evento.
`node_id` | `string` | [Identificador de nodo global](/graphql/guides/using-global-node-ids) del evento.
`url`| `string` | La URL de la API de REST para recuperar el evento.
`actor` | `object`| La persona que generó el evento.
`event` | `string` | Identifica el tipo de evento real que ocurrió.
`commit_id` | `string` | EL SHA de la confirmación que referenció este informe de problemas.
`commit_url` | `string` | El enlace a la API de REST de GitHub para la confirmación que referenció a este informe de problemas.
`created_at` | `string` | La marca de tiempo que indica cuándo ocurrió el evento.
