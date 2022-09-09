---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083771"
---
Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Pode ser `created`, `closed`, `opened` (um marco fechado é reaberto), `edited` ou `deleted`.
`milestone`  |`object` | O próprio marco.
`changes`|`object`| As alterações no marco se a ação foi `edited`.
`changes[description][from]`|`string` | A versão anterior da descrição se a ação foi `edited`.
`changes[due_on][from]`|`string` | A versão anterior da data de conclusão se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
