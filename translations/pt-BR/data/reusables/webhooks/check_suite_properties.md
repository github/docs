---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116190"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação executada. Pode ser:<ul><li>`completed` – Todas as execuções de verificação em um pacote de verificação foram concluídas.</li><li>`requested` – Ocorre quando o novo código é enviado por push para o repositório do aplicativo. Ao receber os eventos de ação `requested`, você precisará [criar uma execução de verificação](/rest/reference/checks#create-a-check-run).</li><li>`rerequested` – Ocorre quando alguém solicita uma nova execução de todo o pacote de verificação na interface do usuário da solicitação de pull. Ao receber os eventos de ação `rerequested`, você precisará [criar uma execução de verificação](/rest/reference/checks#create-a-check-run). Confira "[Sobre as verificações de status](/articles/about-status-checks#checks)" para obter mais detalhes sobre a interface do usuário do GitHub.</li></ul>
`check_suite`|`object` | O [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | O nome do branch principal em que as alterações se encontram.
`check_suite[head_sha]`|`string` | A SHA do commit mais recente para este conjunto de verificações.
`check_suite[status]`|`string` | O status de resumo para todas as verificações que fazem parte do conjunto de verificações. Pode ser `queued`, `requested`, `in_progress` ou `completed`.
`check_suite[conclusion]`|`string`| O resumo da conclusão para todas as verificações que fazem parte do conjunto de verificações. Pode ser `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` ou `stale`. Esse valor será `null` até que a execução de verificação tenha sido `completed`.
`check_suite[url]`|`string` | A URL que aponta para o recurso da API do conjunto de verificações.
`check_suite[pull_requests]`|`array`| Um array de pull requests que correspondem a este conjunto de verificações. Uma solicitação de pull corresponderá a um pacote de verificação se eles tiverem o mesmo `head_branch`.<br/><br/>**Observação**:<ul><li>O `head_sha` do pacote de verificação poderá ser diferente do `sha` da solicitação de pull se forem efetuados pushes seguintes na PR.</li><li>Quando o `head_branch` do pacote de verificação estiver em um repositório com fork, ele será `null` e a matriz `pull_requests` estará vazia.</li></ul>
