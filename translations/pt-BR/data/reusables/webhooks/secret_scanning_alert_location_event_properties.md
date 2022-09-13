---
ms.openlocfilehash: db7736a3360eff9a995e2c6ebcf159229af2151e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066109"
---
Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Atualmente, só pode ser `created`.
`location` |`object` | O local envolvido no evento.
`alert` |`object` | O [`secret scanning alert`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) envolvido no evento.
