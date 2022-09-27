---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875515"
---
`number`|`integer` | O número da solicitação de pull.
`changes`|`object`| As alterações no comentário se a ação foi `edited`.
`changes[title][from]`|`string` | A versão anterior do título se a ação foi `edited`.
`changes[body][from]`|`string` | A versão anterior do corpo se a ação foi `edited`.
`pull_request`|`object` | A própria [solicitação de pull](/rest/reference/pulls).
