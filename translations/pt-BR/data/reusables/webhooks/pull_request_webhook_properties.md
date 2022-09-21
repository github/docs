---
ms.openlocfilehash: b7fde4d22f9d5e5e8b7a3d8f55b3ab19dee1185a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083272"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: se a ação é `closed` e a chave `merged` é `false`, a solicitação de pull foi fechada com commits não mesclados. Se a ação é `closed` e a chave `merged` é `true`, a solicitação de pull foi mesclada.</li><li>`converted_to_draft`</li><li>`edited`</li><li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: disparada quando o branch principal de uma solicitação de pull é atualizado. Por exemplo, quando o branch principal é atualizado com base no branch base, quando novos commits são enviados por push para o branch principal ou quando o branch base é alterado.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
