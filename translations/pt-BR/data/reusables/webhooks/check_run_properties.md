---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065151"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação executada. Pode ser uma das ações a seguir: <ul><li> `created` – Uma execução de verificação foi criada.</li><li> `completed` – O `status` da execução de verificação é `completed`.</li><li> `rerequested` – Alguém solicitou a nova execução da execução de verificação na interface do usuário da solicitação de pull. Confira "[Sobre as verificações de status](/articles/about-status-checks#checks)" para obter mais detalhes sobre a interface do usuário do GitHub. Ao receber uma ação `rerequested`, você precisará [criar uma execução de verificação](/rest/reference/checks#create-a-check-run). Somente o {% data variables.product.prodname_github_app %} que alguém solicita para executar a verificação novamente receberá o conteúdo `rerequested`.</li><li> `requested_action` – Alguém solicitou uma ação que o seu aplicativo fornece para ser executada. Somente o {% data variables.product.prodname_github_app %} que alguém solicita para executar uma ação receberá o conteúdo `requested_action`. Para saber mais sobre as execuções de verificação e as ações solicitadas, confira "[Verificar as execuções e as ações solicitadas](/rest/reference/checks#check-runs-and-requested-actions)".</li></ul>
`check_run`|`object` | A [check_run](/rest/reference/checks#get-a-check-run).
`check_run[status]`|`string` | O status atual da execução da verificação. Pode ser `queued`, `in_progress` ou `completed`.
`check_run[conclusion]`|`string` | O resultado da execução de verificação concluída. Pode ser `success`, `failure`, `neutral`, `cancelled`, `timed_out`,  `action_required` ou `stale`. Esse valor será `null` até que a execução de verificação tenha sido `completed`.
`check_run[name]`|`string` | O nome da execução da verificação.
`check_run[check_suite][id]`|`integer` | A identificação do conjunto de verificações do qual a execução de verificação faz parte.
`check_run[check_suite][pull_requests]`|`array`| Um array de pull requests que correspondem a este conjunto de verificações. Uma solicitação de pull corresponderá a um pacote de verificação se eles tiverem o mesmo `head_branch`.<br/><br/>**Observação**:<ul><li>O `head_sha` do pacote de verificação poderá ser diferente do `sha` da solicitação de pull se forem efetuados pushes seguintes na PR.</li><li>Quando o `head_branch` do pacote de verificação estiver em um repositório com fork, ele será `null` e a matriz `pull_requests` estará vazia.</li></ul>
`check_run[check_suite][deployment]`|`object`| Uma implantação em um ambiente de repositório. Isso só será preenchido se a execução de verificação tiver sido criada por um trabalho de fluxo de trabalho do {% data variables.product.prodname_actions %} que referencie um ambiente.
`requested_action`|`object` | A ação solicitada pelo usuário.
`requested_action[identifier]`|`string` | A referência de integrador da ação solicitada pelo usuário.
