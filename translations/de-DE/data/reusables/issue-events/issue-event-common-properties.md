---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147080976"
---
Name | type | BESCHREIBUNG
-----|------|--------------
`id` | `integer` | Der eindeutige Bezeichner des Ereignisses.
`node_id` | `string` | Die [globale Knoten-ID](/graphql/guides/using-global-node-ids) des Ereignisses.
`url`| `string` | Die REST-API-URL zum Abrufen des Ereignisses.
`actor` | `object`| Die Person, die das Ereignis generiert hat.
`event` | `string` | Gibt den tatsächlichen Ereignistyp an, der aufgetreten ist.
`commit_id` | `string` | Der SHA des Commits, der sich auf dieses Issue bezieht.
`commit_url` | `string` | Der GitHub-REST-API-Link zum Commit, der sich auf dieses Issue bezieht.
`created_at` | `string` | Der Zeitstempel, der angibt, wann das Ereignis aufgetreten ist.
