---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145164566"
---
`number`|`integer` | O número da solicitação de pull.
`changes`|`object`| As alterações no comentário se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
`pull_request`|`object` | A própria [solicitação de pull](/rest/reference/pulls).
