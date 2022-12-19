---
ms.openlocfilehash: db7736a3360eff9a995e2c6ebcf159229af2151e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069126"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action` |`string` | Die durchgeführte Aktion. Derzeit ist nur `created` möglich.
`location` |`object` | Der Standort im Zusammenhang mit dem Ereignis.
`alert` |`object` | [`secret scanning alert`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) im Zusammenhang mit dem Ereignis.
