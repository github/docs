---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
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
