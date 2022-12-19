---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083772"
---
Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Pode ser `added` ou `removed`.
`scope`  |`string` | O escopo da associação. Atualmente, só pode ser `team`.
`member` |`object` | O [usuário](/rest/reference/users) que foi adicionado ou removido.
`team`   |`object` | A [equipe](/rest/reference/teams) para a associação.
