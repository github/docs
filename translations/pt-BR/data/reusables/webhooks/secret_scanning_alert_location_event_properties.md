---
ms.openlocfilehash: db7736a3360eff9a995e2c6ebcf159229af2151e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145066109"
---
Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Atualmente, só pode ser `created`.
`location` |`object` | O local envolvido no evento.
`alert` |`object` | O [`secret scanning alert`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) envolvido no evento.
