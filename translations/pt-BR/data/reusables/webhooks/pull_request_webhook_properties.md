---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148007651"
---
Chave | Type | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: se a ação é `closed` e a chave `merged` é `false`, a solicitação de pull foi fechada com commits não mesclados. Se a ação é `closed` e a chave `merged` é `true`, a solicitação de pull foi mesclada.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: disparado quando uma solicitação de pull é removida de uma fila de mesclagem</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: disparado quando uma solicitação de pull é adicionada de uma fila de mesclagem</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: disparada quando o branch principal de uma solicitação de pull é atualizado. Por exemplo, quando o branch principal é atualizado com base no branch base, quando novos commits são enviados por push para o branch principal ou quando o branch base é alterado.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
